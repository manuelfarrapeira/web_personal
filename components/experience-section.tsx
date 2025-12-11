import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase } from "lucide-react"

const experiences = [
  {
    title: "Líder técnico Java",
    company: "Capitole Consulting",
    period: "Nov. 2022 - Actualidad",
    description:
      "Líder técnico y desarrollador de micro servicios en Inditex en el área de comercial. El proyecto consiste en el desarrollo de una serie de servicios para la gestión de los datos del artículo que proporcionan los proveedores.",
    achievements: [
      "Responsable técnico del proyecto y gestión del equipo",
      "Coordinación de la capa de gestión técnica y diseño de arquitecturas",
      "Gestión de necesidades y requisitos con stakeholders",
      "Coordinación con PO, equipo de QA y desarrollo",
    ],
    technologies: [
      "Docker",
      "Openshift",
      "Apache Kafka",
      "Redis",
      "Spring Boot",
      "Grafana",
      "MongoDB",
      "SonarQube",
      "JUnit",
    ],
  },
  {
    title: "Analista Programador Java Senior",
    company: "Hotelbeds",
    period: "May. 2022 - Nov. 2022 · 7 meses",
    description:
      "Analista y desarrollador senior en el desarrollo de una serie de micro servicios encargados de comprobar disponibilidad hotelera y reserva de habitaciones en hoteles de todo el mundo.",
    achievements: [
      "Responsable análisis y diseño apis",
      "Desarrollo apis",
    ],
    technologies: [
      "Spring Boot",
      "Redis",
      "Apache Kafka",
      "GCP",
      "Kubernetes",
      "Helm",
      "Protobuf",
      "Grafana",
      "SonarQube",
      "JUnit",
    ],
  },
  {
    title: "Analista Programador Java Senior",
    company: "Indra",
    period: "Sept. 2018 - Abr. 2022 · 3 años 8 meses",
    description:
      "Analista programador del software de contabilidad mundial del grupo Inditex. El proyecto consistía en una aplicación de escritorio y micro servicios encargada de consultar la contabilidad a nivel mundial de todas las cadenas de Inditex así como realizar los cierres contables mensuales y anuales de cada país y cadena.",
    achievements: [],
    technologies: [
      "Apache Kafka",
      "Oracle Database",
      "DB2",
      "MongoDB",
      "Spring Boot",
      "Openshift",
      "Docker",
      "Grafana",
      "SonarQube",
      "JUnit",
    ],
  },
  {
    title: "Analista Programador Java",
    company: "Optare Solutions",
    period: "Abr. 2018 - Sept. 2018 · 6 meses",
    description: "Analista programador servicios de fibra del grupo MasMovil.",
    achievements: [],
    technologies: ["Java", "Spring Boot", "MuleSoft Anypoint Platform"],
  },
  {
    title: "Java/Lamp Senior Developer",
    company: "SIGA 98",
    period: "Mar. 2011 - Mar. 2018 · 7 años",
    description: "Desarrollador servicios PHP y Java para matriculaciones y transferencias de vehículos en la DGT.",
    achievements: ["Responsable desarrollo web"],
    technologies: ["PHP", "Certificaciones SSL", "Java", "JavaScript"],
  },
  {
    title: "Programador Senior PHP",
    company: "Tu Tienda On Line",
    location: "Remoto",
    period: "Nov. 2005 - Nov. 2010 · 5 años",
    description: "Programador web especializado en desarrollo PHP.",
    achievements: ["Desarrollador páginas web"],
    technologies: ["PHP", "JavaScript", "MySQL"],
  },
]

export function ExperienceSection() {
  return (
    <section className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Briefcase className="h-6 w-6 text-primary" />
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Experiencia</h2>
      </div>

      <div className="space-y-6">
        {experiences.map((exp, index) => (
          <Card key={index} className="p-8 shadow-sm hover:shadow-md transition-all hover:border-primary/20">
            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                <p className="text-base text-muted-foreground mt-1.5">
                  {exp.company}
                </p>
              </div>
              <span className="text-sm text-muted-foreground font-medium bg-secondary/50 px-3 py-1 rounded-full">
                {exp.period}
              </span>
            </div>

            <p className="mt-1 text-foreground/80 leading-relaxed">{exp.description}</p>

            {exp.achievements && (
              <ul className="mt-0 space-y-0">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex gap-3 text-sm text-foreground/80">
                    <span className="text-accent mt-1 font-bold">•</span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            )}

            <div className="mt-1 flex flex-wrap gap-2">
              {exp.technologies.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs font-medium px-3 py-0.5">
                  {tech}
                </Badge>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}
