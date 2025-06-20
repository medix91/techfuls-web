import HeroSection from "../components/HeroSection"
import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import ProjectsSection from "../components/ProjectsSection"
import ContactSection from "../components/ContactSection"

const Home = () => {
  return (
    <main className="bg-white dark:bg-gray-900 transition-colors duration-300">
      <HeroSection />

      <section id="about" className="scroll-mt-20">
        <AboutSection />
      </section>

      <section id="services" className="scroll-mt-20">
        <ServicesSection />
      </section>

      <section id="projects" className="scroll-mt-20">
        <ProjectsSection />
      </section>

      <section id="contact" className="scroll-mt-20">
        <ContactSection />
      </section>
    </main>
  )
}

export default Home
