"use client"

import type { ReactNode } from "react"
import { useParallax } from "@/hooks/use-parallax"

interface ParallaxSectionProps {
  children: ReactNode
  className?: string
  speed?: number
  direction?: "up" | "down" | "left" | "right"
  reverse?: boolean
}

export function ParallaxSection({
  children,
  className = "",
  speed = 0.1,
  direction = "up",
  reverse = false,
}: ParallaxSectionProps) {
  const { ref, style } = useParallax({ speed, direction, reverse })

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}
