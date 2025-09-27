"use client"

import { useState, useEffect } from "react"
import { BrowserRouter as Router } from "react-router-dom"
import { Heart, Music, Gift, Camera } from "lucide-react"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"
import { Button } from "./components/ui/button"
import { Card, CardContent } from "./components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs"
import { SpotifyPlayer } from "./components/SpotifyPlayer"
import { PhotoGallery } from "./components/PhotoGallery"
import { PersonalMessage } from "./components/PersonalMessage"
import "./App.css"

function App() {
  const [showConfetti, setShowConfetti] = useState(false)
  const { width, height } = useWindowSize()
  const [hasEntered, setHasEntered] = useState(false)

  useEffect(() => {
    if (hasEntered) {
      setShowConfetti(true)
      const timer = setTimeout(() => setShowConfetti(false), 10000)
      return () => clearTimeout(timer)
    }
  }, [hasEntered])

  if (!hasEntered) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-r from-pink-100 to-violet-100 p-4">
        <Card className="w-full max-w-md border-2 border-pink-300 shadow-lg">
          <CardContent className="p-6 text-center">
            <Heart className="mx-auto mb-4 h-16 w-16 text-pink-500" />
            <h1 className="mb-6 text-2xl font-bold text-gray-800">A Special Surprise Awaits You...</h1>
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
              onClick={() => setHasEntered(true)}
            >
              Open Your Gift
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-r from-pink-100 to-violet-100 p-4 sm:p-8">
        {showConfetti && <Confetti width={width} height={height} recycle={false} />}

        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="animate-bounce mb-2 font-serif text-4xl font-bold text-pink-600 sm:text-6xl">
              Happy Birthday!
            </h1>
            <p className="text-md animate-pulse mb-6 text-violet-700 sm:text-lg">
              To the most amazing person in my world ❤️
            </p>
            <Button
              onClick={() => setShowConfetti(true)}
              className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600"
            >
              <Gift className="mr-2 h-4 w-4" /> More Confetti!
            </Button>
          </div>

          <Tabs defaultValue="message" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="message" className="flex items-center gap-2">
                <Heart className="h-4 w-4" /> Message
              </TabsTrigger>
              <TabsTrigger value="photos" className="flex items-center gap-2">
                <Camera className="h-4 w-4" /> Photos
              </TabsTrigger>
              <TabsTrigger value="music" className="flex items-center gap-2">
                <Music className="h-4 w-4" /> Music
              </TabsTrigger>
            </TabsList>

            <TabsContent value="message">
              <PersonalMessage />
            </TabsContent>

            <TabsContent value="photos">
              <PhotoGallery />
            </TabsContent>

            <TabsContent value="music">
              <SpotifyPlayer />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Router>
  )
}

export default App

