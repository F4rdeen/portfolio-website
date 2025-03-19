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
          <p className="mt-4 text-xl drop-shadow-lg md:text-2xl">Full Stack Developer</p>
        </div>
      </div>
      <div className="absolute inset-0 z-0 bg-black/50" />
    </div>
  )
}

