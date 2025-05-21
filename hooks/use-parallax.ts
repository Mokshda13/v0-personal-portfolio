"use client"

import { useRef, useEffect, useState } from "react"

interface ParallaxOptions {
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  reverse?: boolean
}

export function useParallax({ speed = 0.1, direction = "up", reverse = false }: ParallaxOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return

      const elementTop = ref.current.getBoundingClientRect().top
      const elementHeight = ref.current.offsetHeight
      const windowHeight = window.innerHeight

      // Calculate how far the element is from the viewport center
      const distanceFromCenter = elementTop - windowHeight / 2 + elementHeight / 2

      // Calculate the parallax offset based on scroll position
      const parallaxOffset = distanceFromCenter * speed * (reverse ? -1 : 1)

      setOffset(parallaxOffset)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    handleScroll() // Initialize on mount

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [speed, reverse])

  const style = {
    transform:
      direction === "up" || direction === "down"
        ? `translateY(${direction === "down" ? offset : -offset}px)`
        : `translateX(${direction === "right" ? offset : -offset}px)`,
    transition: "transform 0.1s ease-out",
  }

  return { ref, style }
}
