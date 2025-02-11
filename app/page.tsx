import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronRight } from "lucide-react"
import Link from "next/link"
import CountdownTimer from "@/components/countdown-timer"
import { url } from "inspector"

const passes = [
  {
    title: "Silver Pass",
    price: "₹100",
    benefits: [
      "Basic entry",
      "Access to select workshops",
      "Participation certificate",
      "Networking opportunities",
    ],
    icon: "/card1.png",
    bgColor: "bg-gradient-to-r from-gray-500 to-gray-700",
    btnColor: "bg-blue-500",
  },
  {
    title: "Gold Pass",
    price: "₹200",
    benefits: [
      "Priority entry",
      "Access to all workshops",
      "Exclusive tech talks",
      "Premium networking",
    ],
    icon: "/card2.png",
    bgColor: "bg-gradient-to-r from-yellow-500 to-yellow-700",
    btnColor: "bg-purple-500",
  },
  {
    title: "Platinum Pass",
    price: "₹300",
    benefits: [
      "VIP access",
      "Exclusive networking",
      "Personalized sessions",
      "Access to all events",
    ],
    icon: "/card1.png",
    bgColor: "bg-gradient-to-r from-purple-500 to-purple-700",
    btnColor: "bg-yellow-500",
  },
];
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-[90vh] border-b overflow-hidden">
        {/* Background Video */}
        <div className="absolute inset-0 w-full h-full">
          <video className="w-full h-full object-cover" autoPlay muted loop playsInline>
            <source src="/back.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-black/50" />
        </div>

        {/* Content */}
        <div className="container px-4 md:px-6 space-y-8 relative z-10 text-white">
          <div className="flex flex-col items-center space-y-4 text-center">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-500 pb-2">
              CYNOSURE 2024
            </h1>
            <p className="text-xl md:text-2xl max-w-[600px] mx-auto">Let the Innovation Begin</p>
            <CountdownTimer targetDate="2024-03-15T00:00:00" />
            <Button size="lg" asChild className="mt-8">
              <Link href="/events">
                Explore Events <ChevronRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <div className="container px-4 md:px-6 text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">About Cynosure</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Cynosure 2024 is a celebration of innovation and creativity, bringing together tech enthusiasts and cultural aficionados.
            Join us for an unforgettable experience of workshops, competitions, and cultural extravaganzas.
          </p>
        </div>
      </section>

      {/* Event Timeline */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Event Timeline</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[{
              phase: "Day 1 - Tech Events",
              title: "Workshops & Competitions",
              description: "Engage in coding, AI, and cybersecurity challenges."
            }, {
              phase: "Day 2 - Non-Tech Events",
              title: "Cultural & Fun Activities",
              description: "Enjoy music, dance, and creative workshops."
            }].map((item, index) => (
              <Card key={index} className="bg-white/10 backdrop-blur-lg h-64 rounded-lg border border-white/20 transition-transform transform hover:scale-105">
                <CardContent className="p-6 text-center flex flex-col justify-center">
                  <div className="text-white font-bold mb-2 text-lg">{item.phase}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Passes Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Event Passes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {passes.map((pass, index) => (
              <Card
                key={index}
                // style={{background:`url(/vip.png)`,backgroundSize:'cover'}}
                className={`relative p-6 text-white rounded-lg shadow-lg flex flex-col items-center overflow-hidden transform transition-transform hover:scale-105 ${pass.bgColor}`}
              >
                <div className="absolute top-4 right-4 px-3 py-1 bg-white text-black rounded-full text-sm font-semibold">{pass.price}</div>
                <div className="text-5xl mb-4"><img src={pass.icon} className="h-[200px]" alt="" /></div>
                <h3 className="text-2xl font-semibold mb-4">{pass.title}</h3>
                <ul className="text-gray-100 space-y-1 text-center">
                  {pass.benefits.map((benefit, i) => (
                    <li key={i}>✔ {benefit}</li>
                  ))}
                </ul>
                <button className={`mt-6 px-6 py-2 text-white rounded-lg transition-colors ${pass.btnColor} hover:opacity-80`}>
                  Get the Pass
                </button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6  text-white text-center">
        <p>Cynosure 2024 &copy; All rights reserved.</p>
      </footer>
    </main>
  )
}
