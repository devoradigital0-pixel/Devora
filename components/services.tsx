import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Code, Globe, ShoppingCart, Share2, Layers, Wrench, Megaphone } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Custom Website Development",
    description: "Bespoke websites built with modern technologies, tailored to your unique business needs.",
    features: ["React/Next.js", "Responsive Design", "Performance Optimized"],
  },
  {
    icon: Wrench,
    title: "Shopify Development",
    description: "Fully Seo optimized Shopify stores with custom themes and seamless user experiences.",
    features: ["Business Strategy", "Branding", "Scaling"],
  },
  {
    icon: Layers,
    title: "SaaS Development",
    description: "Full-stack SaaS applications with scalable architecture and modern user experiences.",
    features: ["AI Integration", "Optimized ideas", "Data security"],
  },
  {
    icon: Megaphone,
    title: "Ads Management",
    description: "Targeted advertising campaigns to maximize your reach across all Social Media platforms.",
    features: ["Instagram", "Facebook", "Tiktok"],
  },
  {
    icon: Share2,
    title: "Social Media Management",
    description: "Comprehensive social media strategies to build your brand and engage your audience.",
    features: ["Content Strategy", "Reels Posting", "Analytics & Reporting"],
  },
  {
    icon: Globe,
    title: "Digital Solutions",
    description: "End-to-end digital transformation services to modernize your business operations.",
    features: ["Digital Strategy", "Process Automation", "Technology Integration"],
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We offer comprehensive digital services to help your business thrive in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-card border-border hover:border-primary/50 transition-colors group">
              <CardHeader>
                <div className="p-3 bg-primary/10 rounded-full w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
                <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-center">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary bg-transparent"
                >
                Contact us               
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
