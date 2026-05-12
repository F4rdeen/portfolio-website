import { jobs, personalInfo, projects } from "@/lib/data"

export function getMiniMeResponse(input: string): string {
  const message = input.trim().toLowerCase()

  if (!message) {
    return "Ask me anything about Fardeen's projects, skills, or experience."
  }

  if (message.includes("hello") || message.includes("hi") || message.includes("hey")) {
    return `Hey! I'm Mini Me 👋 Ask me about ${personalInfo.name}'s projects, skills, or experience.`
  }

  if (message.includes("skill") || message.includes("tech stack") || message.includes("technology")) {
    return `${personalInfo.name} mainly works with ${personalInfo.skills.slice(0, 6).join(", ")}.`
  }

  if (message.includes("project") || message.includes("github") || message.includes("chatbot")) {
    return `You can check projects on https://${personalInfo.github}. Featured ones include ${projects
      .slice(0, 3)
      .map((project) => project.name)
      .join(", ")}.`
  }

  if (message.includes("experience") || message.includes("work") || message.includes("job")) {
    return `${personalInfo.name} is currently ${jobs[0].title} and also building AI-focused personal projects.`
  }

  if (
    message.includes("contact") ||
    message.includes("email") ||
    message.includes("hire") ||
    message.includes("reach")
  ) {
    return `You can reach ${personalInfo.name} at ${personalInfo.email}.`
  }

  if (message.includes("location") || message.includes("based")) {
    return `${personalInfo.name} is based in ${personalInfo.location}.`
  }

  if (message.includes("study") || message.includes("course") || message.includes("cs5700")) {
    return `${personalInfo.name} is currently focused on Mobile Application Development (CS5700), building Android apps with Kotlin.`
  }

  return "I can help with projects, skills, experience, contact info, or CS5700 work. Try asking one of those."
}
