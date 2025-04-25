import "./Services.css"
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaHome, 
  FaUsers, 
  FaBuilding, 
  FaPlane, 
  FaArrowRight 
} from "react-icons/fa"

const Services = () => {
  const services = [
    {
      id: 1,
      icon: <FaGraduationCap size={50} />,
      title: "Study Visa",
      description: "Get expert guidance for student visas to top educational destinations worldwide.",
    },
    {
      id: 2,
      icon: <FaBriefcase size={50} />,
      title: "Work Permit",
      description: "Secure work permits and employment visas with our specialized assistance.",
    },
    {
      id: 3,
      icon: <FaHome size={50} />,
      title: "Permanent Residency",
      description: "Navigate the complex PR process with our experienced consultants.",
    },
    {
      id: 4,
      icon: <FaUsers size={50} />,
      title: "Family Immigration",
      description: "Reunite with your family through our family sponsorship programs.",
    },
    {
      id: 5,
      icon: <FaBuilding size={50} />,
      title: "Business Immigration",
      description: "Expand your business globally with our business immigration services.",
    },
    {
      id: 6,
      icon: <FaPlane size={50} />,
      title: "Tourist Visa",
      description: "Hassle-free tourist visa processing for your travel needs.",
    },
  ]

  return (
    <section id="services" className="section services">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive immigration solutions tailored to your needs</p>
        </div>

        <div className="services-grid">
          {services.map((service) => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">
                Learn More <FaArrowRight />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services