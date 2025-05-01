import "./Footer.css"
import Logo from "./Logo"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-column">
            <Logo />
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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About Us</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#countries">Countries</a>
              </li>
              <li>
                <a href="#process">Process</a>
              </li>
              <li>
                <a href="#testimonials">Testimonials</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-column">
            <h3>Our Services</h3>
            <ul className="footer-links">
              <li>
                <a href="#services">Study </a>
              </li>
              <li>
                <a href="#services">Work Permit</a>
              </li>
              <li>
                <a href="#services">Permanent Residency</a>
              </li>
              <li>
                <a href="#services">Family Immigration</a>
              </li>
              <li>
                <a href="#services">Business Immigration</a>
              </li>
              <li>
                <a href="#services">Tourist </a>
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
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Disclaimer</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
