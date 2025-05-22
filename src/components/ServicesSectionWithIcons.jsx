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
  { name: "Study", icon: <FaGraduationCap size={32} />, link: "/services/study" },
  { name: "Work Permit", icon: <FaBriefcase size={32} />, link: "/services/work-permit" },
  { name: "Permanent Residency", icon: <FaHome size={32} />, link: "/services/permanent-residency" },
  { name: "Family Immigration", icon: <FaUsers size={32} />, link: "/services/family-immigration" },
  { name: "Business Immigration", icon: <FaBuilding size={32} />, link: "/services/business-immigration" },
  { name: "Tourist", icon: <FaPlane size={32} />, link: "/services/tourist" },
  { name: "Air ticket service", icon: <FaPlaneDeparture size={32} />, link: "/services/air-ticket-service" },
  { name: "Show Money assistance", icon: <FaFileInvoiceDollar size={32} />, link: "/services/show-money-assistance" },
]

const ServicesSectionWithIcons = () => {
  const sectionRef = useRef(null)
  const cardsRef = useRef([])
  const headingRef = useRef(null)
  const descriptionRef = useRef(null)
  const contactRef = useRef(null)

  useEffect(() => {
    if (typeof window === "undefined") return

    // Reset refs when services change
    cardsRef.current = cardsRef.current.slice(0, services.length)

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    })

    // Animate the heading
    tl.fromTo(headingRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" })

    // Animate the description
    tl.fromTo(
      descriptionRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
      "-=0.6",
    )

    // Animate the service cards with a stagger effect
    tl.fromTo(
      cardsRef.current,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    )

    // Animate the contact card
    tl.fromTo(
      contactRef.current,
      { scale: 0.9, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.6, ease: "back.out(1.7)" },
      "-=0.2",
    )

    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
      tl.kill()
    }
  }, [])

  return (
    <section className="services-section" ref={sectionRef}>
      <div className="services-container">
        <div className="services-header">
          <div className="services-header-content" ref={headingRef}>
            <span className="services-tag">Our Services</span>
            <h2>Discover Your Immigration Pathway</h2>
          </div>
          <div className="services-description" ref={descriptionRef}>
            <p>
              Embark on a migration journey seamlessly tailored to your lifestyle, where every step is enriched by our
              personalized touch, ensuring an unforgettable experience.
            </p>
          </div>
        </div>

        <div className="services-grid">
          {services.map((service, index) => (
            <a href={service.link} key={index} className="service-card" ref={(el) => (cardsRef.current[index] = el)}>
              <div className="service-card-content">
                <div className="service-icon">{service.icon}</div>
                <h3>{service.name}</h3>
              </div>
              <div className="service-card-arrow">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>

        {/* <div className="services-contact" ref={contactRef}>
          <div className="contact-card">
            <div className="contact-card-content">
              <div className="contact-avatar">
                <img src="/dp.webp" alt="Immigration Consultant" />
              </div>
              <div className="contact-info">
                <p>Speak with our Senior Consultant</p>
                <h3>
                  <FaPhoneAlt className="phone-icon" /> +91 98765 43210
                </h3>
              </div>
            </div>
            <a href="/contact" className="servicecontact-button">
              Schedule a Call
            </a>
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default ServicesSectionWithIcons


// "use client"

// import { useEffect, useRef } from "react"
// import "./ServicesSectionWithIcons.css"
// import {
//   FaGraduationCap,
//   FaBriefcase,
//   FaHome,
//   FaUsers,
//   FaBuilding,
//   FaPlane,
//   FaFileInvoiceDollar,
//   FaPlaneDeparture,
//   FaPhoneAlt,
// } from "react-icons/fa"
// import gsap from "gsap"
// import { ScrollTrigger } from "gsap/ScrollTrigger"

// // Register ScrollTrigger plugin
// if (typeof window !== "undefined") {
//   gsap.registerPlugin(ScrollTrigger)
// }

// const services = [
//   { name: "Study", icon: <FaGraduationCap size={40} color="#819cd7" />, link: "/services/study" },
//   { name: "Work Permit", icon: <FaBriefcase size={40} color="#819cd7" />, link: "/services/work-permit" },
//   { name: "Permanent Residency", icon: <FaHome size={40} color="#819cd7" />, link: "/services/permanent-residency" },
//   { name: "Family Immigration", icon: <FaUsers size={40} color="#819cd7" />, link: "/services/family-immigration" },
//   { name: "Business Immigration", icon: <FaBuilding size={40} color="#819cd7" />, link: "/services/business-immigration" },
//   { name: "Tourist", icon: <FaPlane size={40} color="#819cd7" />, link: "/services/tourist" },
//   { name: "Air ticket service", icon: <FaPlaneDeparture size={40} color="#819cd7" />, link: "/services/air-ticket-service" },
//   { name: "Show Money assistance", icon: <FaFileInvoiceDollar size={40} color="#819cd7" />, link: "/services/show-money-assistance" },
// ]

// const ServicesSectionWithIcons = () => {
//   const sectionRef = useRef(null)
//   const cardsRef = useRef([])
//   const contentRef = useRef(null)

//   useEffect(() => {
//     // Make sure we're in the browser environment
//     if (typeof window === "undefined") return

//     // Create a timeline for the animations
//     const tl = gsap.timeline({
//       scrollTrigger: {
//         trigger: sectionRef.current,
//         start: "top 80%", // Animation starts when the top of the section is 80% from the top of the viewport
//         toggleActions: "play none none none",
//       },
//     })

//     // Animate the service cards with a stagger effect
//     tl.fromTo(
//       cardsRef.current,
//       {
//         y: 50,
//         opacity: 0,
//         scale: 0.9,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         scale: 1,
//         stagger: 0.1, // 0.1 second delay between each card animation
//         duration: 0.6,
//         ease: "power2.out",
//       },
//     )

//     // Animate the content section
//     tl.fromTo(
//       contentRef.current.children,
//       {
//         y: 30,
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         stagger: 0.2,
//         duration: 0.8,
//         ease: "power2.out",
//       },
//       "-=0.4", // Start slightly before the card animations finish
//     )

//     // Animate the contact info with a bounce effect
//     tl.fromTo(
//       ".service-section-contact-info",
//       {
//         scale: 0.8,
//         opacity: 0,
//       },
//       {
//         scale: 1,
//         opacity: 1,
//         duration: 0.5,
//         ease: "back.out(1.7)",
//       },
//       "-=0.2",
//     )

//     // Cleanup function
//     return () => {
//       if (tl.scrollTrigger) {
//         tl.scrollTrigger.kill()
//       }
//       tl.kill()
//     }
//   }, [])

//   // Reset refs when services change
//   useEffect(() => {
//     cardsRef.current = cardsRef.current.slice(0, services.length)
//   }, [services])

//   return (
//     <div className="service-section-layout" ref={sectionRef}>
//       <div className="service-section-cards-container">
//         <div className="service-section-grid">
//           {services.map((service, index) => (
//             <a
//               href={service.link}
//               key={index}
//               className="service-section-card"
//               ref={(el) => (cardsRef.current[index] = el)}
//             >
//               <div className="service-section-icon-circle">{service.icon}</div>
//               <h3 className="service-section-title">{service.name}</h3>
//             </a>
//           ))}
//         </div>
//       </div>

//       <div className="service-section-content" ref={contentRef}>
//         <span className="service-section-heading ">Our Expertise</span>
//         <h2 className="service-section-expertise-label">Let Us Help You Discover Your Future</h2>
//         <p className="service-section-description">
//           Embark on a migration journey seamlessly tailored to your lifestyle, where every step is enriched by our
//           personalized touch, ensuring an unforgettable experience that reflects our commitment to enhancing your life's
//           adventure.
//         </p>

//         <div className="service-section-contact-info">
//           <div className="service-section-contact-avatar">
//             <img src="/dp.webp" alt="Immigration Consultant" />
//           </div>
//           <div className="service-section-contact-details">
//             <p className="service-section-contact-label">call our Senior Consultant</p>
//             <h3 className="service-section-contact-phone">
//               <FaPhoneAlt className="service-section-phone-icon" /> +91 98765 43210
//             </h3>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default ServicesSectionWithIcons
