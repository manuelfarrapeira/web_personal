import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, Linkedin, Github } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mfarrapeira@hotmail.com",
    href: "mailto:mfarrapeira@hotmail.com",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "653 800 845",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Manuel Farrapeira Pérez",
    href: "https://www.linkedin.com/in/manuel-farrapeira-pérez-a2b01891/",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@manuelfarrapeira",
    href: "https://github.com/manuelfarrapeira?tab=repositories",
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
  },
]

export function ContactSection() {
  return (
    <section className="pb-12">
      <h2 className="text-3xl font-bold tracking-tight mb-6 text-foreground">Contacto</h2>

      <Card className="p-8 shadow-sm hover:shadow-md transition-all border-l-4 border-l-accent/60">
        <p className="text-foreground/80 leading-relaxed mb-8 text-lg">
          ¿Tienes un proyecto en mente o quieres charlar? No dudes en contactarme a través de cualquiera de estos
          canales:
        </p>

        <div className="grid gap-4 sm:grid-cols-2">
          {contactInfo.map((contact) => {
            const Icon = contact.icon
            return (
              <Button
                key={contact.label}
                variant="outline"
                className="justify-start h-auto py-4 px-5 hover:bg-secondary/80 hover:border-primary/30 transition-all hover:shadow-sm bg-transparent"
                asChild
              >
                <a href={contact.href} target="_blank" rel="noopener noreferrer">
                  <div className={`mr-4 p-2.5 rounded-xl ${contact.bgColor} shadow-sm`}>
                    <Icon className={`h-5 w-5 ${contact.color}`} />
                  </div>
                  <div className="text-left">
                    <p className="text-xs text-muted-foreground font-medium">{contact.label}</p>
                    <p className="text-sm font-medium text-foreground mt-0.5">{contact.value}</p>
                  </div>
                </a>
              </Button>
            )
          })}
        </div>
      </Card>
    </section>
  )
}
