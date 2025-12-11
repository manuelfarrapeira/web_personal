import {Card} from "@/components/ui/card"
import {User} from "lucide-react";

export function AboutSection() {
    return (
        <section className="mb-12">

            <div className="flex items-center gap-3 mb-6">
                <div className="p-2 rounded-lg bg-primary/10">
                    <User className="h-6 w-6 text-primary"/>
                </div>
                <h2 className="text-3xl font-bold tracking-tight text-foreground">Sobre mí</h2>
            </div>
            <Card className="p-8 shadow-sm hover:shadow-md transition-shadow border-l-4 border-l-primary/60">
                <p className="text-foreground/90 leading-relaxed text-pretty text-lg">
                    Soy un líder técnico especializado en Java con amplia experiencia en el desarrollo de aplicaciones
                    empresariales. Me enfoco en diseñar arquitecturas sólidas, implementar mejores prácticas y guiar
                    equipos hacia
                    la excelencia técnica.
                </p>
                <p className="mt-1 text-foreground/80 leading-relaxed text-pretty text-lg">
                    Mi experiencia abarca desde el desarrollo con Spring Boot, microservicios y arquitecturas
                    distribuidas, hasta
                    la implementación de soluciones cloud-native. Me apasiona crear sistemas robustos, escalables y
                    mantenibles
                    que aporten valor real al negocio.
                </p>
                <p className="mt-1 text-foreground/80 leading-relaxed text-pretty text-lg">
                    Como líder técnico, priorizo la mentoría del equipo, la promoción de código limpio y la adopción de
                    metodologías ágiles. Creo firmemente en la mejora continua y en fomentar una cultura de colaboración
                    y
                    aprendizaje constante.
                </p>
            </Card>
        </section>
    )
}
