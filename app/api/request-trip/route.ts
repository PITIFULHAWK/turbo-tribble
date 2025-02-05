import { NextResponse } from "next/server"

export async function POST() {

  // Simulate processing delay
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Mock successful request
  const success = Math.random() > 0.1 // 90% success rate

  if (success) {
    return NextResponse.json({ message: "Trip request sent successfully" })
  } else {
    return NextResponse.json({ message: "Failed to send trip request" }, { status: 500 })
  }
}

