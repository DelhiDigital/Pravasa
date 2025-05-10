import Header from "./components/Header"
import Hero from "./components/Hero"
import About from "./components/About"
import Services from "./components/Services"
import Countries from "./components/Countries"
import Process from "./components/Process"
import Testimonials from "./components/Testimonials"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import WhatsAppButton from "./components/WhatsAppButton"
import FAQ from "./components/FAQ"
import ServiceDetail from "./pages/ServiceDetail/ServiceDetail"

import "./App.css"

function App() {
  return (
    <div className="app">
      
      <Header />
      <Hero />
      <About />
      <Services />
      <Countries />
      <FAQ />
      <Process />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default App
