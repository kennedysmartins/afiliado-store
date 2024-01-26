// Importa os módulos necessários
"use client"
import * as React from "react"
import { fetchProducts, searchProducts } from "@/lib/api"
import ProductCard from "@/components/ProductCard"
import { Product } from "@/lib/types"

// Componente funcional ProductList
const ProductList = ({ limit = 0 }) => {
  // Estado para armazenar os produtos da pesquisa
  const [products, setProducts] = React.useState<Product[]>([])

  // Função para realizar a pesquisa de produtos usando a API
  const fetchProductsAPI = React.useCallback(async () => {
    try {
      const response: Product[] = await fetchProducts()
      if (response) {
        console.log(response)
        setProducts(response)
      }
    } catch (error) {
      console.error("Erro ao buscar produtos", error)
      setProducts([])
      return []
    }
  }, [])

  // Efeito para acionar a pesquisa quando o termo de pesquisa é alterado
  React.useEffect(() => {
    fetchProductsAPI()
  }, [])

  // Renderiza o componente
  return (
    <div className="flex flex-col flex-wrap justify-center items-center align-middle gap-3 sm:w-2/3 mx-auto sm:flex-row">
      {products.slice(0, limit > 0 ? limit : products.length).map((product) => (
        <ProductCard key={product.customId} product={product} />
      ))}
    </div>
  )
}

// Exporta o componente SearchList como padrão
export default ProductList
