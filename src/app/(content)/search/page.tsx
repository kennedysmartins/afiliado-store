import Navbar from "@/components/Navbar"
import SearchList from "@/components/SearchList"
import React from "react"
import Search from "@/components/Search"

const PageSearch = () => {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-5xl text-2xl gap-2 my-10 px-4">
        <Search className="w-full md:hidden my-2"/>
        <SearchList />
      </main>
    </>
  )
}

export default PageSearch
