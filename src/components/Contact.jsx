"use client"

import { useState } from "react"
import "./Contact.css"
import { 
  FaFacebook, 
  FaTwitter, 
  FaInstagram, 
  FaLinkedinIn, 
  FaYoutube,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from "react-icons/fa"

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
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
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

              <button type="submit" className="btn btn-primary btn-block">
                Submit Assessment
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact