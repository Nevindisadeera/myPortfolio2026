import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import Stats from './components/Stats'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />

        <section className="py-3">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
            <div id="about" className="reveal scroll-mt-20 lg:col-span-5">
              <About />
            </div>
            <div
              id="services"
              className="reveal scroll-mt-20 lg:col-span-7"
              style={{ transitionDelay: '120ms' }}
            >
              <Services />
            </div>
          </div>
        </section>

        <TechStack />
        <Projects />
        <Stats />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
