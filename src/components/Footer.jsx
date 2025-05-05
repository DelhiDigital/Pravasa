import { Link } from "react-router-dom"
import "./Footer.css"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-column">
            <Link to="/" className="logo-link">
              <Logo />
            </Link>
            <p className="footer-description">
              Pravasa is a leading immigration consultancy firm specializing in providing comprehensive immigration
              solutions to individuals, families, and businesses.
            </p>
            <div className="footer-contact">
              <p>
                <i className="fas fa-phone-alt"></i> +91 98765 43210
              </p>
              <p>
                <i className="fas fa-envelope"></i> info@pravasa.com
              </p>
            </div>
          </div>

          <div className="footer-column">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/#services">Services</Link>
              </li>
              <li>
                <Link to="/#countries">Countries</Link>
              </li>
              <li>
                <Link to="/#process">Process</Link>
              </li>
              <li>
                <Link to="/#testimonials">Testimonials</Link>
              </li>
              <li>
                <Link to="/#contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li>
                <Link to="/#services">Study Visa</Link>
              </li>
              <li>
                <Link to="/#services">Work Permit</Link>
              </li>
              <li>
                <Link to="/#services">Permanent Residency</Link>
              </li>
              <li>
                <Link to="/#services">Family Immigration</Link>
              </li>
              <li>
                <Link to="/#services">Business Immigration</Link>
              </li>
              <li>
                <Link to="/#services">Tourist Visa</Link>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter for the latest immigration updates.</p>
            <form className="footer-form">
              <input type="email" placeholder="Your Email Address" required />
              <button type="submit" className="btn btn-primary">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Pravasa Immigration. All Rights Reserved.</p>
          <div className="footer-bottom-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-service">Terms of Service</Link>
            <Link to="/disclaimer">Disclaimer</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
