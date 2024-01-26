import { FormAddProduct } from "@/components/FormAddProduct"
import React from "react"

const CreateProduct = () => {
  return (
    <main className="mx-10 w-full text-2xl gap-2 my-10">
      <h2 className="text-3xl font-bold tracking-tight text-primary">
        Crie uma promo
      </h2>
      <div className="flex w-full">
        <FormAddProduct />
      </div>
    </main>
  )
}

export default CreateProduct
