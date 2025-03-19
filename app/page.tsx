import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import ParallaxSection from "@/components/parallax-section"
import { personalInfo, projects, jobs } from "@/lib/data"

export default function Home() {
  return (
    <div>
      <ParallaxSection />

      <section className="container px-4 py-12 md:px-8 md:py-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About Me</h2>
            <p className="mt-4 text-lg text-muted-foreground">{personalInfo.longBio}</p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold">Skills</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {personalInfo.skills.map((skill) => (
                  <Badge key={skill} variant="secondary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative h-80 w-80 overflow-hidden rounded-full border-4 border-primary md:h-96 md:w-96">
              <Image
                src={personalInfo.avatar || "/placeholder.svg"}
                alt={personalInfo.name}
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted px-4 py-12 md:px-8 md:py-24">
        <div className="container">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Featured Projects</h2>
              <p className="mt-4 text-lg text-muted-foreground">Check out some of my recent work</p>
            </div>
            <Link href="/projects">
              <Button variant="outline" className="gap-1">
                View All Projects <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {projects.slice(0, 3).map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="relative aspect-video">
                  <Image src={project.image} alt={project.name} fill className="object-cover" />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold">{project.name}</h3>
                  <p className="mt-2 line-clamp-2 text-muted-foreground">{project.description}</p>
                  <Link
                    href={`/projects/${project.slug}`}
                    className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                  >
                    View Project <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="container px-4 py-12 md:px-8 md:py-24">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <div>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Work Experience</h2>
            <p className="mt-4 text-lg text-muted-foreground">My professional journey</p>
          </div>
          <Link href="/jobs">
            <Button variant="outline" className="gap-1">
              View All Experience <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="mt-12 space-y-6">
          {jobs.slice(0, 3).map((job) => (
            <Card key={job.id} className="overflow-hidden">
              <CardContent className="p-6">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                  <div className="relative h-16 w-16 overflow-hidden rounded-md">
                    <Image src={job.logo} alt={job.company} fill className="object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-center">
                      <div>
                        <h3 className="text-xl font-bold">{job.title}</h3>
                        <p className="text-lg font-medium text-muted-foreground">{job.company}</p>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {job.startDate} - {job.endDate}
                      </div>
                    </div>
                    <p className="mt-2 text-muted-foreground">{job.description}</p>
                    <Link
                      href={`/jobs/${job.slug}`}
                      className="mt-4 inline-flex items-center text-sm font-medium text-primary"
                    >
                      View Details <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-primary px-4 text-primary-foreground md:px-8">
        <div className="container py-12 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Let&apos;s Work Together</h2>
            <p className="mt-4 text-lg text-primary-foreground/80">
              I&apos;m always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            <div className="mt-8">
              <Button asChild variant="secondary" size="lg" className="rounded-full">
                <Link href={`mailto:${personalInfo.email}`}>Get in Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

