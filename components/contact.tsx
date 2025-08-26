"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react"
import emailjs from "@emailjs/browser"

export function Contact() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)
    setSuccess(false)
    setError(false)

    const form = e.currentTarget
    const formData = new FormData(form)

    const data = {
      name: `${formData.get("firstName")} ${formData.get("lastName")}`,
      email: formData.get("email"),
      service: formData.get("service"),
      message: formData.get("message"),
      time: new Date().toLocaleString(),
    }

    emailjs
      .send("service_dymp787", "template_9hem2cm", data, "2GYrLmGDFRSKSyWvn")
      .then(
        () => {
          setLoading(false)
          setSuccess(true)
          form.reset()
        },
        () => {
          setLoading(false)
          setError(true)
        }
      )
  }

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-6">Let's Start a Conversation</h3>
                <p className="text-muted-foreground mb-8">
                  We're here to help you transform your ideas into digital reality. Reach out to us through any of the
                  channels below.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <a
                      href="mailto:devoradigital0@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      devoradigital0@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+92-314-0632742</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="p-3 bg-primary/10 rounded-full mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Millat road, Faisalabad, Pakistan</p>
                  </div>
                </div>
              </div>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">Send us a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-2 block">First Name</label>
                    <Input name="firstName" placeholder="John" className="bg-background border-border" required />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-card-foreground mb-2 block">Last Name</label>
                    <Input name="lastName" placeholder="Doe" className="bg-background border-border" required />
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">Email</label>
                  <Input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="bg-background border-border"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">Service Interested In</label>
                  <select
                    name="service"
                    className="w-full p-3 bg-background border border-border rounded-md text-foreground">
                    <option>Custom Website Development</option>
                    <option>SaaS Development</option>
                    <option>Shopify Store</option>
                    <option>Social Media Management</option>
                    <option>Selling Services</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="text-sm font-medium text-card-foreground mb-2 block">Message</label>
                  <Textarea
                    name="message"
                    placeholder="Tell us about your project..."
                    className="bg-background border-border min-h-32"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-secondary text-secondary-foreground hover:bg-secondary/90"
                  disabled={loading}
                >
                  {loading ? "Sending..." : "Send Message"}
                  {!loading && <Send className="ml-2 h-4 w-4" />}
                </Button>

                {/* Success / Error Messages */}
                {success && (
                  <div className="flex items-center justify-center text-green-600 mt-4">
                    <CheckCircle2 className="mr-2 h-5 w-5" />
                    <span>Message sent successfully!</span>
                  </div>
                )}
                {error && (
                  <div className="flex items-center justify-center text-red-600 mt-4">
                    <span>Something went wrong. Please try again.</span>
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
