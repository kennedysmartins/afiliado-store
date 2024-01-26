import type { Metadata } from "next"
import { ThemeProvider } from "@/contexts/ThemeProvider"
import "./globals.css"
import { Toaster } from "@/components/ui/sonner"
import { StoreProvider } from "@/contexts/StoreContext"

export const metadata: Metadata = {
  title: "Afiliado Store",
  description: "As melhores promoções você encontra aqui!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning lang="pt-br">
      <body>
        <ThemeProvider attribute="class" defaultTheme="none">
          <StoreProvider>
            {children}
            <Toaster />
          </StoreProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
