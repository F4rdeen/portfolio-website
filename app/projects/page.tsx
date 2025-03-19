import type { Metadata } from "next"
import ProjectCard from "@/components/project-card"
import { projects } from "@/lib/data"

export const metadata: Metadata = {
  title: "Projects | Alex Morgan",
  description: "Explore my portfolio of projects and case studies",
}

export default function ProjectsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">My Projects</h1>
        <p className="mt-4 text-lg text-muted-foreground">A collection of my recent work and personal projects</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  )
}

