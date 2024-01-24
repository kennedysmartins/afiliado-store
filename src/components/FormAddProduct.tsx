"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { Product } from "@/lib/types"
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
import { createProduct, deleteProduct, extractProduct } from "@/lib/api"

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

export function FormAddProduct() {
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
    const convertedValues = {
      ...valuesWithout,
      cupomValue: parseFloat(cupomValue),
      currentPrice: parseFloat(currentPrice),
      originalPrice: parseFloat(originalPrice),
    }
    const response = await createProduct(convertedValues)
    console.log(response)
    if (response)
      if (response) {
        toast.success("Produto criado com sucesso!", {
          description: convertedValues.title,
          duration: 9000,
          action: {
            label: "Desfazer",
            onClick: () => {
              deleteProduct(response.id)
              toast.error("Um produto foi deletado.")
            },
          },
        })

        form.reset()
        console.log(response)
      }
  }

  async function onAnalyze(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault()
    const urlProductValue = form.getValues("urlProduct")
    console.log("Extraindo: " + urlProductValue)
    const response = await extractProduct(urlProductValue)
    console.log(response)
    if (response) {
      toast("Produto extraído com sucesso!")
      form.setValue("title", response.title || "")
      form.setValue("image", response.image || "")
      form.setValue("buyLink", urlProductValue || "")
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
          name="urlProduct"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL</FormLabel>
              <FormControl>
                <div className="flex w-full max-w-sm items-center space-x-2">
                  <Input
                    placeholder="https://..."
                    {...field}
                    {...form.register("urlProduct")}
                  />

                  <Button onClick={onAnalyze}>Analisar</Button>
                </div>
              </FormControl>
              <FormDescription>
                {"*(Opcional) Defina a URL que deseja analisar."}
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <Separator />

        <FormField
          control={form.control}
          name="catchyText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Texto Chamativo</FormLabel>
              <FormControl>
                <Input
                  placeholder="O mais querido, com um preço TOP 🍎"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cupom"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Cupom</FormLabel>
              <FormControl>
                <Input placeholder="promo10" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="cupomValue"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Valor do Cupom</FormLabel>
              <FormControl>
                <Input placeholder="809.90" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome do produto</FormLabel>
              <FormControl>
                <Textarea placeholder="iPhone 15 Pro 256GB Preto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="conditionPayment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Condições</FormLabel>
              <FormControl>
                <Input placeholder="no PIX ou em 10x sem júros" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex w-full min-w-full gap-2">
          <FormField
            control={form.control}
            name="originalPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço Antigo</FormLabel>
                <FormControl>
                  <Input placeholder="12.220,99" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="currentPrice"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Preço</FormLabel>
                <FormControl>
                  <Input placeholder="10.220,99" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="buyLink"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Link de compra</FormLabel>
              <FormControl>
                <Input
                  placeholder="https://amazon.com.br/DSKJADSJ"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>URL da Imagem</FormLabel>
              <FormControl>
                <Input placeholder="https://..." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="announcement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Anúncio</FormLabel>
              <FormControl>
                <Input placeholder="Essa oferta pode acabar a qualquer momento!" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="website"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Website</FormLabel>
              <FormControl>
                <Input placeholder="Amazon" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Criar Produto</Button>
      </form>
    </Form>
  )
}
