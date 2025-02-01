import Image from 'next/image'

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Regular Commuter",
    content: "ShareTrip has transformed my daily commute. I've saved money and made new friends along the way!",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Michael Chen",
    role: "Weekend Traveler",
    content: "I use ShareTrip for weekend getaways. It's eco-friendly and I always have great conversations during the trips.",
    avatar: "/placeholder.svg?height=100&width=100"
  },
  {
    name: "Emily Rodriguez",
    role: "Student",
    content: "As a student, ShareTrip has been a lifesaver for budget-friendly travel between home and university.",
    avatar: "/placeholder.svg?height=100&width=100"
  }
]

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Image
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  width={50}
                  height={50}
                  className="rounded-full mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}