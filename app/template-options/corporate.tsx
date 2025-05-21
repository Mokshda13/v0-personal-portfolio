import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Download,
  FileText,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Trophy,
  User,
  Briefcase,
} from "lucide-react"

export default function CorporateTemplate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <Link href="/" className="text-xl font-bold text-gray-900">
            Mokshda Sharma
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#about" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Experience
            </Link>
            <Link href="#education" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Education
            </Link>
            <Link href="#projects" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Projects
            </Link>
            <Link href="#skills" className="text-sm font-medium text-gray-600 hover:text-gray-900">
              Skills
            </Link>
            <Link href="#contact" className="text-sm font-medium text-gray-600 hover:text-gray-900">
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
        <section className="py-20 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="grid gap-8 md:grid-cols-2 md:gap-12">
              <div className="flex flex-col justify-center space-y-4">
                <div>
                  <h1 className="text-3xl font-bold tracking-tighter text-gray-900 sm:text-4xl md:text-5xl">
                    Mokshda Sharma
                  </h1>
                  <p className="mt-2 text-xl text-gray-600">Data Analytics & Business Strategy Professional</p>
                </div>
                <p className="max-w-[600px] text-gray-600 md:text-xl">
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
        <section id="about" className="py-16">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-6 space-x-2">
                <User className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">About Me</h2>
              </div>
              <div className="p-6 bg-white border rounded-lg shadow-sm">
                <p className="text-gray-600">
                  Master's in Business Analytics student with expertise in data analytics and business strategy.
                  Experienced in delivering data-driven insights and supporting decision-making in roles such as Data
                  Analyst, Business Consultant, and Strategy Analyst.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="secondary">Tableau</Badge>
                  <Badge variant="secondary">Power BI</Badge>
                  <Badge variant="secondary">Python</Badge>
                  <Badge variant="secondary">SQL</Badge>
                  <Badge variant="secondary">R</Badge>
                  <Badge variant="secondary">Alteryx</Badge>
                  <Badge variant="secondary">RAG Techniques</Badge>
                  <Badge variant="secondary">Predictive Modeling</Badge>
                  <Badge variant="secondary">A/B Testing</Badge>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-6 space-x-2">
                <Briefcase className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Professional Experience</h2>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                      <CardTitle>Analytics Consultant Intern</CardTitle>
                      <Badge variant="outline">Jan 2025 – May 2025</Badge>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span className="font-medium">CIBC</span>
                      <span className="mx-2">•</span>
                      <span>West Lafayette, IN</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="pl-5 mt-2 space-y-1 text-gray-600 list-disc">
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
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                      <CardTitle>Business Analyst, Assistant Manager</CardTitle>
                      <Badge variant="outline">July 2023 – July 2024</Badge>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span className="font-medium">Genpact</span>
                      <span className="mx-2">•</span>
                      <span>Gurgaon, Haryana (India)</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="pl-5 mt-2 space-y-1 text-gray-600 list-disc">
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
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                      <CardTitle>Business Associate Consultant</CardTitle>
                      <Badge variant="outline">June 2021 – July 2023</Badge>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span className="font-medium">ZS Associates</span>
                      <span className="mx-2">•</span>
                      <span>Gurgaon, Haryana (India)</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="pl-5 mt-2 space-y-1 text-gray-600 list-disc">
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
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-6 space-x-2">
                <GraduationCap className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Education</h2>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                      <CardTitle>Purdue University</CardTitle>
                      <Badge>GPA 3.9/4.0</Badge>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span className="font-medium">Daniels School of Business</span>
                      <span className="mx-2">•</span>
                      <span>August 2025</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium text-gray-900">
                        Master of Business Analytics and Information Management
                      </p>
                      <p className="text-sm text-gray-600">
                        Graduate Research Assistant, Strategic Management Department
                      </p>
                      <div className="mt-2">
                        <p className="font-medium text-gray-900">Relevant Coursework:</p>
                        <p className="text-gray-600">
                          Business Analytics, Data Mining, AI for Business Decisions, Machine Learning, Big Data and
                          MLOps
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                      <CardTitle>National Institute of Technology</CardTitle>
                      <Badge>GPA 3.5/4.0</Badge>
                    </div>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span className="font-medium">Hamirpur, HP (India)</span>
                      <span className="mx-2">•</span>
                      <span>May 2021</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p className="font-medium text-gray-900">
                        Bachelor of Technology, Electronics and Communication Engineering
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-6 space-x-2">
                <FileText className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Academic Projects</h2>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Corpus Key RAG</CardTitle>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span>Under Prof John Burr</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">RAG</Badge>
                      <Badge variant="secondary">BERT</Badge>
                      <Badge variant="secondary">NLP</Badge>
                    </div>
                    <p className="text-gray-600">
                      Consulted on optimizing the RAG architecture of the All-Day TA chatbot for Purdue students.
                      Recommended and deployed a Multi-Headed RAG framework using BERT embeddings.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-2">
                    <CardTitle>Doc2Deck</CardTitle>
                    <div className="flex items-center mt-1 text-sm text-gray-500">
                      <span>Under Prof Rohit Aggarwal</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <Badge variant="secondary">AI</Badge>
                      <Badge variant="secondary">LLM</Badge>
                      <Badge variant="secondary">Claude</Badge>
                      <Badge variant="secondary">GPT-4</Badge>
                    </div>
                    <p className="text-gray-600">
                      Built an AI-powered pipeline to convert Word documents into PowerPoint presentations using a
                      modular, agentic architecture. Integrated LlamaParse for document parsing, Claude for topic-aware
                      segmentation, and GPT-4 for generating slide content. Optimized scalability through a hybrid LLM
                      strategy balancing accuracy and API cost.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-6 space-x-2">
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
                  className="w-5 h-5 text-primary"
                >
                  <path d="M3 3v18h18" />
                  <path d="m19 9-5 5-4-4-3 3" />
                </svg>
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Skills & Expertise</h2>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-900">Technical Skills</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="mb-1 text-sm font-medium text-gray-900">Data Visualization</p>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="outline">Tableau</Badge>
                            <Badge variant="outline">Power BI</Badge>
                          </div>
                        </div>
                        <div>
                          <p className="mb-1 text-sm font-medium text-gray-900">Programming</p>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="outline">Python</Badge>
                            <Badge variant="outline">SQL</Badge>
                            <Badge variant="outline">R</Badge>
                          </div>
                        </div>
                        <div>
                          <p className="mb-1 text-sm font-medium text-gray-900">AI & ML</p>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="outline">RAG</Badge>
                            <Badge variant="outline">Predictive Modeling</Badge>
                            <Badge variant="outline">LLMs</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-gray-900">Business Skills</h3>
                      <div className="space-y-3">
                        <div>
                          <p className="mb-1 text-sm font-medium text-gray-900">Analytics</p>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="outline">A/B Testing</Badge>
                            <Badge variant="outline">Business Intelligence</Badge>
                          </div>
                        </div>
                        <div>
                          <p className="mb-1 text-sm font-medium text-gray-900">Data Processing</p>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="outline">Alteryx</Badge>
                            <Badge variant="outline">DSS</Badge>
                          </div>
                        </div>
                        <div>
                          <p className="mb-1 text-sm font-medium text-gray-900">Cloud & Databases</p>
                          <div className="flex flex-wrap gap-1">
                            <Badge variant="outline">Snowflake</Badge>
                            <Badge variant="outline">S3</Badge>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Honors Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-6 space-x-2">
                <Trophy className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Honors & Awards</h2>
              </div>

              <Card>
                <CardContent className="p-6">
                  <ul className="pl-5 space-y-2 text-gray-600 list-disc">
                    <li>
                      Beta Gamma Sigma Honor – Recognized as a top business student at Purdue University for academic
                      excellence.
                    </li>
                    <li>Earned Employee of the Quarter at Genpact for exceptional performance.</li>
                    <li>Recognized as Standout Performer at ZS Associates for excellence in project delivery.</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center mb-6 space-x-2">
                <Mail className="w-5 h-5 text-primary" />
                <h2 className="text-2xl font-bold tracking-tight text-gray-900">Contact Me</h2>
              </div>

              <Card>
                <CardContent className="p-6">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                          <Mail className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">Email</h3>
                          <a href="mailto:mokshda879@gmail.com" className="text-sm text-gray-600 hover:underline">
                            mokshda879@gmail.com
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                          <Phone className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">Phone</h3>
                          <a href="tel:7657670302" className="text-sm text-gray-600 hover:underline">
                            (765) 767-0302
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                          <Linkedin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">LinkedIn</h3>
                          <a
                            href="https://www.linkedin.com/in/mokshda-sharma-b740a7165"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm text-gray-600 hover:underline"
                          >
                            linkedin.com/in/mokshda-sharma-b740a7165
                          </a>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                          <MapPin className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="text-sm font-medium text-gray-900">Location</h3>
                          <p className="text-sm text-gray-600">West Lafayette, IN</p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <form className="space-y-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium text-gray-900">
                            Name
                          </label>
                          <input id="name" className="w-full h-10 px-3 border rounded-md" placeholder="Your name" />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium text-gray-900">
                            Email
                          </label>
                          <input
                            id="email"
                            type="email"
                            className="w-full h-10 px-3 border rounded-md"
                            placeholder="Your email"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="message" className="text-sm font-medium text-gray-900">
                            Message
                          </label>
                          <textarea
                            id="message"
                            className="w-full h-32 p-3 border rounded-md"
                            placeholder="Your message"
                          />
                        </div>
                        <Button className="w-full">Send Message</Button>
                      </form>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t">
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
        </div>
      </footer>
    </div>
  )
}
