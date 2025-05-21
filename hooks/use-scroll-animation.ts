"use client"

import { useRef, useEffect, useState } from "react"

type AnimationVariant = "fadeIn" | "fadeInUp" | "fadeInDown" | "fadeInLeft" | "fadeInRight" | "zoomIn" | "slideIn"

interface ScrollAnimationOptions {
  variant?: AnimationVariant
  threshold?: number
  delay?: number
  duration?: number
}

export function useScrollAnimation({
  variant = "fadeIn",
  threshold = 0.1,
  delay = 0,
  duration = 0.6,
}: ScrollAnimationOptions = {}) {
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold])

  // Define animation styles based on variant
  const getAnimationStyles = () => {
    const baseStyles = {
      opacity: isVisible ? 1 : 0,
      transition: `opacity ${duration}s ease-out, transform ${duration}s ease-out`,
      transitionDelay: `${delay}s`,
    }

    switch (variant) {
      case "fadeInUp":
        return {
          ...baseStyles,
          transform: isVisible ? "translateY(0)" : "translateY(40px)",
        }
      case "fadeInDown":
        return {
          ...baseStyles,
          transform: isVisible ? "translateY(0)" : "translateY(-40px)",
        }
      case "fadeInLeft":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(40px)",
        }
      case "fadeInRight":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(-40px)",
        }
      case "zoomIn":
        return {
          ...baseStyles,
          transform: isVisible ? "scale(1)" : "scale(0.9)",
        }
      case "slideIn":
        return {
          ...baseStyles,
          transform: isVisible ? "translateX(0)" : "translateX(-100%)",
        }
      case "fadeIn":
      default:
        return baseStyles
    }
  }

  return { ref, style: getAnimationStyles(), isVisible }
}
