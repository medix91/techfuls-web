type SectionTitleProps = {
  title: string
  subtitle?: string
}

const SectionTitle = ({ title, subtitle }: SectionTitleProps) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-primary">{title}</h2>
      {subtitle && (
        <p className="mt-2 text-gray-600 dark:text-gray-300 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}

export default SectionTitle
