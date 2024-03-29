import AnnouncementCard from "@/components/AnnouncementCard"
import AnnouncementList from "@/components/AnnouncementList"
import { CarouselHome } from "@/components/CarouselHome"
import { CarouselHomeMobile } from "@/components/CarouselHomeMobile"
import Navbar from "@/components/Navbar"
import ProductList from "@/components/ProductList"

export default function Home() {
  return (
    <>
      <Navbar />
      <CarouselHomeMobile />
      <main className="flex flex-col mx-auto text-2xl gap-2 my-10 w-[80%] items-center justify-center">
        <div className="md:container flex justify-center items-center mx-4">
          <CarouselHome />
        </div>

        <div className="md:container flex flex-col gap-3 md:flex-row md:w-full ">
          <ProductList />
          <div className="flex mx-auto">
            <div className="lg:flex hidden flex-col w-full sm:w-1/3 gap-4">
              <AnnouncementList />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
