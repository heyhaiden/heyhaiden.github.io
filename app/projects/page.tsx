import { ProjectCard } from "@/components/project-card"
import { Badge } from "@/components/ui/badge"
import { projects, getAllTags } from "@/lib/projects-data"

export default function Projects() {
  const allTags = getAllTags()

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">Projects</h1>
        <p className="text-gray-600 mb-10">A collection of my recent work and case studies</p>

        <div className="flex flex-wrap gap-2 mb-8">
          {allTags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="cursor-pointer"
            >
              {tag}
            </Badge>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  )
}
