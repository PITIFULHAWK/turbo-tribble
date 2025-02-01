import { Search, UserPlus, Car } from 'lucide-react'

const steps = [
  {
    title: "Find a Trip",
    description: "Search for available trips that match your route and schedule.",
    icon: Search
  },
  {
    title: "Connect",
    description: "Reach out to the driver or passengers and arrange the details.",
    icon: UserPlus
  },
  {
    title: "Travel Together",
    description: "Meet up and enjoy a shared, cost-effective journey to your destination.",
    icon: Car
  }
]

export default function HowItWorks() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">How ShareTrip Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-primary text-primary-foreground rounded-full p-3 mb-4">
                <step.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}