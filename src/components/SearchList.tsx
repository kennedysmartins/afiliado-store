"use client"
import { useSearchParams } from "next/navigation"
import React from "react"

const SearchList = () => {
  const searchParams = useSearchParams()
  const term = searchParams.get("term") || ""
  return <div>Pesquisando por: {term}</div>
}

export default SearchList
