"use client"

import type { ReactNode } from "react"
import { useScrollAnimation } from "@/hooks/use-scroll-animation"

interface AnimatedElementProps {
  children: ReactNode
  className?: string
  variant?: "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "slideIn"
  threshold?: number
  delay?: number
  duration?: number
}

export function AnimatedElement({
  children,
  className = "",
  variant = "fadeIn",
  threshold = 0.1,
  delay = 0,
  duration = 0.6,
}: AnimatedElementProps) {
  const { ref, style, isVisible } = useScrollAnimation({
    variant,
    threshold,
    delay,
    duration,
  })

  return (
    <div ref={ref} style={style} className={className}>
      {children}
    </div>
  )
}
