import { NextResponse } from "next/server"

export async function POST(request: Request) {
  const body = await request.json()

  // Simulate database query delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock trip data with distance
  const trips = [
    {
      id: "1",
      from: body.fromLocation,
      to: body.toLocation,
      date: body.date,
      time: body.time,
      driver: "John Doe",
      price: 25.5,
      distance: 15.3,
    },
    {
      id: "2",
      from: body.fromLocation,
      to: body.toLocation,
      date: body.date,
      time: body.time,
      driver: "Jane Smith",
      price: 30.0,
      distance: 18.7,
    },
    {
      id: "3",
      from: body.fromLocation,
      to: body.toLocation,
      date: body.date,
      time: body.time,
      driver: "Bob Johnson",
      price: 22.75,
      distance: 12.9,
    },
  ]

  return NextResponse.json({ trips })
}

