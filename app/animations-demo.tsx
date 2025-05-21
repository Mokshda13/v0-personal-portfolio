"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { AnimatedElement } from "@/components/animated-element"
import { ParallaxSection } from "@/components/parallax-section"

export default function AnimationsDemo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight })
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  // Calculate mouse position relative to center of screen
  const calcMousePosition = () => {
    if (windowSize.width === 0 || windowSize.height === 0) return { x: 0, y: 0 }

    const x = (mousePosition.x - windowSize.width / 2) / (windowSize.width / 2)
    const y = (mousePosition.y - windowSize.height / 2) / (windowSize.height / 2)

    return { x, y }
  }

  const { x, y } = calcMousePosition()

  return (
    <div className="container px-4 py-16 mx-auto">
      <h1 className="mb-12 text-3xl font-bold text-center">Animation & Parallax Effects</h1>

      <div className="grid gap-12">
        {/* Scroll Animations */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Scroll Animations</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <AnimatedElement variant="fadeInUp" delay={0.1}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-medium">Fade In Up</h3>
                  <p className="text-gray-500">This element fades in from below as you scroll to it.</p>
                </CardContent>
              </Card>
            </AnimatedElement>
            <AnimatedElement variant="fadeInLeft" delay={0.2}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-medium">Fade In Left</h3>
                  <p className="text-gray-500">This element slides in from the right as you scroll to it.</p>
                </CardContent>
              </Card>
            </AnimatedElement>
            <AnimatedElement variant="zoomIn" delay={0.3}>
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-medium">Zoom In</h3>
                  <p className="text-gray-500">This element zooms in as you scroll to it.</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          </div>
        </section>

        {/* Parallax Scrolling */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Parallax Scrolling</h2>
          <div className="grid gap-6 md:grid-cols-2">
            <ParallaxSection speed={0.1} direction="up">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-medium">Parallax Up</h3>
                  <p className="text-gray-500">This element moves up slower than the scroll speed.</p>
                </CardContent>
              </Card>
            </ParallaxSection>
            <ParallaxSection speed={0.1} direction="down">
              <Card>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-medium">Parallax Down</h3>
                  <p className="text-gray-500">This element moves down slower than the scroll speed.</p>
                </CardContent>
              </Card>
            </ParallaxSection>
          </div>
        </section>

        {/* Mouse Parallax */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Mouse Movement Parallax</h2>
          <div className="relative h-[300px] overflow-hidden rounded-lg bg-gray-100 parallax-container">
            <div
              className="absolute inset-0 parallax-layer"
              style={{
                transform: `translateX(${x * -20}px) translateY(${y * -20}px)`,
                backgroundImage: "radial-gradient(circle at center, rgba(0,0,0,0.03) 0, rgba(0,0,0,0) 70%)",
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
              }}
            />
            <div
              className="absolute inset-0 flex items-center justify-center parallax-layer"
              style={{ transform: `translateX(${x * -10}px) translateY(${y * -10}px)` }}
            >
              <div className="text-4xl font-bold text-gray-300">Background Layer</div>
            </div>
            <div
              className="absolute inset-0 flex items-center justify-center parallax-layer"
              style={{ transform: `translateX(${x * 10}px) translateY(${y * 10}px)` }}
            >
              <Card className="w-64">
                <CardContent className="p-6">
                  <h3 className="mb-2 text-lg font-medium">Mouse Parallax</h3>
                  <p className="text-sm text-gray-500">This card moves with your mouse cursor.</p>
                  <Button className="mt-4 w-full">Hover Me</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Hover Animations */}
        <section>
          <h2 className="mb-6 text-2xl font-semibold">Hover Animations</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="transition-transform duration-300 hover:scale-105 hover:shadow-lg">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-medium">Scale Up</h3>
                <p className="text-gray-500">This card scales up when you hover over it.</p>
              </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-lg hover:bg-primary/5">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-medium">Background Change</h3>
                <p className="text-gray-500">This card changes background when you hover over it.</p>
              </CardContent>
            </Card>
            <Card className="overflow-hidden group">
              <CardContent className="p-6">
                <h3 className="mb-2 text-lg font-medium transition-colors duration-300 group-hover:text-primary">
                  Text Color Change
                </h3>
                <p className="text-gray-500">The heading changes color when you hover over the card.</p>
                <div className="w-full h-1 mt-4 transition-transform duration-300 bg-primary -translate-x-full group-hover:translate-x-0"></div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </div>
  )
}
