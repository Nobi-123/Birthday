import { Card, CardContent } from "./ui/card"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel"

export function PhotoGallery() {
  // Replace these with actual photos of you and your girlfriend
  const photos = [
    {
      src: "https://via.placeholder.com/600x400/FFB6C1/FFFFFF?text=Special+Moment",
      alt: "A special moment together",
      caption: "Our first date",
    },
    {
      src: "https://via.placeholder.com/600x400/B0C4DE/FFFFFF?text=Amazing+Vacation",
      alt: "Enjoying our favorite place",
      caption: "That amazing vacation",
    },
    {
      src: "https://via.placeholder.com/600x400/FFE4E1/FFFFFF?text=Candid+Shot",
      alt: "A candid shot",
      caption: "When you weren't looking",
    },
    {
      src: "https://via.placeholder.com/600x400/E6E6FA/FFFFFF?text=Beautiful+Memory",
      alt: "A beautiful memory",
      caption: "Remember this day?",
    },
    {
      src: "https://via.placeholder.com/600x400/FFF0F5/FFFFFF?text=Just+Being+Us",
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
                      <img
                        src={photo.src || "/placeholder.svg"}
                        alt={photo.alt}
                        className="h-full w-full object-cover"
                      />
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

