import Navbar from "@/components/Navbar"
import ProductHero from "@/components/ProductHero"
import { fetchProduct } from "@/lib/api"
import { Metadata, Product } from "@/lib/types"
import { ResolvingMetadata } from "next"

type Params = {
  params: { id: any } // Corrigido de Number para number
  id: any
}

type Props = {
  params: Params
  searchParams: string
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const id = params.id
  const product: Product | null = await fetchProduct(id)

  return {
    openGraph: {
      title: product?.title || "Título Indisponível",
      description: "As melhores promoções e ofertas",
      images: [{ url: product?.image! }],
      locale: "pt_BR",
      type: "website",
      url: "",
      siteName: ""
    },
  }
}

export default function ProductPage({ params }: { params: { id: string } }) {
  const id:string = params.id
  return (
    <>
      <Navbar />
      <main className="mx-auto sm:w-[83rem] text-2xl gap-2 my-10 w-full">
        <div className="flex justify-center items-center w-full"></div>

        <div className="flex flex-col flex-wrap justify-center items-center align-middle gap-8 w-full mx-auto sm:flex-row">
          <ProductHero id={id} />
        </div>
      </main>
    </>
  )
}
