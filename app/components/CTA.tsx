import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section className="py-20 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Start Sharing Your Journey?</h2>
        <p className="mb-8 text-lg">Join ShareTrip today and experience a new way of traveling.</p>
        <Button size="lg" variant="secondary">Sign Up Now</Button>
      </div>
    </section>
  )
}