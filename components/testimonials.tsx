import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart",
    content:
      "Exceptional work on our SaaS platform. The team delivered beyond our expectations with a modern, scalable solution.",
    rating: 5,
    avatar: "/professional-woman-ceo.webp",
  },
  {
    name: "Michael Chen",
    role: "Founder, E-commerce Plus",
    content:
      "Our Shopify store conversion rates increased by 40% after the redesign. Outstanding attention to detail and user experience.",
    rating: 5,
    avatar: "/professional-man-founder.webp",
  },
  {
    name: "Emily Rodriguez",
    role: "Marketing Director, GrowthCo",
    content:
      "The social media strategy and execution were flawless. Our engagement rates tripled within the first month.",
    rating: 5,
    avatar: "/professional-woman-marketing-director.png",
  },
  {
    name: "David Thompson",
    role: "CTO, InnovateLab",
    content:
      "Clean, efficient code and excellent project management. The custom website perfectly represents our brand.",
    rating: 5,
    avatar: "/professional-man-cto.webp",
  },
  {
    name: "Lisa Wang",
    role: "Product Manager, DataFlow",
    content:
      "Incredible attention to detail and user-centered design. The dashboard interface is intuitive and powerful.",
    rating: 5,
    avatar: "/professional-woman-marketing-director.webp",
  },
  {
    name: "James Miller",
    role: "Startup Founder",
    content: "From concept to launch, the team guided us through every step. Our MVP exceeded investor expectations.",
    rating: 5,
    avatar: "/startup-founder.webp",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 bg-muted/20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients have to say about our work.
          </p>
        </div>

        {/* Bento Grid Layout with Scrolling Animation */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-96 overflow-hidden">
          {/* Column 1 - Scrolling Up */}
          <div className="space-y-6 animate-scroll-up">
            {[...testimonials, ...testimonials].slice(0, 4).map((testimonial, index) => (
              <TestimonialCard key={`col1-${index}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Column 2 - Scrolling Down */}
          <div className="space-y-6 animate-scroll-down hidden md:block">
            {[...testimonials, ...testimonials].slice(2, 6).map((testimonial, index) => (
              <TestimonialCard key={`col2-${index}`} testimonial={testimonial} />
            ))}
          </div>

          {/* Column 3 - Scrolling Up */}
          <div className="space-y-6 animate-scroll-up hidden lg:block">
            {[...testimonials, ...testimonials].slice(4, 8).map((testimonial, index) => (
              <TestimonialCard key={`col3-${index}`} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function TestimonialCard({ testimonial }: { testimonial: (typeof testimonials)[0] }) {
  return (
    <Card className="bg-card border-border p-6">
      <CardContent className="p-0">
        <div className="flex items-center mb-4">
          {[...Array(testimonial.rating)].map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
          ))}
        </div>
        <p className="text-card-foreground mb-4 leading-relaxed">"{testimonial.content}"</p>
        <div className="flex items-center">
          <img
            src={testimonial.avatar || "/placeholder.svg"}
            alt={testimonial.name}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <h4 className="font-semibold text-card-foreground">{testimonial.name}</h4>
            <p className="text-sm text-muted-foreground">{testimonial.role}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
