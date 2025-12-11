"use client"

import { useState, useEffect } from "react"
import { User, Briefcase, GraduationCap, Code2, Mail, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const menuItems = [
  { id: "about", label: "Sobre mí", icon: User },
  { id: "experience", label: "Experiencia", icon: Briefcase },
  { id: "education", label: "Educación", icon: GraduationCap },
  { id: "skills", label: "Habilidades", icon: Code2 },
  { id: "contact", label: "Contacto", icon: Mail },
]

export function NavigationMenu() {
  const [activeSection, setActiveSection] = useState("about")
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)

      const sections = menuItems.map((item) => document.getElementById(item.id))
      const scrollTop = window.scrollY + 100 // Small offset from top
      
      let currentSection = "about"

      // Check sections from bottom to top
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY
          
          // If we've scrolled past the start of this section
          if (scrollTop >= sectionTop) {
            currentSection = menuItems[i].id
            break
          }
        }
      }
      
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Call once to set initial state
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.offsetTop - offset
      window.scrollTo({ top: elementPosition, behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm transition-shadow duration-300 ${
          isScrolled ? "shadow-md" : ""
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-4 md:px-8 lg:px-12">
          <div className="flex items-center justify-between md:justify-center">
            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-1">
              {menuItems.map((item) => {
                const Icon = item.icon
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all font-medium cursor-pointer ${
                      activeSection === item.id
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    <span className="text-sm">{item.label}</span>
                  </button>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="outline"
              size="icon"
              className="md:hidden bg-transparent ml-auto"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden pt-20"
          onClick={() => setIsOpen(false)}
        >
          <nav className="flex flex-col gap-2 p-6">
            {menuItems.map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 px-5 py-3 rounded-lg transition-all cursor-pointer ${
                    activeSection === item.id
                      ? "bg-primary text-primary-foreground shadow-md"
                      : "bg-secondary/50 text-foreground hover:bg-secondary/80"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span className="font-medium">{item.label}</span>
                </button>
              )
            })}
          </nav>
        </div>
      )}
    </>
  )
}
