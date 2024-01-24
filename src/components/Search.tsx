"use client"
import React from "react"
import { Input } from "./ui/input"
import { useRouter } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "./ui/button"
import { FiSearch } from "react-icons/fi"

interface SearchProps {
  className?: string
  open?: boolean
}

const Search = ({ className, open = true }: SearchProps) => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = React.useState("")

  const handleSearch = () => {
    // Navega para a página de pesquisa com o termo na URL
    router.push(`/search?term=${searchTerm}`)
  }

  return (
    <div>
      {open ? (
        <Input
          type="search"
          placeholder="Pesquisar..."
          className={cn("md:w-[100px] lg:w-[300px] w-", className)}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={(e) => {
            // Se pressionar Enter, realiza a pesquisa
            if (e.key === "Enter") {
              handleSearch()
            }
          }}
        />
      ) : (
        <Button variant="outline" size="icon" onClick={() => handleSearch()}>
          <FiSearch />
        </Button>
      )}
    </div>
  )
}

export default Search
