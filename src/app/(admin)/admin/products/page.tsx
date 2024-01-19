import { TableListProducts } from '@/components/TableListProducts'
import { ColumnDef } from "@tanstack/react-table"
import React from 'react'

const Products = async () => {

  async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "728ed52f",
      amount: 100,
      status: "pending",
      email: "m@example.com",
    },
    // ...
  ]
}

  // This type is used to define the shape of our data.
  // You can use a Zod schema here if you want.
  type Payment = {
    id: string
    amount: number
    status: "pending" | "processing" | "success" | "failed"
    email: string
  }



  const columns: ColumnDef<Payment>[] = [
    {
      accessorKey: "status",
      header: "Status",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "amount",
      header: "Amount",
    },
  ]
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