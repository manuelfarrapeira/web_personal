import { User } from "lucide-react"

export function AboutSection() {
  return (
    <section>
      <div className="section-heading">
        <div className="section-icon">
          <User className="h-5 w-5 text-primary" />
        </div>
        <h2 className="section-title">Sobre mí</h2>
      </div>

      <div className="card-elegant p-8 space-y-4">
        <p className="text-foreground/90 leading-relaxed text-pretty text-[1.05rem]">
          Soy un líder técnico especializado en Java con amplia experiencia en el desarrollo de aplicaciones
          empresariales. Me enfoco en diseñar arquitecturas sólidas, implementar mejores prácticas y guiar
          equipos hacia la excelencia técnica.
        </p>
        <p className="text-foreground/75 leading-relaxed text-pretty text-[1.05rem]">
          Mi experiencia abarca desde el desarrollo con Spring Boot, microservicios y arquitecturas
          distribuidas, hasta la implementación de soluciones cloud-native. Me apasiona crear sistemas
          robustos, escalables y mantenibles que aporten valor real al negocio.
        </p>
        <p className="text-foreground/75 leading-relaxed text-pretty text-[1.05rem]">
          Como líder técnico, priorizo la mentoría del equipo, la promoción de código limpio y la adopción de
          metodologías ágiles. Creo firmemente en la mejora continua y en fomentar una cultura de colaboración
          y aprendizaje constante.
        </p>
      </div>
    </section>
  )
}
