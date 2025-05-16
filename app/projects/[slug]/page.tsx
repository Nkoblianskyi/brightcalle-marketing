import { notFound } from "next/navigation"
import ProjectDetail from "@/components/projects/ProjectDetail"
import ProjectGallery from "@/components/projects/ProjectGallery"
import ProjectResults from "@/components/projects/ProjectResults"
import RelatedProjects from "@/components/projects/RelatedProjects"
import ProjectsCTA from "@/components/projects/ProjectsCTA"
import projects from "@/data/projects.json"

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug)

  if (!project) {
    return {
      title: "Proyecto no encontrado - BrightCalle Marketing",
      description: "El proyecto que estás buscando no existe.",
    }
  }

  return {
    title: `${project.title} - BrightCalle Marketing`,
    description: project.description,
  }
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((project) => project.slug === params.slug)

  if (!project) {
    notFound()
  }

  const otherProjects = projects.filter((p) => p.slug !== params.slug).slice(0, 3)

  return (
    <>
      <ProjectDetail project={project} />
      <ProjectGallery project={project} />
      <ProjectResults project={project} />
      <RelatedProjects projects={otherProjects} />
      <ProjectsCTA />
    </>
  )
}
