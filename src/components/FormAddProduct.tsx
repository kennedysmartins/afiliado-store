"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

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

const formSchema = z.object({
  urlProduct: z.string(),
  buyLink: z.string().min(2, {
    message: "Você precisa definir um link de encaminhamento.",
  }),
  nameProduct: z.string().min(2, {
    message: "Você precisa definir um nome para o produto.",
  }),
  conditionPayment: z.string(),
  oldPrice: z.string(),
  currentPrice: z.string(),
  website: z.string(),
})

export function FormAddProduct() {

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      urlProduct: "",
      buyLink: "",
      nameProduct: "",
      conditionPayment: "",
      oldPrice: "",
      currentPrice: "",
      website:""
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values)
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
          name="nameProduct"
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
            name="oldPrice"
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
