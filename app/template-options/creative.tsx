import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Download, ExternalLink, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function CreativeTemplate() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-black/80 backdrop-blur-md border-b border-white/10">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <Link href="/" className="text-xl font-bold">
            MS<span className="text-primary">.</span>
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#about" className="text-sm font-medium text-gray-400 hover:text-white">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium text-gray-400 hover:text-white">
              Experience
            </Link>
            <Link href="#projects" className="text-sm font-medium text-gray-400 hover:text-white">
              Projects
            </Link>
            <Link href="#education" className="text-sm font-medium text-gray-400 hover:text-white">
              Education
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-400 hover:text-white">
              Contact
            </Link>
          </nav>
          <Button
            variant="outline"
            size="sm"
            className="hidden border-white/20 text-white hover:bg-white/10 hover:text-white md:flex"
          >
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
          <Button variant="ghost" size="icon" className="text-white md:hidden">
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
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-black to-gray-900"></div>
          <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0,rgba(255,255,255,0)_50%)]"></div>
          <div className="container relative z-10 px-4 mx-auto md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                    Mokshda <span className="text-primary">Sharma</span>
                  </h1>
                  <p className="mt-2 text-xl text-gray-400">Data Analytics & Business Strategy Professional</p>
                </div>
                <p className="max-w-[600px] text-gray-400 md:text-xl">
                  Transforming complex data into actionable insights. Experienced in delivering data-driven strategies
                  that drive business growth and optimize decision-making processes.
                </p>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button className="bg-primary hover:bg-primary/90" asChild>
                    <Link href="#contact">
                      Contact Me
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                  <Button
                    variant="outline"
                    className="border-white/20 text-white hover:bg-white/10 hover:text-white"
                    asChild
                  >
                    <Link href="#experience">
                      View Experience
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
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                      <Linkedin className="w-5 h-5" />
                      <span className="sr-only">LinkedIn</span>
                    </Button>
                  </Link>
                  <Link href="mailto:mokshda879@gmail.com">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                      <Mail className="w-5 h-5" />
                      <span className="sr-only">Email</span>
                    </Button>
                  </Link>
                  <Link href="tel:7657670302">
                    <Button variant="ghost" size="icon" className="text-white hover:bg-white/10 hover:text-white">
                      <Phone className="w-5 h-5" />
                      <span className="sr-only">Phone</span>
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] rounded-full overflow-hidden border-4 border-primary/20">
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
        <section id="about" className="py-16 bg-gray-900">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm rounded-full bg-primary/20 text-primary">About Me</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Professional Profile</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  I'm a Master's in Business Analytics student with expertise in data analytics and business strategy. I
                  have experience in delivering data-driven insights and supporting decision-making in roles such as
                  Data Analyst, Business Consultant, and Strategy Analyst.
                </p>
              </div>
              <div className="w-full max-w-3xl py-4">
                <div className="grid gap-4 md:grid-cols-3">
                  <Card className="bg-gray-800 border-gray-700 text-white">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="p-2 bg-primary/20 rounded-full">
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
                        <h3 className="text-xl font-bold">Data Analysis</h3>
                        <p className="text-sm text-gray-400">
                          Expertise in Tableau, Power BI, Python, SQL, R, and Alteryx
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-800 border-gray-700 text-white">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="p-2 bg-primary/20 rounded-full">
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
                        <h3 className="text-xl font-bold">Business Strategy</h3>
                        <p className="text-sm text-gray-400">
                          Experience in delivering data-driven insights for strategic decisions
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="bg-gray-800 border-gray-700 text-white">
                    <CardContent className="p-6">
                      <div className="flex flex-col items-center space-y-2 text-center">
                        <div className="p-2 bg-primary/20 rounded-full">
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
                        <p className="text-sm text-gray-400">
                          Skilled in RAG Techniques, Predictive Modeling, and A/B Testing
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-black">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm rounded-full bg-primary/20 text-primary">Experience</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Professional Experience</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My professional journey across various roles in data analytics and business strategy.
                </p>
              </div>
            </div>
            <div className="grid gap-8 mt-8 md:grid-cols-1 lg:gap-12">
              <div className="space-y-8">
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                      <h3 className="text-xl font-bold">Analytics Consultant Intern</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-sm border-primary/30 text-primary">
                          CIBC
                        </Badge>
                        <span className="text-sm text-gray-400">Jan 2025 – May 2025</span>
                      </div>
                    </div>
                    <p className="text-gray-400">West Lafayette, IN</p>
                    <ul className="pl-5 mt-2 space-y-2 text-gray-400 list-disc">
                      <li>
                        Built a cloud-based Python pipeline using LLMs to extract and standardize SEC 10-K filings.
                      </li>
                      <li>
                        Implemented a 2-stage LLM refinement system with human-in-the-loop quality control and anomaly
                        detection.
                      </li>
                      <li>
                        Ran A/B experiments across various LLMs to assess cost-efficiency and select the optimal model.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                      <h3 className="text-xl font-bold">Business Analyst, Assistant Manager</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-sm border-primary/30 text-primary">
                          Genpact
                        </Badge>
                        <span className="text-sm text-gray-400">July 2023 – July 2024</span>
                      </div>
                    </div>
                    <p className="text-gray-400">Gurgaon, Haryana (India)</p>
                    <ul className="pl-5 mt-2 space-y-2 text-gray-400 list-disc">
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
                <div className="relative pl-8 border-l-2 border-primary/30">
                  <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-1"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col justify-between gap-2 md:flex-row md:items-center">
                      <h3 className="text-xl font-bold">Business Associate Consultant</h3>
                      <div className="flex items-center gap-2">
                        <Badge variant="outline" className="text-sm border-primary/30 text-primary">
                          ZS Associates
                        </Badge>
                        <span className="text-sm text-gray-400">June 2021 – July 2023</span>
                      </div>
                    </div>
                    <p className="text-gray-400">Gurgaon, Haryana (India)</p>
                    <ul className="pl-5 mt-2 space-y-2 text-gray-400 list-disc">
                      <li>
                        Translated complex datasets into actionable insights, driving strategic decisions and improving
                        business outcomes.
                      </li>
                      <li>
                        Collaborated with cross-functional teams spearheading the development of a scalable BI tool on
                        Tableau, resulting in a 10% reduction in project timelines.
                      </li>
                      <li>
                        Presented stakeholders with automated data workflows on DSS and Alteryx, streamlining BI report
                        updates.
                      </li>
                      <li>
                        Engineered an automated data QC pipeline and secured stakeholder approval for team-wide
                        implementation.
                      </li>
                      <li>
                        Contextualized extensive data volumes from multiple sources (Snowflake, S3, etc.) using Python.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-900">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm rounded-full bg-primary/20 text-primary">Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Academic Projects</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Showcasing my academic research and project work.
                </p>
              </div>
            </div>
            <div className="grid gap-6 mt-8 md:grid-cols-2 lg:gap-10">
              <Card className="overflow-hidden bg-gray-800 border-gray-700 text-white">
                <CardContent className="p-0">
                  <div className="h-48 bg-gray-700">
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Corpus Key RAG Project"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Corpus Key RAG</h3>
                    <p className="text-sm text-gray-400">Under Prof John Burr</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                        RAG
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                        BERT
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                        NLP
                      </Badge>
                    </div>
                    <p className="mt-4 text-gray-400">
                      Consulted on optimizing the RAG architecture of the All-Day TA chatbot for Purdue students.
                      Recommended and deployed a Multi-Headed RAG framework using BERT embeddings.
                    </p>
                    <Button variant="ghost" className="mt-4 text-primary hover:bg-primary/10" asChild>
                      <Link href="#">
                        View Project <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden bg-gray-800 border-gray-700 text-white">
                <CardContent className="p-0">
                  <div className="h-48 bg-gray-700">
                    <img
                      src="/placeholder.svg?height=200&width=400"
                      alt="Doc2Deck Project"
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold">Doc2Deck</h3>
                    <p className="text-sm text-gray-400">Under Prof Rohit Aggarwal</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                        AI
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                        LLM
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                        Claude
                      </Badge>
                      <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                        GPT-4
                      </Badge>
                    </div>
                    <p className="mt-4 text-gray-400">
                      Built an AI-powered pipeline to convert Word documents into PowerPoint presentations using a
                      modular, agentic architecture. Integrated LlamaParse for document parsing, Claude for topic-aware
                      segmentation, and GPT-4 for generating slide content.
                    </p>
                    <Button variant="ghost" className="mt-4 text-primary hover:bg-primary/10" asChild>
                      <Link href="#">
                        View Project <ExternalLink className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 bg-black">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm rounded-full bg-primary/20 text-primary">Education</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Academic Background</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  My educational journey and academic achievements.
                </p>
              </div>
            </div>
            <div className="grid gap-8 mt-8 md:grid-cols-2 lg:gap-12">
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">Purdue University</h3>
                      <p className="text-gray-400">Daniels School of Business</p>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-primary text-white">GPA 3.9/4.0</Badge>
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          August 2025
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Master of Business Analytics and Information Management</h4>
                      <p className="text-sm text-gray-400">
                        Graduate Research Assistant, Strategic Management Department
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Relevant Coursework</h4>
                      <p className="text-gray-400">
                        Business Analytics, Data Mining, AI for Business Decisions, Machine Learning, Big Data and MLOps
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">West Lafayette, IN</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-bold">National Institute of Technology</h3>
                      <p className="text-gray-400">Electronics and Communication Engineering</p>
                      <div className="flex items-center gap-2">
                        <Badge className="bg-primary text-white">GPA 3.5/4.0</Badge>
                        <Badge variant="outline" className="border-primary/30 text-primary">
                          May 2021
                        </Badge>
                      </div>
                    </div>
                    <div>
                      <h4 className="font-semibold">Bachelor of Technology</h4>
                      <p className="text-sm text-gray-400">Electronics and Communication Engineering</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-gray-400" />
                      <span className="text-sm text-gray-400">Hamirpur, HP (India)</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 bg-gray-900">
          <div className="container px-4 mx-auto md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block px-3 py-1 text-sm rounded-full bg-primary/20 text-primary">Contact</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Get In Touch</h2>
                <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Feel free to reach out for collaborations or just a friendly chat.
                </p>
              </div>
            </div>
            <div className="grid gap-8 mt-8 md:grid-cols-2 lg:gap-12">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Email</h3>
                    <p className="text-gray-400">
                      <a href="mailto:mokshda879@gmail.com" className="hover:text-primary">
                        mokshda879@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Phone</h3>
                    <p className="text-gray-400">
                      <a href="tel:7657670302" className="hover:text-primary">
                        (765) 767-0302
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <Linkedin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">LinkedIn</h3>
                    <p className="text-gray-400">
                      <a
                        href="https://www.linkedin.com/in/mokshda-sharma-b740a7165"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-primary"
                      >
                        linkedin.com/in/mokshda-sharma-b740a7165
                      </a>
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-primary/20 rounded-full">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">Location</h3>
                    <p className="text-gray-400">West Lafayette, IN</p>
                  </div>
                </div>
              </div>
              <Card className="bg-gray-800 border-gray-700 text-white">
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
                        className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        className="flex h-10 w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
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
                        className="flex min-h-[120px] w-full rounded-md border border-gray-700 bg-gray-800 px-3 py-2 text-sm ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        placeholder="Your message"
                      />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-white/10 bg-black">
        <div className="container px-4 mx-auto md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="text-center md:text-left">
              <p className="text-sm text-gray-400">
                &copy; {new Date().getFullYear()} Mokshda Sharma. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Link
                href="https://www.linkedin.com/in/mokshda-sharma-b740a7165"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                  <Linkedin className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:mokshda879@gmail.com">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
                  <Mail className="w-5 h-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
              <Link href="tel:7657670302">
                <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-white/10">
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
