"use client"

import { FormEvent, useState } from "react"
import Link from "next/link"
import { MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getMiniMeResponse } from "@/lib/mini-me"

type ChatMessage = {
  role: "assistant" | "user"
  text: string
}

const quickPrompts = [
  "What are your top skills?",
  "Tell me about your projects",
  "How can I contact you?",
  "What is CS5700?",
]

export default function MiniMeChat() {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      role: "assistant",
      text: "Hi, I'm Mini Me 👋 Ask me anything about Fardeen's work.",
    },
  ])
  const [input, setInput] = useState("")

  const ask = (question: string) => {
    const trimmed = question.trim()
    if (!trimmed) return

    setMessages((previous) => [
      ...previous,
      { role: "user", text: trimmed },
      { role: "assistant", text: getMiniMeResponse(trimmed) },
    ])
    setInput("")
  }

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    ask(input)
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-2xl">
          <MessageSquare className="h-6 w-6" />
          Chat with Mini Me
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          This is a built-in mini assistant (no paid API calls) trained on portfolio info.
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="max-h-80 space-y-3 overflow-y-auto rounded-lg border p-4">
          {messages.map((message, index) => (
            <div
              key={`${message.role}-${index}`}
              className={message.role === "user" ? "text-right" : "text-left"}
            >
              <div
                className={`inline-block max-w-[90%] rounded-lg px-3 py-2 text-sm ${
                  message.role === "user" ? "bg-primary text-primary-foreground" : "bg-muted text-foreground"
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2">
          {quickPrompts.map((prompt) => (
            <Button key={prompt} type="button" variant="outline" size="sm" onClick={() => ask(prompt)}>
              {prompt}
            </Button>
          ))}
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-2 sm:flex-row">
          <input
            value={input}
            onChange={(event) => setInput(event.target.value)}
            placeholder="Ask Mini Me a question..."
            className="flex-1 rounded-md border bg-background px-3 py-2 text-sm"
          />
          <Button type="submit">Send</Button>
        </form>

        <p className="text-xs text-muted-foreground">
          For the full multilingual chatbot project, visit{" "}
          <Link
            href="https://github.com/F4rdeen/chatbot"
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline-offset-4 hover:underline"
          >
            github.com/F4rdeen/chatbot
          </Link>
          .
        </p>
      </CardContent>
    </Card>
  )
}
