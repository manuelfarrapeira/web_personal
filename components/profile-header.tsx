import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Briefcase } from "lucide-react"

export function ProfileHeader() {
  return (
    <header className="relative mb-8">
      <div className="h-40 w-full relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/70">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-accent/20 via-transparent to-transparent" />
      </div>

      <div className="px-6 md:px-8 lg:px-12 max-w-7xl mx-auto">
        <div className="relative -mt-20 flex flex-col gap-4 md:flex-row md:items-end md:gap-6">
          <Avatar className="h-28 w-28 border-4 border-background shadow-xl ring-1 ring-border/50">
            <AvatarImage src="/images/foto_personal.png" alt="Manuel Farrapeira Pérez" />
            <AvatarFallback className="text-2xl font-semibold bg-primary text-primary-foreground">MF</AvatarFallback>
          </Avatar>

          <div className="flex-1 pb-2">
            <h1 className="text-3xl font-bold tracking-tight text-white md:text-4xl whitespace-nowrap drop-shadow-[0_2px_8px_rgba(0,0,0,0.4)]">
              Manuel Farrapeira Pérez
            </h1>
            <p className="mt-2 text-lg text-white font-light">Líder Técnico Java</p>

            <div className="mt-3 flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span>Tui, Pontevedra</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
