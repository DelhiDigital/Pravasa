"use client"

import { useState, useEffect } from "react"
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

  return (
    <header className={`header ${isScrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        <Logo/>

        <div className="mobile-toggle" onClick={toggleMobileMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={`nav ${mobileMenuOpen ? "open" : ""}`}>
          <ul className="nav-list" style={{color: "#ffff"}}>
            <li className="nav-item">
              <a href="#home" className="nav-link" >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a href="#services" className="nav-link">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a href="#countries" className="nav-link">
                Countries
              </a>
            </li>
            <li className="nav-item">
              <a href="#process" className="nav-link">
                Process
              </a>
            </li>
            <li className="nav-item">
              <a href="#testimonials" className="nav-link">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
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
