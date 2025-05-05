"use client"

import { useEffect, useRef } from "react"
import "./ServicesSectionWithIcons.css"
import {
  FaGraduationCap,
  FaBriefcase,
  FaHome,
  FaUsers,
  FaBuilding,
  FaPlane,
  FaFileInvoiceDollar,
  FaPlaneDeparture,
  FaPhoneAlt,
} from "react-icons/fa"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const services = [
  { name: "Study", icon: <FaGraduationCap size={50} color="#819cd7" />, link: "#contact" },
  { name: "Work Permit", icon: <FaBriefcase size={50} color="#819cd7" />, link: "#contact" },
  { name: "Permanent Residency", icon: <FaHome size={50} color="#819cd7" />, link: "#contact" },
  { name: "Family Immigration", icon: <FaUsers size={50} color="#819cd7" />, link: "#contact" },
  { name: "Business Immigration", icon: <FaBuilding size={50} color="#819cd7" />, link: "#contact" },
  { name: "Tourist", icon: <FaPlane size={50} color="#819cd7" />, link: "#contact" },
  { name: "Air ticket service", icon: <FaPlaneDeparture size={50} color="#819cd7" />, link: "#contact" },
  { name: "Show Money assistance", icon: <FaFileInvoiceDollar size={50} color="#819cd7" />, link: "#contact" },
]

const ServicesSectionWithIcons = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const contentRef = useRef(null)

  useEffect(() => {
    // Make sure we're in the browser environment
    if (typeof window === "undefined") return

    // Create a timeline for the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%", // Animation starts when the top of the section is 80% from the top of the viewport
        toggleActions: "play none none none",
      },
    })

    // Animate the service cards with a stagger effect
    tl.fromTo(
      cardsRef.current,
      {
        y: 50,
        opacity: 0,
        scale: 0.9,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        stagger: 0.1, // 0.1 second delay between each card animation
        duration: 0.6,
        ease: "power2.out",
      },
    )

    // Animate the content section
    tl.fromTo(
      contentRef.current.children,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4", // Start slightly before the card animations finish
    )

    // Animate the contact info with a bounce effect
    tl.fromTo(
      ".service-section-contact-info",
      {
        scale: 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      },
      "-=0.2",
    )

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
      tl.kill()
    }
  }, [])

  // Reset refs when services change
  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, services.length)
  }, [services])

  return (
    <div className="service-section-layout" ref={sectionRef}>
      <div className="service-section-cards-container">
        <div className="service-section-grid">
          {services.map((service, index) => (
            <a
              href={service.link}
              key={index}
              className="service-section-card"
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className="service-section-icon-circle">{service.icon}</div>
              <h3 className="service-section-title">{service.name}</h3>
            </a>
          ))}
        </div>
      </div>

      <div className="service-section-content" ref={contentRef}>
        <span className="service-section-expertise-label">Our Expertise</span>
        <h2 className="service-section-heading">Let Us Help You Discover Your Future</h2>
        <p className="service-section-description">
          Embark on a migration journey seamlessly tailored to your lifestyle, where every step is enriched by our
          personalized touch, ensuring an unforgettable experience that reflects our commitment to enhancing your life's
          adventure.
        </p>

        <div className="service-section-contact-info">
          <div className="service-section-contact-avatar">
            <img src="/dp.webp" alt="Immigration Consultant" />
          </div>
          <div className="service-section-contact-details">
            <p className="service-section-contact-label">call our Senior Consultant</p>
            <h3 className="service-section-contact-phone">
              <FaPhoneAlt className="service-section-phone-icon" /> +91 98765 43210
            </h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ServicesSectionWithIcons
