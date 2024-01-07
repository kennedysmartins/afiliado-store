"use client"
import React from "react"
import { Input } from "./ui/input"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"

const Search = ({ className }: { className?: string }) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = React.useState("")

  const handleSearch = () => {
    // Navega para a página de pesquisa com o termo na URL
    router.push(`/search?term=${searchTerm}`)
  }
  return (
    <div>
      <Input
        type="search"
        placeholder="Pesquisar..."
        className={cn("md:w-[100px] lg:w-[300px]", className)}
        onChange={(e) => setSearchTerm(e.target.value)}
        onKeyDown={(e) => {
          // Se pressionar Enter, realiza a pesquisa
          if (e.key === "Enter") {
            handleSearch()
          }
        }}
      />
    </div>
  )
}

export default Search
