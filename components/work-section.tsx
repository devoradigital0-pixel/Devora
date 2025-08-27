"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const categories = ["All", "Custom Website", "Shopify", "Social Media", "WordPress"]

const projects = [
  {
    id: 1,
    title: "Local Services Platform",
    description: "platform connecting local service providers with customers.",
    image: "/Hobbiess.png",
    category: "Custom Website",
    tags: ["SaaS Website", "Landing Page", "Stripe"],
    link: "https://www.hobbiies.dk",
  },
  {
    id: 2,
    title: "E-commerce Jewelley Store",
    description: "Complete Shopify store with custom theme and advanced product filtering.",
    image: "/zeesy.png",
    category: "Shopify",
    tags: ["E-commerce", "Fashion", "Custom Theme"],
    link: "https://zeesy.pk/",
  },
  {
    id: 4,
    title: "Social Media Campaign",
    description: "Comprehensive social media strategy and content creation for tech startup.",
    image: "/social-media-campaign.png",
    category: "Social Media",
    tags: ["Strategy", "Content", "Branding"],
    link: "/Social",
  },
  {
    id: 5,
    title: "WordPress Business Site",
    description: "Professional WordPress website with custom plugins and SEO optimization.",
    image: "/wordpress.png",
    category: "WordPress",
    tags: ["WordPress", "Business", "SEO"],
    link: "https://anzayjewellery.com/",
  },
]

export function WorkSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const [currentIndex, setCurrentIndex] = useState(0)

  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  return (
    <section id="work" className="relative py-20">
      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/work.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Content Layer (ensures cards float above video) */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Works</h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Discover Our Most Recent Project Highlights
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              onClick={() => {
                setActiveCategory(category)
                setCurrentIndex(0)
              }}
              className={
                activeCategory === category
                  ? "bg-primary hover:bg-primary/90"
                  : "border-white text-white hover:border-primary hover:text-primary"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className="bg-card/90 backdrop-blur-sm border border-border hover:border-primary/50 transition-all group cursor-pointer"
            >
              <CardContent className="p-0">
                <div className="relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" className="bg-primary hover:bg-primary/90">
                        View Details
                      </Button>
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-card-foreground mb-2">{project.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1">
                    {project.tags.map((tag, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-primary/30 text-primary">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
