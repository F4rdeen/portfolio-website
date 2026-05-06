import { projects, jobs, personalInfo, type Project, type Job } from "@/lib/data"

describe("projects data", () => {
  it("exports a non-empty array of projects", () => {
    expect(Array.isArray(projects)).toBe(true)
    expect(projects.length).toBeGreaterThan(0)
  })

  it("each project has required fields", () => {
    projects.forEach((project: Project) => {
      expect(typeof project.id).toBe("string")
      expect(typeof project.name).toBe("string")
      expect(typeof project.slug).toBe("string")
      expect(typeof project.description).toBe("string")
      expect(typeof project.longDescription).toBe("string")
      expect(typeof project.image).toBe("string")
      expect(Array.isArray(project.technologies)).toBe(true)
      expect(typeof project.startDate).toBe("string")
      expect(typeof project.endDate).toBe("string")
      expect(typeof project.githubUrl).toBe("string")
    })
  })

  it("each project has a valid GitHub URL", () => {
    projects.forEach((project: Project) => {
      expect(project.githubUrl).toMatch(/^https:\/\/github\.com\//)
    })
  })

  it("each project has a unique id", () => {
    const ids = projects.map((p) => p.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it("each project has a unique slug", () => {
    const slugs = projects.map((p) => p.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })

  it("each project has at least one technology", () => {
    projects.forEach((project: Project) => {
      expect(project.technologies.length).toBeGreaterThan(0)
    })
  })
})

describe("jobs data", () => {
  it("exports a non-empty array of jobs", () => {
    expect(Array.isArray(jobs)).toBe(true)
    expect(jobs.length).toBeGreaterThan(0)
  })

  it("each job has required fields", () => {
    jobs.forEach((job: Job) => {
      expect(typeof job.id).toBe("string")
      expect(typeof job.title).toBe("string")
      expect(typeof job.slug).toBe("string")
      expect(typeof job.company).toBe("string")
      expect(typeof job.logo).toBe("string")
      expect(typeof job.description).toBe("string")
      expect(typeof job.longDescription).toBe("string")
      expect(typeof job.startDate).toBe("string")
      expect(typeof job.endDate).toBe("string")
    })
  })

  it("each job has a unique id", () => {
    const ids = jobs.map((j) => j.id)
    const uniqueIds = new Set(ids)
    expect(uniqueIds.size).toBe(ids.length)
  })

  it("each job has a unique slug", () => {
    const slugs = jobs.map((j) => j.slug)
    const uniqueSlugs = new Set(slugs)
    expect(uniqueSlugs.size).toBe(slugs.length)
  })
})

describe("personalInfo data", () => {
  it("has the correct name", () => {
    expect(personalInfo.name).toBe("Fardeen Maaruf")
  })

  it("has a valid email address", () => {
    expect(personalInfo.email).toMatch(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
  })

  it("has a valid GitHub profile", () => {
    expect(personalInfo.github).toMatch(/github\.com\//)
  })

  it("has a non-empty skills array", () => {
    expect(Array.isArray(personalInfo.skills)).toBe(true)
    expect(personalInfo.skills.length).toBeGreaterThan(0)
  })

  it("has all required string fields", () => {
    expect(typeof personalInfo.name).toBe("string")
    expect(typeof personalInfo.title).toBe("string")
    expect(typeof personalInfo.bio).toBe("string")
    expect(typeof personalInfo.longBio).toBe("string")
    expect(typeof personalInfo.location).toBe("string")
    expect(typeof personalInfo.email).toBe("string")
    expect(typeof personalInfo.github).toBe("string")
    expect(typeof personalInfo.linkedin).toBe("string")
    expect(typeof personalInfo.avatar).toBe("string")
  })
})
