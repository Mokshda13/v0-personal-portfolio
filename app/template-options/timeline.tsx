import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, Linkedin, Mail, Phone, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function TimelineTemplate() {
  const [isPersonalSectionVisible, setIsPersonalSectionVisible] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <Link href="/" className="text-xl font-bold">
            Mokshda Sharma
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#about" className="text-sm font-medium hover:text-primary">
              About
            </Link>
            <Link href="#timeline" className="text-sm font-medium hover:text-primary">
              Timeline
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-primary">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-primary">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary">
              Contact
            </Link>
          </nav>
          <Button variant="outline" size="sm" className="hidden md:flex">
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
          <Button variant="ghost" size="icon" className="md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6"
            >
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </svg>
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Mokshda Sharma</h1>
                  <p className="mt-2 text-xl text-gray-500">Data Analytics & Business Strategy Professional</p>
                </div>
                <p className="max-w-[600px] text-gray-500 md:text-xl">
                  Master's in Business Analytics student with expertise in data analytics and business strategy.
                  Experienced in delivering data-driven insights and supporting decision-making.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild>
                    <Link href="#contact">
                      Contact Me
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild>
                    <Link href="#timeline">
                      View Timeline
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <Link
                    href="https://www.linkedin.com/in/mokshda-sharma-b740a7165"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="ghost" size="icon">
                      <Linkedin className="w-5 h-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:mokshda879@gmail.com">
                    <Button variant="ghost" size="icon">
                      <Mail className="w-5 h-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                  <Link href="tel:7657670302">
                    <Button variant="ghost" size="icon">
                      <Phone className="w-5 h-5" />
                      <span className="sr-only">Phone</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="/placeholder.svg?height=350&width=350"
                    alt="Mokshda Sharma"
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Professional Profile</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  As a Master's student in Business Analytics at Purdue University, I specialize in leveraging data science 
                  and machine learning to drive business decisions. With experience in data analysis and consulting, 
                  I excel at transforming complex data into actionable insights.
                </p>
              </div>
              <div className="w-full max-w-3xl py-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 text-primary"
                          >
                            <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
                            <path d="M16 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a1 1 0 0 0-1-1" />
                            <path d="M12 18v-6" />
                            <path d="m9 15 3 3 3-3" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">Data Science</h3>
                        <p className="text-sm text-gray-500">
                          Advanced proficiency in Python, R, SQL, and Machine Learning frameworks
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 text-primary"
                          >
                            <path d="M3 3v18h18" />
                            <path d="m19 9-5 5-4-4-3 3" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">Analytics</h3>
                        <p className="text-sm text-gray-500">
                          Expert in Tableau, Power BI, and advanced statistical analysis
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="p-2 bg-primary/10 rounded-full">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="w-6 h-6 text-primary"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold">AI & ML</h3>
                        <p className="text-sm text-gray-500">
                          Specialized in LLMs, RAG, and predictive modeling
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Personal Profile Section */}
        <section id="personal-profile" className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800">Personal Side</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Hobbies & Interests</h2>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsPersonalSectionVisible(!isPersonalSectionVisible)}
                  className="flex items-center gap-2"
                >
                  {isPersonalSectionVisible ? (
                    <>
                      Hide Details <ChevronUp className="w-4 h-4" />
                    </>
                  ) : (
                    <>
                      Show Details <ChevronDown className="w-4 h-4" />
                    </>
                  )}
                </Button>
              </div>
              {isPersonalSectionVisible && (
                <div className="w-full max-w-4xl py-4">
                  <div className="grid gap-6 md:grid-cols-3">
                    {/* Photography Hobby */}
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative h-48">
                          <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Photography"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">Photography</h3>
                          <p className="text-sm text-gray-500">
                            Capturing life's beautiful moments through my lens. I specialize in landscape and street photography,
                            always looking for unique perspectives and stories to tell through my images.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Hiking Hobby */}
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative h-48">
                          <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Hiking"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">Hiking</h3>
                          <p className="text-sm text-gray-500">
                            Exploring nature trails and conquering peaks is my way of finding peace and adventure.
                            I've hiked several national parks and am always planning my next outdoor expedition.
                          </p>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Cooking Hobby */}
                    <Card className="overflow-hidden">
                      <CardContent className="p-0">
                        <div className="relative h-48">
                          <img
                            src="/placeholder.svg?height=200&width=300"
                            alt="Cooking"
                            className="object-cover w-full h-full"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold mb-2">Cooking</h3>
                          <p className="text-sm text-gray-500">
                            Experimenting with flavors and creating fusion dishes is my creative outlet.
                            I love combining different cuisines and sharing my culinary adventures with friends and family.
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section id="timeline" className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-800">Timeline</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Professional Journey</h2>
                <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My career path and educational background in chronological order.
                </p>
              </div>
            </div>
            
            <div className="relative max-w-3xl mx-auto mt-12">
              {/* Timeline Line */}
              <div className="absolute left-1/2 h-full w-0.5 bg-gray-200 transform -translate-x-1/2"></div>
              
              {/* Timeline Items */}
              <div className="space-y-12">
                {/* CIBC */}
                <div className="relative">
                  <div className="absolute left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="relative flex items-center justify-between">
                    <div className="w-5/12 pr-8 text-right">
                      <Badge className="mb-2">Jan 2025 – May 2025</Badge>
                      <h3 className="text-xl font-bold">Analytics Consultant Intern</h3>
                      <p className="text-gray-500">CIBC, West Lafayette, IN</p>
                    </div>
                    <div className="w-5/12 pl-8">
                      <Card>
                        <CardContent className="p-4">
                          <ul className="pl-5 space-y-1 text-gray-500 list-disc">
                            <li>Built a cloud-based Python pipeline using LLMs to extract and standardize SEC 10-K filings.</li>
                            <li>Implemented a 2-stage LLM refinement system with human-in-the-loop quality control and anomaly detection.</li>
                            <li>Ran A/B experiments across various LLMs to assess cost-efficiency and select the optimal model.</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
                
                {/* Purdue */}
                <div className="relative">
                  <div className="absolute left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="relative flex items-center justify-between">
                    <div className="w-5/12 pr-8">
                      <Card>
                        <CardContent className="p-4">
                          <h3 className="text-lg font-bold">Master of Business Analytics and Information Management</h3>
                          <p className="text-sm text-gray-500">Graduate Research Assistant, Strategic Management Department</p>
                          <p className="mt-2 text-gray-500">
                            <span className="font-medium">Relevant Coursework:</span> Business Analytics, Data Mining, AI for Business Decisions, Machine Learning, Big Data and MLOps
                          </p>
                          <Badge className="mt-2">GPA 3.9/4.0</Badge>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-5/12 pl-8 text-left">
                      <Badge className="mb-2">August 2024 – August 2025</Badge>
                      <h3 className="text-xl font-bold">Purdue University</h3>
                      <p className="text-gray-500">Daniels School of Business</p>
                    </div>
                  </div>
                </div>
                
                {/* Genpact */}
                <div className="relative">
                  <div className="absolute left-1/2 w-6 h-6 bg-primary rounded-full transform -translate-x-1/2 -translate-y-1/2"></div>
                  <div className="relative flex items-center justify-between">
                    <div className="w-5/12 pr-8 text-right">
                      <Badge className="mb-2">Jan 2023 – May 2024</Badge>
                      <h3 className="text-xl font-bold">Data Analyst</h3>
                      <p className="text-gray-500">Genpact, Bangalore, India</p>
                    </div>
                    <div className="w-5/12 pl-8">
                      <Card>
                        <CardContent className="p-4">
                          <ul className="pl-5 space-y-1 text-gray-500 list-disc">
                            <li>Analyzed customer data to identify trends and insights using SQL, Tableau, and Power BI.</li>
                            <li>Developed and implemented data-driven strategies to improve customer satisfaction and retention.</li>
                            <li>Collaborated with cross-functional teams to present insights and recommendations.</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
