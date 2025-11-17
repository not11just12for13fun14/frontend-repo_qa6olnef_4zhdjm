import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Approach from './components/Approach'
import Why from './components/Why'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <main className="mt-16">
        <Hero />
        <Services />
        <Approach />
        <Why />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
