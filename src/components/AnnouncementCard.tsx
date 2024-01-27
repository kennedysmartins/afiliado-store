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

//create type data structure
type cardType = {
  data : {
    cardTitle: string
    description: string
    footer: string
    url: string
  }
}

export default function AnnouncementCard({data}:cardType) {
  const { cardTitle, description, footer, url } = data
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
          <Link href={url} target="_blank">
          <Button>{footer}</Button>
          </Link> 
        </CardFooter>
      </Card>
    </div>
  )
}
