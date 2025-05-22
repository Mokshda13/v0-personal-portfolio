import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
<<<<<<< HEAD
import { ChevronRight, Download, ExternalLink, Linkedin, Mail, MapPin, Phone } from "lucide-react"
=======
import { ChevronRight, Download, Linkedin, Mail, MapPin, Phone } from "lucide-react"
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
import { AnimatedElement } from "@/components/animated-element"
import { ParallaxSection } from "@/components/parallax-section"
import { AnimatedBackground } from "@/components/animated-background"
import { GradientHeading } from "@/components/gradient-heading"
import { ColorfulBadge } from "@/components/colorful-badge"
<<<<<<< HEAD
import { SectionToggle } from "@/components/section-toggle"
=======
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9

export default function Home() {
  // Array of badge colors for cycling through
  const badgeColors = ["purple", "teal", "coral", "mint", "amber"] as const

  // Function to get a badge color based on index
  const getBadgeColor = (index: number) => {
    return badgeColors[index % badgeColors.length]
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <Link href="/" className="text-xl font-bold gradient-text">
            Mokshda Sharma
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#about" className="text-sm font-medium hover:text-purple transition-colors">
              About
            </Link>
<<<<<<< HEAD
            <Link href="#skills" className="text-sm font-medium hover:text-purple transition-colors">
              Skills
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-purple transition-colors">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-purple transition-colors">
              Projects
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-purple transition-colors">
              Education
=======
            <Link href="#experience" className="text-sm font-medium hover:text-purple transition-colors">
              Experience
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-purple transition-colors">
              Education
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-purple transition-colors">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium hover:text-purple transition-colors">
              Skills
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-purple transition-colors">
              Contact
            </Link>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="hidden md:flex hover:scale-105 transition-transform border-purple text-purple hover:bg-purple/10"
            asChild
          >
            <Link href="/Mokshda-Sharma-Resume.pdf" target="_blank">
              <Download className="w-4 h-4 mr-2" />
              Resume
            </Link>
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
        {/* Hero Section with Parallax */}
        <section className="relative py-20 overflow-hidden bg-gradient-hero">
          <AnimatedBackground colorful={true} />
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <AnimatedElement variant="fadeInLeft" duration={0.8}>
                <div className="flex flex-col justify-center space-y-4">
                  <div>
                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl gradient-text">
                      Mokshda Sharma
                    </h1>
                    <p className="mt-2 text-xl text-gray-600">Data Analytics & Business Strategy Professional</p>
                  </div>
                  <p className="max-w-[600px] text-gray-500 md:text-xl">
                    Master's in Business Analytics student with expertise in data analytics and business strategy.
                    Experienced in delivering data-driven insights and supporting decision-making.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row">
                    <Button
                      className="hover:scale-105 transition-transform bg-gradient-primary hover:opacity-90"
                      asChild
                    >
                      <Link href="#contact">
                        Contact Me
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="hover:scale-105 transition-transform border-purple text-purple hover:bg-purple/10"
                      asChild
                    >
<<<<<<< HEAD
                      <Link href="#skills">
                        View Skills
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
=======
                      <Link href="#experience">
                        View Experience
                        <ChevronRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                    <Button
                      variant="outline"
                      className="mt-2 w-full sm:w-auto hover:scale-105 transition-transform border-purple text-purple hover:bg-purple/10"
                      asChild
                    >
                      <Link href="/Mokshda-Sharma-Resume.pdf" target="_blank">
                        <Download className="w-4 h-4 mr-2" />
                        Download Resume
                      </Link>
                    </Button>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                  </div>
                  <div className="flex items-center gap-4 pt-4">
                    <Link
                      href="https://www.linkedin.com/in/mokshda-sharma-b740a7165"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:scale-110 transition-transform hover:bg-purple/10 hover:text-purple"
                      >
                        <Linkedin className="w-5 h-5" />
                        <span className="sr-only">LinkedIn</span>
                      </Button>
                    </Link>
                    <Link href="mailto:mokshda879@gmail.com">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:scale-110 transition-transform hover:bg-purple/10 hover:text-purple"
                      >
                        <Mail className="w-5 h-5" />
                        <span className="sr-only">Email</span>
                      </Button>
                    </Link>
                    <Link href="tel:7657670302">
                      <Button
                        variant="ghost"
                        size="icon"
                        className="hover:scale-110 transition-transform hover:bg-purple/10 hover:text-purple"
                      >
                        <Phone className="w-5 h-5" />
                        <span className="sr-only">Phone</span>
                      </Button>
                    </Link>
                  </div>
                </div>
              </AnimatedElement>
              <AnimatedElement variant="fadeInRight" duration={0.8}>
                <ParallaxSection speed={0.05} direction="up">
                  <div className="flex items-center justify-center">
                    <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-4 border-white shadow-xl hover:scale-105 transition-transform duration-500 bg-gradient-primary p-1">
                      <img
                        src="/placeholder.svg?height=350&width=350"
                        alt="Mokshda Sharma"
                        className="object-cover w-full h-full rounded-full"
                      />
                    </div>
                  </div>
                </ParallaxSection>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <AnimatedElement variant="fadeInUp">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <ColorfulBadge variant="purple">About Me</ColorfulBadge>
                  <GradientHeading as="h2" className="text-3xl sm:text-4xl">
                    Professional Profile
                  </GradientHeading>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    I'm a Master's in Business Analytics student with expertise in data analytics and business strategy.
                    I have experience in delivering data-driven insights and supporting decision-making in roles such as
                    Data Analyst, Business Consultant, and Strategy Analyst.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            <div className="w-full max-w-3xl py-4 mx-auto">
              <div className="grid gap-4 md:grid-cols-3">
                <AnimatedElement variant="fadeInUp" delay={0.1}>
<<<<<<< HEAD
                  <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                    <CardContent className="p-6 flex flex-col items-center h-full">
                      <div className="flex flex-col items-center space-y-2 text-center h-full">
=======
                  <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center space-y-2 text-center">
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                        <div className="p-2 bg-purple/10 rounded-full">
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
                            className="w-6 h-6 text-purple"
                          >
                            <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
                            <path d="M16 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a1 1 0 0 0-1-1" />
                            <path d="M12 18v-6" />
                            <path d="m9 15 3 3 3-3" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-purple">Data Analysis</h3>
                        <p className="text-sm text-gray-500">
                          Expertise in Tableau, Power BI, Python, SQL, R, and Alteryx
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
                <AnimatedElement variant="fadeInUp" delay={0.2}>
<<<<<<< HEAD
                  <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                    <CardContent className="p-6 flex flex-col items-center h-full">
                      <div className="flex flex-col items-center space-y-2 text-center h-full">
=======
                  <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center space-y-2 text-center">
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                        <div className="p-2 bg-purple/10 rounded-full">
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
                            className="w-6 h-6 text-purple"
                          >
                            <path d="M3 3v18h18" />
                            <path d="m19 9-5 5-4-4-3 3" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-purple">Business Strategy</h3>
                        <p className="text-sm text-gray-500">
                          Experience in delivering data-driven insights for strategic decisions
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
                <AnimatedElement variant="fadeInUp" delay={0.3}>
<<<<<<< HEAD
                  <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                    <CardContent className="p-6 flex flex-col items-center h-full">
                      <div className="flex flex-col items-center space-y-2 text-center h-full">
=======
                  <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center space-y-2 text-center">
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                        <div className="p-2 bg-purple/10 rounded-full">
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
                            className="w-6 h-6 text-purple"
                          >
                            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                            <path d="m9 12 2 2 4-4" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-purple">AI & ML</h3>
                        <p className="text-sm text-gray-500">
                          Skilled in RAG Techniques, Predictive Modeling, and A/B Testing
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Skills Section */}
        <section id="skills" className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <AnimatedElement variant="fadeInUp">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <ColorfulBadge variant="purple">Skills</ColorfulBadge>
                  <GradientHeading as="h2" className="text-3xl sm:text-4xl">
                    Technical Skills & Expertise
                  </GradientHeading>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    My professional toolkit and technical capabilities.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            <div className="grid gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  title: "Data Analytics & Visualization",
                  description: "Tableau, Power BI, Excel, Dashboarding, KPI Reporting, Data Storytelling",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  ),
                  delay: 0.1,
                },
                {
                  title: "Programming & Data Wrangling",
                  description: "Python, R, SQL, pandas, numpy, seaborn, matplotlib",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
                    </svg>
                  ),
                  delay: 0.15,
                },
                {
                  title: "AI & Machine Learning",
                  description: "Predictive Modeling, A/B Testing, Clustering, Scikit-learn, MLFlow, Neural Networks",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  ),
                  delay: 0.2,
                },
                {
                  title: "LLMs & NLP",
                  description:
                    "RAG, Prompt Engineering, LangChain, BERT, Claude, GPT-4, Llama, Multi-LLM Orchestration, Agentic Workflows",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  ),
                  delay: 0.25,
                },
                {
                  title: "ETL & Data Processing",
                  description: "Alteryx, Databricks, Cursor, DSS, Data Pipelines, Data Quality Control",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10" />
                      <path d="M7 12h10" />
                      <path d="M7 17h10" />
                    </svg>
                  ),
                  delay: 0.35,
                },
                {
                  title: "Cloud & Databases",
                  description: "Snowflake, AWS S3, Redshift, Data Warehousing, Cloud Storage, Database Management",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
                      <path d="M16 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a1 1 0 0 0-1-1" />
                      <path d="M9 13h6" />
                      <path d="M12 10v6" />
                    </svg>
                  ),
                  delay: 0.4,
                },
                {
                  title: "Business Strategy & Consulting",
                  description: "Campaign Optimization, Territory Mapping, Market Segmentation, Strategic Analytics",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M12 18v-6" />
                      <path d="M8 18v-1" />
                      <path d="M16 18v-3" />
                    </svg>
                  ),
                  delay: 0.45,
                },
                {
                  title: "Version Control",
                  description: "Git, GitHub, Collaborative Development, Code Management, Version Tracking",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                    </svg>
                  ),
                  delay: 0.5,
                },
              ].map((skill, index) => (
                <AnimatedElement key={index} variant="fadeInUp" delay={skill.delay}>
                  <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                    <CardContent className="p-6 flex flex-col items-center h-full">
                      <div className="flex flex-col items-center space-y-2 text-center h-full">
                        <div className="p-2 bg-purple/10 rounded-full">{skill.icon}</div>
                        <h3 className="text-xl font-bold text-purple">{skill.title}</h3>
                        <p className="text-sm text-gray-500">{skill.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

=======
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
        {/* Experience Section */}
        <section id="experience" className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <AnimatedElement variant="fadeInUp">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <ColorfulBadge variant="purple">Experience</ColorfulBadge>
                  <GradientHeading as="h2" className="text-3xl sm:text-4xl">
                    Professional Experience
                  </GradientHeading>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    My professional journey across various roles in data analytics and business strategy.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            <div className="grid gap-8 mt-8 md:grid-cols-1 lg:gap-12">
              <div className="space-y-8">
                <AnimatedElement variant="fadeInLeft" delay={0.1}>
                  <div className="relative pl-8 border-l-2 border-purple">
                    <div className="absolute w-4 h-4 bg-purple rounded-full -left-[9px] top-1"></div>
                    <div className="space-y-2">
                      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 overflow-hidden rounded-full bg-purple/10 flex items-center justify-center">
                            <img
                              src="/placeholder.svg?height=40&width=40&text=CIBC"
                              alt="CIBC Logo"
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-purple">CIBC</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <ColorfulBadge variant="purple" className="text-sm">
                            Analytics Consultant Intern
                          </ColorfulBadge>
                          <span className="text-sm text-gray-500">Jan 2025 – May 2025</span>
                        </div>
                      </div>
                      <p className="text-gray-500">West Lafayette, IN</p>
                      <ul className="pl-5 mt-2 space-y-2 text-gray-500 list-disc">
                        <li>
                          Built a cloud-based Python pipeline using LLMs to extract and standardize SEC 10-K filings.
                        </li>
                        <li>
                          Implemented a 2-stage LLM refinement system with human-in-the-loop quality control and anomaly
                          detection.
                        </li>
                        <li>
                          Ran A/B experiments across various LLMs to assess cost-efficiency and select the optimal
                          model.
                        </li>
                      </ul>
                    </div>
                  </div>
                </AnimatedElement>
                <AnimatedElement variant="fadeInLeft" delay={0.2}>
                  <div className="relative pl-8 border-l-2 border-purple">
                    <div className="absolute w-4 h-4 bg-purple rounded-full -left-[9px] top-1"></div>
                    <div className="space-y-2">
                      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 overflow-hidden rounded-full bg-purple/10 flex items-center justify-center">
                            <img
                              src="/placeholder.svg?height=40&width=40&text=Genpact"
                              alt="Genpact Logo"
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-purple">Genpact</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <ColorfulBadge variant="purple" className="text-sm">
                            Business Analyst, Assistant Manager
                          </ColorfulBadge>
                          <span className="text-sm text-gray-500">July 2023 – July 2024</span>
                        </div>
                      </div>
                      <p className="text-gray-500">Gurgaon, Haryana (India)</p>
                      <ul className="pl-5 mt-2 space-y-2 text-gray-500 list-disc">
                        <li>
                          Leveraged R to design data-driven strategies for optimizing pharmaceutical call planning and
                          driving a 1.5% quarterly sales growth.
                        </li>
                        <li>
                          Collaborated with a team of 6 analysts to define sales territories across US for effective
                          product promotion.
                        </li>
                        <li>
                          Conducted A/B tests to evaluate promotional campaign effectiveness, leading to optimized call
                          plan creation, reducing delivery time by 25% for 13 sales teams.
                        </li>
                      </ul>
                    </div>
                  </div>
                </AnimatedElement>
                <AnimatedElement variant="fadeInLeft" delay={0.3}>
                  <div className="relative pl-8 border-l-2 border-purple">
                    <div className="absolute w-4 h-4 bg-purple rounded-full -left-[9px] top-1"></div>
                    <div className="space-y-2">
                      <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 overflow-hidden rounded-full bg-purple/10 flex items-center justify-center">
                            <img
                              src="/placeholder.svg?height=40&width=40&text=ZS"
                              alt="ZS Associates Logo"
                              className="w-8 h-8 object-contain"
                            />
                          </div>
                          <h3 className="text-xl font-bold text-purple">ZS Associates</h3>
                        </div>
                        <div className="flex items-center gap-2">
                          <ColorfulBadge variant="purple" className="text-sm">
                            Business Associate Consultant
                          </ColorfulBadge>
                          <span className="text-sm text-gray-500">June 2021 – July 2023</span>
                        </div>
                      </div>
                      <p className="text-gray-500">Gurgaon, Haryana (India)</p>
                      <ul className="pl-5 mt-2 space-y-2 text-gray-500 list-disc">
                        <li>
                          Translated complex datasets into actionable insights, driving strategic decisions and
                          improving business outcomes.
                        </li>
                        <li>
                          Collaborated with cross-functional teams spearheading the development of a scalable BI tool on
                          Tableau, resulting in a 10% reduction in project timelines.
                        </li>
                        <li>
                          Presented stakeholders with automated data workflows on DSS and Alteryx, streamlining BI
                          report updates.
                        </li>
                        <li>
                          Engineered an automated data QC pipeline and secured stakeholder approval for team-wide
                          implementation.
                        </li>
                        <li>
                          Contextualized extensive data volumes from multiple sources (Snowflake, S3, etc.) using
                          Python.
                        </li>
                      </ul>
                    </div>
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <AnimatedElement variant="fadeInUp">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <ColorfulBadge variant="purple">Projects</ColorfulBadge>
                  <GradientHeading as="h2" className="text-3xl sm:text-4xl">
                    Academic Projects
                  </GradientHeading>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Showcasing my academic research and project work.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            <div className="grid gap-6 mt-8 md:grid-cols-3 lg:gap-8">
              <AnimatedElement variant="fadeInUp" delay={0.1}>
<<<<<<< HEAD
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="h-48 bg-purple/5 overflow-hidden relative">
=======
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                  <CardContent className="p-0">
                    <div className="h-48 bg-purple/5 overflow-hidden relative">
                      <div className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md">
                        <img
                          src="/placeholder.svg?height=30&width=30&text=RAG"
                          alt="RAG Logo"
                          className="w-6 h-6 object-contain"
                        />
                      </div>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                      <ParallaxSection speed={0.05} direction="down">
                        <img
                          src="/placeholder.svg?height=200&width=400&text=Corpus+Key+RAG"
                          alt="Corpus Key RAG Project"
                          className="object-cover w-full h-full transition-transform hover:scale-110"
                        />
                      </ParallaxSection>
                    </div>
<<<<<<< HEAD
                    <div className="p-6 flex flex-col flex-grow">
=======
                    <div className="p-6">
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                      <h3 className="text-xl font-bold text-purple">Corpus Key RAG</h3>
                      <p className="text-sm text-gray-500">Under Prof John Burr</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {["RAG", "BERT", "NLP"].map((tag) => (
                          <ColorfulBadge key={tag} variant="purple">
                            {tag}
                          </ColorfulBadge>
                        ))}
                      </div>
<<<<<<< HEAD
                      <p className="mt-4 text-gray-500 flex-grow">
                        Consulted on optimizing the RAG architecture of the All-Day TA chatbot for Purdue students.
                        Recommended and deployed a Multi-Headed RAG framework using BERT embeddings.
                      </p>
                      <div className="flex gap-2 mt-4 pt-2 border-t border-gray-100">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link href="https://github.com/your-username/corpus-key-rag" target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 mr-2"
                            >
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            GitHub
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link href="https://drive.google.com/file/d/your-corpus-key-rag-presentation" target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 mr-2"
                            >
                              <path d="M2 16V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
                              <path d="M6 13v-2" />
                              <path d="M10 13V8" />
                              <path d="M14 13v-3" />
                              <path d="M18 13v-1" />
                            </svg>
                            Presentation
                          </Link>
                        </Button>
                      </div>
=======
                      <p className="mt-4 text-gray-500">
                        Consulted on optimizing the RAG architecture of the All-Day TA chatbot for Purdue students.
                        Recommended and deployed a Multi-Headed RAG framework using BERT embeddings.
                      </p>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
              <AnimatedElement variant="fadeInUp" delay={0.2}>
<<<<<<< HEAD
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="h-48 bg-purple/5 overflow-hidden relative">
=======
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                  <CardContent className="p-0">
                    <div className="h-48 bg-purple/5 overflow-hidden relative">
                      <div className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md">
                        <img
                          src="/placeholder.svg?height=30&width=30&text=AI"
                          alt="AI Logo"
                          className="w-6 h-6 object-contain"
                        />
                      </div>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                      <ParallaxSection speed={0.05} direction="down">
                        <img
                          src="/placeholder.svg?height=200&width=400&text=Doc2Deck"
                          alt="Doc2Deck Project"
                          className="object-cover w-full h-full transition-transform hover:scale-110"
                        />
                      </ParallaxSection>
                    </div>
<<<<<<< HEAD
                    <div className="p-6 flex flex-col flex-grow">
=======
                    <div className="p-6">
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                      <h3 className="text-xl font-bold text-purple">Doc2Deck</h3>
                      <p className="text-sm text-gray-500">Under Prof Rohit Aggarwal</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {["AI", "LLM", "Claude", "GPT-4"].map((tag) => (
                          <ColorfulBadge key={tag} variant="purple">
                            {tag}
                          </ColorfulBadge>
                        ))}
                      </div>
<<<<<<< HEAD
                      <p className="mt-4 text-gray-500 flex-grow">
                        Built an AI-powered pipeline to convert Word documents into PowerPoint presentations using a
                        modular, agentic architecture with LlamaParse, Claude, and GPT-4.
                      </p>
                      <div className="flex gap-2 mt-4 pt-2 border-t border-gray-100">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link href="https://github.com/your-username/doc2deck" target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 mr-2"
                            >
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            GitHub
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link href="https://drive.google.com/file/d/your-doc2deck-presentation" target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 mr-2"
                            >
                              <path d="M2 16V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
                              <path d="M6 13v-2" />
                              <path d="M10 13V8" />
                              <path d="M14 13v-3" />
                              <path d="M18 13v-1" />
                            </svg>
                            Presentation
                          </Link>
                        </Button>
                      </div>
=======
                      <p className="mt-4 text-gray-500">
                        Built an AI-powered pipeline to convert Word documents into PowerPoint presentations using a
                        modular, agentic architecture with LlamaParse, Claude, and GPT-4.
                      </p>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
              <AnimatedElement variant="fadeInUp" delay={0.3}>
<<<<<<< HEAD
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="h-48 bg-purple/5 overflow-hidden relative">
=======
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                  <CardContent className="p-0">
                    <div className="h-48 bg-purple/5 overflow-hidden relative">
                      <div className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md">
                        <img
                          src="/placeholder.svg?height=30&width=30&text=ML"
                          alt="ML Logo"
                          className="w-6 h-6 object-contain"
                        />
                      </div>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                      <ParallaxSection speed={0.05} direction="down">
                        <img
                          src="/placeholder.svg?height=200&width=400&text=Sales+Forecasting"
                          alt="Sales Forecasting Project"
                          className="object-cover w-full h-full transition-transform hover:scale-110"
                        />
                      </ParallaxSection>
                    </div>
<<<<<<< HEAD
                    <div className="p-6 flex flex-col flex-grow">
=======
                    <div className="p-6">
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                      <h3 className="text-xl font-bold text-purple">Sales Forecasting and Consumer Segmentation</h3>
                      <p className="text-sm text-gray-500">Primal Beef Market</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {["Linear Regression", "Random Forest", "XGBoost", "Segmentation"].map((tag) => (
                          <ColorfulBadge key={tag} variant="purple">
                            {tag}
                          </ColorfulBadge>
                        ))}
                      </div>
<<<<<<< HEAD
                      <p className="mt-4 text-gray-500 flex-grow">
                        Analyzed the Primal Beef Market to develop predictive sales models and segment consumers. Built
                        models for sales forecasting with key insights on targeted promotions.
                      </p>
                      <div className="flex gap-2 mt-4 pt-2 border-t border-gray-100">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link href="https://github.com/your-username/sales-forecasting" target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 mr-2"
                            >
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            GitHub
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link
                            href="https://drive.google.com/file/d/your-sales-forecasting-presentation"
                            target="_blank"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 mr-2"
                            >
                              <path d="M2 16V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
                              <path d="M6 13v-2" />
                              <path d="M10 13V8" />
                              <path d="M14 13v-3" />
                              <path d="M18 13v-1" />
                            </svg>
                            Presentation
                          </Link>
                        </Button>
                      </div>
=======
                      <p className="mt-4 text-gray-500">
                        Analyzed the Primal Beef Market to develop predictive sales models and segment consumers. Built
                        models for sales forecasting with key insights on targeted promotions.
                      </p>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
              <AnimatedElement variant="fadeInUp" delay={0.4}>
<<<<<<< HEAD
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="h-48 bg-purple/5 overflow-hidden relative">
=======
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                  <CardContent className="p-0">
                    <div className="h-48 bg-purple/5 overflow-hidden relative">
                      <div className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md">
                        <img
                          src="/placeholder.svg?height=30&width=30&text=Tableau"
                          alt="Tableau Logo"
                          className="w-6 h-6 object-contain"
                        />
                      </div>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                      <ParallaxSection speed={0.05} direction="down">
                        <img
                          src="/placeholder.svg?height=200&width=400&text=Data+Visualization"
                          alt="Data Visualization Project"
                          className="object-cover w-full h-full transition-transform hover:scale-110"
                        />
                      </ParallaxSection>
                    </div>
<<<<<<< HEAD
                    <div className="p-6 flex flex-col flex-grow">
=======
                    <div className="p-6">
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                      <h3 className="text-xl font-bold text-purple">From Wealth to Well Being</h3>
                      <p className="text-sm text-gray-500">Data Visualization Tableau Project</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {["Tableau", "Data Storytelling", "Interactive Dashboards", "Visualization"].map((tag) => (
                          <ColorfulBadge key={tag} variant="purple">
                            {tag}
                          </ColorfulBadge>
                        ))}
                      </div>
<<<<<<< HEAD
                      <p className="mt-4 text-gray-500 flex-grow">
                        Created interactive dashboards combining data-driven insights with storytelling to analyze
                        global disparities in economic growth, healthcare, and education investments.
                      </p>
                      <div className="flex gap-2 mt-4 pt-2 border-t border-gray-100">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link href="https://drive.google.com/file/d/your-tableau-dashboard-pdf" target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 mr-2"
                            >
                              <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                              <polyline points="14 2 14 8 20 8" />
                              <path d="M9 13h6" />
                              <path d="M9 17h6" />
                              <path d="M9 9h1" />
                            </svg>
                            Tableau Dashboard
                          </Link>
                        </Button>
                      </div>
=======
                      <p className="mt-4 text-gray-500">
                        Created interactive dashboards combining data-driven insights with storytelling to analyze
                        global disparities in economic growth, healthcare, and education investments.
                      </p>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
              <AnimatedElement variant="fadeInUp" delay={0.5}>
<<<<<<< HEAD
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="h-48 bg-purple/5 overflow-hidden relative">
=======
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                  <CardContent className="p-0">
                    <div className="h-48 bg-purple/5 overflow-hidden relative">
                      <div className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md">
                        <img
                          src="/placeholder.svg?height=30&width=30&text=SAS"
                          alt="SAS Logo"
                          className="w-6 h-6 object-contain"
                        />
                      </div>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                      <ParallaxSection speed={0.05} direction="down">
                        <img
                          src="/placeholder.svg?height=200&width=400&text=Bankruptcy+Prediction"
                          alt="Bankruptcy Prediction Project"
                          className="object-cover w-full h-full transition-transform hover:scale-110"
                        />
                      </ParallaxSection>
                    </div>
<<<<<<< HEAD
                    <div className="p-6 flex flex-col flex-grow">
=======
                    <div className="p-6">
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                      <h3 className="text-xl font-bold text-purple">Bankruptcy Prediction Modelling</h3>
                      <p className="text-sm text-gray-500">Purdue University</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {["SAS", "Gradient Boosting", "Neural Networks", "LASSO"].map((tag) => (
                          <ColorfulBadge key={tag} variant="purple">
                            {tag}
                          </ColorfulBadge>
                        ))}
                      </div>
<<<<<<< HEAD
                      <p className="mt-4 text-gray-500 flex-grow">
                        Built an ensemble modeling approach combining Gradient Boosting, Neural Networks, and LASSO
                        regression within SAS EM, achieving 94.15% accuracy on test data.
                      </p>
                      <div className="flex gap-2 mt-4 pt-2 border-t border-gray-100">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link href="https://github.com/your-username/bankruptcy-prediction" target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 mr-2"
                            >
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            GitHub
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link
                            href="https://drive.google.com/file/d/your-bankruptcy-prediction-presentation"
                            target="_blank"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 mr-2"
                            >
                              <path d="M2 16V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
                              <path d="M6 13v-2" />
                              <path d="M10 13V8" />
                              <path d="M14 13v-3" />
                              <path d="M18 13v-1" />
                            </svg>
                            Presentation
                          </Link>
                        </Button>
                      </div>
=======
                      <p className="mt-4 text-gray-500">
                        Built an ensemble modeling approach combining Gradient Boosting, Neural Networks, and LASSO
                        regression within SAS EM, achieving 94.15% accuracy on test data.
                      </p>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
              <AnimatedElement variant="fadeInUp" delay={0.6}>
<<<<<<< HEAD
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    <div className="h-48 bg-purple/5 overflow-hidden relative">
=======
                <Card className="overflow-hidden hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                  <CardContent className="p-0">
                    <div className="h-48 bg-purple/5 overflow-hidden relative">
                      <div className="absolute top-2 right-2 z-10 bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-md">
                        <img
                          src="/placeholder.svg?height=30&width=30&text=NLP"
                          alt="NLP Logo"
                          className="w-6 h-6 object-contain"
                        />
                      </div>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                      <ParallaxSection speed={0.05} direction="down">
                        <img
                          src="/placeholder.svg?height=200&width=400&text=Disaster+Tweets"
                          alt="Disaster Tweets Project"
                          className="object-cover w-full h-full transition-transform hover:scale-110"
                        />
                      </ParallaxSection>
                    </div>
<<<<<<< HEAD
                    <div className="p-6 flex flex-col flex-grow">
=======
                    <div className="p-6">
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                      <h3 className="text-xl font-bold text-purple">Classifying Disaster Tweets</h3>
                      <p className="text-sm text-gray-500">Purdue University</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {["NLP", "LSTM", "GRU", "BERT"].map((tag) => (
                          <ColorfulBadge key={tag} variant="purple">
                            {tag}
                          </ColorfulBadge>
                        ))}
                      </div>
<<<<<<< HEAD
                      <p className="mt-4 text-gray-500 flex-grow">
                        Classified disaster-related tweets using an ensemble model (LSTM, GRU) and a BERT-based model,
                        achieving an F1 score of 0.83 on a dataset of 10k+ tweets.
                      </p>
                      <div className="flex gap-2 mt-4 pt-2 border-t border-gray-100">
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link href="https://github.com/your-username/disaster-tweets" target="_blank">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 mr-2"
                            >
                              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                              <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                            GitHub
                          </Link>
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link
                            href="https://drive.google.com/file/d/your-disaster-tweets-presentation"
                            target="_blank"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              className="w-4 h-4 mr-2"
                            >
                              <path d="M2 16V8a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2Z" />
                              <path d="M6 13v-2" />
                              <path d="M10 13V8" />
                              <path d="M14 13v-3" />
                              <path d="M18 13v-1" />
                            </svg>
                            Presentation
                          </Link>
                        </Button>
                      </div>
=======
                      <p className="mt-4 text-gray-500">
                        Classified disaster-related tweets using an ensemble model (LSTM, GRU) and a BERT-based model,
                        achieving an F1 score of 0.83 on a dataset of 10k+ tweets.
                      </p>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <AnimatedElement variant="fadeInUp">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <ColorfulBadge variant="purple">Education</ColorfulBadge>
                  <GradientHeading as="h2" className="text-3xl sm:text-4xl">
                    Academic Background
                  </GradientHeading>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    My educational journey and academic achievements.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            <div className="grid gap-8 mt-8 md:grid-cols-2 lg:gap-12">
              <AnimatedElement variant="fadeInLeft" delay={0.1}>
<<<<<<< HEAD
                <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="space-y-4 h-full">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
=======
                <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 overflow-hidden rounded-full bg-purple/10 flex items-center justify-center">
                            <img
                              src="/placeholder.svg?height=48&width=48&text=Purdue"
                              alt="Purdue Logo"
                              className="w-10 h-10 object-contain"
                            />
                          </div>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                          <h3 className="text-xl font-bold text-purple">Purdue University</h3>
                        </div>
                        <p className="text-gray-500">Daniels School of Business</p>
                        <div className="flex items-center gap-2">
                          <ColorfulBadge variant="purple">GPA 3.78/4.0</ColorfulBadge>
                          <ColorfulBadge variant="purple">August 2025</ColorfulBadge>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple">
                          Master of Business Analytics and Information Management
                        </h4>
                        <p className="text-sm text-gray-500">
                          Graduate Research Assistant, Strategic Management Department
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple">Relevant Coursework</h4>
                        <p className="text-gray-500">
                          Business Analytics, Data Mining, AI for Business Decisions, Machine Learning, Big Data and
                          MLOps
                        </p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple" />
                        <span className="text-sm text-gray-500">West Lafayette, IN</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
              <AnimatedElement variant="fadeInRight" delay={0.1}>
<<<<<<< HEAD
                <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="space-y-4 h-full">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
=======
                <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-center gap-3">
                          <div className="w-12 h-12 overflow-hidden rounded-full bg-purple/10 flex items-center justify-center">
                            <img
                              src="/placeholder.svg?height=48&width=48&text=NIT"
                              alt="NIT Logo"
                              className="w-10 h-10 object-contain"
                            />
                          </div>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                          <h3 className="text-xl font-bold text-purple">National Institute of Technology</h3>
                        </div>
                        <p className="text-gray-500">Electronics and Communication Engineering</p>
                        <div className="flex items-center gap-2">
                          <ColorfulBadge variant="purple">GPA 3.5/4.0</ColorfulBadge>
                          <ColorfulBadge variant="purple">May 2021</ColorfulBadge>
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-purple">Bachelor of Technology</h4>
                        <p className="text-sm text-gray-500">Electronics and Communication Engineering</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-purple" />
                        <span className="text-sm text-gray-500">Hamirpur, HP (India)</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Awards & Certifications Section */}
        <section className="py-16 bg-gray-50">
          <SectionToggle
            awardsContent={
              <div className="grid gap-6 mt-8 md:grid-cols-3">
                <AnimatedElement variant="fadeInUp" delay={0.1}>
                  <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                    <CardContent className="p-6 flex flex-col items-center h-full">
                      <div className="flex flex-col items-center space-y-2 text-center h-full">
                        <div className="p-2 bg-purple/10 rounded-full">
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
                            className="w-6 h-6 text-purple"
                          >
                            <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
                            <circle cx="12" cy="8" r="7" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-purple">Beta Gamma Sigma Honor</h3>
                        <p className="text-sm text-gray-500">
                          Recognized as a top business student at Purdue University for academic excellence.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2 border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link href="https://drive.google.com/file/d/your-beta-gamma-sigma-link" target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Certificate
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
                <AnimatedElement variant="fadeInUp" delay={0.2}>
                  <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                    <CardContent className="p-6 flex flex-col items-center h-full">
                      <div className="flex flex-col items-center space-y-2 text-center h-full">
                        <div className="p-2 bg-purple/10 rounded-full">
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
                            className="w-6 h-6 text-purple"
                          >
                            <path d="M12.5 2h-1V1h1z" />
                            <path d="M18 7v4" />
                            <path d="M15 11V7.5a3.5 3.5 0 0 0-7 0V11" />
                            <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-purple">Employee of the Quarter</h3>
                        <p className="text-sm text-gray-500">
                          Earned Employee of the Quarter at Genpact for exceptional performance.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
                <AnimatedElement variant="fadeInUp" delay={0.3}>
                  <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                    <CardContent className="p-6 flex flex-col items-center h-full">
                      <div className="flex flex-col items-center space-y-2 text-center h-full">
                        <div className="p-2 bg-purple/10 rounded-full">
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
                            className="w-6 h-6 text-purple"
                          >
                            <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                            <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                            <path d="M4 22h16" />
                            <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                            <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                            <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-purple">Standout Performer</h3>
                        <p className="text-sm text-gray-500">
                          Recognized as Standout Performer at ZS Associates for excellence in project delivery.
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </div>
            }
            certificationsContent={
              <div className="grid gap-6 mt-8 md:grid-cols-3">
                <AnimatedElement variant="fadeInUp" delay={0.1}>
                  <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                    <CardContent className="p-6 flex flex-col items-center h-full">
                      <div className="flex flex-col items-center space-y-2 text-center h-full">
                        <div className="p-2 bg-purple/10 rounded-full">
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
                            className="w-6 h-6 text-purple"
                          >
                            <rect width="18" height="18" x="3" y="3" rx="2" />
                            <path d="M7 7h10" />
                            <path d="M7 12h10" />
                            <path d="M7 17h10" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-purple">Tableau Desktop Specialist</h3>
                        <p className="text-sm text-gray-500">
                          Certified in creating and publishing Tableau visualizations and dashboards.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2 border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link href="https://drive.google.com/file/d/your-tableau-certificate-link" target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Certificate
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
                <AnimatedElement variant="fadeInUp" delay={0.2}>
                  <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                    <CardContent className="p-6 flex flex-col items-center h-full">
                      <div className="flex flex-col items-center space-y-2 text-center h-full">
                        <div className="p-2 bg-purple/10 rounded-full">
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
                            className="w-6 h-6 text-purple"
                          >
                            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                            <polyline points="3.29 7 12 12 20.71 7" />
                            <line x1="12" x2="12" y1="22" y2="12" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-purple">Azure AI-900: Microsoft Azure AI Fundamentals</h3>
                        <p className="text-sm text-gray-500">
                          Certified in AI concepts and Microsoft Azure AI services, with an impressive score of
                          972/1000.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2 border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link href="https://drive.google.com/file/d/your-azure-ai-certificate-link" target="_blank">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Certificate
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
                <AnimatedElement variant="fadeInUp" delay={0.3}>
                  <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform h-full">
                    <CardContent className="p-6 flex flex-col items-center h-full">
                      <div className="flex flex-col items-center space-y-2 text-center h-full">
                        <div className="p-2 bg-purple/10 rounded-full">
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
                            className="w-6 h-6 text-purple"
                          >
                            <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                            <polyline points="14 2 14 8 20 8" />
                            <path d="M12 18v-6" />
                            <path d="M8 18v-1" />
                            <path d="M16 18v-3" />
                          </svg>
                        </div>
                        <h3 className="text-xl font-bold text-purple">Azure AZ-900: Microsoft Azure Fundamentals</h3>
                        <p className="text-sm text-gray-500">
                          Certified in cloud concepts, Azure services, and Azure management with a score of 871/1000.
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          className="mt-2 border-purple text-purple hover:bg-purple/10"
                          asChild
                        >
                          <Link
                            href="https://drive.google.com/file/d/your-azure-fundamentals-certificate-link"
                            target="_blank"
                          >
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Certificate
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              </div>
            }
          />
        </section>

        {/* Resume Section */}
        <section className="py-16 bg-white">
=======
        {/* Skills Section */}
        <section id="skills" className="py-16 bg-white">
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
          <div className="container px-4 mx-auto md:px-6">
            <AnimatedElement variant="fadeInUp">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
<<<<<<< HEAD
                  <ColorfulBadge variant="purple">Resume</ColorfulBadge>
                  <GradientHeading as="h2" className="text-3xl sm:text-4xl">
                    Download My Resume
                  </GradientHeading>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Get a comprehensive overview of my skills, experience, and qualifications.
=======
                  <ColorfulBadge variant="purple">Skills</ColorfulBadge>
                  <GradientHeading as="h2" className="text-3xl sm:text-4xl">
                    Technical Skills & Expertise
                  </GradientHeading>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    My professional toolkit and technical capabilities.
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                  </p>
                </div>
              </div>
            </AnimatedElement>
<<<<<<< HEAD
            <div className="flex justify-center mt-8">
              <Button
                size="lg"
                className="hover:scale-105 transition-transform bg-gradient-primary hover:opacity-90 px-8 py-6 text-lg"
                asChild
              >
                <Link href="/Mokshda-Sharma-Resume.pdf" target="_blank">
                  <Download className="w-6 h-6 mr-3" />
                  Download Resume
                </Link>
              </Button>
=======
            <div className="grid gap-6 mt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  title: "Data Visualization",
                  description: "Tableau, Power BI",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <path d="M3 3v18h18" />
                      <path d="m19 9-5 5-4-4-3 3" />
                    </svg>
                  ),
                  delay: 0.1,
                },
                {
                  title: "Programming",
                  description: "Python, SQL, R",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <path d="m21 2-2 2m-7.61 7.61a5.5 5.5 0 1 1-7.778 7.778 5.5 5.5 0 0 1 7.777-7.777zm0 0L15.5 7.5m0 0 3 3L22 7l-3-3m-3.5 3.5L19 4" />
                    </svg>
                  ),
                  delay: 0.15,
                },
                {
                  title: "AI & ML",
                  description: "RAG, Predictive Modeling",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      <path d="m9 12 2 2 4-4" />
                    </svg>
                  ),
                  delay: 0.2,
                },
                {
                  title: "Business Strategy",
                  description: "A/B Testing, Analytics",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  ),
                  delay: 0.25,
                },
                {
                  title: "Data Processing",
                  description: "Alteryx, DSS",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <rect width="18" height="18" x="3" y="3" rx="2" />
                      <path d="M7 7h10" />
                      <path d="M7 12h10" />
                      <path d="M7 17h10" />
                    </svg>
                  ),
                  delay: 0.35,
                },
                {
                  title: "Cloud & Databases",
                  description: "Snowflake, S3",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <path d="M20 7h-3a2 2 0 0 1-2-2V2" />
                      <path d="M16 2H4a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a1 1 0 0 0-1-1" />
                      <path d="M9 13h6" />
                      <path d="M12 10v6" />
                    </svg>
                  ),
                  delay: 0.4,
                },
                {
                  title: "Reporting",
                  description: "BI Tools, Dashboards",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z" />
                      <polyline points="14 2 14 8 20 8" />
                      <path d="M12 18v-6" />
                      <path d="M8 18v-1" />
                      <path d="M16 18v-3" />
                    </svg>
                  ),
                  delay: 0.45,
                },
                {
                  title: "LLM & NLP",
                  description: "Claude, GPT-4, BERT",
                  icon: (
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
                      className="w-6 h-6 text-purple"
                    >
                      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                    </svg>
                  ),
                  delay: 0.5,
                },
              ].map((skill, index) => (
                <AnimatedElement key={index} variant="fadeInUp" delay={skill.delay}>
                  <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="p-2 bg-purple/10 rounded-full">{skill.icon}</div>
                        <h3 className="text-xl font-bold text-purple">{skill.title}</h3>
                        <p className="text-sm text-gray-500">{skill.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedElement>
              ))}
            </div>
          </div>
        </section>

        {/* Honors Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <AnimatedElement variant="fadeInUp">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <ColorfulBadge variant="purple">Honors</ColorfulBadge>
                  <GradientHeading as="h2" className="text-3xl sm:text-4xl">
                    Awards & Recognition
                  </GradientHeading>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Achievements and recognition throughout my academic and professional career.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            <div className="grid gap-6 mt-8 md:grid-cols-3">
              <AnimatedElement variant="fadeInUp" delay={0.1}>
                <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-2 text-center">
                      <div className="p-2 bg-purple/10 rounded-full">
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
                          className="w-6 h-6 text-purple"
                        >
                          <path d="M8.21 13.89 7 23l5-3 5 3-1.21-9.12" />
                          <circle cx="12" cy="8" r="7" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-purple">Beta Gamma Sigma Honor</h3>
                      <p className="text-sm text-gray-500">
                        Recognized as a top business student at Purdue University for academic excellence.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
              <AnimatedElement variant="fadeInUp" delay={0.2}>
                <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-2 text-center">
                      <div className="p-2 bg-purple/10 rounded-full">
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
                          className="w-6 h-6 text-purple"
                        >
                          <path d="M12.5 2h-1V1h1z" />
                          <path d="M18 7v4" />
                          <path d="M15 11V7.5a3.5 3.5 0 0 0-7 0V11" />
                          <path d="M3 11h18v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-purple">Employee of the Quarter</h3>
                      <p className="text-sm text-gray-500">
                        Earned Employee of the Quarter at Genpact for exceptional performance.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
              <AnimatedElement variant="fadeInUp" delay={0.3}>
                <Card className="hover:shadow-lg transition-shadow border border-purple/10 hover:scale-105 transition-transform">
                  <CardContent className="p-6">
                    <div className="flex flex-col items-center space-y-2 text-center">
                      <div className="p-2 bg-purple/10 rounded-full">
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
                          className="w-6 h-6 text-purple"
                        >
                          <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                          <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                          <path d="M4 22h16" />
                          <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
                          <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
                          <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-purple">Standout Performer</h3>
                      <p className="text-sm text-gray-500">
                        Recognized as Standout Performer at ZS Associates for excellence in project delivery.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedElement>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-white">
          <div className="container px-4 mx-auto md:px-6">
            <AnimatedElement variant="fadeInUp">
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <ColorfulBadge variant="purple">Contact</ColorfulBadge>
                  <GradientHeading as="h2" className="text-3xl sm:text-4xl">
                    Get In Touch
                  </GradientHeading>
                  <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                    Feel free to reach out for collaborations or just a friendly chat.
                  </p>
                </div>
              </div>
            </AnimatedElement>
            <div className="grid gap-8 mt-8 md:grid-cols-2 lg:gap-12">
              <AnimatedElement variant="fadeInLeft" delay={0.1}>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple/10 rounded-full">
                      <Mail className="w-6 h-6 text-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple">Email</h3>
                      <p className="text-gray-500">
                        <a
                          href="mailto:mokshda879@gmail.com"
                          className="hover:underline hover:text-purple transition-colors"
                        >
                          mokshda879@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple/10 rounded-full">
                      <Phone className="w-6 h-6 text-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple">Phone</h3>
                      <p className="text-gray-500">
                        <a href="tel:7657670302" className="hover:underline hover:text-purple transition-colors">
                          (765) 767-0302
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple/10 rounded-full">
                      <Linkedin className="w-6 h-6 text-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple">LinkedIn</h3>
                      <p className="text-gray-500">
                        <a
                          href="https://www.linkedin.com/in/mokshda-sharma-b740a7165"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline hover:text-purple transition-colors"
                        >
                          linkedin.com/in/mokshda-sharma-b740a7165
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple/10 rounded-full">
                      <MapPin className="w-6 h-6 text-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple">Location</h3>
                      <p className="text-gray-500">West Lafayette, IN</p>
                    </div>
                  </div>
<<<<<<< HEAD
=======
                  <div className="flex items-center gap-4">
                    <div className="p-2 bg-purple/10 rounded-full">
                      <Download className="w-6 h-6 text-purple" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-purple">Resume</h3>
                      <p className="text-gray-500">
                        <a
                          href="/Mokshda-Sharma-Resume.pdf"
                          target="_blank"
                          className="hover:underline hover:text-purple transition-colors"
                          rel="noreferrer"
                        >
                          Download my resume
                        </a>
                      </p>
                    </div>
                  </div>
>>>>>>> 61900030cdb8ac8c2ba2d208cc0a2bff15fcdef9
                </div>
              </AnimatedElement>
              <AnimatedElement variant="fadeInRight" delay={0.1}>
                <Card className="hover:shadow-lg transition-shadow border border-purple/10">
                  <CardContent className="p-6">
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Name
                        </label>
                        <input
                          id="name"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:border-purple"
                          placeholder="Your name"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:border-purple"
                          placeholder="Your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Message
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-300 focus:border-purple"
                          placeholder="Your message"
                        />
                      </div>
                      <Button className="w-full hover:scale-105 transition-transform bg-gradient-primary hover:opacity-90">
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </AnimatedElement>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t bg-gray-50">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Mokshda Sharma. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/mokshda-sharma-b740a7165"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-purple/10 hover:text-purple"
                >
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:mokshda879@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-purple/10 hover:text-purple"
                >
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="tel:7657670302">
                <Button
                  variant="ghost"
                  size="icon"
                  className="hover:scale-110 transition-transform hover:bg-purple/10 hover:text-purple"
                >
                  <Phone className="w-5 h-5" />
                  <span className="sr-only">Phone</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
