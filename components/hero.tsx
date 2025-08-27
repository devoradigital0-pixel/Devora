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

  const socialLinks = [
    { name: "Instagram", url: "https://www.instagram.com/devora._dev/" },
    { name: "Whatsapp", url: "https://wa.link/6m6z0c" },
    { name: "Facebook", url: "https://www.facebook.com/profile.php?id=61579972828086" },
  ]

  return (
    <BackgroundBeamsWithCollision className="h-full flex items-center justify-center relative pt-24">
      {/* Social Media Links - Desktop (Right Side) */}
      <div className="hidden lg:flex fixed right-8 top-1/2 transform -translate-y-1/2 z-30 ">
        <div className="flex flex-col gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide transform rotate-180"
              style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
            >
              {social.name}
            </a>
          ))}
        </div>
      </div>

      <div className="relative z-20 px-6 max-w-7xl mx-auto w-full ">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-foreground mb-6">
              Not Just Websites
              <span className="block bg-gradient-to-r from-lime-300 to-blue-400 bg-clip-text text-4xl text-transparent">
                Clean Design. Custom Tech. Real Results.
              </span>
            </h1>

            <p className="text-lg md:text-2xl text-muted-foreground mb-10 max-w-2xl lg:max-w-none">
              From custom websites to SaaS development, we craft digital experiences that help your business grow, scale, and stand out.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
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

            {/* Social Media Links - Mobile (Below Buttons) */}
            <div className="lg:hidden flex justify-center gap-6 pt-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors duration-300 text-sm font-medium tracking-wide"
                >
                  {social.name}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side - Hero Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg">
              <img
                src="/hero.png"
                alt="Hero illustration"
                className="w-full h-auto rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </BackgroundBeamsWithCollision>
  )
}