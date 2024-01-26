"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import useStoreInfo from "@/hooks/useStore"

export function ModeToggle() {
  const router = useRouter()
  const { theme, setTheme } = useTheme()
  const storeInfo = useStoreInfo()


  if (storeInfo?.storeConfig?.color == "green") {
    return (
      <Button variant="outline" size="icon">
        {theme == "green" && (
          <Sun
            onClick={() => {
              setTheme("green-dark")
            }}
            className="h-[1.2rem] w-[1.2rem] "
          />
        )}
        {theme == "green-dark" && (
          <Moon
            onClick={() => {
              setTheme("green")
              setTimeout(() => {
                window.location.reload()
              }, 500)
            }}
            className="absolute h-[1.2rem] w-[1.2rem] "
          />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }
  if (storeInfo?.storeConfig?.color == "red") {
    return (
      <Button variant="outline" size="icon">
        {theme == "red" && (
          <Sun
            onClick={() => {
              setTheme("red-dark")
            }}
            className="h-[1.2rem] w-[1.2rem] "
          />
        )}
        {theme == "red-dark" && (
          <Moon
            onClick={() => {
              setTheme("red")
              setTimeout(() => {
                window.location.reload()
              }, 500)
            }}
            className="absolute h-[1.2rem] w-[1.2rem] "
          />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }
  if (storeInfo?.storeConfig?.color == "blue") {
    return (
      <Button variant="outline" size="icon">
        {theme == "blue" && (
          <Sun
            onClick={() => {
              setTheme("blue-dark")
            }}
            className="h-[1.2rem] w-[1.2rem] "
          />
        )}
        {theme == "blue-dark" && (
          <Moon
            onClick={() => {
              setTheme("blue")
              setTimeout(() => {
                window.location.reload()
              }, 500)
            }}
            className="absolute h-[1.2rem] w-[1.2rem] "
          />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }
  if (storeInfo?.storeConfig?.color == "yellow") {
    return (
      <Button variant="outline" size="icon">
        {theme == "yellow" && (
          <Sun
            onClick={() => {
              setTheme("yellow-dark")
            }}
            className="h-[1.2rem] w-[1.2rem] "
          />
        )}
        {theme == "yellow-dark" && (
          <Moon
            onClick={() => {
              setTheme("yellow")
              setTimeout(() => {
                window.location.reload()
              }, 500)
            }}
            className="absolute h-[1.2rem] w-[1.2rem] "
          />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }
  if (storeInfo?.storeConfig?.color == "rose") {
    return (
      <Button variant="outline" size="icon">
        {theme == "rose" && (
          <Sun
            onClick={() => {
              setTheme("rose-dark")
            }}
            className="h-[1.2rem] w-[1.2rem] "
          />
        )}
        {theme == "rose-dark" && (
          <Moon
            onClick={() => {
              setTheme("rose")
              setTimeout(() => {
                window.location.reload()
              }, 500)
            }}
            className="absolute h-[1.2rem] w-[1.2rem] "
          />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }
  if (storeInfo?.storeConfig?.color == "violet") {
    return (
      <Button variant="outline" size="icon">
        {theme == "violet" && (
          <Sun
            onClick={() => {
              setTheme("violet-dark")
            }}
            className="h-[1.2rem] w-[1.2rem] "
          />
        )}
        {theme == "violet-dark" && (
          <Moon
            onClick={() => {
              setTheme("violet")
              setTimeout(() => {
                window.location.reload()
              }, 500)
            }}
            className="absolute h-[1.2rem] w-[1.2rem] "
          />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }
  if (storeInfo?.storeConfig?.color == "zinc") {
    return (
      <Button variant="outline" size="icon">
        {theme == "zinc" && (
          <Sun
            onClick={() => {
              setTheme("zinc-dark")
            }}
            className="h-[1.2rem] w-[1.2rem] "
          />
        )}
        {theme == "zinc-dark" && (
          <Moon
            onClick={() => {
              setTheme("zinc")
              setTimeout(() => {
                window.location.reload()
              }, 500)
            }}
            className="absolute h-[1.2rem] w-[1.2rem] "
          />
        )}
        <span className="sr-only">Toggle theme</span>
      </Button>
    )
  }

  return (
    <Button variant="outline" size="icon">
      <Sun
        onClick={() => setTheme("dark")}
        className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
      />
      <Moon
        onClick={() => setTheme("light")}
        className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100"
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  )
}
