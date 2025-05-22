"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ChevronRight, Linkedin, Mail, Phone } from "lucide-react"

interface ParallaxHeroProps {
  title: string
  subtitle: string
  description: string
  profileImage: string
}

export function ParallaxHero({ title, subtitle, description, profileImage }: ParallaxHeroProps) {
  const heroRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const contentRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return

      const scrollPosition = window.scrollY
      const heroTop = heroRef.current.offsetTop
      const heroHeight = heroRef.current.offsetHeight

      // Only apply parallax effect when the hero section is in view
      if (scrollPosition >= heroTop && scrollPosition <= heroTop + heroHeight) {
        const scrollPercentage = (scrollPosition - heroTop) / heroHeight

        // Parallax for background
        if (backgroundRef.current) {
          backgroundRef.current.style.transform = `translateY(${scrollPercentage * 50}px)`
        }

        // Parallax for image
        if (imageRef.current) {
          imageRef.current.style.transform = `translateY(${scrollPercentage * -30}px)`
        }

        // Parallax for content
        if (contentRef.current) {
          contentRef.current.style.transform = `translateY(${scrollPercentage * -20}px)`
        }
      }
    }

    window.addEventListener("scroll", handleScroll, { passive: true })

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div ref={heroRef} className="relative py-20 overflow-hidden">
      {/* Parallax Background */}
      <div ref={backgroundRef} className="absolute inset-0 z-0 bg-gradient-to-b from-gray-50 to-white" />

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.03)_0,rgba(0,0,0,0)_50%)]"></div>
      </div>

      <div className="container relative z-10 px-4 mx-auto md:px-6">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {/* Content */}
          <div ref={contentRef} className="flex flex-col justify-center space-y-4">
            <div className="animate-fadeIn">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">{title}</h1>
              <p className="mt-2 text-xl text-gray-500">{subtitle}</p>
            </div>
            <p className="max-w-[600px] text-gray-500 md:text-xl animate-fadeIn animation-delay-200">{description}</p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fadeIn animation-delay-300">
              <Button className="hover:scale-105 transition-transform" asChild>
                <Link href="#contact">
                  Contact Me
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button variant="outline" className="hover:scale-105 transition-transform" asChild>
                <Link href="#experience">
                  View Experience
                  <ChevronRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="flex items-center gap-4 pt-4 animate-fadeIn animation-delay-400">
              <Link
                href="https://www.linkedin.com/in/mokshda-sharma-b740a7165"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:mokshda879@gmail.com">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="tel:7657670302">
                <Button variant="ghost" size="icon" className="hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                  <span className="sr-only">Phone</span>
                </Button>
              </Link>
            </div>
          </div>

          {/* Image */}
          <div ref={imageRef} className="flex items-center justify-center animate-fadeIn animation-delay-500">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform duration-500">
              <img src={profileImage || "/placeholder.svg"} alt="Profile" className="object-cover w-full h-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
