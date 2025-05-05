"use client"

import { useEffect, useRef } from "react"
import { FaComments, FaFileAlt, FaClipboardCheck, FaEdit, FaPaperPlane, FaPlaneDeparture } from "react-icons/fa"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./Process.css"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

const Process = () => {
  const processRef = useRef(null)
  const stepsRef = useRef([])
  const detailsRef = useRef([])

  const steps = [
    {
      id: 1,
      title: "Free Consultation",
      icon: <FaComments />,
      details: [
        "Schedule a free consultation",
        "Discuss your immigration goals",
        "Explore available options",
        "Get expert advice",
      ],
    },
    {
      id: 2,
      title: "Document Assessment",
      icon: <FaFileAlt />,
      details: [
        "Submit required documents",
        "Qualification assessment",
        "Identify best immigration pathway",
        "Document verification",
      ],
    },
    {
      id: 3,
      title: "Customized Plan",
      icon: <FaClipboardCheck />,
      details: [
        "Receive tailored immigration plan",
        "Review specific requirements",
        "Timeline preparation",
        "Strategy development",
      ],
    },
    {
      id: 4,
      title: "Application Preparation",
      icon: <FaEdit />,
      details: [
        "Complete application forms",
        "Prepare supporting documents",
        "Expert review and verification",
        "Final application assembly",
      ],
    },
    {
      id: 5,
      title: "Application Submission",
      icon: <FaPaperPlane />,
      details: [
        "Submit to immigration authorities",
        "Track application status",
        "Handle additional requests",
        "Communicate with officials",
      ],
    },
    {
      id: 6,
      title: "Pre-Departure Support",
      icon: <FaPlaneDeparture />,
      details: [
        "Pre-departure guidance",
        "Travel arrangements assistance",
        "Post-landing support",
        "Settlement orientation",
      ],
    },
  ]

  useEffect(() => {
    if (typeof window === "undefined") return

    // Create a timeline for the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: processRef.current,
        start: "top 70%",
        toggleActions: "play none none none",
      },
    })

    // Animate the section title
    tl.from(".process-header", {
      y: 30,
      opacity: 1,
      duration: 0.8,
      ease: "power3.out",
    })

    // Animate each step with stagger
    tl.fromTo(
      stepsRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.4",
    )

    // Animate details with stagger
    tl.fromTo(
      detailsRef.current,
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.4,
        ease: "power2.out",
      },
      "-=0.8",
    )

    // Animate CTA
    tl.fromTo(
      ".process-cta",
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.out",
      },
      "-=0.2",
    )

    // Cleanup function
    return () => {
      if (tl.scrollTrigger) {
        tl.scrollTrigger.kill()
      }
      tl.kill()
    }
  }, [])

  return (
    <section id="process" className="section process" ref={processRef}>
      <div className="container">
        <div className="process-header">
          <h2 className="process-main-title">Our Process</h2>
          <div className="title-underline"></div>
          <p className="process-subtitle">Your Step-by-Step Journey to Global Opportunities</p>
        </div>

        <div className="process-flow">
          <div className="process-steps-container">
            <div className="process-steps">
              {steps.map((step, index) => (
                <div className="process-step-chevron" key={step.id} ref={(el) => (stepsRef.current[index] = el)}>
                  <div className="step-number">{step.id}</div>
                  <div className="chevron-header">
                    <div className="step-icon">{step.icon}</div>
                    <h3>{step.title}</h3>
                  </div>
                  <div className="chevron-details">
                    <ul>
                      {step.details.map((detail, detailIndex) => (
                        <li
                          key={detailIndex}
                          ref={(el) => {
                            if (!detailsRef.current[index]) detailsRef.current[index] = []
                            detailsRef.current[index][detailIndex] = el
                          }}
                        >
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="process-cta text-center">
          <p>Ready to start your immigration journey?</p>
          <a href="#contact" className="btn btn-primary">
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  )
}

export default Process
