import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Líder técnico Java",
    company: "Capitole Consulting",
    period: "Nov. 2022 - Actualidad",
    current: true,
    description:
      "Líder técnico y desarrollador de micro servicios en Inditex en el área de comercial. El proyecto consiste en el desarrollo de una serie de servicios para la gestión de los datos del artículo que proporcionan los proveedores.",
    achievements: [
      "Responsable técnico del proyecto y gestión del equipo",
      "Coordinación de la capa de gestión técnica y diseño de arquitecturas",
      "Gestión de necesidades y requisitos con stakeholders",
      "Coordinación con PO, equipo de QA y desarrollo",
    ],
    technologies: [
      "Docker", "Openshift", "Apache Kafka", "Redis", "Spring Boot",
      "Grafana", "MongoDB", "SonarQube", "JUnit",
    ],
  },
  {
    title: "Analista Programador Java Senior",
    company: "Hotelbeds",
    period: "May. 2022 - Nov. 2022 · 7 meses",
    current: false,
    description:
      "Analista y desarrollador senior en el desarrollo de una serie de micro servicios encargados de comprobar disponibilidad hotelera y reserva de habitaciones en hoteles de todo el mundo.",
    achievements: [
      "Responsable análisis y diseño apis",
      "Desarrollo apis",
    ],
    technologies: [
      "Spring Boot", "Redis", "Apache Kafka", "GCP", "Kubernetes",
      "Helm", "Protobuf", "Grafana", "SonarQube", "JUnit",
    ],
  },
  {
    title: "Analista Programador Java Senior",
    company: "Indra",
    period: "Sept. 2018 - Abr. 2022 · 3 años 8 meses",
    current: false,
    description:
      "Analista programador del software de contabilidad mundial del grupo Inditex. El proyecto consistía en una aplicación de escritorio y micro servicios encargada de consultar la contabilidad a nivel mundial de todas las cadenas de Inditex así como realizar los cierres contables mensuales y anuales de cada país y cadena.",
    achievements: [],
    technologies: [
      "Apache Kafka", "Oracle Database", "DB2", "MongoDB",
      "Spring Boot", "Openshift", "Docker", "Grafana", "SonarQube", "JUnit",
    ],
  },
  {
    title: "Analista Programador Java",
    company: "Optare Solutions",
    period: "Abr. 2018 - Sept. 2018 · 6 meses",
    current: false,
    description: "Analista programador servicios de fibra del grupo MasMovil.",
    achievements: [],
    technologies: ["Java", "Spring Boot", "MuleSoft Anypoint Platform"],
  },
  {
    title: "Java/Lamp Senior Developer",
    company: "SIGA 98",
    period: "Mar. 2011 - Mar. 2018 · 7 años",
    current: false,
    description: "Desarrollador servicios PHP y Java para matriculaciones y transferencias de vehículos en la DGT.",
    achievements: ["Responsable desarrollo web"],
    technologies: ["PHP", "Certificaciones SSL", "Java", "JavaScript"],
  },
  {
    title: "Programador Senior PHP",
    company: "Tu Tienda On Line",
    period: "Nov. 2005 - Nov. 2010 · 5 años",
    current: false,
    description: "Programador web especializado en desarrollo PHP.",
    achievements: ["Desarrollador páginas web"],
    technologies: ["PHP", "JavaScript", "MySQL"],
  },
]

export function ExperienceSection() {
  return (
    <section>
      <div className="section-heading">
        <div className="section-icon">
          <Briefcase className="h-5 w-5 text-primary" />
        </div>
        <h2 className="section-title">Experiencia</h2>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Línea vertical */}
        <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/40 via-border to-transparent hidden sm:block" />

        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="relative flex gap-5 sm:gap-8">
              {/* Dot del timeline */}
              <div className="hidden sm:flex flex-col items-center shrink-0 pt-5 pl-[0.15rem]">
                {exp.current ? (
                  <div className="timeline-dot-current" />
                ) : (
                  <div className="timeline-dot" />
                )}
              </div>

              {/* Card */}
              <div className={`card-elegant flex-1 p-6 md:p-7 ${
                exp.current ? "border-accent/30 shadow-accent/5 shadow-md" : ""
              }`}>
                {exp.current && (
                  <div className="mb-3 inline-flex items-center gap-1.5 rounded-full bg-accent/10 border border-accent/25 px-2.5 py-0.5 text-[0.7rem] font-semibold text-accent uppercase tracking-wide">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    Empleo actual
                  </div>
                )}

                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-foreground leading-snug">{exp.title}</h3>
                    <p className="text-sm font-medium text-muted-foreground mt-1">{exp.company}</p>
                  </div>
                  <span className="shrink-0 text-xs text-muted-foreground font-medium bg-secondary/70 px-3 py-1.5 rounded-full self-start">
                    {exp.period}
                  </span>
                </div>

                <p className="mt-3 text-sm text-foreground/75 leading-relaxed">{exp.description}</p>

                {exp.achievements.length > 0 && (
                  <ul className="mt-3 space-y-1.5">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2.5 text-sm text-foreground/75">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-accent shrink-0" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {exp.technologies.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {exp.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="text-xs font-medium px-2.5 py-0.5 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
