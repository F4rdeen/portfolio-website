import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { projects } from "@/lib/data"

interface ProjectPageProps {
  params: Promise<{
    name: string
  }>
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    name: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.name)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.name} | Alex Morgan`,
    description: project.description,
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const resolvedParams = await params
  const project = projects.find((p) => p.slug === resolvedParams.name)

  if (!project) {
    return (
      <div className="container py-12 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Project Not Found</h1>
          <p className="mt-4 text-lg text-muted-foreground">The project you&apos;re looking for doesn&apos;t exist.</p>
          <Button asChild className="mt-8">
            <Link href="/projects">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div>
      <div className="relative h-[40vh] w-full overflow-hidden md:h-[50vh]">
        <Image src={project.image || "/placeholder.svg"} alt={project.name} fill className="object-cover" priority />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container">
            <h1 className="text-4xl font-bold text-white md:text-5xl">{project.name}</h1>
          </div>
        </div>
      </div>

      <div className="container py-12 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div className="mb-8 flex items-center justify-between">
            <Button asChild variant="outline">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <div className="text-sm text-muted-foreground">
              {project.startDate} - {project.endDate}
            </div>
          </div>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold">Description</h2>
              <p className="mt-4 text-lg text-muted-foreground">{project.longDescription}</p>
            </section>

            <section>
              <h2 className="text-2xl font-bold">Technologies</h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

