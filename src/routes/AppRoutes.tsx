import Home from '../pages/Home'
import About from '../pages/About'
import Services from '../pages/Services'
import Projects from '../pages/Projects'
import Contact from '../pages/Contact'

const appRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/services', element: <Services /> },
  { path: '/projects', element: <Projects /> },
  { path: '/contact', element: <Contact /> },
]

export default appRoutes
