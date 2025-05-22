import type React from "react"
import { cn } from "@/lib/utils"

interface GradientHeadingProps {
  children: React.ReactNode
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  variant?: "primary" | "secondary" | "accent"
  className?: string
}

export function GradientHeading({
  children,
  as: Component = "h2",
  variant = "primary",
  className,
}: GradientHeadingProps) {
  const gradientClass = {
    primary: "from-purple to-teal",
    secondary: "from-coral to-amber",
    accent: "from-mint to-purple",
  }[variant]

  return (
    <Component
      className={cn(
        "text-transparent bg-clip-text bg-gradient-to-r font-bold tracking-tight",
        gradientClass,
        className,
      )}
    >
      {children}
    </Component>
  )
}
