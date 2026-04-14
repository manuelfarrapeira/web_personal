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
      const scrollTop = window.scrollY + 100

      let currentSection = "about"
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section) {
          const rect = section.getBoundingClientRect()
          const sectionTop = rect.top + window.scrollY
          if (scrollTop >= sectionTop) {
            currentSection = menuItems[i].id
            break
          }
        }
      }
      setActiveSection(currentSection)
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll()
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/90 backdrop-blur-md border-b border-border/60 shadow-sm"
            : "bg-background/70 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-0 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Iniciales */}
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center shadow-sm">
                <span className="text-xs font-bold text-primary-foreground tracking-wider">MF</span>
              </div>
              <span className="hidden sm:block text-sm font-semibold text-foreground tracking-tight">
                Manuel Farrapeira
              </span>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-0.5">
              {menuItems.map((item) => {
                const Icon = item.icon
                const isActive = activeSection === item.id
                return (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`relative flex items-center gap-2 px-4 py-5 text-sm font-medium cursor-pointer transition-colors duration-200 ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    <Icon className="h-3.5 w-3.5" />
                    <span>{item.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-2 right-2 h-0.5 rounded-full bg-primary" />
                    )}
                  </button>
                )
              })}
            </div>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
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
          className="fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden pt-16"
          onClick={() => setIsOpen(false)}
        >
          <nav className="flex flex-col gap-1 p-6">
            {menuItems.map((item) => {
              const Icon = item.icon
              const isActive = activeSection === item.id
              return (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`flex items-center gap-3 px-4 py-3.5 rounded-xl transition-all cursor-pointer text-left ${
                    isActive
                      ? "bg-primary/10 text-primary font-semibold border border-primary/20"
                      : "text-foreground hover:bg-secondary/60"
                  }`}
                >
                  <Icon className="h-5 w-5 shrink-0" />
                  <span className="font-medium">{item.label}</span>
                  {isActive && <span className="ml-auto w-1.5 h-1.5 rounded-full bg-primary" />}
                </button>
              )
            })}
          </nav>
        </div>
      )}
    </>
  )
}
