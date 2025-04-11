import { Briefcase, GraduationCap, Code } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export default function About() {
  const skillCategories = [
    {
      title: "Product Management",
      badgeColor: "orange",
      skills: [
        "Agile Methodologies",
        "Product Analytics",
        "User Research & Testing",
        "OKRs & KPI Management",
        "Product-Led Growth (PLG)",
        "Go-to-Market Strategy",
      ],
    },
    {
      title: "Technical Expertise",
      badgeColor: "blue",
      skills: [
        "AI & Machine Learning",
        "Internet of Things (IoT)",
        "Virtual & Augmented Reality",
        "Cloud Services (AWS)",
        "JavaScript, Python, SQL",
        "API Development",
      ],
    },
    {
      title: "Leadership & Strategy",
      badgeColor: "green",
      skills: [
        "Cross-Functional Leadership",
        "Stakeholder Management",
        "Remote Team Management",
        "A/B Testing",
        "Experimentation Design",
        "HIPAA Compliance",
      ],
    },
    {
      title: "Tools",
      badgeColor: "purple",
      skills: ["Jira", "Asana", "Notion", "Figma", "Miro", "Amazon Quicksight", "Grafana"],
    },
  ]

  return (
    <div className="container max-w-6xl mx-auto px-4 py-16">
      <div>
        <h1 className="text-4xl font-bold mb-4">About Me</h1>
        <p className="text-gray-600 mb-10">Get to know my background, experience, and skills</p>

        <div className="grid gap-12">
          <section className="mb-12">
            <h2 className="text-2xl font-semibold mb-4 flex items-center gap-2">
              <Briefcase className="h-6 w-6" />
              Professional Summary
            </h2>
            <div className="bg-gray-50 rounded-lg shadow-md p-8 space-y-4">
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
                  <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
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
                  <div key={index} className="bg-gray-50 rounded-lg shadow-md p-6">
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
            <div className="bg-gray-50 rounded-lg shadow-md p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {skillCategories.map((category, index) => (
                  <div key={index}>
                    <h3 className="text-lg font-semibold mb-3">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          variant="secondary"
                          className={`bg-${category.badgeColor}-100 text-${category.badgeColor}-800 hover:bg-${category.badgeColor}-200`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
