import { useState, useEffect, useRef } from "react"
import "./Hero.css"

const Hero = () => {
  // Create state for each statistic
  const [yearsCount, setYearsCount] = useState(0)
  const [visasCount, setVisasCount] = useState(0)
  const [countriesCount, setCountriesCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  
  // Final values for the statistics
  const finalYears = 15
  const finalVisas = 10000
  const finalCountries = 20
  
  // Reference to the stats section
  const statsRef = useRef(null)
  
  // Function to animate counting
  const animateCount = (current, target, setter, duration, isThousands = false) => {
    // Calculate the increment per frame
    const increment = target / (duration / 16)
    let currentCount = current
    
    const timer = setInterval(() => {
      currentCount += increment
      if (currentCount >= target) {
        clearInterval(timer)
        currentCount = target
      }
      setter(Math.floor(currentCount))
    }, 16)
    
    return timer
  }
  
  // Set up intersection observer to detect when stats are visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    )
    
    if (statsRef.current) {
      observer.observe(statsRef.current)
    }
    
    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current)
      }
    }
  }, [])
  
  // Start animation when section becomes visible
  useEffect(() => {
    if (isVisible) {
      const timer1 = animateCount(0, finalYears, setYearsCount, 2000)
      const timer2 = animateCount(0, finalVisas, setVisasCount, 2500, true)
      const timer3 = animateCount(0, finalCountries, setCountriesCount, 1500)
      
      return () => {
        clearInterval(timer1)
        clearInterval(timer2)
        clearInterval(timer3)
      }
    }
  }, [isVisible])
  
  // Format the visa count with 'k' suffix
  const formatVisaCount = () => {
    if (visasCount >= 1000) {
      return `${Math.floor(visasCount / 1000)}k+`
    }
    return visasCount
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>We Build Your Future Beyond Borders</h1>
        <p>Expert guidance for your immigration journey to study, work, and settle abroad</p>
        <div className="hero-buttons">
          <a href="#services" className="btn btn-primary">
            Our Services
          </a>
          <a href="#contact" className="btn btn-outline">
            Free Consultation
          </a>
        </div>
        <div className="hero-stats" ref={statsRef}>
          <div className="stat">
            <h3>{yearsCount}+</h3>
            <p>Years Experience</p>
          </div>
          <div className="stat">
            <h3>{formatVisaCount()}</h3>
            <p>Successful Visas</p>
          </div>
          <div className="stat">
            <h3>{countriesCount}+</h3>
            <p>Countries</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero