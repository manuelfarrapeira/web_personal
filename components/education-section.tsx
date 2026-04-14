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
    <section>
      <div className="section-heading">
        <div className="section-icon">
          <GraduationCap className="h-5 w-5 text-primary" />
        </div>
        <h2 className="section-title">Educación</h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent hidden sm:block" />

        <div className="space-y-6">
          {education.map((edu, index) => (
            <div key={index} className="relative flex gap-5 sm:gap-8">
              <div className="hidden sm:flex flex-col items-center shrink-0 pt-5 pl-[0.15rem]">
                <div className="timeline-dot" />
              </div>

              <div className="card-elegant flex-1 p-6 md:p-7">
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground leading-snug">{edu.degree}</h3>
                    <p className="text-sm font-medium text-muted-foreground mt-1">{edu.institution}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground font-medium bg-secondary/70 px-3 py-1.5 rounded-full self-start">
                    {edu.period}
                  </span>
                </div>

                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{edu.description}</p>

                {edu.highlights && (
                  <ul className="mt-3 space-y-1.5">
                    {edu.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/75">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {certifications.length > 0 && (
        <div className="mt-6 card-elegant p-7">
          <h3 className="text-base font-semibold text-foreground mb-4">Certificaciones</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-start justify-between gap-4 pb-4 last:pb-0 border-b last:border-0 border-border/50"
              >
                <div>
                  <p className="font-medium text-foreground text-sm">{cert.name}</p>
                  <p className="text-xs text-muted-foreground mt-1">{cert.issuer}</p>
                </div>
                <span className="text-xs text-muted-foreground font-medium bg-secondary/70 px-2.5 py-1 rounded whitespace-nowrap">
                  {cert.date}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
