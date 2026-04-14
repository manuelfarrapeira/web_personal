import { Mail, Phone, Linkedin, Github } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "mfarrapeira@hotmail.com",
    href: "mailto:mfarrapeira@hotmail.com",
    accent: "text-primary",
    bg: "bg-primary/10",
    hoverBorder: "hover:border-primary/30",
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "653 800 845",
    href: undefined,
    accent: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    hoverBorder: "hover:border-emerald-500/30",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Manuel Farrapeira Pérez",
    href: "https://www.linkedin.com/in/manuel-farrapeira-pérez-a2b01891/",
    accent: "text-sky-600 dark:text-sky-400",
    bg: "bg-sky-500/10",
    hoverBorder: "hover:border-sky-500/30",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@manuelfarrapeira",
    href: "https://github.com/manuelfarrapeira?tab=repositories",
    accent: "text-foreground",
    bg: "bg-secondary",
    hoverBorder: "hover:border-foreground/20",
  },
]

export function ContactSection() {
  return (
    <section className="pb-16">
      <div className="section-heading">
        <div className="section-icon">
          <Mail className="h-5 w-5 text-primary" />
        </div>
        <h2 className="section-title">Contacto</h2>
      </div>

      <div className="card-elegant p-7 md:p-8">
        <p className="text-foreground/75 leading-relaxed mb-8 text-[1.05rem]">
          ¿Tienes un proyecto en mente o quieres charlar? No dudes en contactarme a través de cualquiera de estos canales:
        </p>

        <div className="grid gap-3 sm:grid-cols-2">
          {contactInfo.map((contact) => {
            const Icon = contact.icon
            const Wrapper = contact.href ? "a" : "div"
            return (
              <Wrapper
                key={contact.label}
                {...(contact.href ? { href: contact.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                className={`group flex items-center gap-4 p-4 rounded-xl border border-border/60 bg-background/50
                  transition-all duration-200 hover:shadow-sm ${contact.hoverBorder}
                  ${contact.href ? "cursor-pointer" : ""}`}
              >
                <div className={`p-3 rounded-xl ${contact.bg} shrink-0 transition-transform duration-200 group-hover:scale-110`}>
                  <Icon className={`h-5 w-5 ${contact.accent}`} />
                </div>
                <div className="min-w-0">
                  <p className="text-xs text-muted-foreground font-medium uppercase tracking-wide">{contact.label}</p>
                  <p className="text-sm font-semibold text-foreground mt-0.5 truncate">{contact.value}</p>
                </div>
              </Wrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}
