"use client"

import * as React from "react"
import * as z from "zod"

import { cn } from "@/lib/utils"
import { Icons } from "@/components/Icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { MdEmail, MdPassword } from "react-icons/md"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { useRouter } from "next/navigation"

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { authUser } from "@/lib/api"
import { toast } from "sonner"
import useAuthInfo from "@/hooks/useAuth"

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

const formSchema = z.object({
  email: z.string().min(5, {
    message: "Seu email precisa ter pelo menos 5 dígitos",
  }),
  password: z.string().min(5, {
    message: "Sua senha precisa ter pelo menos 5 dígitos",
  }),
})

export function UserLoginForm({ className, ...props }: UserAuthFormProps) {
  const AuthContext = useAuthInfo()
  const { login } = AuthContext

  const router = useRouter()
  const [isLoading, setIsLoading] = React.useState<boolean>(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      setIsLoading(true)
      const response = await authUser(values)
      if (response) {
        login(response)
        toast.success("Logado com sucesso!", {
          description: "Redirecionando...",
          duration: 3000,
        })

        form.reset()
        if (
          response.user.userType === "ADMIN" ||
          response.user.userType === "SUPER" ||
          response.user.userType === "MODERATOR"
        ) {
          router.push("/admin")
        } else {
          router.push("/")
        }
      } else {
        toast.error("Não consegui encontrar este usuário ou senha!", {
          description: "Revise seus dados de login",
          duration: 5000,
        })
      }
    } catch (error: any) {
      toast.error("Ops, algo deu errado!", {
        duration: 9000,
      })
      console.error(error.message)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid gap-2">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only" htmlFor="email">
                    Email
                  </FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <MdEmail className="absolute top-0 bottom-0 w-6 h-6 my-auto text-primary left-3" />

                      <Input
                        id="email"
                        placeholder="Email"
                        type="email"
                        autoCapitalize="none"
                        autoComplete="email"
                        autoCorrect="off"
                        disabled={isLoading}
                        className="pl-12 pr-4"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="sr-only" htmlFor="password">
                    Senha
                  </FormLabel>
                  <FormControl>
                    <div className="relative w-full">
                      <MdPassword className="absolute top-0 bottom-0 w-6 h-6 my-auto text-primary left-3" />
                      <Input
                        id="password"
                        autoCorrect="off"
                        autoComplete="password"
                        type="password"
                        placeholder="Senha"
                        disabled={isLoading}
                        className="pl-12 pr-4"
                        {...field}
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button disabled={isLoading}>
              {isLoading && (
                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Logar
            </Button>
          </div>
        </form>
      </Form>
      {/* <div className="relative">
        <div className="absolute inset-0 flex items-center">
          <span className="w-full border-t" />
        </div>
        <div className="relative flex justify-center text-xs uppercase">
          <span className="bg-background px-2 text-muted-foreground">
            Ou continue com
          </span>
        </div>
      </div>
      <Button variant="outline" type="button" disabled={isLoading}>
        {isLoading ? (
          <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
        ) : (
          <Icons.google className="mr-2 h-4 w-4" />
        )}{" "}
        Logue com o Google
      </Button> */}
    </div>
  )
}
