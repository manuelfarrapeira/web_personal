import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {Code2, Database, Wrench, Users, User} from "lucide-react"

const skillCategories = [
  {
    title: "Backend & Java",
    icon: Code2,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["Java", "Spring Boot", "Spring Framework", "J2EE", "Hibernate", "JUnit", "Web Services", "Java FX"],
  },
  {
    title: "Cloud & DevOps",
    icon: Database,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: ["Google Cloud (GCP)", "Kubernetes", "Docker", "Openshift", "ArgoCD", "Helm", "GitHub", "Git"],
  },
  {
    title: "Bases de Datos",
    icon: Database,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    skills: ["MongoDB", "Oracle Database", "MySQL", "DB2","MariaDB", "Redis"],
  },
  {
    title: "Mensajería & APIs",
    icon: Wrench,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: ["Apache Kafka", "Colas", "Protobuf", "REST APIs"],
  },
  {
    title: "Monitoreo & Calidad",
    icon: Wrench,
    color: "text-primary",
    bgColor: "bg-primary/10",
    skills: ["Grafana", "SonarQube", "JIRA"],
  },
  {
    title: "Otros Lenguajes",
    icon: Code2,
    color: "text-chart-3",
    bgColor: "bg-chart-3/10",
    skills: ["PHP", "C#", "SQL", "XML", "JSON"],
  },
  {
    title: "Herramientas & IDEs",
    icon: Wrench,
    color: "text-chart-2",
    bgColor: "bg-chart-2/10",
    skills: ["IntelliJ IDEA", "Eclipse", "Android Studio", "Visual Studio", "PhpStorm"],
  },
  {
    title: "Sistemas & Otros",
    icon: Users,
    color: "text-accent",
    bgColor: "bg-accent/10",
    skills: ["Linux", "Apache", "Android", "Scrum", "CMS", "Firmas digitales", "Certificaciones SSL"],
  },
]

export function SkillsSection() {
  return (
    <section className="mb-12">

      <div className="flex items-center gap-3 mb-6">
        <div className="p-2 rounded-lg bg-primary/10">
          <Code2 className="h-6 w-6 text-primary"/>
        </div>
        <h2 className="text-3xl font-bold tracking-tight text-foreground">Habilidades</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = category.icon
          return (
            <Card key={category.title} className="p-8 shadow-sm hover:shadow-md transition-all hover:border-primary/20">
              <div className="flex items-center gap-3 mb-5">
                <div className={`p-3 rounded-xl ${category.bgColor} shadow-sm`}>
                  <Icon className={`h-6 w-6 ${category.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-sm font-medium px-3 py-1.5 hover:bg-primary/10 transition-colors"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          )
        })}
      </div>
    </section>
  )
}
