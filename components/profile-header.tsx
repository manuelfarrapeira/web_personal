import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin } from "lucide-react"

export function ProfileHeader() {
  return (
    <header className="relative mb-10">
      {/* Banner con gradiente y patrón de puntos */}
      <div className="h-48 w-full relative overflow-hidden bg-gradient-to-br from-primary via-primary/85 to-primary/60">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,_rgba(201,168,76,0.25)_0%,_transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle, white 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-background/30 to-transparent" />
      </div>

      <div className="px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="relative -mt-16 flex flex-col gap-5 md:flex-row md:items-end md:gap-7">
          {/* Avatar con anillo dorado */}
          <div className="relative">
            <Avatar className="h-32 w-32 border-4 border-background shadow-2xl">
              <AvatarImage src="/images/foto_personal.png" alt="Manuel Farrapeira Pérez" />
              <AvatarFallback className="text-2xl font-bold bg-primary text-primary-foreground">MF</AvatarFallback>
            </Avatar>
            <div className="absolute inset-0 rounded-full ring-2 ring-accent/60 ring-offset-2 ring-offset-background" />
          </div>

          <div className="flex-1 pb-1">
            <div className="flex flex-wrap items-start gap-3 md:items-center">
              <h1 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                Manuel Farrapeira Pérez
              </h1>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/15 border border-accent/30 px-3 py-0.5 text-xs font-semibold text-accent">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent" />
                </span>
                Disponible
              </span>
            </div>

            <p className="mt-1.5 text-base font-medium text-muted-foreground tracking-wide uppercase text-[0.8rem] letter-spacing-widest">
              Líder Técnico Java
            </p>

            <div className="mt-3 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5 text-accent" />
                <span>Tui, Pontevedra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
