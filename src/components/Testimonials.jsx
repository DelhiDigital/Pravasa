"use client"

import { useState } from "react"
import { FaStar, FaMapMarkerAlt } from "react-icons/fa"
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import "./Testimonials.css"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Neha Gupta",
      country: "Canada",
      image: "/testimonials/1.jpeg",
      text: "Pravasa made my dream of studying in Canada a reality. Their expert guidance throughout the process was invaluable. I highly recommend their services to anyone looking to study abroad.",
      rating: 5,
    },
    {
      id: 2,
      name: "Priya Patel",
      country: "Australia",
      image: "/testimonials/2.jpeg",
      text: "I was struggling with my PR application until I found Pravasa. Their team simplified the complex process and helped me secure permanent residency in Australia. Thank you, Pravasa!",
      rating: 5,
    },
    {
      id: 3,
      name: "Amit Singh",
      country: "United Kingdom",
      image: "/testimonials/3.jpeg",
      text: "The work permit process seemed daunting, but Pravasa's consultants made it smooth and stress-free. Their attention to detail and personalized approach sets them apart.",
      rating: 4,
    },
    {
      id: 4,
      name: "Rahul Sharma",
      country: "New Zealand",
      image: "/testimonials/4.jpeg",
      text: "From the initial consultation to landing in New Zealand, Pravasa was with me every step of the way. Their post-landing support was particularly helpful in settling down.",
      rating: 5,
    },
    {
      id: 5,
      name: "Sita Rani",
      country: "Germany",
      image: "/testimonials/5.jpeg",
      text: "I had applied twice on my own and got rejected. With Pravasa's help, my third application was approved. Their expertise in German immigration laws is exceptional.",
      rating: 5,
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const renderStars = (rating) => {
    const stars = []
    for (let i = 1; i <= 5; i++) {
      stars.push(<FaStar key={i} className={i <= rating ? "filled" : ""} />)
    }
    return stars
  }

  return (
    <section id="testimonials" className="section testimonials">
      <div className="container">
        <div className="section-title">
          <h2>Success Stories</h2>
          <p>Hear from our satisfied clients who achieved their immigration goals</p>
        </div>

        <div className="testimonial-slider">
          <div className="testimonial-slide">
            <div className="testimonial-content">
              <div className="testimonial-image">
                <img src={testimonials[activeIndex].image || "/placeholder.svg"} alt={testimonials[activeIndex].name} />
              </div>
              <div className="testimonial-text">
                <p>"{testimonials[activeIndex].text}"</p>
                <div className="testimonial-rating">{renderStars(testimonials[activeIndex].rating)}</div>
                <h4>{testimonials[activeIndex].name}</h4>
                <p className="testimonial-country">
                  <FaMapMarkerAlt /> {testimonials[activeIndex].country}
                </p>
              </div>
            </div>
          </div>

          <div className="testimonial-controls">
            <button className="control-btn prev" onClick={prevTestimonial}>
              <IoIosArrowBack />
            </button>
            <div className="testimonial-dots">
              {testimonials.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${index === activeIndex ? "active" : ""}`}
                  onClick={() => setActiveIndex(index)}
                ></span>
              ))}
            </div>
            <button className="control-btn next" onClick={nextTestimonial}>
              <IoIosArrowForward />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
