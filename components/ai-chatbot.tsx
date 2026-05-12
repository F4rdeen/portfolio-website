"use client"

import { FormEvent, KeyboardEvent, useMemo, useRef, useState } from "react"
import { Bot, MessageCircle, Send, User, X } from "lucide-react"
import { personalInfo, projects, jobs } from "@/lib/data"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type Message = {
  id: string
  role: "assistant" | "user"
  content: string
}

const initialMessage: Message = {
  id: "assistant-0",
  role: "assistant",
  content: `Hey! I'm ${personalInfo.name}'s AI assistant. Ask me anything about experience, projects, skills, or how to get in touch.`,
}

function inferTopic(text: string) {
  const normalized = text.toLowerCase()

  if (["hello", "hi", "hey", "yo"].some((word) => normalized.includes(word))) return "greeting"
  if (["contact", "email", "hire", "reach", "call", "message"].some((word) => normalized.includes(word))) return "contact"
  if (["skill", "stack", "technology", "tech", "tools"].some((word) => normalized.includes(word))) return "skills"
  if (["project", "portfolio", "build", "case study"].some((word) => normalized.includes(word))) return "projects"
  if (["experience", "job", "work", "career", "role"].some((word) => normalized.includes(word))) return "experience"
  if (["about", "who", "background", "introduce"].some((word) => normalized.includes(word))) return "about"
  if (["where", "location", "based"].some((word) => normalized.includes(word))) return "location"
  if (["thanks", "thank you", "thx"].some((word) => normalized.includes(word))) return "thanks"

  const matchedProject = projects.find((project) => normalized.includes(project.name.toLowerCase()) || normalized.includes(project.slug.replaceAll("-", " ")))
  if (matchedProject) return `project:${matchedProject.id}`

  const matchedJob = jobs.find((job) => normalized.includes(job.title.toLowerCase()) || normalized.includes(job.company.toLowerCase()))
  if (matchedJob) return `job:${matchedJob.id}`

  return "general"
}

function generateResponse(input: string, conversation: Message[]) {
  const topic = inferTopic(input)
  const latestUserTopics = conversation
    .filter((message) => message.role === "user")
    .slice(-3)
    .map((message) => inferTopic(message.content))
  const askedAboutProjectsRecently = latestUserTopics.includes("projects")

  if (topic === "greeting") {
    return "Hey there 👋 I can help with projects, skills, work history, and contact info. What are you curious about?"
  }

  if (topic === "about") {
    return `${personalInfo.name} is a ${personalInfo.title} based in ${personalInfo.location}. ${personalInfo.bio}`
  }

  if (topic === "location") {
    return `${personalInfo.name} is based in ${personalInfo.location}.`
  }

  if (topic === "contact") {
    return `You can reach ${personalInfo.name} at ${personalInfo.email}, or connect on GitHub (${personalInfo.github}) and LinkedIn (${personalInfo.linkedin}).`
  }

  if (topic === "skills") {
    return `Core strengths include ${personalInfo.skills.slice(0, 6).join(", ")}, and more. If you want, I can tailor this to frontend, backend, mobile, or DevOps work.`
  }

  if (topic === "projects") {
    const featured = projects
      .slice(0, 3)
      .map((project) => `${project.name} (${project.technologies.slice(0, 3).join(", ")})`)
      .join(" • ")
    return `Great question. A few standout projects are: ${featured}. Want details on one specific project?`
  }

  if (topic === "experience") {
    const recentRoles = jobs
      .slice(0, 3)
      .map((job) => `${job.title} at ${job.company}`)
      .join(" • ")
    return `Recent experience includes ${recentRoles}. I can break down achievements for any specific role.`
  }

  if (topic.startsWith("project:")) {
    const project = projects.find((item) => item.id === topic.split(":")[1])
    if (!project) return "I couldn't find that project, but I can share highlights from the portfolio if you tell me the project name."
    return `${project.name}: ${project.description} Tech stack: ${project.technologies.join(", ")}. Timeline: ${project.startDate} to ${project.endDate}.`
  }

  if (topic.startsWith("job:")) {
    const job = jobs.find((item) => item.id === topic.split(":")[1])
    if (!job) return "I couldn't find that role, but I can summarize work experience if you share the role or company."
    return `${job.title} at ${job.company}: ${job.description}. Timeline: ${job.startDate} to ${job.endDate}.`
  }

  if (topic === "thanks") {
    return "You got it — happy to help. Ask me anything else about the portfolio."
  }

  if (askedAboutProjectsRecently) {
    return "Want to dive deeper into project impact, architecture, or tech choices? I can break it down project by project."
  }

  return `I can chat naturally, but I’m best at portfolio topics: projects, work experience, technical skills, and contact info. Ask me anything in plain language and I’ll do my best to help.`
}

