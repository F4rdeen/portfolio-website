import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import type { Job } from "@/lib/data"

interface JobCardProps {
  job: Job
}

export default function JobCard({ job }: JobCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className="relative h-16 w-16 overflow-hidden rounded-md">
            <Image src={job.logo || "/placeholder.svg"} alt={job.company} fill className="object-cover" />
          </div>
          <div>
            <h3 className="text-xl font-bold">{job.title}</h3>
            <p className="text-lg font-medium text-muted-foreground">{job.company}</p>
            <p className="mt-2 text-muted-foreground">{job.description}</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between border-t p-6">
        <div className="text-sm text-muted-foreground">
          {job.startDate} - {job.endDate}
        </div>
        <Link href={`/jobs/${job.slug}`} className="flex items-center text-sm font-medium text-primary">
          View Details <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </CardFooter>
    </Card>
  )
}

