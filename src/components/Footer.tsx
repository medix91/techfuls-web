import { Github, Linkedin, Mail } from "lucide-react"
import { Link } from "react-router-dom"

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 px-4">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8 items-start">
        {/* Logo + description */}
        <div className="flex flex-col gap-4">
          <img
            src="/src/assets/logos/techfuls-logo.svg"
            alt="Techfuls"
            className="h-10 w-auto"
          />
          <p className="text-sm text-white/80">
            Plateforme de développement, design & stratégie digitale. Propulsé
            par la passion du code et du pixel.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h4 className="font-semibold text-white mb-4">Navigation</h4>
          <ul className="space-y-2 text-white/80 text-sm">
            <li>
              <Link to="/">Accueil</Link>
            </li>
            <li>
              <Link to="/about">À propos</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/projects">Projets</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        {/* Contact / Social */}
        <div>
          <h4 className="font-semibold text-white mb-4">Réseaux</h4>
          <div className="flex flex-col gap-3 text-sm text-white/80">
            <a
              href="mailto:contact@techfuls.com"
              className="flex items-center gap-2 hover:underline"
            >
              <Mail size={16} /> contact@techfuls.com
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-2 hover:underline"
            >
              <Linkedin size={16} /> LinkedIn
            </a>
            <a
              href="#"
              target="_blank"
              className="flex items-center gap-2 hover:underline"
            >
              <Github size={16} /> GitHub
            </a>
          </div>
        </div>
      </div>

      {/* Footer base */}
      <div className="mt-12 border-t border-white/20 pt-6 text-center text-white/60 text-xs">
        © {new Date().getFullYear()} Techfuls — Tous droits réservés.
      </div>
    </footer>
  )
}

export default Footer
