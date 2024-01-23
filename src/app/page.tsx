import AnnouncementCard from "@/components/AnnouncementCard"
import { CarouselHome } from "@/components/CarouselHome"
import Navbar from "@/components/Navbar"
import ProductCard from "@/components/ProductCard"
import ProductList from "@/components/ProductList"

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col mx-auto text-2xl gap-2 my-10 w-[80%] items-center justify-center">
        <div className="container flex justify-center items-center mx-4">
          <CarouselHome />
        </div>

        <div className="container flex flex-col sm:flex-row sm:w-full">
          <ProductList />
          <div className="flex mx-auto">
            <div className="flex flex-col w-full sm:w-1/3 gap-4">
              <AnnouncementCard
                data={{
                  cardTitle: "Receba no WhatsApp",
                  description:
                    "Acompanhe as melhores promoções da internet no seu WhatsApp",
                  footer: "Receba as melhores",
                }}
              />
              <AnnouncementCard
                data={{
                  cardTitle: "Receba no Instagram",
                  description:
                    "Siga a gente no Instagram e não perca mais nenhuma oferta!",
                  footer: "Seguir perfil",
                }}
              />
              <AnnouncementCard
                data={{
                  cardTitle: "Receba no Telegram",
                  description:
                    "Nosso canal no telegram também manda todas as promoções",
                  footer: "Entrar no canal",
                }}
              />
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
