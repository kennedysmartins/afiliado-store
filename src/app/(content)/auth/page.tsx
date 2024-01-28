import Link from "next/link"
import { UserLoginForm } from "@/components/FormUserLogin"
import { UserRegisterForm } from "@/components/FormUserRegister"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/Navbar"

export default function AuthenticationPage() {
  return (
    <>
    <Navbar />
     <div className="container relative h-[calc(100vh-64px)] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col bg-muted p-10 text-white lg:flex dark:border-r">
          <div className="absolute inset-0 bg-[url('/login.png')] bg-center" />
          <div className="relative z-20 flex items-center text-lg font-medium">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-2 h-6 w-6"
            >
              <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
            </svg>
            {/* Afiliado Store */}
          </div>
          <div className="relative z-20 mt-auto ">
            <blockquote className="space-y-2">
              <p className="text-lg">
                &ldquo;Nunca foi tão fácil criar uma loja de produtos
                afiliados.&rdquo;
              </p>
              <footer className="text-sm">Kennedy Martins</footer>
            </blockquote>
          </div>
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <Tabs defaultValue="Criar conta" className="space-y-4">
              <TabsList>
                <TabsTrigger value="Criar conta">Criar conta</TabsTrigger>
                <TabsTrigger value="Logar">Logar</TabsTrigger>
              </TabsList>
              <TabsContent value="Criar conta" className="space-y-4">
                <div>
                  <div className="flex flex-col space-y-2 text-center mb-4">
                    <h1 className="mt-16 lg:mt-0 text-2xl font-semibold tracking-tight">
                      Crie uma conta
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      Digite seus dados abaixo para criar uma conta
                    </p>
                  </div>
                  <UserRegisterForm />
                  <p className="px-8 text-center text-sm text-muted-foreground mt-4">
                    Ao clicar em continue, você aceita os nossos{" "}
                    <Link
                      href="/terms"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      Termos de serviço
                    </Link>{" "}
                    e nossa{" "}
                    <Link
                      href="/privacy"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      Politica de privacidade
                    </Link>
                    .
                  </p>
                </div>
              </TabsContent>
              <TabsContent value="Logar" className="space-y-4">
                <div>
                  <div className="flex flex-col space-y-2 text-center mb-4">
                    <h1 className="mt-16 lg:mt-0 text-2xl font-semibold tracking-tight">
                      Faça o login
                    </h1>
                    <p className="text-sm text-muted-foreground">
                      Digite seu email abaixo para fazer o login
                    </p>
                  </div>
                  <UserLoginForm />
                  <p className="px-8 text-center text-sm text-muted-foreground mt-4">
                    Ao clicar em continue, você aceita os nossos{" "}
                    <Link
                      href="/terms"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      Termos de serviço
                    </Link>{" "}
                    e nossa{" "}
                    <Link
                      href="/privacy"
                      className="underline underline-offset-4 hover:text-primary"
                    >
                      Politica de privacidade
                    </Link>
                    .
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </>
  )
}
