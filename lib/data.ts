export type Project = {
  id: string
  name: string
  slug: string
  description: string
  longDescription: string
  image: string
  technologies: string[]
  startDate: string
  endDate: string
  githubUrl: string
}

export type Job = {
  id: string
  title: string
  slug: string
  company: string
  logo: string
  description: string
  longDescription: string
  startDate: string
  endDate: string
}

export const projects: Project[] = [
  {
    id: "1",
    name: "Multilanguage Chatbot",
    slug: "chatbot",
    description: "A chatbot that detects and responds in multiple languages — English, Malay, and Tamil",
    longDescription:
      "Built a multilingual chatbot application using TypeScript that can intelligently detect and respond in English, Malay, and Tamil. The chatbot uses natural language processing techniques to identify the language of user input and provides contextually appropriate responses in the same language. This project showcases skills in TypeScript, NLP integration, and building conversational AI interfaces.",
    image: "/AI.png",
    technologies: ["TypeScript", "NLP", "Node.js"],
    startDate: "2024",
    endDate: "Present",
    githubUrl: "https://github.com/F4rdeen/chatbot",
  },
  {
    id: "2",
    name: "AI Crypto Trader",
    slug: "ai-crypto-trader",
    description: "An AI-powered cryptocurrency trading bot built with Python",
    longDescription:
      "Developed an automated cryptocurrency trading system powered by artificial intelligence and machine learning algorithms. The bot analyses market data, identifies trading signals, and executes trades based on configurable strategies. Features include real-time market data ingestion, backtesting capabilities, risk management controls, and performance analytics. Built entirely in Python leveraging popular data science and trading libraries.",
    image: "/AI.png",
    technologies: ["Python", "Machine Learning", "Pandas", "Trading API"],
    startDate: "2024",
    endDate: "Present",
    githubUrl: "https://github.com/F4rdeen/ai-crypto-trader",
  },
  {
    id: "3",
    name: "Mobile App Development — Assignment 5",
    slug: "cs5700-assn5",
    description: "Advanced Android application built with Kotlin for CS5700 Mobile App Development",
    longDescription:
      "Completed the final and most advanced assignment for the CS5700 Mobile Application Development course. This Kotlin-based Android project demonstrates mastery of advanced Android concepts including complex UI components, data persistence, background processing, and API integration. The application brings together all skills developed throughout the course to deliver a fully functional, production-quality Android app.",
    image: "/placeholder.svg",
    technologies: ["Kotlin", "Android", "Jetpack", "Android Studio"],
    startDate: "2024",
    endDate: "2024",
    githubUrl: "https://github.com/F4rdeen/cs5700-Assn5",
  },
  {
    id: "4",
    name: "Mobile App Development — Assignment 4",
    slug: "cs5700-assn4",
    description: "Android application with advanced features built for CS5700",
    longDescription:
      "Fourth assignment in the CS5700 Mobile Application Development course series. This project deepens skills in Android development with Kotlin, focusing on features such as RecyclerView, local database storage with Room, and multi-screen navigation using the Navigation component. Demonstrates a solid understanding of the Android lifecycle, fragments, and MVVM architecture patterns.",
    image: "/placeholder.svg",
    technologies: ["Kotlin", "Android", "Room", "Navigation", "MVVM"],
    startDate: "2024",
    endDate: "2024",
    githubUrl: "https://github.com/F4rdeen/cs5700-Assn4",
  },
  {
    id: "5",
    name: "Mobile App Development — Assignment 3",
    slug: "cs5700-assn3",
    description: "Android application exploring UI components and user interaction",
    longDescription:
      "Third assignment in the CS5700 Mobile Application Development series. This project explores intermediate Android UI components, user interaction patterns, and event handling in Kotlin. Features include dynamic layouts, input validation, and inter-activity communication via Intents. Builds upon foundational Android skills to produce more interactive and responsive applications.",
    image: "/placeholder.svg",
    technologies: ["Kotlin", "Android", "Intents", "Layouts"],
    startDate: "2024",
    endDate: "2024",
    githubUrl: "https://github.com/F4rdeen/cs5700-Assn3",
  },
  {
    id: "6",
    name: "Mobile App Development — Assignment 2",
    slug: "cs5700-assn2",
    description: "Android application covering core Activity and View concepts",
    longDescription:
      "Second assignment in the CS5700 Mobile Application Development course. This Kotlin project covers core Android development concepts including Activity lifecycle management, View binding, and user input handling. The app demonstrates fundamental skills in building Android applications with proper resource management and responsive UI design.",
    image: "/placeholder.svg",
    technologies: ["Kotlin", "Android", "Activities", "View Binding"],
    startDate: "2024",
    endDate: "2024",
    githubUrl: "https://github.com/F4rdeen/cs5700-Assn2",
  },
  {
    id: "7",
    name: "Mobile App Development — Assignment 1",
    slug: "cs5700-assn1",
    description: "Introductory Android application built with Kotlin",
    longDescription:
      "First assignment in the CS5700 Mobile Application Development course at university. This introductory project covers the fundamentals of Android development using Kotlin, including setting up an Android project, working with the Activity class, designing basic UI layouts in XML, and running the app on an emulator. Marks the beginning of the mobile development journey.",
    image: "/placeholder.svg",
    technologies: ["Kotlin", "Android", "XML Layouts", "Android Studio"],
    startDate: "2024",
    endDate: "2024",
    githubUrl: "https://github.com/F4rdeen/cs5700-Assn1",
  },
]

