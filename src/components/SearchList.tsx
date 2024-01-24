// Importa os módulos necessários
"use client"
import * as React from "react"
import { useSearchParams } from "next/navigation"
import { searchProducts } from "@/lib/api"
import ProductCard from "@/components/ProductCard"
import {Product} from "@/lib/types"


// Componente funcional SearchList
const SearchList = () => {
  // Obtém os parâmetros de pesquisa da URL
  const searchParams = useSearchParams()
  const term = searchParams.get("term") || ""

  // Estado para armazenar os produtos da pesquisa
  const [products, setProducts] = React.useState<Product[]>([])

  // Função para realizar a pesquisa de produtos usando a API
  const searchProductsAPI = React.useCallback(async (searchTerm: string) => {
    try {
      if (searchTerm) {
        const response: Product[] = await searchProducts(searchTerm)
        if (response) {
          console.log(response)
          setProducts(response)
        }
      }
      return []
    } catch (error) {
      console.error("Erro ao buscar produtos", error)
      setProducts([])
      return []
    }
  },[]);

  // Efeito para acionar a pesquisa quando o termo de pesquisa é alterado
  React.useEffect(() => {
    searchProductsAPI(term)
  }, [term])

  // Renderiza o componente
  return (
    <div>
      <p>Pesquisando por: {term}</p>
      <div className="my-11 flex flex-wrap gap-3">
        {products.map((product) => (
          <ProductCard key={product.customId} product={product} />
        ))}
      </div>
    </div>
  )
}

// Exporta o componente SearchList como padrão
export default SearchList
