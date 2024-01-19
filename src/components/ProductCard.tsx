"use client"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function ProductCard() {
  return (
    <div>
      <Card className="w-96 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300">
        <CardHeader className="relative">
          <img
            src="https://http2.mlstatic.com/D_NQ_NP_881016-MLM51559383738_092022E-O.webp"
            alt="Product Image"
            className="w-full h-48 bg-contain bg-center object-contain bg-white rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="p-4">
          <CardTitle className="text-xl font-semibold mb-2">
            Product Title
          </CardTitle>
          <CardDescription className="mb-4">
            Product Description goes here. Provide a brief overview of the
            product.
          </CardDescription>
          <p className="text-gray-700 mb-2">$99.99</p>
        </CardContent>
        <CardFooter className="p-4 ">
          <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg">
            Pegar Promo
          </button>
        </CardFooter>
      </Card>
    </div>
  )
}
