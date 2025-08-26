"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import clsx from "clsx"
import { it } from "node:test"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "Services", href: "#services" },
    { name: "Work", href: "#work" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={clsx(
        "fixed left-1/2 -translate-x-1/2 z-50 transition-all duration-500 ease-in-out backdrop-blur-md border-b-accent border",
        scrolled
          ? "bg-background/90 shadow-lg mt-3 w-[80%] md:w-[60%] rounded-4xl py-2 border-border"
          : "bg-background/50 w-full py-5 border-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center transition-all duration-300">

          {/* Left: Logo */}
          <div className="flex-shrink-0 transition-all duration-300">
            <h1
              className={clsx(
                "font-bold text-primary transition-all duration-300",
                scrolled ? "text-lg" : "text-2xl"
              )}
            >
              Devora.
            </h1>
          </div>

          {/* Center: Navigation (Desktop) */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors text-sm font-medium"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Right: Contact Button */}
          <div className="hidden md:block">
          <a href={navItems[4].href = "#contact"}>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 transition-all duration-300 rounded-full px-5">
              Book a Call
            </Button>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden text-primary">
            <Button variant="ghost" size="sm" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-card rounded-b-2xl border-t border-border">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <Button className="w-full mt-4 bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full">
              Book a Call
            </Button>
          </div>
        </div>
      )}
    </nav>
  )
}
