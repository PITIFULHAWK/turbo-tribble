import { Shield, Users, Banknote } from 'lucide-react'

const benefits = [
  {
    title: "Safe and Secure",
    description: "Our platform ensures your safety with verified users and secure payment systems.",
    icon: Shield
  },
  {
    title: "Community-Driven",
    description: "Join a friendly community of travelers and make new connections on your journeys.",
    icon: Users
  },
  {
    title: "Cost-Effective",
    description: "Save money on your trips by sharing the cost of travel with other passengers.",
    icon: Banknote
  }
]

export default function Benefits() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose ShareTrip</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="bg-primary text-primary-foreground rounded-full p-3 mb-4">
                <benefit.icon size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}