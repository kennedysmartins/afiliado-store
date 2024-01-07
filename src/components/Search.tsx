import React from "react"
import { Input } from "./ui/input"

const Search = () => {
  return (
    <div>
      <Input
        type="search"
        placeholder="Pesquisar..."
        className="md:w-[100px] lg:w-[300px]"
      />
    </div>
  )
}

export default Search
