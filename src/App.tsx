import { useState, useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import LoadingScreen from './components/LoadingScreen'
import CursorGlow from './components/CursorGlow'
import FloatingWhatsApp from './components/FloatingWhatsApp'
import ParticleBackground from './components/ParticleBackground'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Skills from './pages/Skills'
import Projects from './pages/Projects'
import Industries from './pages/Industries'
import Security from './pages/Security'
import Testimonials from './pages/Testimonials'
import Pricing from './pages/Pricing'
import Contact from './pages/Contact'

function App() {
  const [loading, setLoading] = useState(true)
  const location = useLocation()

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <LoadingScreen visible={loading} />
      <CursorGlow />
      <ParticleBackground />
      <Navbar />
      <main style={{ flex: 1, position: 'relative', zIndex: 1 }}>
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/industries" element={<Industries />} />
            <Route path="/security" element={<Security />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
      <FloatingWhatsApp />
      <ScrollToTop />
    </>
  )
}

export default App
