"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import {Product} from "@/lib/types"
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
  title: z.string().min(2, {
    message: "Você precisa definir um título para o produto.",
  }),
  image: z.string(),
  currentPrice: z.string(),
  originalPrice: z.string(),
  recurrencePrice: z.string(),
  buyLink: z.string().min(2, {
    message: "Você precisa definir um link de encaminhamento.",
  }),
  announcement: z.string(),
  productCode: z.string(),
  catchyText: z.string(),
  conditionPayment: z.string(),
  website: z.string(),
  cupom: z.string(),
  cupomValue: z.string(),
  published: z.boolean(),
  urlProduct: z.string(),
})

export function FormEditProduct({ id }: { id: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      title: "",
      image: "",
      currentPrice: "",
      originalPrice: "",
      recurrencePrice: "",
      buyLink: "",
      announcement: "",
      productCode: "",
      catchyText: "",
      conditionPayment: "",
      website: "",
      cupom: "",
      cupomValue: "",
      published: false,
      urlProduct: "",
    },
  })

  const [product, setProduct] = React.useState<Product | null>(null)

  // Função para realizar a pesquisa de produtos usando a API
  const fetchProductAPI = React.useCallback(async () => {
    try {
      const response: Product = await fetchProduct(id)

      // Convertendo cupomValue, currentPrice, originalPrice para string
      const updatedProduct: any = {
        ...response,
        cupomValue: response.cupomValue?.toString(),
        currentPrice: response.currentPrice?.toString(),
        recurrencePrice: response.recurrencePrice?.toString(),
        originalPrice: response.originalPrice?.toString(),
      }


      if (response) {
        setProduct(updatedProduct)
        form.setValue("catchyText", updatedProduct.catchyText || "")
        form.setValue("cupom", updatedProduct.cupom || "")
        form.setValue("cupomValue", updatedProduct.cupomValue || "")
        form.setValue("title", updatedProduct.title || "")
        form.setValue("image", updatedProduct.image || "")
        form.setValue("currentPrice", updatedProduct.currentPrice || "")
        form.setValue("originalPrice", updatedProduct.originalPrice || "")
        form.setValue("recurrencePrice", updatedProduct.recurrencePrice || "")
        form.setValue("buyLink", updatedProduct.buyLink || "")
        form.setValue("conditionPayment", updatedProduct.conditionPayment || "")
        form.setValue("website", updatedProduct.website || "")
        form.setValue("id", updatedProduct.id || "")
      }
    } catch (error) {
      console.error("Erro ao buscar produto", error)
      setProduct(null)
    }
  }, [id, form])

  // Efeito para acionar a pesquisa quando o termo de pesquisa é alterado
  React.useEffect(() => {
    fetchProductAPI()
  }, [fetchProductAPI])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const {
      cupomValue,
      currentPrice,
      originalPrice,
      recurrencePrice,
      urlProduct,
      id,
      ...valuesWithout
    } = values
    console.log("Editando produto", id)

    const convertedValues = {
      ...valuesWithout,
      cupomValue: parseFloat(cupomValue),
      currentPrice: parseFloat(currentPrice),
      originalPrice: parseFloat(originalPrice),
    }
    const response = await updateProduct(id, convertedValues)
    if (response) {
      toast("Produto editado com sucesso!")
    }
  }

  function onAnalyze(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const urlProductValue = form.getValues("urlProduct")
    console.log("Url Product Value: " + urlProductValue)
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mt-10 w-full"
      >
        <FormField
          control={form.control}
          name="catchyText"
          render={({ field }) => (
            <FormItem>
                {product ? (
                <>
                  <FormLabel>Texto Chamativo</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="O mais querido, com um preço TOP 🍎"
                      {...field}
                    />
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
          name="cupom"
          render={({ field }) => (
            <FormItem>
              {product ? (
                <>
              <FormLabel>Cupom</FormLabel>
              <FormControl>
                <Input placeholder="promo10" {...field} />
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
          name="cupomValue"
          render={({ field }) => (
            <FormItem>
              {product ? (
                <>
              <FormLabel>Valor do Cupom</FormLabel>
              <FormControl>
                <Input placeholder="809.90" {...field} />
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
          name="title"
          render={({ field }) => (
            <FormItem>
              {product ? (
                <>
              <FormLabel>Nome do produto</FormLabel>
              <FormControl>
                <Textarea placeholder="iPhone 15 Pro 256GB Preto" {...field} />
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
          name="conditionPayment"
          render={({ field }) => (
            <FormItem>
              {product ? (
                <>
              <FormLabel>Condições</FormLabel>
              <FormControl>
                <Input placeholder="no PIX ou em 10x sem júros" {...field} />
              </FormControl>
              <FormMessage />
              </>
                
              ) : (
                <Skeleton className="w-full h-10" />
              )}
              
            </FormItem>
          )}
        />

        <div className="flex w-full min-w-full gap-2">
          <FormField
            control={form.control}
            name="originalPrice"
            render={({ field }) => (
              <FormItem>
                {product ? (
                <>
                <FormLabel>Preço Antigo</FormLabel>
                <FormControl>
                  <Input placeholder="12.220,99" {...field} />
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
            name="currentPrice"
            render={({ field }) => (
              <FormItem>
                {product ? (
                <>
                <FormLabel>Preço</FormLabel>
                <FormControl>
                  <Input placeholder="10.220,99" {...field} />
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

        <FormField
          control={form.control}
          name="buyLink"
          render={({ field }) => (
            <FormItem>
              {product ? (
                <>
              <FormLabel>Link de compra</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://amazon.com.br/DSKJADSJ"
                  {...field}
                />
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
          name="image"
          render={({ field }) => (
            <FormItem>
              {product ? (
                <>
              <FormLabel>URL da Imagem</FormLabel>
              <FormControl>
                <Input placeholder="https://..." {...field} />
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
          name="announcement"
          render={({ field }) => (
            <FormItem>
              {product ? (
                <>
              <FormLabel>Anúncio</FormLabel>
              <FormControl>
                <Input placeholder="Essa oferta pode acabar a qualquer momento!" {...field} />
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
          name="website"
          render={({ field }) => (
            <FormItem>
              {product ? (
                <>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="Amazon" {...field} />
              </FormControl>
              <FormMessage />
              </>
                
              ) : (
                <Skeleton className="w-full h-10" />
              )}
              
            </FormItem>
          )}
        />
        {
          product ? (
            <Button type="submit">Editar Produto</Button>
            
          ):(
            <Skeleton className="w-28 h-10" />
          )
        }
      </form>
    </Form>
  )
}
