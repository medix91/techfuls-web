import SectionTitle from "./SectionTitle"

const AboutSection = () => {
  return (
    <div className="py-20 px-4 max-w-5xl mx-auto text-center">
      <SectionTitle title="À propos" subtitle="Qui sommes-nous ?" />
      <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
        Techfuls est un studio indépendant qui conçoit des solutions modernes, élégantes et performantes.
        Nous allions design, développement et stratégie pour offrir une expérience digitale unique.
      </p>
    </div>
  )
}

export default AboutSection
