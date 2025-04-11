import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, LinkIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetail({ params }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <Link href="/projects">
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </Link>

          <article>
            <div className="mb-12 text-center">
              <h1 className="text-4xl font-bold mb-3">{project.title}</h1>
              <p className="text-xl text-gray-600 mb-4">{project.description}</p>
              <div className="flex justify-center gap-2">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="outline">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="aspect-video relative mb-12">
              {project.heroType === "image" ? (
                <Image
                  src={project.heroImage || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover rounded-lg"
                />
              ) : (
                <iframe
                  src={`https://www.youtube.com/embed/${project.heroVideo?.split("v=")[1]}`}
                  title={project.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full rounded-lg"
                />
              )}
            </div>

            <div className="prose prose-gray max-w-none">
              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Project Overview</h2>
                <p className="text-gray-600">{project.overview}</p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">The Challenge</h2>
                <p className="text-gray-600">{project.challenge}</p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold mb-4">Key Outcomes</h2>
                <ul className="space-y-3">
                  {project.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{outcome}</span>
                    </li>
                  ))}
                </ul>
              </section>

              {project.references && project.references.length > 0 && (
                <section>
                  <h2 className="text-2xl font-bold mb-4">References & Links</h2>
                  <ul className="space-y-2">
                    {project.references.map((reference, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <LinkIcon className="h-4 w-4 text-primary" />
                        <a
                          href={reference.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          {reference.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </section>
              )}
            </div>
          </article>
        </div>
      </div>
    </div>
  )
}