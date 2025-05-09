"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import "./Hero.css"

const Hero = () => {
  const serviceTextRef = useRef(null)
  const titleRef = useRef(null)
  const containerRef = useRef(null)

  // Array of services that will rotate
  const services = [
    "Study Visa",
    "Work Permit",
    "Permanent Residency",
    "Family Immigration",
    "Business Immigration",
    "Tourist Visa",
    "Air Ticket Service",
    "Show Money Assistance",
  ]

  useEffect(() => {
    // Animate the title once on load
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 30,
      duration: 1.2,
      ease: "power3.out",
    })

    // Set up the rotating text animation
    let currentIndex = 0

    // Initial text setting
    if (serviceTextRef.current) {
      serviceTextRef.current.textContent = services[0]
    }

    // Create timeline for text rotation
    const textTimeline = gsap.timeline({
      repeat: -1, // Infinite repeat
      repeatDelay: 0.5,
    })

    // Function to update the service text
    const updateServiceText = () => {
      textTimeline
        .to(serviceTextRef.current, {
          opacity: 0,
          y: 20,
          duration: 0.5,
          onComplete: () => {
            currentIndex = (currentIndex + 1) % services.length
            serviceTextRef.current.textContent = services[currentIndex]
          },
        })
        .to(serviceTextRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.5,
        })
        .to({}, { duration: 4 }) // Wait for 4 seconds before next change
    }

    // Start the animation
    updateServiceText()

    // Clean up animation on unmount
    return () => {
      textTimeline.kill()
    }
  }, [])

  return (
    <section id="home" className="hero">
      <div className="hero-container" ref={containerRef}>
        <div className="hero-content">
          <h1 >We Build Your Future Beyond Borders</h1>
          <div className="service-text-container">
            <p className="service-text" ref={serviceTextRef}></p>
          </div>
          {/* <a href="#contact" className="btn btn-primary hero-cta">
            Get Free Assessment
          </a> */}
        </div>
      </div>
    </section>
  )
}

export default Hero
