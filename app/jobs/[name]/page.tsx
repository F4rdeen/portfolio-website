import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { jobs } from "@/lib/data"

interface JobPageProps {
  params: {
    name: string
  }
}

export async function generateStaticParams() {
  return jobs.map((job) => ({
    name: job.slug,
  }))
}

export function generateMetadata({ params }: JobPageProps): Metadata {
  const job = jobs.find((j) => j.slug === params.name)

  if (!job) {
    return {
      title: "Job Not Found",
    }
  }

  return {
    title: `${job.title} at ${job.company} | Alex Morgan`,
    description: job.description,
  }
}

export default function JobPage({ params }: JobPageProps) {
  const job = jobs.find((j) => j.slug === params.name)

  if (!job) {
    return (
      <div className="container py-12 md:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Job Not Found</h1>
          <p className="mt-4 text-lg text-muted-foreground">The job you&apos;re looking for doesn&apos;t exist.</p>
          <Button asChild className="mt-8">
            <Link href="/jobs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Jobs
            </Link>
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center justify-between">
          <Button asChild variant="outline">
            <Link href="/jobs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Jobs
            </Link>
          </Button>
          <div className="text-sm text-muted-foreground">
            {job.startDate} - {job.endDate}
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 md:flex-row md:items-start">
          <div className="relative h-32 w-32 overflow-hidden rounded-lg">
            <Image src={job.logo || "/placeholder.svg"} alt={job.company} fill className="object-cover" priority />
          </div>

          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold md:text-4xl">{job.title}</h1>
            <p className="mt-2 text-xl font-medium text-muted-foreground">{job.company}</p>
          </div>
        </div>

        <div className="mt-12 space-y-8">
          <section>
            <h2 className="text-2xl font-bold">Job Description</h2>
            <p className="mt-4 text-lg text-muted-foreground">{job.longDescription}</p>
          </section>
        </div>
      </div>
    </div>
  )
}

