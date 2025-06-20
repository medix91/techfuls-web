import SectionTitle from "./SectionTitle"
import { Github } from "lucide-react"

type Project = {
  title: string
  description: string
  image: string
  tech: string[]
  link?: string
}

const projects: Project[] = [
  {
    title: "Portfolio interactif",
    description:
      "Un portfolio en React + Tailwind avec PDF export, animations et dark mode.",
    image: "/src/assets/images/portfolio-1.jpg",
    tech: ["React", "Tailwind", "Framer Motion"],
    link: "#",
  },
  {
    title: "Dashboard SaaS",
    description:
      "Interface admin moderne pour gérer une app SaaS, avec Firebase et charts.",
    image: "/src/assets/images/portfolio-2.jpg",
    tech: ["React", "Firebase", "Chart.js"],
    link: "#",
  },
  {
    title: "Landing Page animée",
    description:
      "Une landing page responsive avec effet parallax et composants animés.",
    image: "/src/assets/images/portfolio-3.jpg",
    tech: ["HTML", "CSS", "GSAP"],
    link: "#",
  },
]

const ProjectsSection = () => {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <SectionTitle
        title="Projets récents"
        subtitle="Quelques réalisations Techfuls"
      />

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-white/5 rounded-2xl overflow-hidden shadow-lg group hover:-translate-y-1 transition duration-300 border border-gray-100 dark:border-white/10"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />

            <div className="p-6 flex flex-col gap-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800 dark:text-white group-hover:text-primary transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                  {project.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 text-xs">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="bg-primary/10 text-primary px-2 py-1 rounded-full"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-1 text-primary text-sm hover:underline font-medium"
                >
                  Voir le projet <Github size={16} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectsSection
