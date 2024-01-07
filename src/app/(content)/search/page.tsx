import Navbar from "@/components/Navbar"
import React from "react"

const Search = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl text-2xl gap-2 my-10">
        Pesquisando por: #searchTerm
      </main>
    </>
  )
}

export default Search
