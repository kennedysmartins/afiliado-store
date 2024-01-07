import Navbar from "@/components/Navbar"
import SearchList from "@/components/SearchList"
import React from "react"

const Search = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl text-2xl gap-2 my-10">
        <SearchList />
      </main>
    </>
  )
}

export default Search
