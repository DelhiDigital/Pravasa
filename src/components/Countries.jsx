import "./Countries.css"

const Countries = () => {
  const countries = [
    {
      id: 1,
      name: "Canada",
      image: "/countries/canada.png",
      programs: ["Express Entry", "Provincial Nominee", "Study Permit"],
    },
    {
      id: 2,
      name: "Australia",
      image: "/countries/australia.png",
      programs: ["Skilled Migration", "Student Visa", "Business Visa"],
    },
    {
      id: 3,
      name: "United Kingdom",
      image: "/countries/uk.png",
      programs: ["Skilled Worker Visa", "Student Visa", "Innovator Visa"],
    },
    {
      id: 4,
      name: "United States",
      image: "/countries/usa.jpeg",
      programs: ["H-1B Visa", "F-1 Student Visa", "EB-5 Investor"],
    },
    {
      id: 5,
      name: "New Zealand",
      image: "/countries/new-zealand.jpeg",
      programs: ["Skilled Migrant", "Work Visa", "Student Visa"],
    },
    {
      id: 6,
      name: "Germany",
      image: "/countries/germany.jpeg",
      programs: ["Job Seeker Visa", "EU Blue Card", "Study Visa"],
    },
    {
      id: 7,
      name: "Singapore",
      image: "/countries/singapore.jpeg",
      programs: ["Employment Pass", "Entrepreneur Pass", "Student Pass"],
    },
    {
      id: 8,
      name: "Ireland",
      image: "/countries/ireland.jpeg",
      programs: ["Critical Skills Permit", "Student Visa", "Working Holiday"],
    },
  ]

  return (
    <section id="countries" className="section countries">
      <div className="container">
        <div className="section-title">
          <h2>Popular Destinations</h2>
          <p>Explore immigration opportunities in these top destinations</p>
        </div>

        <div className="countries-grid">
          {countries.map((country) => (
            <div className="country-card" key={country.id}>
              <div className="country-image">
                <img src={country.image || "/placeholder.svg"} alt={country.name} />
                <div className="country-overlay">
                  <h3>{country.name}</h3>
                </div>
              </div>
              <div className="country-programs">
                <h4>Popular Programs:</h4>
                <ul>
                  {country.programs.map((program, index) => (
                    <li key={index}>{program}</li>
                  ))}
                </ul>
                <a href="#contact" className="btn btn-outline btn-sm">
                  Enquire Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Countries
