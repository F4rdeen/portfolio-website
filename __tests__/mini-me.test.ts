import { getMiniMeResponse } from "@/lib/mini-me"
import { personalInfo } from "@/lib/data"

describe("mini me chatbot responses", () => {
  it("returns skills when asked about skills", () => {
    const response = getMiniMeResponse("What are your skills?")
    expect(response).toContain(personalInfo.name)
    expect(response).toContain("TypeScript")
  })

  it("returns project/github info when asked about projects", () => {
    const response = getMiniMeResponse("show me your github projects")
    expect(response).toContain("github.com/F4rdeen")
    expect(response).toContain("Multilanguage Chatbot")
  })

  it("returns contact information when asked", () => {
    const response = getMiniMeResponse("how can I contact you?")
    expect(response).toContain(personalInfo.email)
  })

  it("returns fallback for unknown questions", () => {
    const response = getMiniMeResponse("what is your favorite food?")
    expect(response).toContain("I can help with projects")
  })
})
