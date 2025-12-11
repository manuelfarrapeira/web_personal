import { Card } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

const education = [
  {
    degree: "Curso Programador de Aplicaciones Informáticas",
    institution: "Esgar Victor",
    period: "2010 - 2011",
    description: "Curso intensivo de 980 horas enfocado en programación con PHP, Java y C#.",
    highlights: ["Formación práctica en desarrollo de aplicaciones", "Certificación profesional"],
  },
  {
    degree: "Técnico Superior en Administración de Sistemas Informáticos",
    institution: "I.E.S Teis",
    period: "2001 - 2003",
    description: "Formación técnica superior en administración y gestión de sistemas informáticos.",
    highlights: ["Formación en gestión de sistemas", "Administración de redes"],
  },
]

const certifications: Array<{ name: string; issuer: string; date: string }> = []

export function EducationSection() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <GraduationCap className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Educación</h2>
      </div>

      <div className="space-y-6">
        {education.map((edu, index) => (
          <Card key={index} className="p-8 shadow-sm hover:shadow-md transition-all">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground">{edu.degree}</h3>
                <p className="text-base text-muted-foreground mt-1.5">
                  {edu.institution}
                </p>
              </div>
              <span className="text-sm text-muted-foreground font-medium bg-secondary/50 px-3 py-1 rounded-full">
                {edu.period}
              </span>
            </div>

            <p className="mt-1 text-foreground/80 leading-relaxed">{edu.description}</p>

            {edu.highlights && (
              <ul className="mt-1 space-y-2.5">
                {edu.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground/80">
                    <span className="text-accent mt-1 font-bold">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        ))}

        {certifications.length > 0 && (
          <Card className="p-8 shadow-sm hover:shadow-md transition-all bg-secondary/30">
            <h3 className="text-xl font-semibold text-foreground mb-5">Certificaciones</h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-start justify-between gap-4 pb-4 last:pb-0 border-b last:border-0 border-border/50"
                >
                  <div>
                    <p className="font-medium text-foreground">{cert.name}</p>
                    <p className="text-sm text-muted-foreground mt-1">{cert.issuer}</p>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium bg-background px-2.5 py-1 rounded whitespace-nowrap">
                    {cert.date}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        )}
      </div>
    </section>
  )
}
