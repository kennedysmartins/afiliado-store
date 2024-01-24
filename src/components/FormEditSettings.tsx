"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Product } from "@/lib/types"
import * as React from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
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
import { Textarea } from "./ui/textarea"
import { createProduct, fetchProduct, updateProduct } from "@/lib/api"
import { Skeleton } from "./ui/skeleton"

const formSchema = z.object({
  id: z.string(),
  bannerImage02: z.string().min(2, {
    message: "Você precisa definir um título para o produto.",
  }),
  image: z.string(),
  socialInstagram: z.string(),
  socialWhatsApp: z.string(),
  socialTelegram: z.string(),
  buyLink: z.string().min(2, {
    message: "Você precisa definir um link de encaminhamento.",
  }),
  socialFacebook: z.string(),
  productCode: z.string(),
  siteName: z.string(),
  bannerImage03: z.string(),
  website: z.string(),
  bannerImage01: z.string(),
  published: z.boolean(),
  urlProduct: z.string(),
})

export function FormEditSettings() {
  const settings = true
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      bannerImage02: "",
      image: "",
      socialInstagram: "",
      socialWhatsApp: "",
      socialTelegram: "",
      buyLink: "",
      socialFacebook: "",
      productCode: "",
      siteName: "",
      bannerImage03: "",
      website: "",
      bannerImage01: "",
      published: false,
      urlProduct: "",
    },
  })

  // const [product, setProduct] = React.useState<Product | null>(null)

  // // Função para realizar a pesquisa de produtos usando a API
  // const fetchProductAPI = React.useCallback(async () => {
  //   try {
  //     const response: Product = await fetchProduct(id)

  //     const updatedProduct: any = {
  //       ...response,
  //       socialInstagram: response.socialInstagram?.toString(),
  //       socialTelegram: response.socialTelegram?.toString(),
  //       socialWhatsApp: response.socialWhatsApp?.toString(),
  //     }

  //     if (response) {
  //       setProduct(updatedProduct)
  //       form.setValue("siteName", updatedProduct.catchyText || "")
  //       form.setValue("bannerImage01", updatedProduct.bannerImage01 || "")
  //       form.setValue("bannerImage02", updatedProduct.bannerImage02 || "")
  //       form.setValue("image", updatedProduct.image || "")
  //       form.setValue("socialInstagram", updatedProduct.socialInstagram || "")
  //       form.setValue("socialWhatsApp", updatedProduct.socialWhatsApp || "")
  //       form.setValue("socialTelegram", updatedProduct.socialTelegram || "")
  //       form.setValue("buyLink", updatedProduct.buyLink || "")
  //       form.setValue("bannerImage03", updatedProduct.bannerImage03 || "")
  //       form.setValue("website", updatedProduct.website || "")
  //       form.setValue("id", updatedProduct.customId || "")
  //     }
  //   } catch (error) {
  //     console.error("Erro ao buscar produto", error)
  //     setProduct(null)
  //   }
  // }, [id, form])

  // // Efeito para acionar a pesquisa quando o termo de pesquisa é alterado
  // React.useEffect(() => {
  //   fetchProductAPI()
  // }, [fetchProductAPI])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const {
      socialInstagram,
      socialWhatsApp,
      socialTelegram,
      urlProduct,
      id,
      ...valuesWithout
    } = values
    console.log("Editando produto", id)

    const convertedValues = {
      ...valuesWithout,
    }
    const response = await updateProduct(id, convertedValues)
    if (response) {
      toast.success("Produto editado com sucesso!")
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
          name="siteName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do site</FormLabel>
              {settings ? (
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
            name="bannerImage01"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Banner</FormLabel>
                {settings ? (
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
            name="bannerImage02"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel> </FormLabel>
                {settings ? (
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
            name="bannerImage03"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel> </FormLabel>
                {settings ? (
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
            name="socialWhatsApp"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>WhatsaApp URL</FormLabel>
                {settings ? (
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
            name="socialInstagram"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Instagram URL</FormLabel>
                {settings ? (
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
            name="socialTelegram"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Telegram URL</FormLabel>
                {settings ? (
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
            name="socialFacebook"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormLabel>Facebook URL</FormLabel>
                {settings ? (
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

        {settings ? (
          <Button type="submit">Editar Site</Button>
        ) : (
          <Skeleton className="w-32 h-10" />
        )}
      </form>
    </Form>
  )
}
