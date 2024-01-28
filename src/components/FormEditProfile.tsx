"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"
import { UserData } from "@/lib/types"
import * as React from "react"
import { toast } from "sonner"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { getUserById, updateUser } from "@/lib/api"
import { Skeleton } from "./ui/skeleton"
import { Avatar, AvatarImage } from "./ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"

const formSchema = z.object({
  id: z.string(),
  name: z.string(),
  username: z.string(),
  email: z.string(),
  imagePath: z.any(),
})


export function FormEditProfile({ id }: { id: string }) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      id: "",
      name: "",
      username: "",
      email: "",
      imagePath: "",
    },
  })

  const [user, setUser] = React.useState<UserData | null>(null)

  // Função para realizar a pesquisa de produtos usando a API
  const fetchUserById = React.useCallback(async () => {
    try {
      const response: UserData = await getUserById(id)
      console.log(response)

      if (response) {
        setUser(response)
        form.setValue("id", response.id || "")
        form.setValue("name", response.name || "")
        form.setValue("username", response.username || "")
        form.setValue("email", response.email || "")
        form.setValue("imagePath", "" || "")
      }
    } catch (error) {
      console.error("Erro ao buscar o usuário", error)
      setUser(null)
    }
  }, [id, form])

  // Efeito para acionar a pesquisa quando o termo de pesquisa é alterado
  React.useEffect(() => {
    fetchUserById()
  }, [fetchUserById])

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const {
      id,
      imagePath,
      ...valuesWithout
    } = values
    console.log("Editando usuário", id)
  
    const response = await updateUser(id, valuesWithout, imagePath)
    if (response) {
      toast.success("Usuário editado com sucesso!")

    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 mt-10 w-full"
      >
        <Avatar>
          <AvatarImage src={user?.imagePath} />
          <AvatarFallback>{user?.name.charAt(0)}</AvatarFallback>
        </Avatar>
        <FormField
          control={form.control}
          name="imagePath"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Imagem</FormLabel>
              {user ? (
                <>
                  <FormControl>
                    <div className="flex gap-3">
                      <Input type="file" {...field} />
                    </div>
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              {user ? (
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
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Nome e sobrenome</FormLabel>
              {user ? (
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
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              {user ? (
                <>
                  <FormControl>
                    <Input {...field} />
                  </FormControl>
                  <FormMessage />
                </>
              ) : (
                <Skeleton className="w-full h-20" />
              )}
            </FormItem>
          )}
        />

        {user ? (
          <Button type="submit">Editar Usuário</Button>
        ) : (
          <Skeleton className="w-32 h-10" />
        )}
      </form>
    </Form>
  )
}
