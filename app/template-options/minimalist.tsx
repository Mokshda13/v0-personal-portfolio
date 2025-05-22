import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function MinimalistTemplate() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-white border-b">
        <div className="container flex items-center justify-between h-16 px-4 mx-auto md:px-6">
          <Link href="/" className="text-xl font-bold">
            Mokshda Sharma
          </Link>
          <nav className="hidden space-x-6 md:flex">
            <Link href="#about" className="text-sm font-medium hover:text-gray-600">
              About
            </Link>
            <Link href="#experience" className="text-sm font-medium hover:text-gray-600">
              Experience
            </Link>
            <Link href="#education" className="text-sm font-medium hover:text-gray-600">
              Education
            </Link>
            <Link href="#projects" className="text-sm font-medium hover:text-gray-600">
              Projects
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-gray-600">
              Contact
            </Link>
          </nav>
          <Button variant="ghost" size="sm" className="hidden md:flex">
            <Download className="w-4 h-4 mr-2" />
            Resume
          </Button>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto space-y-4 text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">Mokshda Sharma</h1>
              <p className="text-xl text-gray-500">Data Analytics & Business Strategy Professional</p>
              <div className="flex justify-center gap-4 pt-4">
                <Link
                  href="https://www.linkedin.com/in/mokshda-sharma-b740a7165"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" size="icon">
                    <Linkedin className="w-5 h-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link href="mailto:mokshda879@gmail.com">
                  <Button variant="outline" size="icon">
                    <Mail className="w-5 h-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
                <Link href="tel:7657670302">
                  <Button variant="outline" size="icon">
                    <Phone className="w-5 h-5" />
                    <span className="sr-only">Phone</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">About Me</h2>
              <p className="text-gray-500">
                Master's in Business Analytics student with expertise in data analytics and business strategy.
                Experienced in delivering data-driven insights and supporting decision-making in roles such as Data
                Analyst, Business Consultant, and Strategy Analyst.
              </p>
              <div className="flex flex-wrap gap-2">
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
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-16">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Experience</h2>

              <div className="space-y-10">
                <div className="space-y-2">
                  <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                    <h3 className="text-xl font-medium">Analytics Consultant Intern</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">CIBC</Badge>
                      <span className="text-sm text-gray-500">Jan 2025 – May 2025</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">West Lafayette, IN</p>
                  <ul className="pl-5 mt-2 space-y-1 text-gray-500 list-disc">
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

                <div className="space-y-2">
                  <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                    <h3 className="text-xl font-medium">Business Analyst, Assistant Manager</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">Genpact</Badge>
                      <span className="text-sm text-gray-500">July 2023 – July 2024</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Gurgaon, Haryana (India)</p>
                  <ul className="pl-5 mt-2 space-y-1 text-gray-500 list-disc">
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

                <div className="space-y-2">
                  <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                    <h3 className="text-xl font-medium">Business Associate Consultant</h3>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline">ZS Associates</Badge>
                      <span className="text-sm text-gray-500">June 2021 – July 2023</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-500">Gurgaon, Haryana (India)</p>
                  <ul className="pl-5 mt-2 space-y-1 text-gray-500 list-disc">
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
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Academic Projects</h2>

              <div className="space-y-8">
                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Corpus Key RAG</h3>
                  <p className="text-sm text-gray-500">Under Prof John Burr</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge>RAG</Badge>
                    <Badge>BERT</Badge>
                    <Badge>NLP</Badge>
                  </div>
                  <p className="mt-2 text-gray-500">
                    Consulted on optimizing the RAG architecture of the All-Day TA chatbot for Purdue students.
                    Recommended and deployed a Multi-Headed RAG framework using BERT embeddings.
                  </p>
                </div>

                <div className="space-y-2">
                  <h3 className="text-xl font-medium">Doc2Deck</h3>
                  <p className="text-sm text-gray-500">Under Prof Rohit Aggarwal</p>
                  <div className="flex flex-wrap gap-2 mt-2">
                    <Badge>AI</Badge>
                    <Badge>LLM</Badge>
                    <Badge>Claude</Badge>
                    <Badge>GPT-4</Badge>
                  </div>
                  <p className="mt-2 text-gray-500">
                    Built an AI-powered pipeline to convert Word documents into PowerPoint presentations using a
                    modular, agentic architecture. Integrated LlamaParse for document parsing, Claude for topic-aware
                    segmentation, and GPT-4 for generating slide content. Optimized scalability through a hybrid LLM
                    strategy balancing accuracy and API cost.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Education</h2>

              <div className="space-y-8">
                <div className="space-y-2">
                  <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                    <h3 className="text-xl font-medium">Purdue University</h3>
                    <div className="flex items-center gap-2">
                      <Badge>GPA 3.9/4.0</Badge>
                      <span className="text-sm text-gray-500">August 2025</span>
                    </div>
                  </div>
                  <p className="text-gray-500">Daniels School of Business</p>
                  <p className="font-medium">Master of Business Analytics and Information Management</p>
                  <p className="text-sm text-gray-500">Graduate Research Assistant, Strategic Management Department</p>
                  <p className="mt-2 text-gray-500">
                    <span className="font-medium">Relevant Coursework:</span> Business Analytics, Data Mining, AI for
                    Business Decisions, Machine Learning, Big Data and MLOps
                  </p>
                </div>

                <div className="space-y-2">
                  <div className="flex flex-col justify-between gap-1 md:flex-row md:items-center">
                    <h3 className="text-xl font-medium">National Institute of Technology</h3>
                    <div className="flex items-center gap-2">
                      <Badge>GPA 3.5/4.0</Badge>
                      <span className="text-sm text-gray-500">May 2021</span>
                    </div>
                  </div>
                  <p className="text-gray-500">Hamirpur, HP (India)</p>
                  <p className="font-medium">Bachelor of Technology, Electronics and Communication Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Honors Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Honors & Awards</h2>

              <ul className="pl-5 space-y-2 text-gray-500 list-disc">
                <li>
                  Beta Gamma Sigma Honor – Recognized as a top business student at Purdue University for academic
                  excellence.
                </li>
                <li>Earned Employee of the Quarter at Genpact and Standout Performer at ZS Associates.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16">
          <div className="container px-4 mx-auto md:px-6">
            <div className="max-w-3xl mx-auto space-y-6">
              <h2 className="text-2xl font-bold tracking-tight">Contact</h2>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-500" />
                  <a href="mailto:mokshda879@gmail.com" className="text-gray-500 hover:underline">
                    mokshda879@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-gray-500" />
                  <a href="tel:7657670302" className="text-gray-500 hover:underline">
                    (765) 767-0302
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Linkedin className="w-5 h-5 text-gray-500" />
                  <a
                    href="https://www.linkedin.com/in/mokshda-sharma-b740a7165"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:underline"
                  >
                    linkedin.com/in/mokshda-sharma-b740a7165
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-gray-500" />
                  <span className="text-gray-500">West Lafayette, IN</span>
                </div>
              </div>
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
          </div>
        </div>
      </footer>
    </div>
  )
}
