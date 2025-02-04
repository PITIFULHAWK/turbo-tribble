"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import TripResults from "../components/TripResults"
// Ensure this component exists and is correctly imported

interface Trip {
  id: string
  from: string
  to: string
  date: string
  time: string
  userType: "rider" | "pillion"
}

interface FormData {
  fromLocation: string
  toLocation: string
  date: string
  time: string
  userType: "rider" | "pillion"
}

export default function Dashboard() {
  const [trips, setTrips] = useState<Trip[]>([])
  const { toast } = useToast()

  const handleFindTrips = async (formData: FormData) => {
    try {
      const response = await fetch("/api/trips", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error("Failed to fetch trips")
      }

      const data = await response.json()
      setTrips(data.trips || []) // Ensure we don't set `undefined`
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Something went wrong",
        variant: "destructive",
      })
    }
  }

  const handleRequestTrip = async (tripId: string) => {
    try {
      const response = await fetch("/api/request-trip", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ tripId }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || "Failed to send trip request")
      }

      toast({
        title: "Success",
        description: data.message,
      })
    } catch (error) {
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Failed to send trip request",
        variant: "destructive",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <Header />
      <div className="flex flex-1">
        <Sidebar onFindTrips={handleFindTrips} />
        <main className="flex-1 p-4 flex flex-col">
          <div className="h-1/2 mb-4">
          </div>
          <div className="h-1/2 overflow-auto">
            <TripResults trips={trips} onRequestTrip={handleRequestTrip} />
          </div>
        </main>
      </div>
    </div>
  )
}
