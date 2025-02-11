"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    }

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate]) // Added targetDate to dependencies

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <Card key={unit} className="bg-background/50 backdrop-blur">
          <CardContent className="p-4 text-center">
            <div className="text-3xl md:text-4xl font-bold">{value}</div>
            <div className="text-xs md:text-sm text-muted-foreground capitalize">{unit}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

