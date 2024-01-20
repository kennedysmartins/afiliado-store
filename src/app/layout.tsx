import type { Metadata } from "next"
import { ThemeProvider } from "@/contexts/ThemeProvider"
import "./globals.css"
import Navbar from "@/components/Navbar"

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
    <html lang="pt-br">
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
