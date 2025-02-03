"use client"

import { useState } from "react"
import { useToast } from "@/hooks/use-toast"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Map from "../components/Map"
import TripResults from "../components/Tripresults"

export default function Dashboard() {
  const [trips, setTrips] = useState([])
  const { toast } = useToast()

  const handleFindTrips = async (formData) => {
    // Simulating an API call to fetch trips
    const response = await fetch("/api/trips", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
    const data = await response.json()
    setTrips(data.trips)
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

      if (response.ok) {
        toast({
          title: "Success",
          description: data.message,
        })
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      toast({
        title: "Error",
        description: error.message || "Failed to send trip request",
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
            <Map />
          </div>
          <div className="h-1/2 overflow-auto">
            <TripResults trips={trips} onRequestTrip={handleRequestTrip} />
          </div>
        </main>
      </div>
    </div>
  )
}

