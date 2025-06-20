import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { Sun, Moon, Menu, X } from "lucide-react"

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  )

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [darkMode])

  const toggleDarkMode = () => setDarkMode(!darkMode)
  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <header
      className={`sticky-nav ${
        isScrolled ? "bg-primary shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between transition duration-300">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="/src/assets/logos/techfuls-logo.svg"
            alt="Techfuls"
            className="h-10 w-auto"
          />
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex items-center space-x-8 text-white font-medium">
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
            <Link to="/contact">
              <button className="bg-white text-primary px-4 py-2 rounded-full shadow hover:shadow-lg transition font-semibold">
                Contact
              </button>
            </Link>
          </li>
        </ul>

        {/* Toggles */}
        <div className="flex items-center space-x-4">
          {/* Dark mode toggle */}
          <button onClick={toggleDarkMode} className="text-white">
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          {/* Langue toggle */}
          <button className="text-white font-bold text-sm border border-white px-2 py-1 rounded">
            🇫🇷 / 🇬🇧
          </button>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden text-white focus:outline-none"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden bg-primary text-white px-6 pb-6">
          <ul className="flex flex-col space-y-4 text-lg font-medium">
            <li>
              <Link to="/" onClick={toggleMenu}>Accueil</Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu}>À propos</Link>
            </li>
            <li>
              <Link to="/services" onClick={toggleMenu}>Services</Link>
            </li>
            <li>
              <Link to="/projects" onClick={toggleMenu}>Projets</Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu}>
                <button className="bg-white text-primary px-4 py-2 rounded-full shadow hover:shadow-lg transition font-semibold w-full">
                  Contact
                </button>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}

export default Navbar
