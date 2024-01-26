// Importa os módulos necessários
"use client"
import * as React from "react"
import { fetchProduct } from "@/lib/api"
import { Product } from "@/lib/types"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card"
import Link from "next/link"
import { formatCurrency } from "@/lib/utils"
import { Button } from "./ui/button"
import ProductList from "./ProductList"

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
    <div className="flex flex-col w-full justify-center items-center align-middle gap-3 sm:w-2/3 mx-auto">
      {product && (
        <div className="flex flex-col justify-center items-center gap-10">
          <Card className="w-full overflow-hidden transition duration-300 border-none">
            <div className="flex w-full border-none">
              <CardHeader className="relative w-1/2 lg:w-full">
                <Link href={`${product.buyLink}`}>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-48 h-48 bg-contain bg-center object-contain bg-white rounded hover:scale-105 transition duration-300 p-2"
                  />
                </Link>
              </CardHeader>
              <CardContent className="p-4 w-1/2 lg:w-full ">
                <Link href={`${product.buyLink}`}>
                  <CardTitle className="text-sm font-semibold mb-2 overflow-hidden">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="mb-4 my-4">
                    Frete grátis
                  </CardDescription>
                  <p className="text-sm line-through opacity-55">{`R$ ${formatCurrency(
                    product.originalPrice
                  )}`}</p>
                  <p className="md:font-medium mb-2 h-8 text-primary ">{`R$ ${formatCurrency(
                    product.currentPrice
                  )}`}</p>
                </Link>

                <Link href={`${product.buyLink}`}>
                  <Button className="mt-2">Pegar promoção</Button>
                </Link>
              </CardContent>
            </div>
          </Card>
          <div className="flex flex-col align-middle justify-center gap-3 container flex-nowrap">
            <h2 className="text-center">Últimas Promoções</h2>
            <ProductList limit={3} className="flex-nowrap" />

          </div>
        </div>
      )}
    </div>
  )
}



export default ProductHero
