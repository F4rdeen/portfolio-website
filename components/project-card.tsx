import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/data"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video overflow-hidden">
        <Image
          src={project.image || "/placeholder.svg"}
          alt={project.name}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold">{project.name}</h3>
        <p className="mt-2 text-muted-foreground">{project.description}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary">
              {tech}
            </Badge>
          ))}
          {project.technologies.length > 3 && <Badge variant="outline">+{project.technologies.length - 3}</Badge>}
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap items-center justify-between gap-3 border-t p-6">
        <div className="text-sm text-muted-foreground">
          {project.startDate} - {project.endDate}
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            <Github className="mr-1 h-4 w-4" /> GitHub
          </Link>
          <Link href={`/projects/${project.slug}`} className="flex items-center text-sm font-medium text-primary">
            View Details <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}

