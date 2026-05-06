"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function ParallaxSection() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="relative h-[100vh] overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <Image src="/bg.jpg" alt="Background" fill className="object-cover" priority />
      </div>
      <div
        className="absolute inset-0 z-10 flex items-center justify-center"
        style={{
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-4xl font-bold drop-shadow-lg md:text-6xl">Fardeen Maaruf</h1>
          <p className="mt-4 text-xl drop-shadow-lg md:text-2xl">Software Developer</p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="https://github.com/F4rdeen"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition hover:bg-white/20"
            >
              View GitHub Profile
            </a>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-black/50" />
    </div>
  )
}

