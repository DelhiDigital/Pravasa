"use client"

import { useState, useEffect } from "react"
import { FaBars, FaTimes } from "react-icons/fa" // Import React Icons
import "./Header.css"
import Logo from "./Logo"

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
  }

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Logo />

        {/* Replace spans with React Icons */}
        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes className="menu-icon" /> : <FaBars className="menu-icon" />}
        </div>

        <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-list" style={{ color: "#ffff" }}>
            <li className="nav-item">
              <a href="#home" className="nav-link" onClick={handleMenuItemClick}>
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link" onClick={handleMenuItemClick}>
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link" onClick={handleMenuItemClick}>
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#countries" className="nav-link" onClick={handleMenuItemClick}>
                Countries
              </a>
            </li>
            <li className="nav-item">
              <a href="#process" className="nav-link" onClick={handleMenuItemClick}>
                Process
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="nav-link" onClick={handleMenuItemClick}>
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link" onClick={handleMenuItemClick}>
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-cta">
          <a href="#contact" className="btn btn-primary">
            Free Assessment
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header
