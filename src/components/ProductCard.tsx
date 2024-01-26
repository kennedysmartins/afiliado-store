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
import { formatCurrency } from "@/lib/utils"

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div>
      <Card className="lg:w-52 w-full rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300 ">
        <div className="flex lg:flex-col w-full">
          <CardHeader className="relative w-1/2 lg:w-full">
            <Link href={`/${product.customId}`}>
              <img
                src={product.image}
                alt={product.title}
                className="w-48 h-48 bg-contain bg-center object-contain bg-white rounded hover:scale-105 transition duration-300 p-2"
              />
            </Link>
          </CardHeader>
          <CardContent className="p-4 w-1/2 lg:w-full ">
            <Link href={`/${product.customId}`}>
              <CardTitle className="text-sm font-semibold mb-2 h-11 overflow-hidden">
                {product.title}
              </CardTitle>
              <CardDescription className="mb-4 h-5 ">
                Frete grátis
              </CardDescription>
              <p className="text-sm line-through opacity-55 h-4 ">{`R$ ${formatCurrency(
                product.originalPrice
              )}`}</p>
              <p className="md:font-medium mb-2 h-8 text-primary ">{`R$ ${formatCurrency(
                product.currentPrice
              )}`}</p>
            </Link>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}
