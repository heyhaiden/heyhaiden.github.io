import { projects } from "@/lib/projects-data"
import { notFound } from "next/navigation"
import ProjectDetailClient from "./project-detail-client"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

type Props = {
  params: {
    slug: string
  }
}

export default function ProjectDetail({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
