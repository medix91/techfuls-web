const HeroSection = () => {
  return (
    <section className="relative bg-primary text-white pt-28 pb-20 overflow-hidden">
      {/* SVG background décoratif */}
      <svg
        className="absolute top-0 left-0 w-full h-full -z-10 opacity-20"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
      >
        <path
          fill="#ffffff"
          fillOpacity="0.1"
          d="M0,224L48,213.3C96,203,192,181,288,192C384,203,480,245,576,261.3C672,277,768,267,864,229.3C960,192,1056,128,1152,96C1248,64,1344,64,1392,64L1440,64V320H0Z"
        ></path>
      </svg>

      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center gap-12">
        {/* Texte */}
        <div className="md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl lg:text-6xl font-heading font-bold leading-tight drop-shadow">
            Construis <span className="text-yellow-300">l’avenir</span> avec Techfuls
          </h1>
          <p className="mt-6 text-lg text-white/90">
            Développement web moderne, design élégant, outils puissants pour faire briller tes projets.
          </p>
          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#services"
              className="bg-white text-primary font-semibold px-6 py-3 rounded-full shadow hover:shadow-lg transition"
            >
              Découvrir nos services
            </a>
            <a
              href="#contact"
              className="border border-white text-white font-semibold px-6 py-3 rounded-full hover:bg-white hover:text-primary transition"
            >
              Nous contacter
            </a>
          </div>
        </div>

        {/* Illustration */}
        <div className="md:w-1/2 flex justify-center">
          <div className="relative backdrop-blur-xl bg-white/10 rounded-2xl shadow-lg p-4 md:p-8 border border-white/20">
            <img
              src="/src/assets/images/building-website.svg"
              alt="Illustration Techfuls"
              className="w-60 h-60 md:w-72 md:h-72 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
