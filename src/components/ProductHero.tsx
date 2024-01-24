// Importa os módulos necessários
"use client"
import * as React from "react"
import { fetchProduct } from "@/lib/api"
import ProductCard from "@/components/ProductCard"
import { Product } from "@/lib/types"

const ProductHero = ({ id }: { id: string }) => {
  const [product, setProduct] = React.useState<Product | null>(null)

  const fetchProductAPI = React.useCallback(async () => {
    try {
      const response: Product = await fetchProduct(id)
      if (response) {
        console.log(response)
        setProduct(response)
      }
    } catch (error) {
      console.error("Erro ao buscar produtos", error)
      setProduct(null)
    }
  }, [id])

  React.useEffect(() => {
    fetchProductAPI()
  }, [fetchProductAPI])
  return (
    <div className="flex flex-col flex-wrap justify-center items-center align-middle gap-3 sm:w-2/3 mx-auto sm:flex-row">
      {product && <ProductCard key={product.customId} product={product} />}
    </div>
  )
}

export default ProductHero
