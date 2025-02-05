"use client"

import { useState } from "react"
import { useToast } from "../../hooks/use-toast"
import Header from "../components/Header"
import Sidebar from "../components/Sidebar"
import Map from "../components/Map"
import TripResults from "../components/Tripresults"

export default function Dashboard() {
  const [trips, setTrips] = useState([])
  const { toast } = useToast()
  const handleFindTrips = async (formData : any) => {
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
      });
  
      const data = await response.json();
  
      if (response.ok) {
        toast({
          title: "Success",
          description: data.message,
        });
      } else {
        throw new Error(data.message || "An error occurred");
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : "Failed to send trip request";
      
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    }
  };
  

export default function dashboard(){
  return (
    <Dashboard/>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> master
