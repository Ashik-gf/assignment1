
import './App.css'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Cta from './Components/Cta/Cta'
import Faq from './Components/FaQ/Faq'
import Features from './Components/Features/Features'
import Footer from './Components/Footer/Footer'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/Navbar/Navbar'
import Properties from './Components/Properties/Properties'
import TeamSections from './Components/TeamSections/TeamSections'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Properties />
      <About />
      <Cta />
      <Faq />
      <TeamSections />
      <Contact />
      <Footer />
    </>
  )
}

export default App
