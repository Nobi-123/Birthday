import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"

export function PhotoGallery() {
  // Replace these with actual photos of you and your girlfriend
  const photos = [
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "A special moment together",
      caption: "Our first date",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Enjoying our favorite place",
      caption: "That amazing vacation",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "A candid shot",
      caption: "When you weren't looking",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "A beautiful memory",
      caption: "Remember this day?",
    },
    {
      src: "/placeholder.svg?height=400&width=600",
      alt: "Us being silly",
      caption: "Just being us",
    },
  ]

  return (
    <Card className="border-2 border-pink-300 shadow-lg">
      <CardContent className="p-6">
        <h2 className="mb-4 text-center font-serif text-2xl font-bold text-pink-600">Our Memories</h2>

        <Carousel className="w-full">
          <CarouselContent>
            {photos.map((photo, index) => (
              <CarouselItem key={index}>
                <div className="p-1">
                  <div className="flex flex-col items-center rounded-lg border-2 border-pink-200 p-2">
                    <div className="relative h-64 w-full overflow-hidden rounded-md sm:h-80">
                      <Image src={photo.src || "/placeholder.svg"} alt={photo.alt} fill className="object-cover" />
                    </div>
                    <p className="mt-2 text-center text-sm font-medium text-gray-700 sm:text-base">{photo.caption}</p>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </CardContent>
    </Card>
  )
}

