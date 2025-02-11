import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const events = [
  {
    title: "Hackathon",
    description: "24-hour coding challenge to solve real-world problems",
    category: "Technical",
    prize: "₹50,000",
  },
  {
    title: "CTF Challenge",
    description: "Test your cybersecurity skills in this capture the flag event",
    category: "Security",
    prize: "₹30,000",
  },
  {
    title: "Tech Quiz",
    description: "Battle of knowledge in technology and current affairs",
    category: "Quiz",
    prize: "₹20,000",
  },
  {
    title: "Project Expo",
    description: "Showcase your innovative projects to industry experts",
    category: "Exhibition",
    prize: "₹40,000",
  },
]

export default function EventsPage() {
  return (
    <main className="flex min-h-screen flex-col py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Events</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Participate in our exciting range of technical events and showcase your skills
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {events.map((event, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur">
              <CardHeader>
                <CardTitle>{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">{event.description}</p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Category:</span>
                      <span className="font-medium">{event.category}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Prize Pool:</span>
                      <span className="font-medium">{event.prize}</span>
                    </div>
                  </div>
                  <Button className="w-full" asChild>
                    <Link href="#">Register Now</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