export default function AiChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([initialMessage])
  const listRef = useRef<HTMLDivElement | null>(null)

  const canSend = useMemo(() => input.trim().length > 0 && !isTyping, [input, isTyping])

  const scrollToBottom = () => {
    requestAnimationFrame(() => {
      if (listRef.current) {
        listRef.current.scrollTop = listRef.current.scrollHeight
      }
    })
  }

  const sendMessage = (event: FormEvent) => {
    event.preventDefault()
    const value = input.trim()
    if (!value || isTyping) return

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: value,
    }

    const nextConversation = [...messages, userMessage]
    setMessages(nextConversation)
    setInput("")
    setIsTyping(true)
    scrollToBottom()

    window.setTimeout(() => {
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: generateResponse(value, nextConversation),
      }

      setMessages((prev) => [...prev, assistantMessage])
      setIsTyping(false)
      scrollToBottom()
    }, 400)
  }

  const onInputKeyDown = (event: KeyboardEvent<HTMLTextAreaElement>) => {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault()
      const syntheticEvent = {
        preventDefault: () => {},
      } as FormEvent
      sendMessage(syntheticEvent)
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-end justify-end">
      {isOpen ? (
        <div className="w-[22rem] overflow-hidden rounded-2xl border bg-card shadow-2xl sm:w-[25rem]">
          <div className="flex items-center justify-between border-b px-4 py-3">
            <div className="flex items-center gap-2">
              <Bot className="h-5 w-5 text-primary" />
              <p className="text-sm font-semibold">AI Assistant</p>
            </div>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              aria-label="Close chat"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div ref={listRef} className="h-96 space-y-4 overflow-y-auto px-4 py-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={cn("flex items-start gap-2", message.role === "user" ? "justify-end" : "justify-start")}
              >
                {message.role === "assistant" && (
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Bot className="h-3.5 w-3.5" />
                  </span>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-3 py-2 text-sm leading-relaxed",
                    message.role === "assistant" ? "bg-muted text-foreground" : "bg-primary text-primary-foreground",
                  )}
                >
                  {message.content}
                </div>
                {message.role === "user" && (
                  <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <User className="h-3.5 w-3.5" />
                  </span>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start gap-2">
                <span className="mt-1 inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Bot className="h-3.5 w-3.5" />
                </span>
                <div className="rounded-2xl bg-muted px-3 py-2 text-sm text-muted-foreground">Typing...</div>
              </div>
            )}
          </div>

          <form onSubmit={sendMessage} className="border-t p-3">
            <div className="flex items-end gap-2">
              <textarea
                value={input}
                onChange={(event) => setInput(event.target.value)}
                onKeyDown={onInputKeyDown}
                placeholder="Ask about projects, skills, or experience..."
                className="max-h-28 min-h-10 flex-1 resize-y rounded-xl border bg-background px-3 py-2 text-sm outline-none ring-ring transition focus:ring-2"
                rows={1}
              />
              <Button type="submit" size="icon" disabled={!canSend} aria-label="Send message">
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </form>
        </div>
      ) : (
        <Button
          type="button"
          size="icon"
          onClick={() => setIsOpen(true)}
          className="h-14 w-14 rounded-full shadow-xl"
          aria-label="Open AI chat"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}
