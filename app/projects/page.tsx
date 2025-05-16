import ProjectsHero from "@/components/projects/ProjectsHero"
import ProjectsGrid from "@/components/projects/ProjectsGrid"
import ProjectsCategories from "@/components/projects/ProjectsCategories"
import ProjectsCTA from "@/components/projects/ProjectsCTA"

export const metadata = {
  title: "Proyectos - BrightCalle Marketing",
  description: "Descubre nuestros proyectos de marketing offline, publicidad exterior y branding en Madrid.",
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsCategories />
      <ProjectsGrid />
      <ProjectsCTA />
    </>
  )
}
