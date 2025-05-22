import type React from "react"
import { cn } from "@/lib/utils"

interface SectionPatternProps {
  children: React.ReactNode
  className?: string
}

export function SectionPattern({ children, className }: SectionPatternProps) {
  return <div className={cn("relative", className)}>{children}</div>
}
