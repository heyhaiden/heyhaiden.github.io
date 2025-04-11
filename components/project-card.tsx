import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import type { Project } from "@/lib/projects-data"

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group rounded-lg overflow-hidden border bg-white hover:-translate-y-1 transition-transform">
      <Link href={`/projects/${project.slug}`}>
        <div className="relative h-48">
          <Image src={project.titleCard || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
        </div>
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 group-hover:text-primary">{project.title}</h3>
          <p className="text-gray-600 mb-4">{project.shortDescription}</p>
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              {project.tags.slice(0, 2).map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
            <ArrowRight className="h-4 w-4 text-gray-400 group-hover:text-primary transition-colors" />
          </div>
        </div>
      </Link>
    </div>
  )
}