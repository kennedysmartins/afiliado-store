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

//create type data structure
type cardType = {
  data : {
    cardTitle: string
    description: string
    footer: string
  }
}

export default function AnnouncementCard({data}:cardType) {
  const { cardTitle, description, footer } = data
  return (
    <div>
      <Card className="w-72 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition duration-300  ">
        <CardContent className="p-4">
          <CardTitle className="text-xl font-semibold mb-2 text-center">
            {cardTitle}
          </CardTitle>
          <CardDescription className="text-center">
            {description}
          </CardDescription>
        </CardContent>
        <CardFooter className="p-4 flex justify-center items-center">
          <Button>{footer}</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
