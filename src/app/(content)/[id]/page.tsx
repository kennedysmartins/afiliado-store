import { CarouselHome } from "@/components/CarouselHome"
import Navbar from "@/components/Navbar"
import ProductCard from "@/components/ProductCard"
// type Params = {
//   params: { id: string }
//   id: string
// }

export default function ProductPage({ params: { id } }: any) {
  return (
    <>
      <Navbar />
      <main className="mx-auto sm:w-[83rem] text-2xl gap-2 my-10 w-full">
        <div className="flex justify-center items-center w-full">
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center align-middle gap-8 w-full mx-auto sm:flex-row">

        </div>
      </main>
    </>
  )
}
