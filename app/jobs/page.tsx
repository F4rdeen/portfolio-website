import type { Metadata } from "next"
import JobCard from "@/components/job-card"
import { jobs } from "@/lib/data"

export const metadata: Metadata = {
  title: "Experience | Alex Morgan",
  description: "My professional work experience and career history",
}

export default function JobsPage() {
  return (
    <div className="container py-12 md:py-24">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Work Experience</h1>
        <p className="mt-4 text-lg text-muted-foreground">My professional journey and career history</p>
      </div>

      <div className="mt-12 space-y-6">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  )
}

