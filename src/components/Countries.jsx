import "./Countries.css"

const Countries = () => {
  const countries = [
    {
      id: 1,
      name: "Canada",
      image: "/countries/canada.png",
      programs: ["Express Entry", "Provincial Nominee", "Study Permit"],
      color: "#e63946"
    },
    {
      id: 2,
      name: "Australia",
      image: "/countries/australia.png",
      programs: ["Skilled Migration", "Student Visa", "Business Visa"],
      color: "#f4a261"
    },
    {
      id: 3,
      name: "United Kingdom",
      image: "/countries/uk.png",
      programs: ["Skilled Worker Visa", "Student Visa", "Innovator Visa"],
      color: "#457b9d"
    },
    {
      id: 4,
      name: "United States",
      image: "/countries/usa.jpeg",
      programs: ["H-1B Visa", "F-1 Student Visa", "EB-5 Investor"],
      color: "#1d3557"
    },
    {
      id: 5,
      name: "New Zealand",
      image: "/countries/new-zealand.jpeg",
      programs: ["Skilled Migrant", "Work Visa", "Student Visa"],
      color: "#2a9d8f"
    },
    {
      id: 6,
      name: "Germany",
      image: "/countries/germany.jpeg",
      programs: ["Job Seeker Visa", "EU Blue Card", "Study Visa"],
      color: "#e9c46a"
    },
    {
      id: 7,
      name: "Singapore",
      image: "/countries/singapore.jpeg",
      programs: ["Employment Pass", "Entrepreneur Pass", "Student Pass"],
      color: "#f72585"
    },
    {
      id: 8,
      name: "Ireland",
      image: "/countries/ireland.jpeg",
      programs: ["Critical Skills Permit", "Student Visa", "Working Holiday"],
      color: "#4cc9f0"
    },
  ]

  return (
    <section id="countries" className="explore-section">
      <div className="explore-container">
        <div className="explore-header">
          <span className="explore-tag">Global Opportunities</span>
          <h2>Explore Your <span className="highlight">Dream Destinations</span></h2>
          <p>Discover immigration pathways to these sought-after countries</p>
        </div>

        <div className="destination-showcase">
          {countries.map((country) => (
            <div className="destination-tile" key={country.id} style={{"--accent-color": country.color}}>
              <div className="destination-content">
                <div className="destination-info">
                  <h3>{country.name}</h3>
                  <div className="program-pills">
                    {country.programs.map((program, index) => (
                      <span className="program-pill" key={index}>{program}</span>
                    ))}
                  </div>
                  <button className="explore-btn">Learn More</button>
                </div>
                <div className="destination-visual">
                  <div className="image-container">
                    <img src={country.image || "/placeholder.svg"} alt={country.name} />
                  </div>
                  <div className="accent-circle"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="explore-footer">
          <p>Can't find what you're looking for?</p>
          <button className="contact-advisor-btn">Contact an Immigration Advisor</button>
        </div>
      </div>
    </section>
  )
}

export default Countries