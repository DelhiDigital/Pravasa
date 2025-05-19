"use client"

import { useState, useEffect } from "react"
import "./process.css"

export default function Process() {
  const [activeStep, setActiveStep] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const steps = [
    {
      id: 1,
      title: "Free Consultation",
      details: [
        "Schedule a free consultation",
        "Discuss your immigration goals",
        "Explore available options",
        "Get expert advice",
      ],
      pattern: "pattern-1",
      icon: './processIcons/consultingIcon.png',
    },
    {
      id: 2,
      title: "Document Assessment",
      details: [
        "Submit required documents",
        "Qualification assessment",
        "Identify best immigration pathway",
        "Document verification",
      ],
      pattern: "pattern-2",
      icon: './processIcons/documentIcon.png',
    },
    {
      id: 3,
      title: "Customized Plan",
      details: [
        "Receive tailored immigration plan",
        "Review specific requirements",
        "Timeline preparation",
        "Strategy development",
      ],
      pattern: "pattern-3",
      icon: './processIcons/immigrationIcon.png',
    },
    {
      id: 4,
      title: "Application Preparation",
      details: [
        "Complete application forms",
        "Prepare supporting documents",
        "Expert review and verification",
        "Final application assembly",
      ],
      pattern: "pattern-4",
      icon: './processIcons/fileIcon.png',
    },
    {
      id: 5,
      title: "Application Submission",
      details: [
        "Submit to immigration authorities",
        "Track application status",
        "Handle additional requests",
        "Communicate with officials",
      ],
      pattern: "pattern-5",
      icon: './processIcons/submitIcon.png',
    },
    {
      id: 6,
      title: "Pre-Departure Support",
      details: [
        "Pre-departure guidance",
        "Travel arrangements assistance",
        "Post-landing support",
        "Settlement orientation",
      ],
      pattern: "pattern-6",
      icon: './processIcons/supportIcon.png',
    },
  ]

  // Auto-advance steps
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, steps.length])

  // Pause auto-play when user interacts
  const handleStepChange = (index) => {
    setActiveStep(index)
    setIsAutoPlaying(false)

    // Resume auto-play after 10 seconds of inactivity
    const timeout = setTimeout(() => {
      setIsAutoPlaying(true)
    }, 10000)

    return () => clearTimeout(timeout)
  }

  return (
    <section className="process-section">
      <div className="container">
        <div className="process-header">
          <h2 className="process-title fade-in">Our Process</h2>
          <p className="process-subtitle fade-in">Your Step-by-Step Journey to Global Opportunities</p>
        </div>

        {/* Step Navigation */}
        <div className="step-navigation">
          <div className="step-nav-container">
            {steps.map((step, index) => (
              <button key={step.id} onClick={() => handleStepChange(index)} className="step-nav-button">
                <div className={`step-indicator ${activeStep === index ? "active" : "inactive"}`}>{step.id}</div>
                <div className={`step-indicator-bar ${activeStep === index ? "active" : "inactive"}`}></div>
              </button>
            ))}
          </div>
        </div>

        {/* Main Card Display */}
        <div className="card-container">
          <div className={`process-card ${activeStep === 0 ? "slide-in-right" : "slide-in-left"}`}>
            {/* Left Panel - Visual */}
            <div className="card-visual">
              <div className={`card-pattern ${steps[activeStep].pattern}`}></div>

              <div className="scale-in">
                <div className="step-circle">
                  <img className="step-icons" src={steps[activeStep].icon} alt="" />
                </div>
                <h3 className="step-title">{steps[activeStep].title}</h3>

                {/* Animated Progress Bar */}
                {/* <div className="progress-bar-container">
                  <div className={`progress-bar ${isAutoPlaying ? "progress-animate" : ""}`}></div>
                </div> */}
              </div>

              {/* Decorative Elements */}
              <div className="decorative-circle-1"></div>
              <div className="decorative-circle-2"></div>
            </div>

            {/* Right Panel - Content */}
            <div className="card-content">
              <div className={`card-pattern ${steps[activeStep].pattern}`}></div>

              <div>
                <h4 className="step-label">
                  Step {steps[activeStep].id} of {steps.length}
                </h4>

                <ul className="details-list">
                  {steps[activeStep].details.map((detail, idx) => (
                    <li key={idx} className="detail-item fade-in" style={{ animationDelay: `${0.3 + idx * 0.1}s` }}>
                      <div className="detail-number">{idx + 1}</div>
                      <p className="detail-text">{detail}</p>
                    </li>
                  ))}
                </ul>

                {/* Navigation Controls */}
                {/* <div className="navigation-controls">
                  <button
                    onClick={() => handleStepChange((activeStep - 1 + steps.length) % steps.length)}
                    className="nav-button prev-button"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M15 19l-7-7 7-7" />
                    </svg>
                    Previous
                  </button>
                  <button
                    onClick={() => handleStepChange((activeStep + 1) % steps.length)}
                    className="nav-button next-button"
                  >
                    Next
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>

        {/* Auto-play Toggle */}
        {/* <div className="autoplay-container">
          <button
            onClick={() => setIsAutoPlaying(!isAutoPlaying)}
            className={`autoplay-button ${isAutoPlaying ? "" : "paused"}`}
          >
            {isAutoPlaying ? (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Pause Auto-Play
              </>
            ) : (
              <>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Resume Auto-Play
              </>
            )}
          </button>
        </div> */}

        <div className="cta-container fade-in">
          <p className="cta-text">Ready to start your immigration journey?</p>
          <a href="#contact" className="cta-button">
            Get Started Today
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
