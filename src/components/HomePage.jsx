import { useEffect } from 'react'
import Hero from './Hero'
import Impact from './Impact'
import Clients from './Clients'
import Gallery from './Gallery'
import Services from './Services'
import WorkShowcase from './WorkShowcase'
import Process from './Process'
import Experience from './Experience'
import Skills from './Skills'
import Contact from './Contact'
import Footer from './Footer'

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.documentElement.scrollTop = 0
    document.body.scrollTop = 0
  }, [])

  return (
    <>
      <Hero />
      <Impact />
      <Clients />
      <Gallery />
      <WorkShowcase />
      <Services />
      <Process />
      <Experience />
      <Skills />
      <Contact />
      <Footer />
    </>
  )
}
