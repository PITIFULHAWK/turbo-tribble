"use client"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const Hero = () => {
  

  return (
    <section className="bg-gradient-to-r from-primary to-primary-foreground text-white py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Share Your Ride, Share the Journey</h1>
          <p className="text-xl mb-8">Connect with fellow travelers and make your trips more affordable and enjoyable.</p>
          <Link href="/auth">
          <Button size="lg" variant="secondary">
            Get Started
          </Button>
          </Link>
        </div>
        <div className="md:w-1/2">
        </div>
      </div>
    </section>
  )
}

export default Hero