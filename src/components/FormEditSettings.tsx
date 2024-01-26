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
        color:"",
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
            <FormItem>
              <FormLabel>Cor do site</FormLabel>
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
