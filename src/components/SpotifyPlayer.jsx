"use client"

import { useState } from "react"
import { Card, CardContent } from "./ui/card"
import { Button } from "./ui/button"
import { ScrollArea } from "./ui/scroll-area"
import { Music, Play, Pause, SkipForward } from "lucide-react"

export function SpotifyPlayer() {
  const [isConnectedToSpotify, setIsConnectedToSpotify] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  // This is a placeholder playlist - in a real implementation you would need to
  // authenticate with Spotify and use their API
  const playlist = [
    { title: "Your Favorite Song", artist: "Your Favorite Artist" },
    { title: "That Song We Danced To", artist: "Great Band" },
    { title: "The One That Makes You Smile", artist: "Amazing Singer" },
    { title: "Our Road Trip Anthem", artist: "Cool Artist" },
    { title: "The One From Our First Date", artist: "Romantic Band" },
  ]

  const handleConnectSpotify = () => {
    // In a real implementation, this would redirect to Spotify OAuth
    setIsConnectedToSpotify(true)
  }

  return (
    <Card className="border-2 border-pink-300 shadow-lg">
      <CardContent className="p-6">
        <h2 className="mb-4 text-center font-serif text-2xl font-bold text-pink-600">Music For You</h2>

        {!isConnectedToSpotify ? (
          <div className="flex flex-col items-center space-y-4 p-4">
            <Music className="h-16 w-16 text-pink-500" />
            <p className="text-center text-gray-700">
              Connect to Spotify to play a special playlist I created just for you!
            </p>
            <Button onClick={handleConnectSpotify} className="bg-[#1DB954] hover:bg-[#1aa34a]">
              Connect to Spotify
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div className="rounded-md bg-gradient-to-r from-violet-200 to-pink-200 p-4">
              <h3 className="mb-2 font-semibold text-gray-800">Birthday Playlist For You ❤️</h3>
              <p className="text-sm text-gray-600">
                A collection of songs that remind me of you and our special moments
              </p>
            </div>

            <ScrollArea className="h-48 rounded-md border border-pink-200 p-2">
              <div className="space-y-2 pr-3">
                {playlist.map((song, index) => (
                  <div
                    key={index}
                    className="flex cursor-pointer items-center justify-between rounded-lg p-2 hover:bg-pink-50"
                    onClick={() => setIsPlaying(true)}
                  >
                    <div>
                      <p className="font-medium text-gray-800">{song.title}</p>
                      <p className="text-sm text-gray-600">{song.artist}</p>
                    </div>
                    <Play className="h-4 w-4 text-gray-700" />
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="mt-4 flex items-center justify-between rounded-lg bg-pink-100 p-3">
              <div className="flex-1">
                <p className="font-medium text-gray-800">Now Playing</p>
                <p className="text-sm text-gray-600">{isPlaying ? playlist[0].title : "Select a song"}</p>
              </div>
              <div className="flex space-x-2">
                <Button size="icon" variant="ghost" onClick={() => setIsPlaying(!isPlaying)}>
                  {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
                </Button>
                <Button size="icon" variant="ghost">
                  <SkipForward className="h-5 w-5" />
                </Button>
              </div>
            </div>

            <p className="text-center text-xs text-gray-500">
              Note: This is a demo player. To play actual Spotify music, you would need to implement Spotify Web
              Playback SDK with proper authentication.
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}

