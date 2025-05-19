"use client"

import { useState } from "react"
import "./Countries.css"

const Countries = () => {
  const [activeCountry, setActiveCountry] = useState(null)

  const countries = [
    {
      id: 1,
      name: "Canada",
      image: "/countries/canada.png",
      programs: ["Express Entry", "Provincial Nominee", "Study Permit"],
      color: "#e63946",
      flag: "🇨🇦",
    },
    {
      id: 2,
      name: "Australia",
      image: "/countries/australia.png",
      programs: ["Skilled Migration", "Student Visa", "Business Visa"],
      color: "#f4a261",
      flag: "🇦🇺",
    },
    {
      id: 3,
      name: "United Kingdom",
      image: "/countries/uk.png",
      programs: ["Skilled Worker Visa", "Student Visa", "Innovator Visa"],
      color: "#457b9d",
      flag: "🇬🇧",
    },
    {
      id: 4,
      name: "United States",
      image: "/countries/usa.jpeg",
      programs: ["H-1B Visa", "F-1 Student Visa", "EB-5 Investor"],
      color: "#1d3557",
      flag: "🇺🇸",
    },
    {
      id: 5,
      name: "New Zealand",
      image: "/countries/new-zealand.jpeg",
      programs: ["Skilled Migrant", "Work Visa", "Student Visa"],
      color: "#2a9d8f",
      flag: "🇳🇿",
    },
    {
      id: 6,
      name: "Germany",
      image: "/countries/germany.jpeg",
      programs: ["Job Seeker Visa", "EU Blue Card", "Study Visa"],
      color: "#e9c46a",
      flag: "🇩🇪",
    },
    {
      id: 7,
      name: "Singapore",
      image: "/countries/singapore.jpeg",
      programs: ["Employment Pass", "Entrepreneur Pass", "Student Pass"],
      color: "#f72585",
      flag: "🇸🇬",
    },
    {
      id: 8,
      name: "Ireland",
      image: "/countries/ireland.jpeg",
      programs: ["Critical Skills Permit", "Student Visa", "Working Holiday"],
      color: "#4cc9f0",
      flag: "🇮🇪",
    },
  ]

  return (
    <section className="countries-section">
      <div className="countries-container">
        <div className="countries-header">
          <div className="header-content">
            <span className="countries-badge">Global Opportunities</span>
            <h2>Explore Your Dream Destinations</h2>
            <p>
              Discover immigration pathways to these sought-after countries with our expert guidance and support at
              every step of your journey.
            </p>
          </div>
        </div>

        <div className="countries-grid">
          {countries.map((country) => (
            <div
              className={`country-card ${activeCountry === country.id ? "active" : ""}`}
              key={country.id}
              onMouseEnter={() => setActiveCountry(country.id)}
              onMouseLeave={() => setActiveCountry(null)}
              style={{
                "--card-color": country.color,
                "--card-color-rgb": hexToRgb(country.color),
              }}
            >
              <div className="card-image">
                <img src={country.image || "/placeholder.svg"} alt={country.name} />
                <div className="image-overlay"></div>
                <span className="country-flag">{country.flag}</span>
              </div>

              <div className="card-content">
                <h3>{country.name}</h3>

                <div className="program-list">
                  {country.programs.map((program, index) => (
                    <div className="program-item" key={index}>
                      <span className="program-dot"></span>
                      <span className="program-name">{program}</span>
                    </div>
                  ))}
                </div>

                <a href={`/countries/${country.name.toLowerCase().replace(/\s+/g, "-")}`} className="country-link">
                  Explore Options
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="countries-cta">
          <div className="cta-card">
            <div className="cta-content">
              <h3>Can't find what you're looking for?</h3>
              <p>Our immigration experts can help you explore options for countries not listed here.</p>
            </div>
            <a href="/contact" className="cta-button">
              Contact an Advisor
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M8 10L12 14L16 10"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

// Helper function to convert hex to rgb
function hexToRgb(hex) {
  // Remove the # if present
  hex = hex.replace("#", "")

  // Parse the hex values
  const r = Number.parseInt(hex.substring(0, 2), 16)
  const g = Number.parseInt(hex.substring(2, 4), 16)
  const b = Number.parseInt(hex.substring(4, 6), 16)

  return `${r}, ${g}, ${b}`
}

export default Countries
