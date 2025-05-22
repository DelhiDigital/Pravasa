"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
  FaChevronRight,
  FaGlobeAmericas,
  FaHeadset,
  FaUsers,
} from "react-icons/fa"
import Header from "../components/Header"
// import Footer from "../components/Footer"
import WhatsAppButton from "../components/WhatsAppButton"
import "./Contact.css"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    country: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for contacting us! Our immigration expert will get back to you within 24 hours.",
    })

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      country: "",
      message: "",
    })
  }

  return (
    <div className="contact-page">
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-container">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <FaChevronRight className="breadcrumb-separator" />
            <span>Contact Us</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="contact-hero">
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <h1>Get In Touch</h1>
            <p>Our immigration experts are ready to assist you with your visa and immigration needs</p>

            <div className="contact-highlights">
              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaHeadset />
                </div>
                <div className="highlight-text">
                  <h3>Expert Consultation</h3>
                  <p>Personalized guidance from certified immigration consultants</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaGlobeAmericas />
                </div>
                <div className="highlight-text">
                  <h3>Global Presence</h3>
                  <p>Offices in major cities with international partnerships</p>
                </div>
              </div>

              <div className="highlight-item">
                <div className="highlight-icon">
                  <FaUsers />
                </div>
                <div className="highlight-text">
                  <h3>15+ Years Experience</h3>
                  <p>Trusted by thousands of clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section id="contact" className="section contact">
        <div className="container">
          <div className="section-title">
            <h2>Contact Us</h2>
            <p>Get in touch with our immigration experts for a free consultation</p>
          </div>

          <div className="contact-container">
            <div className="contact-info">
              <div className="info-item">
                <div className="info-icon">
                  <FaMapMarkerAlt />
                </div>
                <div className="info-content">
                  <h4>Our Office</h4>
                  <p>123 Immigration Street, New Delhi, India - 110001</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaPhoneAlt />
                </div>
                <div className="info-content">
                  <h4>Call Us</h4>
                  <p>+91 98765 43210</p>
                  <p>+91 12345 67890</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaEnvelope />
                </div>
                <div className="info-content">
                  <h4>Email Us</h4>
                  <p>info@pravasa.com</p>
                  <p>support@pravasa.com</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">
                  <FaClock />
                </div>
                <div className="info-content">
                  <h4>Working Hours</h4>
                  <p>Monday - Saturday: 9:00 AM - 6:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>

              <div className="social-links">
                <a href="#" className="social-link">
                  <FaFacebook />
                </a>
                <a href="#" className="social-link">
                  <FaTwitter />
                </a>
                <a href="#" className="social-link">
                  <FaInstagram />
                </a>
                <a href="#" className="social-link">
                  <FaLinkedinIn />
                </a>
                <a href="#" className="social-link">
                  <FaYoutube />
                </a>
              </div>
            </div>

            <div className="contact-form">
              <h3>Free Assessment Form</h3>
              {formStatus.submitted && (
                <div className={`form-message ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
              )}
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Full Name*</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="email">Email Address*</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number*</label>
                    <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Interested In*</label>
                    <select id="service" name="service" value={formData.service} onChange={handleChange} required>
                      <option value="">Select Service</option>
                      <option value="study">Study Visa</option>
                      <option value="work">Work Permit</option>
                      <option value="pr">Permanent Residency</option>
                      <option value="family">Family Immigration</option>
                      <option value="business">Business Immigration</option>
                      <option value="tourist">Tourist Visa</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="country">Preferred Country*</label>
                    <select id="country" name="country" value={formData.country} onChange={handleChange} required>
                      <option value="">Select Country</option>
                      <option value="canada">Canada</option>
                      <option value="australia">Australia</option>
                      <option value="uk">United Kingdom</option>
                      <option value="usa">United States</option>
                      <option value="nz">New Zealand</option>
                      <option value="germany">Germany</option>
                      <option value="singapore">Singapore</option>
                      <option value="ireland">Ireland</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="5"
                    value={formData.message}
                    onChange={handleChange}
                  ></textarea>
                </div>

                <button type="submit" className="contact-btn contact-btn-primary btn-block">
                  Submit Assessment
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <div className="map-section">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.9528953081266!2d77.2272529!3d28.6129895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1653894233615!5m2!1sen!2sus"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Office Location"
        ></iframe>
      </div>

      {/* FAQ Section */}
      <section className="contact-faq">
        <div className="container">
          <div className="section-title">
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services</p>
          </div>

          <div className="faq-grid">
            <div className="faq-item">
              <h3>How do I schedule a consultation?</h3>
              <p>
                You can schedule a consultation by filling out our contact form, calling our office directly, or sending
                us an email. Our team will get back to you within 24 hours to arrange a convenient time.
              </p>
            </div>

            <div className="faq-item">
              <h3>Are consultations free?</h3>
              <p>
                Yes, we offer a free initial consultation to assess your immigration needs and provide general guidance.
                Detailed case assessments may require a fee which will be discussed during the initial consultation.
              </p>
            </div>

            <div className="faq-item">
              <h3>How long does the visa process take?</h3>
              <p>
                Processing times vary depending on the type of visa, destination country, and individual circumstances.
                During your consultation, we will provide an estimated timeline based on your specific situation.
              </p>
            </div>

            <div className="faq-item">
              <h3>Do you offer virtual consultations?</h3>
              <p>
                Yes, we offer consultations via video call, phone, or in person at our office. Virtual consultations are
                convenient for clients who live far from our office or prefer remote meetings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* <Footer /> */}
      <WhatsAppButton />
    </div>
  )
}

export default Contact
