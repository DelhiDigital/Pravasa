"use client"

import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown } from "lucide-react"
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
    // { id: 2, title: "Testimonials", to: "/testimonials" },
  ]

  // Services dropdown items
  const servicesDropdown = [
    { id: 1, title: "Study Visa", to: "/services/study" },
    { id: 2, title: "Work Permit", to: "/services/work-permit" },
    { id: 3, title: "Permanent Residency", to: "/services/permanent-residency" },
    { id: 4, title: "Family Immigration", to: "/services/family-immigration" },
    { id: 5, title: "Business Immigration", to: "/services/business-immigration" },
    { id: 6, title: "Tourist Visa", to: "/services/tourist" },
    { id: 7, title: "Air Ticket Service", to: "/services/air-ticket-service" },
    { id: 8, title: "Show Money Assistance", to: "/services/show-money-assistance" },
  ]

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="header-container">
        <Link to="/" className="logo-link">
          <Logo className="logo" />
        </Link>

        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X className="menu-icon" /> : <Menu className="menu-icon" />}
        </div>

        <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-list">
            <li className={`nav-item dropdown ${activeDropdown === "company" ? "active" : ""}`}>
              <div
                className="nav-link dropdown-toggle"
                onClick={() => toggleDropdown("company")}
                onMouseEnter={() => window.innerWidth > 992 && setActiveDropdown("company")}
              >
                Our Company <ChevronDown className="dropdown-icon" />
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
                Services <ChevronDown className="dropdown-icon" />
              </div>
              <div className="dropdown-menu" onMouseLeave={() => window.innerWidth > 992 && setActiveDropdown(null)}>
                {servicesDropdown.map((item) => (
                  <Link key={item.id} to={item.to} className="dropdown-item" onClick={handleMenuItemClick}>
                    {item.title}
                  </Link>
                ))}
              </div>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={handleMenuItemClick}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <Link to="/contact" className="btn btn-primary">
            Free Assessment
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
