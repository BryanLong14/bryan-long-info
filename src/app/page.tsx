import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, Github, Linkedin, Youtube } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-900">Bryan Long</h1>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <a href="#projects" className="text-gray-600 hover:text-gray-900">
                  Projects
                </a>
              </li>
              <li>
                <a href="#writing" className="text-gray-600 hover:text-gray-900">
                  Writing
                </a>
              </li>
              <li>
                <a href="#speaking" className="text-gray-600 hover:text-gray-900">
                  Speaking
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About Me</h2>
          <p className="text-lg text-gray-700 mb-6">
            I am a Director of Product with deep experience in payments, FinTech, and designing functional user
            experiences.
          </p>
          <div className="flex space-x-4">
            <Button asChild>
              <Link href="https://www.linkedin.com/in/bryanlongtpm/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-4 w-4" /> GitHub
              </Link>
            </Button>
          </div>
        </section>

        <section id="projects" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <ProjectCard
              title="North Developer"
              role="Director of Product"
              description="North Developer is a developer portal designed for software platforms integrating credit card processing."
              imageUrl="/placeholder.svg?height=300&width=400"
              projectUrl="https://developer.north.com/"
            />
            <ProjectCard
              title="North Exchange"
              role="Director of Product"
              description="North Exchange is an app marketplace for businesses looking to add services to their merchant processing account."
              imageUrl="/placeholder.svg?height=300&width=400"
              projectUrl="https://exchange.north.com/"
            />
          </div>
        </section>

        <section id="writing" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Technical Writing</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Featured Articles</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="https://developer.north.com/authors/bryan-long"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  View my articles on North Developer <ArrowUpRight className="ml-2 h-4 w-4" />
                </Link>
              </li>
            </ul>
          </div>
        </section>

        <section id="speaking" className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">My Speaking Engagements</h2>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Featured Talks</h3>
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                src="https://www.youtube.com/embed/videoseries?list=PLYNSECyvcgfLZXXLQjGZGmELZXXCUcD4x"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
            <Button asChild variant="outline">
              <Link href="https://www.youtube.com/@North_Developer" target="_blank" rel="noopener noreferrer">
                <Youtube className="mr-2 h-4 w-4" /> View More on YouTube
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <p>&copy; 2025 Bryan Long. All rights reserved.</p>
            <div className="flex space-x-4">
              <Link href="https://www.linkedin.com/in/bryanlongtpm/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="h-6 w-6" />
              </Link>
              <Link href="https://github.com/yourgithub" target="_blank" rel="noopener noreferrer">
                <Github className="h-6 w-6" />
              </Link>
              <Link href="https://www.youtube.com/@North_Developer" target="_blank" rel="noopener noreferrer">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ProjectCard({ title, role, description, imageUrl, projectUrl }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt={title}
        width={400}
        height={300}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{role}</p>
        <p className="text-gray-700 mb-4">{description}</p>
        <Button asChild>
          <Link href={projectUrl} target="_blank" rel="noopener noreferrer">
            View Project <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  )
}
