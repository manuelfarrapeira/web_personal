import { ProfileHeader } from "@/components/profile-header"
import { AboutSection } from "@/components/about-section"
import { ExperienceSection } from "@/components/experience-section"
import { EducationSection } from "@/components/education-section"
import { SkillsSection } from "@/components/skills-section"
import { ContactSection } from "@/components/contact-section"
import { NavigationMenu } from "@/components/navigation-menu"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <NavigationMenu />

      <div className="mx-auto max-w-6xl pt-20">
        <ProfileHeader />

        <main className="px-6 py-4 space-y-12 md:px-8 lg:px-12 pb-270">
          <div id="about">
            <AboutSection />
          </div>
          <div id="experience">
            <ExperienceSection />
          </div>
          <div id="education">
            <EducationSection />
          </div>
          <div id="skills">
            <SkillsSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </main>
      </div>
    </div>
  )
}
