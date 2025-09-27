import { Card, CardContent } from "@/components/ui/card"

export function PersonalMessage() {
  return (
    <Card className="border-2 border-pink-300 shadow-lg">
      <CardContent className="p-6 text-center">
        <h2 className="mb-4 font-serif text-2xl font-bold text-pink-600">A Special Message For You</h2>
        <div className="space-y-4 text-left">
          <p className="text-gray-700">
            On your special day, I want you to know how much you mean to me. Your smile brightens my days, and your
            laughter fills my heart with joy.
          </p>
          <p className="text-gray-700">
            This past year with you has been incredible. From our adventures together to our quiet moments, every second
            has been a treasure.
          </p>
          <p className="text-gray-700">
            I created this little website as a token of my love and appreciation for you. I hope it brings a smile to
            your face, just as you bring happiness to mine every day.
          </p>
          <p className="font-medium text-pink-600">
            Happy birthday, my love! Here's to many more wonderful years together.
          </p>
          <p className="text-right text-lg font-semibold text-gray-800">With all my love ❤️</p>
        </div>
      </CardContent>
    </Card>
  )
}

