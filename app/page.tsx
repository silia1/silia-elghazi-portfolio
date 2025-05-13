import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import GeometricBackground from '@/components/GeometricBackground'
import Certifications from '@/components/Certifications'
import Skills from '@/components/Skills'

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-hidden">
      <GeometricBackground />
      <div className="relative z-10">
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        
      </div>
    </main>
  )
}

