"use client"
import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"



const banners = [
  "https://www.pincei.com.br/_next/image?url=https%3A%2F%2Fimages.pincei.co%2Fee%2F113a%2F65d6831fd1c86adf4f212fee975cc4ed9d&w=3840&q=75",
  "https://www.pincei.com.br/_next/image?url=https%3A%2F%2Fimages.pincei.co%2Fd6%2F86b6%2F6841edb799dfac80d5925edb816519c241&w=3840&q=75",
]

export function CarouselHome() {
  const plugin = React.useRef(
    Autoplay({ delay: 5000, stopOnInteraction: true })
  )
  return (
      <Carousel
        plugins={[plugin.current]}
        className="w-full sm:h-[450px] h-44 justify-center items-center"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
      <CarouselContent>
        {banners.map((banner, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="flex items-center justify-center p-6">
                  <img src={banner} className="rounded" />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
