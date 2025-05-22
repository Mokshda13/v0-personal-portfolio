"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { AnimatedElement } from "@/components/animated-element"
import { ColorfulBadge } from "@/components/colorful-badge"
import { GradientHeading } from "@/components/gradient-heading"

interface SectionToggleProps {
  awardsContent: React.ReactNode
  certificationsContent: React.ReactNode
}

export function SectionToggle({ awardsContent, certificationsContent }: SectionToggleProps) {
  const [activeSection, setActiveSection] = useState<"awards" | "certifications">("awards")

  return (
    <div className="container px-4 mx-auto md:px-6">
      <AnimatedElement variant="fadeInUp">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <ColorfulBadge variant="purple">{activeSection === "awards" ? "Honors" : "Certifications"}</ColorfulBadge>
            <GradientHeading as="h2" className="text-3xl sm:text-4xl">
              {activeSection === "awards" ? "Awards & Recognition" : "Professional Certifications"}
            </GradientHeading>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {activeSection === "awards"
                ? "Achievements and recognition throughout my academic and professional career."
                : "Professional certifications and credentials that validate my expertise."}
            </p>
          </div>
        </div>
      </AnimatedElement>

      <div className="flex justify-center mt-6 mb-8">
        <div className="inline-flex rounded-md shadow-sm" role="group">
          <Button
            variant={activeSection === "awards" ? "default" : "outline"}
            className={`rounded-l-md rounded-r-none ${
              activeSection === "awards"
                ? "bg-purple hover:bg-purple/90"
                : "border-purple text-purple hover:bg-purple/10"
            }`}
            onClick={() => setActiveSection("awards")}
          >
            Awards & Recognition
          </Button>
          <Button
            variant={activeSection === "certifications" ? "default" : "outline"}
            className={`rounded-r-md rounded-l-none ${
              activeSection === "certifications"
                ? "bg-purple hover:bg-purple/90"
                : "border-purple text-purple hover:bg-purple/10"
            }`}
            onClick={() => setActiveSection("certifications")}
          >
            Certifications
          </Button>
        </div>
      </div>

      <div className="transition-all duration-300">
        {activeSection === "awards" ? awardsContent : certificationsContent}
      </div>
    </div>
  )
}
