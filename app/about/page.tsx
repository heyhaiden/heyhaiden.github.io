"use client"

import { motion } from "framer-motion"
import { Briefcase, GraduationCap, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function About() {
  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-gray-600 mb-10">Get to know my background, experience, and skills</p>

        <div className="grid gap-12">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Professional Summary
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8 space-y-4">
              <p>Hi, I'm Haiden. 👋</p>
              <p>
                I'm a product leader and former founder with 7+ years of experience transforming digital products across
                health tech, spatial computing, and emerging technologies. My professional mantra is "always be
                building" - I prototype solutions, challenge assumptions, and drive innovation from 0 to 1.
              </p>
              <p>
                As a self-taught developer with a master's in Computer Science, I blend technical depth with strategic
                product vision. I've scaled platforms, led cross-functional teams, and delivered 200% year-over-year
                growth by obsessing over user insights and rapid iteration.
              </p>
              <p>
                When I'm not building products, you'll find me backpacking remote glaciers, exploring the intersection
                of technology and human potential. Currently exploring opportunities in health, climate, and ed-tech
                that push the boundaries of what's possible.
              </p>
            </div>
          </section>

          <div className="grid md:grid-cols-2 gap-8">
            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <Briefcase className="h-6 w-6" />
                Work Experience
              </h2>
              <div className="grid gap-6">
                {[
                  {
                    title: "Senior Technical Product Manager",
                    company: "Embodied Labs",
                    period: "Jan 2024 - Jan 2025",
                    url: "https://embodiedlabs.com/",
                  },
                  {
                    title: "Product Manager",
                    company: "Embodied Labs",
                    period: "Oct 2020 - Dec 2023",
                    url: "https://embodiedlabs.com/",
                  },
                  {
                    title: "Product Manager",
                    company: "Koji (Acquired by Linktree)",
                    period: "Jul 2020 - Dec 2020",
                    url: "https://techcrunch.com/2023/12/14/linktree-acquires-link-in-bio-platform-koji-in-its-second-investment-of-the-year/",
                  },
                  {
                    title: "Co-Founder, Head of Product",
                    company: "Noctvrnal XR",
                    period: "Oct 2016 - Oct 2020",
                    url: "",
                  },
                  {
                    title: "Adjunct Faculty Instructor",
                    company: "Chapman University",
                    period: "Jan 2020 - Jun 2020",
                    url: "https://www.chapman.edu/",
                  },
                  {
                    title: "Product Development Manager",
                    company: "AvatarMEDIC",
                    period: "Mar 2019 - Dec 2019",
                    url: "https://www.avatarmedic.com/",
                  },
                ].map((job, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="font-semibold">{job.title}</h3>
                    <p className="text-gray-600">
                      {job.url ? (
                        <a href={job.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          {job.company}
                        </a>
                      ) : (
                        job.company
                      )}
                    </p>
                    <p className="text-sm text-gray-500">{job.period}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
                <GraduationCap className="h-6 w-6" />
                Education
              </h2>
              <div className="grid gap-6">
                {[
                  { degree: "MSc IoT Systems + Embedded AI", institution: "UCL", period: "2022 - 2023" },
                  {
                    degree: "BFA Film Production, Audio Engineering ",
                    institution: "Chapman University",
                    period: "2013 - 2016",
                  },
                ].map((edu, index) => (
                  <div key={index} className="bg-white rounded-lg shadow-md p-6">
                    <h3 className="font-semibold">{edu.degree}</h3>
                    <p className="text-gray-600">{edu.institution}</p>
                    <p className="text-sm text-gray-500">{edu.period}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Code className="h-6 w-6" />
              Skills
            </h2>
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2">Product Management</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Agile Methodologies",
                      "Product Analytics",
                      "User Research & Testing",
                      "OKRs & KPI Management",
                      "Product-Led Growth (PLG)",
                      "Go-to-Market Strategy",
                    ].map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Technical Expertise</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "AI & Machine Learning",
                      "Internet of Things (IoT)",
                      "Virtual & Augmented Reality",
                      "Cloud Services (AWS)",
                      "JavaScript, Python, SQL",
                      "API Development",
                    ].map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Leadership & Strategy</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Cross-Functional Leadership",
                      "Stakeholder Management",
                      "Remote Team Management",
                      "A/B Testing",
                      "Experimentation Design",
                      "HIPAA Compliance",
                    ].map((skill, index) => (
                      <Badge key={index} variant="secondary">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Tools</h3>
                  <div className="flex flex-wrap gap-2">
                    {["Jira", "Asana", "Notion", "Figma", "Miro", "Amazon Quicksight", "Grafana"].map(
                      (skill, index) => (
                        <Badge key={index} variant="secondary">
                          {skill}
                        </Badge>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </div>
  )
}

