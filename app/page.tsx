import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Linkedin, Download, Calendar } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"

export default function Home() {
  return (
    <div className="min-h-screen gradient-bg">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/80 dark:bg-gray-950/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="text-xl font-semibold name-text">Bryan Long</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <a
              href="#projects"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#025997] dark:hover:text-[#4f5b66] transition-colors"
            >
              Projects
            </a>
            <a
              href="#ai-workflows"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#025997] dark:hover:text-[#4f5b66] transition-colors"
            >
              AI Workflows
            </a>
            <a
              href="#writing"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#025997] dark:hover:text-[#4f5b66] transition-colors"
            >
              Technical Writing
            </a>
            <a
              href="#speaking"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#025997] dark:hover:text-[#4f5b66] transition-colors"
            >
              Speaking
            </a>
            <a
              href="#resume"
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-[#025997] dark:hover:text-[#4f5b66] transition-colors"
            >
              Resume
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button asChild size="sm" className="bg-[#025997] hover:bg-[#074a7c] text-white">
              <Link href="https://www.linkedin.com/in/bryanlongtpm/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                Connect
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="grid gap-10 md:grid-cols-2 md:gap-8 lg:gap-12 items-center">
          <div className="overflow-hidden">
            <h1 className="font-bold tracking-tight mb-6 text-gray-900 dark:text-gray-100">
              <span className="text-[2.25rem] sm:text-[2.5rem] md:text-[2.5rem] lg:text-[3rem] xl:text-[3.75rem] 2xl:text-[4.3rem] block">FinTech & Payments</span>
              <div className="pt-2"></div>
              <span className="text-[1.5rem] sm:text-[1.75rem] md:text-[1.75rem] lg:text-[2.25rem] xl:text-[2.75rem] 2xl:text-[3.25rem] block" style={{ color: "#074a7c" }}>
                <span className="dark:hidden">Senior Director of Product</span>
              </span>
              <span className="text-[1.5rem] sm:text-[1.75rem] md:text-[1.75rem] lg:text-[2.25rem] xl:text-[2.75rem] 2xl:text-[3.25rem] hidden dark:block" style={{ color: "#4f5b66" }}>
                Senior Director of Product
              </span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Product leader with 15+ years of experience leading high-performing teams specializing in fintech and payments. Enterprise SaaS delivery of API developer platforms, marketplaces, and developer experience initiatives, including AI-powered workflows that accelerate delivery and improve developer productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button asChild size="lg" className="bg-[#025997] hover:bg-[#074a7c] text-white">
                <a href="#projects">View My Projects</a>
              </Button>
            </div>
          </div>
          <div className="relative h-[300px] md:h-[500px] rounded-lg overflow-hidden shadow-xl dark:shadow-tech-900/30">
            <Image src="/images/header.jpg" alt="Bryan Long" fill className="object-cover object-right" priority />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24 md:py-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Projects</h2>

        {/* Project Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto max-w-7xl">
          {/* First Two Cards - Always Visible */}
          <Link href="https://developer.north.com/" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="overflow-hidden border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200 h-full bg-white dark:bg-gray-900 hover:transform hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64">
                <Image src="/images/north-developer.png" alt="North Developer" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">North Developer</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium uppercase tracking-wide text-sm text-[#025997] dark:text-gray-400 mb-2">
                    Project Description
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    This platform is a developer ecosystem designed to allow software companies to embed payment
                    processing into their applications and websites.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium uppercase tracking-wide text-sm text-[#025997] dark:text-gray-400 mb-2">
                    My Role
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    As the Senior Director of Product for North Developer I lead the strategy, development, and optimization of
                    our payment API platform.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          <Link href="https://exchange.north.com/" target="_blank" rel="noopener noreferrer" className="block">
            <Card className="overflow-hidden border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200 h-full bg-white dark:bg-gray-900 hover:transform hover:-translate-y-1 hover:shadow-xl">
              <div className="relative h-64">
                <Image src="/images/north-exchange-final.png" alt="North Exchange" fill className="object-cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl text-gray-900 dark:text-white">North Exchange</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-medium uppercase tracking-wide text-sm text-[#025997] dark:text-gray-400 mb-2">
                    Project Description
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    This website is an app marketplace built for companies who want to add services to their business.
                  </p>
                </div>
                <div>
                  <h3 className="font-medium uppercase tracking-wide text-sm text-[#025997] dark:text-gray-400 mb-2">
                    My Role
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300">
                    Throughout this project I partnered with the Head of Software Ecosystems to create the product
                    roadmap, build the app marketplace, and launch the site.
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Third Card - Only Visible on XL Screens */}
          <div className="hidden xl:block">
            <Link href="https://docs.worldpay.com/" target="_blank" rel="noopener noreferrer" className="block">
              <Card className="overflow-hidden border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200 h-full bg-white dark:bg-gray-900 hover:transform hover:-translate-y-1 hover:shadow-xl">
                <div className="relative h-64">
                  <Image src="/images/worldpay-developer.png" alt="Worldpay Developer" fill className="object-cover" />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 dark:text-white">Worldpay Developer</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-medium uppercase tracking-wide text-sm text-[#025997] dark:text-gray-400 mb-2">
                      Project Description
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      Worldpay Developer is an API Dev Portal that gives SMBs and large enterprises access to payment
                      APIs.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-medium uppercase tracking-wide text-sm text-[#025997] dark:text-gray-400 mb-2">
                      My Role
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300">
                      As an API Technical Program Manager, I developed and implemented a product roadmap for the
                      Worldpay Developer Portal, leading to a 3X increase in lead generation for sales partners.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* AI Product Workflows Section */}
      <section id="ai-workflows" className="bg-slate-50 dark:bg-gray-900 py-24 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center text-gray-900 dark:text-gray-100">
            AI Product Workflows
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 text-center max-w-4xl mx-auto mb-12">
            Using AI tools like Figma Make, Vercel V0, and Bolt.new, I compress what used to be a multi-week, multi-team process (research to design to engineering prototype) into a workflow I can do in hours. This shifts my PM role from requesting prototypes to directly creating and iterating on them, dramatically shrinking iteration cycles and reducing early dependence on design and engineering capacity.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 mx-auto max-w-7xl mb-12">
            {/* Card 1 - Figma Make */}
            <Card className="overflow-hidden border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200 h-full bg-white dark:bg-gray-900 hover:transform hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  <span className="font-bold">Figma Make</span> - UI Exploration
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Generated responsive dashboard layouts and refined them directly in Figma to explore information architecture, visual hierarchy, and interaction patterns for a Developer Dashboard concept.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                  <li><span className="font-medium">Best for:</span> fast visual exploration and interaction concepts.</li>
                  <li><span className="font-medium">Output:</span> design system-aligned frames ready for design review.</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-[#025997] hover:bg-[#074a7c] text-white">
                  <Link href="https://table-react-20415308.figma.site/" target="_blank" rel="noopener noreferrer">
                    View Prototype <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 2 - Vercel V0 */}
            <Card className="overflow-hidden border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200 h-full bg-white dark:bg-gray-900 hover:transform hover:-translate-y-1 hover:shadow-xl">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  <span className="font-bold">Vercel V0</span> - React UI from Text
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Turned product requirements into React-based dashboard screens using modern component libraries, validating how quickly a PM can move from concept to production-ready front-end.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                  <li><span className="font-medium">Best for:</span> generating real, editable React components from prompts.</li>
                  <li><span className="font-medium">Output:</span> code that engineers can refine and extend.</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-[#025997] hover:bg-[#074a7c] text-white">
                  <Link href="https://v0-developer-dashboard-design-xi.vercel.app/" target="_blank" rel="noopener noreferrer">
                    View Prototype <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Card 3 - Bolt.new */}
            <Card className="overflow-hidden border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-500 transition-all duration-200 h-full bg-white dark:bg-gray-900 hover:transform hover:-translate-y-1 hover:shadow-xl md:col-span-2 xl:col-span-1">
              <CardHeader>
                <CardTitle className="text-xl text-gray-900 dark:text-white">
                  <span className="font-bold">Bolt.new</span> - Full-Stack in the Browser
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-700 dark:text-gray-300">
                  Built a fully functional developer dashboard experience, including layout and data wiring, directly in the browser, testing how far AI-generated code can go before engineering handoff.
                </p>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-400 space-y-2 text-sm">
                  <li><span className="font-medium">Best for:</span> fast, full-stack prototypes with live behavior.</li>
                  <li><span className="font-medium">Output:</span> deployable prototype that demonstrates end-to-end flows.</li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-[#025997] hover:bg-[#074a7c] text-white">
                  <Link href="https://north-developer-dash-fod9.bolt.host/dashboard" target="_blank" rel="noopener noreferrer">
                    View Prototype <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>

          {/* Impact Paragraph */}
          <div className="max-w-4xl mx-auto">
            <p className="text-gray-600 dark:text-gray-300 text-center italic">
              Across these tools, I use a repeatable AI-enhanced workflow: start from written requirements, generate multiple prototype directions in parallel, validate flows against real user and developer needs, and then bring engineers into the process only once patterns are validated. This increases the number of concepts I can test per sprint and improves time-to-market for new product releases.
            </p>
          </div>
        </div>
      </section>

      {/* Technical Writing Section */}
      <section id="writing" className="py-24 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
            Technical Writing
          </h2>
          <div className="max-w-4xl mx-auto">
            <Card className="bg-white/10 dark:bg-gray-800/20 backdrop-blur-md border-none mb-8">
              <CardHeader>
                <CardTitle className="text-white dark:text-gray-400">Featured Articles</CardTitle>
                <CardDescription className="text-gray-200">
                  I write about payments, API design, and developer experience
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <Link
                    href="https://developer.north.com/blog/north-semi-integrated-cloud-api"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="transition-all duration-200 border border-white/20 dark:border-gray-700/50 rounded-lg p-4 hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-white/10 dark:hover:bg-gray-800/40">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative w-full md:w-1/3 h-40 rounded-md overflow-hidden">
                          <Image src="/images/new-api-cloud-image.png" alt="API Cloud" fill className="object-cover" />
                        </div>
                        <div className="md:w-2/3">
                          <h3 className="font-medium text-lg text-white dark:text-gray-400">
                            Benefits of the North Semi-Integrated Cloud API
                          </h3>
                          <div className="flex items-center text-gray-300 text-sm mt-2">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>December 11, 2024</span>
                          </div>
                          <p className="text-gray-300 mt-3">
                            Explore the advantages of using North's Semi-Integrated Cloud API for payment processing,
                            including enhanced security, simplified compliance, and improved customer experience.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <Link
                    href="https://developer.north.com/blog/payments-architecture"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="transition-all duration-200 border border-white/20 dark:border-gray-700/50 rounded-lg p-4 hover:transform hover:-translate-y-1 hover:shadow-xl hover:bg-white/10 dark:hover:bg-gray-800/40">
                      <div className="flex flex-col md:flex-row gap-4">
                        <div className="relative w-full md:w-1/3 h-40 rounded-md overflow-hidden">
                          <Image
                            src="/images/architecture-image.png"
                            alt="Payment Architecture"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="md:w-2/3">
                          <h3 className="font-medium text-lg text-white dark:text-gray-400">
                            Integrated vs. Semi-Integrated Payment Architecture Solutions
                          </h3>
                          <div className="flex items-center text-gray-300 text-sm mt-2">
                            <Calendar className="h-4 w-4 mr-1" />
                            <span>January 8, 2024</span>
                          </div>
                          <p className="text-gray-300 mt-3">
                            A comprehensive comparison of integrated and semi-integrated payment architectures, helping
                            developers choose the right solution for their specific needs.
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild className="bg-[#025997] hover:bg-[#074a7c] text-white">
                  <Link href="https://developer.north.com/authors/bryan-long" target="_blank" rel="noopener noreferrer">
                    View All Articles <ArrowUpRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Speaking Section */}
      <section id="speaking" className="container py-24 md:py-32">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Speaking</h2>
        <div className="max-w-4xl mx-auto">
          <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
            <CardHeader>
              <CardTitle className="text-gray-900 dark:text-gray-400">Featured Videos</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Watch my presentations and talks on payments and developer experience
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="aspect-video overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/ywWWpGJvhlk?rel=0&showinfo=0&vq=hd1080"
                    title="Welcome to North Developer"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="aspect-video overflow-hidden rounded-lg border border-gray-200 dark:border-gray-800">
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/scueMk_aEnU?rel=0&showinfo=0&vq=hd1080"
                    title="North Developer Featured Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button asChild className="bg-[#025997] hover:bg-[#074a7c] text-white">
                <Link href="https://www.youtube.com/@North_Developer" target="_blank" rel="noopener noreferrer">
                  View YouTube Channel <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="bg-slate-50 dark:bg-gray-900 py-24 md:py-32">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">Resume</h2>
          <div className="max-w-4xl mx-auto">
            <Card className="border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900">
              <CardHeader>
                <CardTitle className="text-gray-900 dark:text-gray-400">Professional Experience</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Download my resume to learn more about my professional background
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative w-full max-w-2xl mx-auto border border-slate-200 dark:border-gray-800 rounded-lg overflow-hidden mb-6 shadow-md dark:shadow-gray-900/30">
                  <Image
                    src="/images/bryan-long-new-resume-preview.png"
                    alt="Bryan Long Resume Preview"
                    width={800}
                    height={1000}
                    className="w-full h-auto"
                  />
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button asChild className="bg-[#025997] hover:bg-[#074a7c] text-white">
                  <a href="/files/2025-bryan-long-resume.png" download="Bryan_Long_Resume.png">
                    <Download className="mr-2 h-4 w-4" />
                    Download Resume
                  </a>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-slate-900 dark:bg-gray-950 text-white py-12">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-300">
                &copy; {new Date().getFullYear()} Bryan Long. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <Button
                asChild
                variant="ghost"
                size="icon"
                className="text-white hover:bg-slate-800 hover:text-white dark:hover:bg-gray-800"
              >
                <Link href="https://www.linkedin.com/in/bryanlongtpm/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
