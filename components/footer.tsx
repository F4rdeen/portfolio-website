import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { personalInfo } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container px-4 md:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h3 className="text-lg font-semibold">{personalInfo.name}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{personalInfo.title}</p>
            <p className="mt-1 text-sm text-muted-foreground">{personalInfo.location}</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Links</h3>
            <nav className="mt-2 flex flex-col space-y-2">
              <Link href="/" className="text-sm text-muted-foreground hover:text-foreground">
                Home
              </Link>
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">
                Projects
              </Link>
              <Link href="/jobs" className="text-sm text-muted-foreground hover:text-foreground">
                Experience
              </Link>
            </nav>
          </div>
          <div>
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="mt-2 flex space-x-4">
              <Link
                href={`https://${personalInfo.github}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link
                href={`https://${personalInfo.linkedin}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href={`mailto:${personalInfo.email}`} className="text-muted-foreground hover:text-foreground">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Fardeen Maaruf. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

