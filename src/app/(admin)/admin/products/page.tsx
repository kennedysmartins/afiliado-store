import { TableListProducts } from '@/components/TableListProducts'
import React from 'react'

const Products = async () => {
  return (
    <main className="mx-10 max-w-5xl text-2xl gap-2 my-10">
      Products
      <div className="mt-5 w-full">
      <TableListProducts />
      </div>
    </main>
  )
}

export default Products