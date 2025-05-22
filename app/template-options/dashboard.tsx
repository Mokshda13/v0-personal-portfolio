import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  Download,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Trophy,
  User,
} from "lucide-react"

export default function DashboardTemplate() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="fixed inset-y-0 left-0 z-10 hidden w-64 bg-white border-r lg:block">
        <div className="flex flex-col h-full">
          <div className="p-6 border-b">
            <h1 className="text-xl font-bold">Mokshda Sharma</h1>
            <p className="text-sm text-gray-500">Data Analytics Professional</p>
          </div>
          <nav className="flex-1 p-4 space-y-1 overflow-auto">
            <Link href="#about" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100">
              <User className="w-4 h-4 mr-2" />
              About
            </Link>
            <Link href="#experience" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100">
              <BriefcaseBusiness className="w-4 h-4 mr-2" />
              Experience
            </Link>
            <Link href="#projects" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100">
              <BookOpen className="w-4 h-4 mr-2" />
              Projects
            </Link>
            <Link href="#education" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100">
              <GraduationCap className="w-4 h-4 mr-2" />
              Education
            </Link>
            <Link href="#skills" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100">
              <BarChart3 className="w-4 h-4 mr-2" />
              Skills
            </Link>
            <Link href="#honors" className="flex items-center px-3 py-2 text-sm rounded-md hover:bg-gray-100">
              <Trophy className="w-4 h-4 mr-2" />
              Honors
            </Link>
          </nav>
          <div className="p-4 border-t">
            <div className="flex flex-col space-y-2">
              <Link
                href="mailto:mokshda879@gmail.com"
                className="flex items-center text-sm text-gray-500 hover:text-gray-900"
              >
                <Mail className="w-4 h-4 mr-2" />
                mokshda879@gmail.com
              </Link>
              <Link href="tel:7657670302" className="flex items-center text-sm text-gray-500 hover:text-gray-900">
                <Phone className="w-4 h-4 mr-2" />
                (765) 767-0302
              </Link>
              <Link
                href="https://www.linkedin.com/in/mokshda-sharma-b740a7165"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-sm text-gray-500 hover:text-gray-900"
              >
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Header */}
      <header className="sticky top-0 z-10 flex items-center justify-between w-full h-16 px-4 bg-white border-b lg:hidden">
        <h1 className="text-xl font-bold">Mokshda Sharma</h1>
        <Button variant="ghost" size="icon">
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
      </header>

      {/* Main Content */}
      <main className="lg:pl-64">
        {/* Hero Section */}
        <section className="relative h-[300px] bg-gradient-to-r from-gray-900 to-gray-700 text-white">
          <div className="absolute inset-0 bg-black/30"></div>
          <div className="relative flex flex-col items-center justify-center h-full px-4 text-center">
            <div className="w-24 h-24 mb-4 overflow-hidden border-4 border-white rounded-full">
              <img
                src="/placeholder.svg?height=96&width=96"
                alt="Mokshda Sharma"
                className="object-cover w-full h-full"
              />
            </div>
            <h1 className="text-3xl font-bold">Mokshda Sharma</h1>
            <p className="mt-2 text-xl">Data Analytics & Business Strategy Professional</p>
            <div className="flex gap-3 mt-4">
              <Button size="sm" variant="secondary">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
              <Button size="sm" variant="secondary" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
          </div>
        </section>

        <div className="container p-4 mx-auto lg:p-8">
          {/* Stats Overview */}
          <div className="grid gap-4 mb-8 md:grid-cols-4">
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <BriefcaseBusiness className="w-8 h-8 mb-2 text-primary" />
                <h3 className="text-xl font-bold">3+</h3>
                <p className="text-sm text-gray-500">Years Experience</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <BookOpen className="w-8 h-8 mb-2 text-primary" />
                <h3 className="text-xl font-bold">2</h3>
                <p className="text-sm text-gray-500">Major Projects</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <GraduationCap className="w-8 h-8 mb-2 text-primary" />
                <h3 className="text-xl font-bold">3.9</h3>
                <p className="text-sm text-gray-500">GPA at Purdue</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center justify-center p-6">
                <Trophy className="w-8 h-8 mb-2 text-primary" />
                <h3 className="text-xl font-bold">3</h3>
                <p className="text-sm text-gray-500">Awards</p>
              </CardContent>
            </Card>
          </div>

          {/* About Section */}
          <section id="about" className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <User className="w-5 h-5 mr-2" />
                  About Me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-500">
                  Master's in Business Analytics student with expertise in data analytics and business strategy.
                  Experienced in delivering data-driven insights and supporting decision-making in roles such as Data
                  Analyst, Business Consultant, and Strategy Analyst.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge variant="outline">Tableau</Badge>
                  <Badge variant="outline">Power BI</Badge>
                  <Badge variant="outline">Python</Badge>
                  <Badge variant="outline">SQL</Badge>
                  <Badge variant="outline">R</Badge>
                  <Badge variant="outline">Alteryx</Badge>
                  <Badge variant="outline">RAG Techniques</Badge>
                  <Badge variant="outline">Predictive Modeling</Badge>
                  <Badge variant="outline">A/B Testing</Badge>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Experience Section */}
          <section id="experience" className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BriefcaseBusiness className="w-5 h-5 mr-2" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                    <div>
                      <h3 className="text-lg font-semibold">Analytics Consultant Intern</h3>
                      <p className="text-sm text-gray-500">CIBC, West Lafayette, IN</p>
                    </div>
                    <Badge>Jan 2025 – May 2025</Badge>
                  </div>
                  <ul className="pl-5 mt-3 space-y-1 text-gray-500 list-disc">
                    <li>Built a cloud-based Python pipeline using LLMs to extract and standardize SEC 10-K filings.</li>
                    <li>
                      Implemented a 2-stage LLM refinement system with human-in-the-loop quality control and anomaly
                      detection.
                    </li>
                    <li>
                      Ran A/B experiments across various LLMs to assess cost-efficiency and select the optimal model.
                    </li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                    <div>
                      <h3 className="text-lg font-semibold">Business Analyst, Assistant Manager</h3>
                      <p className="text-sm text-gray-500">Genpact, Gurgaon, Haryana (India)</p>
                    </div>
                    <Badge>July 2023 – July 2024</Badge>
                  </div>
                  <ul className="pl-5 mt-3 space-y-1 text-gray-500 list-disc">
                    <li>
                      Leveraged R to design data-driven strategies for optimizing pharmaceutical call planning and
                      driving a 1.5% quarterly sales growth.
                    </li>
                    <li>
                      Collaborated with a team of 6 analysts to define sales territories across US for effective product
                      promotion.
                    </li>
                    <li>
                      Conducted A/B tests to evaluate promotional campaign effectiveness, leading to optimized call plan
                      creation, reducing delivery time by 25% for 13 sales teams.
                    </li>
                  </ul>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                    <div>
                      <h3 className="text-lg font-semibold">Business Associate Consultant</h3>
                      <p className="text-sm text-gray-500">ZS Associates, Gurgaon, Haryana (India)</p>
                    </div>
                    <Badge>June 2021 – July 2023</Badge>
                  </div>
                  <ul className="pl-5 mt-3 space-y-1 text-gray-500 list-disc">
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
              </CardContent>
            </Card>
          </section>

          {/* Projects Section */}
          <section id="projects" className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BookOpen className="w-5 h-5 mr-2" />
                  Academic Projects
                </CardTitle>
              </CardHeader>
              <CardContent className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Corpus Key RAG</h3>
                    <p className="text-sm text-gray-500">Under Prof John Burr</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        RAG
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        BERT
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        NLP
                      </Badge>
                    </div>
                    <p className="mt-3 text-sm text-gray-500">
                      Consulted on optimizing the RAG architecture of the All-Day TA chatbot for Purdue students.
                      Recommended and deployed a Multi-Headed RAG framework using BERT embeddings.
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-4">
                    <h3 className="text-lg font-semibold">Doc2Deck</h3>
                    <p className="text-sm text-gray-500">Under Prof Rohit Aggarwal</p>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge variant="secondary" className="text-xs">
                        AI
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        LLM
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        Claude
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        GPT-4
                      </Badge>
                    </div>
                    <p className="mt-3 text-sm text-gray-500">
                      Built an AI-powered pipeline to convert Word documents into PowerPoint presentations using a
                      modular, agentic architecture. Integrated LlamaParse for document parsing, Claude for topic-aware
                      segmentation, and GPT-4 for generating slide content.
                    </p>
                  </CardContent>
                </Card>
              </CardContent>
            </Card>
          </section>

          {/* Education Section */}
          <section id="education" className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <GraduationCap className="w-5 h-5 mr-2" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-4 border rounded-lg">
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                    <div>
                      <h3 className="text-lg font-semibold">Purdue University</h3>
                      <p className="text-sm text-gray-500">Daniels School of Business</p>
                      <p className="font-medium">Master of Business Analytics and Information Management</p>
                      <p className="text-xs text-gray-500">
                        Graduate Research Assistant, Strategic Management Department
                      </p>
                    </div>
                    <div className="text-right">
                      <Badge>GPA 3.9/4.0</Badge>
                      <p className="mt-1 text-sm text-gray-500">August 2025</p>
                    </div>
                  </div>
                  <div className="mt-3">
                    <p className="text-sm text-gray-500">
                      <span className="font-medium">Relevant Coursework:</span> Business Analytics, Data Mining, AI for
                      Business Decisions, Machine Learning, Big Data and MLOps
                    </p>
                  </div>
                </div>

                <div className="p-4 border rounded-lg">
                  <div className="flex flex-col justify-between gap-2 md:flex-row md:items-start">
                    <div>
                      <h3 className="text-lg font-semibold">National Institute of Technology</h3>
                      <p className="text-sm text-gray-500">Hamirpur, HP (India)</p>
                      <p className="font-medium">Bachelor of Technology, Electronics and Communication Engineering</p>
                    </div>
                    <div className="text-right">
                      <Badge>GPA 3.5/4.0</Badge>
                      <p className="mt-1 text-sm text-gray-500">May 2021</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Skills Section */}
          <section id="skills" className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  Skills & Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                  <div className="p-3 border rounded-lg">
                    <h3 className="font-medium">Data Visualization</h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge variant="outline" className="text-xs">
                        Tableau
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Power BI
                      </Badge>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h3 className="font-medium">Programming</h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge variant="outline" className="text-xs">
                        Python
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        SQL
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        R
                      </Badge>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h3 className="font-medium">AI & ML</h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge variant="outline" className="text-xs">
                        RAG
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Predictive Modeling
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        LLMs
                      </Badge>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h3 className="font-medium">Business Strategy</h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge variant="outline" className="text-xs">
                        A/B Testing
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        Analytics
                      </Badge>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h3 className="font-medium">Data Processing</h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge variant="outline" className="text-xs">
                        Alteryx
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        DSS
                      </Badge>
                    </div>
                  </div>
                  <div className="p-3 border rounded-lg">
                    <h3 className="font-medium">Cloud & Databases</h3>
                    <div className="flex flex-wrap gap-1 mt-2">
                      <Badge variant="outline" className="text-xs">
                        Snowflake
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        S3
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Honors Section */}
          <section id="honors" className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Trophy className="w-5 h-5 mr-2" />
                  Honors & Awards
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="pl-5 space-y-2 text-gray-500 list-disc">
                  <li>
                    Beta Gamma Sigma Honor – Recognized as a top business student at Purdue University for academic
                    excellence.
                  </li>
                  <li>Earned Employee of the Quarter at Genpact for exceptional performance.</li>
                  <li>Recognized as Standout Performer at ZS Associates for excellence in project delivery.</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          {/* Contact Section */}
          <section id="contact" className="mb-8">
            <Card>
              <CardHeader>
                <CardTitle>Get In Touch</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid gap-6 md:grid-cols-2">
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                        <Mail className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Email</h3>
                        <a href="mailto:mokshda879@gmail.com" className="text-sm text-gray-500 hover:underline">
                          mokshda879@gmail.com
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                        <Phone className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">Phone</h3>
                        <a href="tel:7657670302" className="text-sm text-gray-500 hover:underline">
                          (765) 767-0302
                        </a>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                        <Linkedin className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium">LinkedIn</h3>
                        <a
                          href="https://www.linkedin.com/in/mokshda-sharma-b740a7165"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-gray-500 hover:underline"
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
                        <h3 className="text-sm font-medium">Location</h3>
                        <p className="text-sm text-gray-500">West Lafayette, IN</p>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 border rounded-lg">
                    <h3 className="mb-4 text-lg font-medium">Send a Message</h3>
                    <form className="space-y-4">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Name
                        </label>
                        <input id="name" className="w-full h-10 px-3 border rounded-md" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
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
                        <label htmlFor="message" className="text-sm font-medium">
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
          </section>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-sm text-gray-500 border-t lg:pl-64">
        &copy; {new Date().getFullYear()} Mokshda Sharma. All rights reserved.
      </footer>
    </div>
  )
}
