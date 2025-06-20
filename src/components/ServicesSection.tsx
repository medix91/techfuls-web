import type { JSX } from "react"
import SectionTitle from "./SectionTitle"
import { Code, Paintbrush, Rocket } from "lucide-react"

type Service = {
  icon: JSX.Element
  title: string
  description: string
}

const services: Service[] = [
  {
    icon: <Code size={36} className="text-primary" />,
    title: "Développement sur mesure",
    description:
      "Applications web performantes et évolutives, construites avec les dernières technologies.",
  },
  {
    icon: <Paintbrush size={36} className="text-primary" />,
    title: "Design UI/UX",
    description:
      "Interfaces élégantes et intuitives centrées sur l'expérience utilisateur.",
  },
  {
    icon: <Rocket size={36} className="text-primary" />,
    title: "Accompagnement & stratégie",
    description:
      "Audit technique, conseils, et mise en place de solutions digitales adaptées à vos objectifs.",
  },
]

const ServicesSection = () => {
  return (
    <div className="py-20 px-4 max-w-6xl mx-auto">
      <SectionTitle
        title="Nos services"
        subtitle="Ce que Techfuls peut faire pour toi"
      />

      <div className="grid md:grid-cols-3 gap-8 mt-12">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="bg-white dark:bg-white/5 backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl shadow-lg p-6 hover:-translate-y-2 transition-all duration-300 group"
          >
            <div className="mb-4">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-primary transition">
              {service.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 text-sm">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ServicesSection
