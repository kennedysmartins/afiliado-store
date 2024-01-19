import { FormAddProduct } from "@/components/FormAddProduct"
import React from "react"

const CreateProduct = () => {
  return (
    <main className="mx-10 max-w-5xl text-2xl gap-2 my-10">
      Crie uma promo
      <div className="flex w-[23rem]">
        <FormAddProduct />
      </div>
    </main>
  )
}

export default CreateProduct
