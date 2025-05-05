import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa"
import "./Header.css"
import Logo from "./Logo"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const handleMenuItemClick = () => {
    if (mobileMenuOpen) {
      setMobileMenuOpen(false)
    }
    setActiveDropdown(null)
  }

  const toggleDropdown = (dropdown) => {
    if (activeDropdown === dropdown) {
      setActiveDropdown(null)
    } else {
      setActiveDropdown(dropdown)
    }
  }

  // Company dropdown items
  const companyDropdown = [
    { id: 1, title: "About Us", to: "/about" },
    { id: 2, title: "Testimonials", to: "/#testimonials" },
    { id: 3, title: "Team", to: "/about" }, // Now links to the about page which has team section
  ]

  // Services dropdown items
  const servicesDropdown = [
    { id: 1, title: "Study Visa", to: "/#services" },
    { id: 2, title: "Work Permit", to: "/#services" },
    { id: 3, title: "Permanent Residency", to: "/#services" },
    { id: 4, title: "Family Immigration", to: "/#services" },
    { id: 5, title: "Business Immigration", to: "/#services" },
    { id: 6, title: "Tourist Visa", to: "/#services" },
    { id: 7, title: "Air Ticket Service", to: "/#services" },
    { id: 8, title: "Show Money Assistance", to: "/#services" },
  ]

  // Countries dropdown items
  const countriesDropdown = [
    { id: 1, title: "Canada", to: "/#countries" },
    { id: 2, title: "Australia", to: "/#countries" },
    { id: 3, title: "United Kingdom", to: "/#countries" },
    { id: 4, title: "United States", to: "/#countries" },
    { id: 5, title: "New Zealand", to: "/#countries" },
    { id: 6, title: "Germany", to: "/#countries" },
    { id: 7, title: "Singapore", to: "/#countries" },
    { id: 8, title: "Ireland", to: "/#countries" },
  ]

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Link to="/" className="logo-link">
          <Logo />
        </Link>

        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
        </div>

        <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className={`nav-item dropdown ${activeDropdown === "company" ? "active" : ""}`}>
              <div
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown("company")}
                onMouseEnter={() => window.innerWidth > 992 && setActiveDropdown("company")}
              >
                Our Company <FaChevronDown className="dropdown-icon" />
              </div>
              <div className="dropdown-menu" onMouseLeave={() => window.innerWidth > 992 && setActiveDropdown(null)}>
                {companyDropdown.map((item) => (
                  <Link key={item.id} to={item.to} className="dropdown-item" onClick={handleMenuItemClick}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </li>
            <li className={`nav-item dropdown ${activeDropdown === "services" ? "active" : ""}`}>
              <div
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown("services")}
                onMouseEnter={() => window.innerWidth > 992 && setActiveDropdown("services")}
              >
                Services <FaChevronDown className="dropdown-icon" />
              </div>
              <div className="dropdown-menu" onMouseLeave={() => window.innerWidth > 992 && setActiveDropdown(null)}>
                {servicesDropdown.map((item) => (
                  <Link key={item.id} to={item.to} className="dropdown-item" onClick={handleMenuItemClick}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </li>
            {/* <li className={`nav-item dropdown ${activeDropdown === "countries" ? "active" : ""}`}>
              <div
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown("countries")}
                onMouseEnter={() => window.innerWidth > 992 && setActiveDropdown("countries")}
              >
                Countries <FaChevronDown className="dropdown-icon" />
              </div>
              <div className="dropdown-menu" onMouseLeave={() => window.innerWidth > 992 && setActiveDropdown(null)}>
                {countriesDropdown.map((item) => (
                  <Link key={item.id} to={item.to} className="dropdown-item" onClick={handleMenuItemClick}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </li> */}
            <li className="nav-item">
              <Link to="#process" className="nav-link" onClick={handleMenuItemClick}>
                Process
              </Link>
            </li> 
            <li className="nav-item">
              <Link to="/faq" className="nav-link" onClick={handleMenuItemClick}>
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/#contact" className="nav-link" onClick={handleMenuItemClick}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <Link to="/#contact" className="btn btn-primary">
            Free Assessment
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
