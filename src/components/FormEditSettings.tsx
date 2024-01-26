"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import * as React from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { updateProduct, updateStoreConfigs } from "@/lib/api"
import { Skeleton } from "./ui/skeleton"
import useStoreInfo from "@/hooks/useStore"
import { StoreInfo } from "@/lib/types"
import { useTheme } from "next-themes"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

const formSchema = z.object({
  id: z.string(),
  storeName: z.string(),
  storeLogo: z.string(),
  storeDescription: z.string(),
  storeContact: z.object({
    socialInstagram: z.string(),
    socialWhatsApp: z.string(),
    socialTelegram: z.string(),
    socialFacebook: z.string(),
  }),
  storeConfig: z.object({
    color: z.string(),
    banners: z.tuple([z.string(), z.string(), z.string()]),
    mobileBanners: z.tuple([z.string(), z.string(), z.string()]),
  }),
})

export function FormEditSettings() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      storeLogo: "",
      storeName: "",
      storeDescription: "",
      storeContact: {
        socialInstagram: "",
        socialWhatsApp: "",
        socialTelegram: "",
        socialFacebook: "",
      },
      storeConfig: {
        banners: ["", "", ""],
        mobileBanners: ["", "", ""],
        color: "",
      },
    },
  })

  const storeInfo = useStoreInfo()
  const { setTheme } = useTheme()


  const fetchSettings = React.useCallback(async () => {
    try {
      if (storeInfo.id) {
        form.setValue("id", storeInfo.id || "")
        form.setValue("storeName", storeInfo.storeName || "")
        form.setValue("storeDescription", storeInfo.storeDescription || "")

        form.setValue("storeConfig.color", storeInfo.storeConfig?.color || "")

        form.setValue("storeConfig.banners", [
          storeInfo?.storeConfig?.banners?.[0] || "",
          storeInfo?.storeConfig?.banners?.[1] || "",
          storeInfo?.storeConfig?.banners?.[2] || "",
        ])
        form.setValue("storeConfig.mobileBanners", [
          storeInfo?.storeConfig?.mobileBanners?.[0] || "",
          storeInfo?.storeConfig?.mobileBanners?.[1] || "",
          storeInfo?.storeConfig?.mobileBanners?.[2] || "",
        ])

        form.setValue("storeLogo", storeInfo.storeLogo || "")
        form.setValue(
          "storeContact.socialInstagram",
          storeInfo?.storeContact?.socialInstagram || ""
        )
        form.setValue(
          "storeContact.socialWhatsApp",
          storeInfo?.storeContact?.socialWhatsApp || ""
        )
        form.setValue(
          "storeContact.socialTelegram",
          storeInfo?.storeContact?.socialTelegram || ""
        )
        form.setValue(
          "storeContact.socialFacebook",
          storeInfo?.storeContact?.socialFacebook || ""
        )
      }
    } catch (error) {
      console.error("Erro ao buscar as configurações", error)
    }
  }, [storeInfo.id, form])

  // Efeito para acionar a pesquisa quando o termo de pesquisa é alterado
  React.useEffect(() => {
    fetchSettings()
  }, [fetchSettings])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const { id } = values

    console.log(values)

    const response = await updateStoreConfigs(id, values)
    if (response) {
      toast.success("Configurações editadas com sucesso!")
      setTheme(values.storeConfig.color)
      setTimeout(() => {
        location.reload()
      }, 1000)
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mt-10 w-full"
      >
        <FormField
          control={form.control}
          name="storeLogo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL Logo do site</FormLabel>
              {storeInfo.id ? (
                <>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </>
              ) : (
                <Skeleton className="w-full h-10" />
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="storeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do site</FormLabel>
              {storeInfo.id ? (
                <>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </>
              ) : (
                <Skeleton className="w-full h-10" />
              )}
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="storeDescription"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Descrição do site</FormLabel>
              {storeInfo.id ? (
                <>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </>
              ) : (
                <Skeleton className="w-full h-10" />
              )}
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="storeConfig.color"
          render={({ field }) => (
            <FormItem className="space-y-1">
              <FormLabel>Tema</FormLabel>
              <FormDescription>Selecione um tema para o site.</FormDescription>
              <FormMessage />
              <RadioGroup
                onValueChange={field.onChange}
                {...field}
                className="grid max-w-md grid-cols-2 gap-8 pt-2"
              >
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="green" className="sr-only" />
                    </FormControl>
                    <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                      <div className="space-y-2 rounded-sm bg-[#268f2f] p-2">
                        <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Verde
                    </span>
                  </FormLabel>
                </FormItem>

                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="red" className="sr-only" />
                    </FormControl>
                    <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                      <div className="space-y-2 rounded-sm bg-[#c03030] p-2">
                        <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Vermelho
                    </span>
                  </FormLabel>
                </FormItem>

                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="blue" className="sr-only" />
                    </FormControl>
                    <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                      <div className="space-y-2 rounded-sm bg-[#30a0c2] p-2">
                        <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Azul
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="rose" className="sr-only" />
                    </FormControl>
                    <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                      <div className="space-y-2 rounded-sm bg-[#b034d6] p-2">
                        <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Rosa
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="zinc" className="sr-only" />
                    </FormControl>
                    <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                      <div className="space-y-2 rounded-sm bg-[#818181] p-2">
                        <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Cinza
                    </span>
                  </FormLabel>
                </FormItem>
                <FormItem>
                  <FormLabel className="[&:has([data-state=checked])>div]:border-primary">
                    <FormControl>
                      <RadioGroupItem value="yellow" className="sr-only" />
                    </FormControl>
                    <div className="items-center rounded-md border-2 border-muted p-1 hover:border-accent">
                      <div className="space-y-2 rounded-sm bg-[#b3b026] p-2">
                        <div className="space-y-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-2 w-[80px] rounded-lg bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                        <div className="flex items-center space-x-2 rounded-md bg-white p-2 shadow-sm">
                          <div className="h-4 w-4 rounded-full bg-[#ecedef]" />
                          <div className="h-2 w-[100px] rounded-lg bg-[#ecedef]" />
                        </div>
                      </div>
                    </div>
                    <span className="block w-full p-2 text-center font-normal">
                      Amarelo
                    </span>
                  </FormLabel>
                </FormItem>
              </RadioGroup>
            </FormItem>
          )}
        />

        <div className="flex w-full justify-between gap-2">
          <FormField
            control={form.control}
            name="storeConfig.banners.0"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Banner</FormLabel>
                {storeInfo.id ? (
                  <>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </>
                ) : (
                  <Skeleton className="w-full h-10" />
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="storeConfig.banners.1"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel> </FormLabel>
                {storeInfo.id ? (
                  <>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </>
                ) : (
                  <Skeleton className="w-full h-10" />
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="storeConfig.banners.2"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel> </FormLabel>
                {storeInfo.id ? (
                  <>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </>
                ) : (
                  <Skeleton className="w-full h-10" />
                )}
              </FormItem>
            )}
          />
        </div>

        <div className="flex w-full justify-between gap-2">
          <FormField
            control={form.control}
            name="storeConfig.mobileBanners.0"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Mobile Banner</FormLabel>
                {storeInfo.id ? (
                  <>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </>
                ) : (
                  <Skeleton className="w-full h-10" />
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="storeConfig.mobileBanners.1"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel> </FormLabel>
                {storeInfo.id ? (
                  <>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </>
                ) : (
                  <Skeleton className="w-full h-10" />
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="storeConfig.mobileBanners.2"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel> </FormLabel>
                {storeInfo.id ? (
                  <>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </>
                ) : (
                  <Skeleton className="w-full h-10" />
                )}
              </FormItem>
            )}
          />
        </div>

        <div className="flex lg:flex-row flex-col w-full justify-between gap-2">
          <FormField
            control={form.control}
            name="storeContact.socialWhatsApp"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>WhatsaApp URL</FormLabel>
                {storeInfo.id ? (
                  <>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </>
                ) : (
                  <Skeleton className="w-full h-10" />
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="storeContact.socialInstagram"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Instagram URL</FormLabel>
                {storeInfo.id ? (
                  <>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </>
                ) : (
                  <Skeleton className="w-full h-10" />
                )}
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="storeContact.socialTelegram"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Telegram URL</FormLabel>
                {storeInfo.id ? (
                  <>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </>
                ) : (
                  <Skeleton className="w-full h-10" />
                )}
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="storeContact.socialFacebook"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Facebook URL</FormLabel>
                {storeInfo.id ? (
                  <>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                    <FormMessage />
                  </>
                ) : (
                  <Skeleton className="w-full h-10" />
                )}
              </FormItem>
            )}
          />
        </div>

        {storeInfo.id ? (
          <Button type="submit">Editar Site</Button>
        ) : (
          <Skeleton className="w-32 h-10" />
        )}
      </form>
    </Form>
  )
}
