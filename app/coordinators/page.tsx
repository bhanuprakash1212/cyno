import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const coordinators = [
  {
    name: "Alex Johnson",
    role: "Technical Head",
    contact: "tech@cynosure.com",
    events: ["Hackathon", "Project Expo"],
  },
  {
    name: "Sarah Williams",
    role: "Event Coordinator",
    contact: "events@cynosure.com",
    events: ["Tech Quiz", "Workshops"],
  },
  {
    name: "Michael Chen",
    role: "Security Lead",
    contact: "security@cynosure.com",
    events: ["CTF Challenge", "Security Workshop"],
  },
  {
    name: "Emily Brown",
    role: "PR & Marketing",
    contact: "pr@cynosure.com",
    events: ["Sponsorship", "Social Media"],
  },
]

export default function CoordinatorsPage() {
  return (
    <main className="flex min-h-screen flex-col py-12">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center mb-12">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Event Coordinators</h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground">
            Meet our team of dedicated coordinators who make Cynosure possible
          </p>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {coordinators.map((coordinator, index) => (
            <Card key={index} className="bg-background/50 backdrop-blur">
              <CardHeader className="flex items-center text-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarImage src={`/placeholder.svg?text=${coordinator.name.charAt(0)}`} />
                  <AvatarFallback>{coordinator.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <div>
                  <h3 className="text-lg font-semibold">{coordinator.name}</h3>
                  <p className="text-sm text-pink-500">{coordinator.role}</p>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="text-sm">
                    <span className="text-muted-foreground">Contact: </span>
                    <span>{coordinator.contact}</span>
                  </div>
                  <div className="text-sm">
                    <span className="text-muted-foreground">Events: </span>
                    <span>{coordinator.events.join(", ")}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

