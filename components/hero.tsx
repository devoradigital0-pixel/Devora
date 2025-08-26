"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision"

export function Hero() {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <BackgroundBeamsWithCollision className="h-screen flex items-center justify-center ">
      <div className="relative  z-20 text-center px-6 max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground mb-6">
          Not Just Websites
          <span className="block bg-gradient-to-r from-lime-300 to-blue-400 bg-clip-text text-4xl text-transparent">
            Clean Design. Custom Tech. Real Results.
          </span>
        </h1>

        <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          From custom websites to SaaS development, we craft digital experiences that help your business grow, scale, and stand out.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-lg px-6 py-3"
            onClick={() => handleScroll("work")}
          >
            View Our Work
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            className="border-secondary text-primary hover:bg-secondary hover:text-white bg-transparent text-lg px-6 py-3"
            onClick={() => handleScroll("contact")}
          >
            Get Started
          </Button>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  )
}
