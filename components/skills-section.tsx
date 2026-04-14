import { Badge } from "@/components/ui/badge"
import { Code2, Database, Wrench, Users, Cloud, MessageSquare, Monitor, Settings2 } from "lucide-react"

const skillCategories = [
  {
    title: "Backend & Java",
    icon: Code2,
    accent: "text-primary",
    bg: "bg-primary/10",
    border: "border-primary/15",
    skills: ["Java", "Spring Boot", "Spring Framework", "J2EE", "Hibernate", "JUnit", "Web Services", "Java FX"],
  },
  {
    title: "Cloud & DevOps",
    icon: Cloud,
    accent: "text-sky-600 dark:text-sky-400",
    bg: "bg-sky-500/10",
    border: "border-sky-500/15",
    skills: ["Google Cloud (GCP)", "Kubernetes", "Docker", "Openshift", "ArgoCD", "Helm", "GitHub", "Git"],
  },
  {
    title: "Bases de Datos",
    icon: Database,
    accent: "text-emerald-600 dark:text-emerald-400",
    bg: "bg-emerald-500/10",
    border: "border-emerald-500/15",
    skills: ["MongoDB", "Oracle Database", "MySQL", "DB2", "MariaDB", "Redis"],
  },
  {
    title: "Mensajería & APIs",
    icon: MessageSquare,
    accent: "text-accent",
    bg: "bg-accent/10",
    border: "border-accent/15",
    skills: ["Apache Kafka", "Colas", "Protobuf", "REST APIs"],
  },
  {
    title: "Monitoreo & Calidad",
    icon: Monitor,
    accent: "text-violet-600 dark:text-violet-400",
    bg: "bg-violet-500/10",
    border: "border-violet-500/15",
    skills: ["Grafana", "SonarQube", "JIRA"],
  },
  {
    title: "Otros Lenguajes",
    icon: Code2,
    accent: "text-rose-600 dark:text-rose-400",
    bg: "bg-rose-500/10",
    border: "border-rose-500/15",
    skills: ["PHP", "C#", "SQL", "XML", "JSON"],
  },
  {
    title: "Herramientas & IDEs",
    icon: Settings2,
    accent: "text-amber-600 dark:text-amber-400",
    bg: "bg-amber-500/10",
    border: "border-amber-500/15",
    skills: ["IntelliJ IDEA", "Eclipse", "Android Studio", "Visual Studio", "PhpStorm"],
  },
  {
    title: "Sistemas & Otros",
    icon: Users,
    accent: "text-teal-600 dark:text-teal-400",
    bg: "bg-teal-500/10",
    border: "border-teal-500/15",
    skills: ["Linux", "Apache", "Android", "Scrum", "CMS", "Firmas digitales", "Certificaciones SSL"],
  },
]

export function SkillsSection() {
  return (
    <section>
      <div className="section-heading">
        <div className="section-icon">
          <Wrench className="h-5 w-5 text-primary" />
        </div>
        <h2 className="section-title">Habilidades</h2>
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        {skillCategories.map((category) => {
          const Icon = category.icon
          return (
            <div
              key={category.title}
              className={`card-elegant p-6 border ${category.border}`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2.5 rounded-xl ${category.bg}`}>
                  <Icon className={`h-5 w-5 ${category.accent}`} />
                </div>
                <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {category.skills.map((skill) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className="text-xs font-medium px-2.5 py-1 rounded-full hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
