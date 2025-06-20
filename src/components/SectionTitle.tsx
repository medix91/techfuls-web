type SectionTitleProps = {
  title: string
  subtitle?: string
  inverted?: boolean // 👈 nouveau prop pour forcer texte blanc
}

const SectionTitle = ({ title, subtitle, inverted }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h2
        className={`text-3xl md:text-4xl font-bold ${
          inverted ? "text-white" : "text-primary"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-2 text-lg ${
            inverted ? "text-white/90" : "text-gray-600 dark:text-gray-300"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
