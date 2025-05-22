import type React from "react"
import { cn } from "@/lib/utils"

type ColorVariant = "purple" | "teal" | "coral" | "mint" | "amber" | "default"

interface ColorfulBadgeProps {
  children: React.ReactNode
  variant?: ColorVariant
  className?: string
}

export function ColorfulBadge({ children, variant = "default", className }: ColorfulBadgeProps) {
  const getVariantClasses = () => {
    // Use a consistent purple color for all badges
    return "bg-purple/10 text-purple border border-purple/20 hover:bg-purple/20"
  }

  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors",
        getVariantClasses(),
        className,
      )}
    >
      {children}
    </span>
  )
}
