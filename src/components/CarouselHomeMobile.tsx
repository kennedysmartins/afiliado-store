"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import useStoreInfo from "@/hooks/useStore"

export function CarouselHomeMobile() {
  const storeInfo = useStoreInfo()
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      className="md:hidden"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {storeInfo?.storeConfig?.mobileBanners?.map((banner, index) => (
          <CarouselItem key={index}>
            <div>
                  <img src={banner} className="w-full h-80 object-cover" />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
