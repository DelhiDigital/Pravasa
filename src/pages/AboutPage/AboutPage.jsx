"use client"

import { Link } from "react-router-dom"
import { useEffect, useState, useRef } from "react"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import WhatsAppButton from "../../components/WhatsAppButton"
import "./AboutPage.css"

const AboutPage = () => {
  const [activeSection, setActiveSection] = useState(0)
  const sectionsRef = useRef([])
  const [counters, setCounters] = useState({
    years: 0,
    visas: 0,
    countries: 0,
    experts: 0,
  })
  const [counterStarted, setCounterStarted] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    // Initialize refs array
    sectionsRef.current = sectionsRef.current.slice(0, 5)

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      sectionsRef.current.forEach((section, index) => {
        if (!section) return

        const offsetTop = section.offsetTop
        const height = section.offsetHeight

        if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
          setActiveSection(index)
        }
      })

      // Start counter animation when hero section is in view
      const heroSection = document.querySelector(".hero-section")
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect()
        if (heroRect.top < window.innerHeight && heroRect.bottom > 0 && !counterStarted) {
          setCounterStarted(true)
          startCounters()
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [counterStarted])

  const startCounters = () => {
    const duration = 2000 // 2 seconds
    const interval = 20 // update every 20ms
    const steps = duration / interval

    let currentStep = 0

    const timer = setInterval(() => {
      currentStep++

      const progress = currentStep / steps

      setCounters({
        years: Math.ceil(progress * 15),
        visas: Math.ceil(progress * 10000),
        countries: Math.ceil(progress * 20),
        experts: Math.ceil(progress * 50),
      })

      if (currentStep >= steps) {
        clearInterval(timer)
      }
    }, interval)
  }

  const sections = [
    {
      id: "story",
      title: "Our Story",
      content:
        "Founded in 2008, Pravasa Immigration has grown from a small consultancy to one of the leading immigration service providers in India. Our journey began with a simple mission: to help people achieve their dreams of studying, working, and living abroad through honest, professional guidance.",
      image:
        "https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1169&q=80",
    },
    {
      id: "mission",
      title: "Our Mission",
      content:
        "To empower individuals and families to achieve their global mobility goals through expert guidance, personalized solutions, and unwavering support throughout their immigration journey.",
      image:
        "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "vision",
      title: "Our Vision",
      content:
        "To be the most trusted name in global immigration services, known for our integrity, expertise, and commitment to transforming our clients' international dreams into reality.",
      image:
        "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    },
    {
      id: "values",
      title: "Our Values",
      values: [
        { name: "Integrity", desc: "Complete transparency and honesty" },
        { name: "Client-Centric", desc: "Your needs at the center" },
        { name: "Excellence", desc: "Highest standards of professionalism" },
        { name: "Global Perspective", desc: "Embracing cultural diversity" },
      ],
      image:
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    },
    {
      id: "team",
      title: "Our Team",
      members: [
        {
          name: "Rajiv Sharma",
          role: "CEO & Founder",
          image:
            "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          quote: "Our mission is to transform dreams into reality through honest guidance and expert support.",
        },
        {
          name: "Priya Patel",
          role: "Chief Operations Officer",
          image:
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
          quote: "Efficiency and excellence are at the heart of everything we do at Pravasa.",
        },
        {
          name: "Anil Kumar",
          role: "Head Immigration Consultant",
          image:
            "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
          quote: "Every immigration journey is unique, and we tailor our approach to each client's specific needs.",
        },
        {
          name: "Meera Joshi",
          role: "Legal Advisor",
          image:
            "https://images.unsplash.com/photo-1580894732444-8ecded7900cd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
          quote: "Navigating immigration law requires precision and expertise - that's what we provide.",
        },
      ],
    },
  ]

  const stats = [
    { number: counterStarted ? counters.years + "+" : "15+", label: "Years" },
    { number: counterStarted ? (counters.visas >= 10000 ? "10,000+" : counters.visas) : "10,000+", label: "Visas" },
    { number: counterStarted ? counters.countries + "+" : "20+", label: "Countries" },
    { number: counterStarted ? counters.experts + "+" : "50+", label: "Experts" },
  ]

  return (
    <div className="app">
      <Header />

      <div className="aboutpage-container">
        {/* Top Navigation Dots */}
        <div className="section-dots">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`dot ${activeSection === index ? "active" : ""}`}
              onClick={() => {
                sectionsRef.current[index].scrollIntoView({ behavior: "smooth" })
              }}
            >
              <span className="dot-tooltip">{section.title}</span>
            </div>
          ))}
        </div>

        <div className="main-content">
          <div className="hero-section">
            <div className="abouthero-content">
              <h1>About Pravasa</h1>
              <div className="hero-stats">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item">
                    <div className="stat-number">{stat.number}</div>
                    <div className="stat-label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {sections.map((section, index) => (
            <div
              key={section.id}
              className={`content-section ${section.id}-section`}
              ref={(el) => (sectionsRef.current[index] = el)}
              id={section.id}
            >
              <div className="container">
                <div className="split-content">
                  <div className="text-half">
                    <h2>{section.title}</h2>
                    {section.content && <p>{section.content}</p>}

                    {section.values && (
                      <div className="values-grid grid grid-2">
                        {section.values.map((value, i) => (
                          <div key={i} className="value-item card">
                            <h3>{value.name}</h3>
                            <p>{value.desc}</p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {section.image && !section.members && (
                    <div className="image-half">
                      <div className="section-image" style={{ backgroundImage: `url(${section.image})` }}></div>
                    </div>
                  )}
                </div>

                {section.members && (
                  <div className="team-section-content">
                    <h2 className="section-title">{section.title}</h2>
                    <div className="team-grid grid grid-2">
                      {section.members.map((member, i) => (
                        <div key={i} className="team-member card">
                          <div className="member-image-container">
                            <img src={member.image || "/placeholder.svg"} alt={member.name} className="member-image" />
                          </div>
                          <div className="member-info">
                            <h3>{member.name}</h3>
                            <p className="member-role">{member.role}</p>
                            <div className="member-quote">
                              <p>"{member.quote}"</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="aboutcta-section">
            <div className="container">
              <div className="aboutcta-content">
                <h2>Ready to start your journey?</h2>
                <Link to="/contact" className="btn btn-primary">
                  Get Free Assessment
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default AboutPage
