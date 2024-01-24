import { TableListProducts } from "@/components/TableListProducts"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import React from "react"

const Products = async () => {
  return (
    <main className="mx-2 sm:mx-10 w-full text-2xl gap-2 my-10">
      <div className="flex justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Produtos</h2>
        <Button asChild>
          <Link href="/admin/products/create">Novo</Link>
        </Button>
      </div>
      <div className="mt-5 w-full">
        <TableListProducts />
      </div>
    </main>
  )
}

export default Products
