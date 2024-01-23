"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "./ui/button"
import Link from "next/link"
import { Product } from "@/lib/types"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <Card className="w-52 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
        <CardHeader className="relative">
          <Link href="#">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-48 bg-contain bg-center object-cover bg-white rounded hover:scale-105 transition duration-300 p-2"
            />
          </Link>
        </CardHeader>
        <Link href="#">
          <CardContent className="p-4">
            <CardTitle className="text-sm font-semibold mb-2 h-12 overflow-hidden">
              {product.title}
            </CardTitle>
            <CardDescription className="mb-4 h-5 overflow-hidden">
              Frete grátis
            </CardDescription>
            <p className="text-sm line-through opacity-55 h-4 overflow-hidden">{`R$ ${product.originalPrice}`}</p>
            <p className=" font-medium mb-2 h-8 overflow-hidden">{`R$ ${product.currentPrice}`}</p>
          </CardContent>
        </Link>

        <CardFooter>
          {/* <Button >
            Pegar Promo
          </Button> */}
        </CardFooter>
      </Card>
    </div>
  )
}
