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

export default function ProductCard() {
  return (
    <div>
      <Card className="w-52 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
        <CardHeader className="relative">
          <Link href="#">
            <img
              src="https://http2.mlstatic.com/D_NQ_NP_881016-MLM51559383738_092022E-O.webp"
              alt="Product Image"
              className="w-full h-48 bg-contain bg-center object-contain bg-white rounded hover:scale-105 transition duration-300"
            />
          </Link>
        </CardHeader>
        <Link href="#">
          <CardContent className="p-4">
            <CardTitle className="text-sm font-semibold mb-2">
              Iphone 13 De 128 Gb Cor Meia Noite Apple - Distribuidor Autorizado
            </CardTitle>
            <CardDescription className="mb-4">Frete grátis</CardDescription>
            <p className="text-sm line-through opacity-55">R$139,99</p>
            <p className=" font-medium mb-2">R$99,99</p>
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
