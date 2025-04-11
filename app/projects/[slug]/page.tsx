import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Check, LinkIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { projects } from "@/lib/projects-data"
import { notFound } from "next/navigation"
import ProjectDetailClient from "./project-detail-client"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return <ProjectDetailClient project={project} />
}