export const jobs: Job[] = [
  {
    id: "1",
    title: "Mobile App Development Student",
    slug: "mobile-app-development-student",
    company: "University — CS5700",
    logo: "/placeholder.svg",
    description: "Studying Android app development with Kotlin through hands-on assignments",
    longDescription:
      "Enrolled in CS5700 Mobile Application Development, a university course focused on building real Android applications using Kotlin. Completed five progressively complex assignments covering the full spectrum of Android development — from basic Activities and layouts to advanced features like Room databases, RecyclerView, Navigation components, Jetpack libraries, and MVVM architecture. Each assignment involved designing, building, and testing an Android application from scratch using Android Studio.",
    startDate: "2024",
    endDate: "Present",
  },
  {
    id: "2",
    title: "AI & Automation Developer",
    slug: "ai-automation-developer",
    company: "Personal Projects",
    logo: "/AI.png",
    description: "Built AI-powered tools including a multilingual chatbot and a crypto trading bot",
    longDescription:
      "Independently developed several AI-driven software projects, including a multilingual chatbot capable of detecting and responding in English, Malay, and Tamil using TypeScript, and an automated cryptocurrency trading bot built with Python that leverages machine learning algorithms to analyse market trends and execute trades. These projects demonstrate applied skills in natural language processing, data analysis, API integration, and software architecture.",
    startDate: "2024",
    endDate: "Present",
  },
  {
    id: "3",
    title: "Portfolio Website Developer",
    slug: "portfolio-website-developer",
    company: "Personal Project",
    logo: "/placeholder.svg",
    description: "Designed and built this portfolio website using Next.js and Tailwind CSS",
    longDescription:
      "Designed and developed this personal portfolio website using Next.js 15, React 19, Tailwind CSS, and TypeScript. The site features a responsive layout with dark mode support, a parallax hero section, dynamic project and experience pages, and is deployed on Vercel. The project demonstrates skills in modern frontend development, component design, static site generation, and deployment workflows.",
    startDate: "2024",
    endDate: "Present",
  },
]

export const personalInfo = {
  name: "Fardeen Maaruf",
  title: "Software Developer",
  bio: "I'm a passionate software developer with experience building web applications, mobile apps, and AI-powered tools. I enjoy turning ideas into working products using clean, modern code.",
  longBio:
    "I'm a software developer with a strong interest in AI, mobile development, and full-stack web technologies. My projects range from multilingual chatbots and AI-powered trading bots to Android applications built with Kotlin. I'm currently studying Mobile Application Development (CS5700) and continuously expanding my skills across TypeScript, Python, and Android. I enjoy tackling challenging problems and building projects that have real-world impact.",
  location: "Malaysia",
  email: "fardeenmohd667@gmail.com",
  github: "github.com/F4rdeen",
  linkedin: "linkedin.com/in/fardeen-maaruf",
  skills: [
    "TypeScript",
    "Python",
    "Kotlin",
    "React/Next.js",
    "Node.js",
    "Android Development",
    "Machine Learning",
    "NLP",
    "Git",
    "REST APIs",
  ],
  avatar: "/avatar.jpg",
}

