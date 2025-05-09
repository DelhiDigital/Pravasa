"use client"

import { useEffect, useRef } from "react"
import { useParams } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import {
  FaGraduationCap,
  FaBriefcase,
  FaHome,
  FaUsers,
  FaBuilding,
  FaPlane,
  FaFileInvoiceDollar,
  FaPlaneDeparture,
  FaPhoneAlt,
  FaArrowLeft,
  FaCheckCircle,
} from "react-icons/fa"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import "./ServicePage.css"

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger)
}

// Service data mapping
const serviceData = {
  study: {
    name: "Study Visa",
    icon: <FaGraduationCap size={60} color="#819cd7" />,
    description:
      "Embark on your educational journey abroad with our comprehensive study visa services. We guide students through every step of the application process for universities and colleges worldwide.",
    benefits: [
      "Personalized university selection based on your academic profile",
      "Complete documentation assistance for visa applications",
      "SOP and LOR guidance from experienced consultants",
      "Pre-departure orientation and cultural adaptation training",
      "Scholarship and financial aid application support",
      "Post-landing assistance and student support network",
    ],
    process: [
      "Initial consultation and profile assessment",
      "University/college selection and application",
      "Offer letter acquisition",
      "Visa documentation preparation",
      "Visa application submission",
      "Pre-departure briefing",
    ],
    countries: ["Canada", "Australia", "UK", "USA", "New Zealand", "Germany", "Ireland"],
    image: "/students-studying-abroad.png",
  },
  "work-permit": {
    name: "Work Permit",
    icon: <FaBriefcase size={60} color="#819cd7" />,
    description:
      "Secure employment opportunities abroad with our specialized work permit services. We help professionals navigate the complex work visa requirements for various countries.",
    benefits: [
      "Comprehensive eligibility assessment for different work visa categories",
      "Job search assistance and employer connections",
      "Complete documentation preparation and verification",
      "Interview preparation and guidance",
      "Family accompaniment visa support",
      "Post-landing settlement assistance",
    ],
    process: [
      "Skills assessment and eligibility check",
      "Job search or employer sponsorship",
      "Work permit application preparation",
      "Documentation submission",
      "Biometrics and medical examination",
      "Work permit approval and travel arrangements",
    ],
    countries: ["Canada", "Australia", "UAE", "Singapore", "Germany", "UK"],
    image: "/modern-office-abroad.png",
  },
  "permanent-residency": {
    name: "Permanent Residency",
    icon: <FaHome size={60} color="#819cd7" />,
    description:
      "Make your dream of living abroad permanently a reality with our expert PR visa services. We specialize in points-based immigration systems and family-sponsored pathways.",
    benefits: [
      "Comprehensive points calculation and eligibility assessment",
      "Strategic profile enhancement recommendations",
      "Complete documentation preparation and verification",
      "Regular application status updates",
      "Post-landing settlement guidance",
      "Citizenship pathway planning",
    ],
    process: [
      "Initial assessment and eligibility check",
      "Immigration program selection",
      "Profile creation (Express Entry, SkillSelect, etc.)",
      "Documentation preparation",
      "Application submission and monitoring",
      "Landing and settlement assistance",
    ],
    countries: ["Canada", "Australia", "New Zealand", "UK", "Germany"],
    image: "/family-moving.png",
  },
  "family-immigration": {
    name: "Family Immigration",
    icon: <FaUsers size={60} color="#819cd7" />,
    description:
      "Reunite with your loved ones through our family immigration services. We help families navigate sponsorship programs and dependent visa applications.",
    benefits: [
      "Comprehensive eligibility assessment for family sponsorship",
      "Complete documentation preparation and verification",
      "Relationship evidence compilation guidance",
      "Regular application status updates",
      "Interview preparation for sponsors and applicants",
      "Settlement assistance for newly arrived family members",
    ],
    process: [
      "Sponsorship eligibility assessment",
      "Relationship documentation preparation",
      "Sponsorship application submission",
      "Family member application preparation",
      "Biometrics and medical examination",
      "Visa approval and travel arrangements",
    ],
    countries: ["Canada", "Australia", "USA", "UK", "New Zealand"],
    image: "/airport-reunion.png",
  },
  "business-immigration": {
    name: "Business Immigration",
    icon: <FaBuilding size={60} color="#819cd7" />,
    description:
      "Expand your business horizons internationally with our business immigration services. We assist entrepreneurs, investors, and business owners in establishing their presence abroad.",
    benefits: [
      "Comprehensive business visa category assessment",
      "Business plan development assistance",
      "Investment strategy guidance",
      "Complete documentation preparation and verification",
      "Business establishment support in destination country",
      "Post-landing business networking connections",
    ],
    process: [
      "Business immigration program selection",
      "Business plan and investment documentation",
      "Net worth verification and source of funds",
      "Application preparation and submission",
      "Business establishment planning",
      "Landing and business setup assistance",
    ],
    countries: ["Canada", "USA", "Australia", "UK", "Singapore", "UAE"],
    image: "/placeholder.svg?key=wtezk",
  },
  tourist: {
    name: "Tourist Visa",
    icon: <FaPlane size={60} color="#819cd7" />,
    description:
      "Explore the world with ease through our tourist visa services. We ensure a smooth application process for your leisure or business travel needs.",
    benefits: [
      "Country-specific visa requirement guidance",
      "Complete documentation preparation and verification",
      "Travel itinerary planning assistance",
      "Accommodation and travel insurance arrangement",
      "Visa interview preparation",
      "Emergency travel support",
    ],
    process: [
      "Travel destination and visa type selection",
      "Documentation preparation",
      "Visa application submission",
      "Biometrics appointment (if required)",
      "Visa approval and travel planning",
      "Pre-departure briefing",
    ],
    countries: ["Schengen Countries", "USA", "UK", "Canada", "Australia", "New Zealand", "UAE"],
    image: "/tourists-landmarks.png",
  },
  "air-ticket-service": {
    name: "Air Ticket Service",
    icon: <FaPlaneDeparture size={60} color="#819cd7" />,
    description:
      "Secure the best flight deals with our comprehensive air ticket service. We offer competitive rates and flexible booking options for all your travel needs.",
    benefits: [
      "Access to exclusive airfare deals and promotions",
      "Flexible booking and rescheduling options",
      "Multi-city and round-trip itinerary planning",
      "Group booking discounts",
      "Special assistance for first-time travelers",
      "24/7 travel support during your journey",
    ],
    process: [
      "Travel requirement assessment",
      "Flight options comparison",
      "Booking and confirmation",
      "E-ticket issuance",
      "Web check-in assistance",
      "Post-booking support",
    ],
    services: [
      "International flight bookings",
      "Domestic flight bookings",
      "Group travel arrangements",
      "Charter flight services",
      "Airport transfer arrangements",
    ],
    image: "/airplane-takeoff-sunset.png",
  },
  "show-money-assistance": {
    name: "Show Money Assistance",
    icon: <FaFileInvoiceDollar size={60} color="#819cd7" />,
    description:
      "Meet financial requirements for visa applications with our show money assistance. We provide guidance on fund preparation and documentation for various visa categories.",
    benefits: [
      "Country-specific financial requirement guidance",
      "Bank statement preparation assistance",
      "Fund sourcing and documentation advice",
      "Financial document verification",
      "Sponsor documentation preparation",
      "Financial interview preparation",
    ],
    process: [
      "Financial requirement assessment",
      "Fund planning and sourcing guidance",
      "Bank statement preparation",
      "Financial documentation compilation",
      "Sponsor letter and affidavit preparation",
      "Pre-submission verification",
    ],
    services: [
      "GIC arrangement for student visas",
      "Proof of funds documentation",
      "Sponsorship letter preparation",
      "Bank statement formatting",
      "Financial history documentation",
    ],
    image: "/placeholder.svg?key=rvq79",
  },
}

// Helper function to get icon by slug
const getIconBySlug = (slug) => {
  switch (slug) {
    case "study":
      return <FaGraduationCap size={40} color="#819cd7" />
    case "work-permit":
      return <FaBriefcase size={40} color="#819cd7" />
    case "permanent-residency":
      return <FaHome size={40} color="#819cd7" />
    case "family-immigration":
      return <FaUsers size={40} color="#819cd7" />
    case "business-immigration":
      return <FaBuilding size={40} color="#819cd7" />
    case "tourist":
      return <FaPlane size={40} color="#819cd7" />
    case "air-ticket-service":
      return <FaPlaneDeparture size={40} color="#819cd7" />
    case "show-money-assistance":
      return <FaFileInvoiceDollar size={40} color="#819cd7" />
    default:
      return <FaGraduationCap size={40} color="#819cd7" />
  }
}

export default function ServiceDetail() {
  const params = useParams()
  const slug = params.slug
  const service = serviceData[slug]

  const sectionRef = useRef(null)
  const headerRef = useRef(null)
  const contentRef = useRef(null)
  const processRef = useRef(null)
  const benefitsRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    // Make sure we're in the browser environment
    if (typeof window === "undefined") return

    // Create a timeline for the animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    })

    // Animate the header
    tl.fromTo(
      headerRef.current,
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
    )

    // Animate the content section
    tl.fromTo(
      contentRef.current,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4",
    )

    // Animate the process section
    tl.fromTo(
      processRef.current,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      },
      "-=0.4",
    )

    // Animate the benefits with stagger
    tl.fromTo(
      benefitsRef.current?.children || [],
      {
        y: 20,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        stagger: 0.1,
        duration: 0.5,
        ease: "power2.out",
      },
      "-=0.4",
    )

    // Animate the CTA
    tl.fromTo(
      ctaRef.current,
      {
        scale: 0.9,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
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
  }, [slug])

  if (!service) {
    return (
      <div className="service-not-found">
        <h1>Service Not Found</h1>
        <p>The service you are looking for does not exist.</p>
        <Link href="/services" className="back-link">
          <FaArrowLeft /> Back to Services
        </Link>
      </div>
    )
  }

  return (
    <div className="service-detail-page" ref={sectionRef}>
      {/* Hero Section */}
      <div className="service-hero">
        <div className="container">
          <Link href="/services" className="back-link">
            <FaArrowLeft size={14} /> Back to Services
          </Link>

          <div className="service-header" ref={headerRef}>
            <div className="service-icon-large">{service.icon}</div>
            <div className="service-header-content">
              <h1>{service.name}</h1>
              <p>{service.description}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="service-content container">
        <div className="service-grid">
          {/* Left Column - Image and Process */}
          <div className="service-left-column">
            <div className="service-image-section" ref={contentRef}>
              <div className="service-image-container">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.name}
                  fill
                  style={{ objectFit: "cover" }}
                  className="service-image"
                />
              </div>

              <div className="service-why-choose">
                <h3>
                  <span className="accent-symbol">✦</span> Why Choose Our {service.name} Service
                </h3>
                <p>
                  Our expert consultants provide end-to-end assistance for your {service.name.toLowerCase()} needs,
                  ensuring a smooth and hassle-free experience. With our high success rate and personalized approach, we
                  make your immigration journey seamless and stress-free.
                </p>
              </div>
            </div>

            <div className="service-process" ref={processRef}>
              <h2>
                <span className="accent-dot">●</span> Our Process
              </h2>
              <div className="process-container">
                <ol className="process-steps">
                  {service.process.map((step, index) => (
                    <li key={index} className="process-step">
                      <div className="step-number">{index + 1}</div>
                      <div className="step-content">
                        <p>{step}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>

          {/* Right Column - Benefits and Details */}
          <div className="service-right-column">
            <h2>
              <span className="accent-dot">●</span> Key Benefits
            </h2>

            <div className="benefits-container" ref={benefitsRef}>
              <ul className="benefits-list">
                {service.benefits.map((benefit, index) => (
                  <li key={index} className="benefit-item">
                    <FaCheckCircle className="benefit-icon" />
                    <p>{benefit}</p>
                  </li>
                ))}
              </ul>
            </div>

            {/* Countries or Services Section */}
            <div className="countries-section">
              <h2>
                <span className="accent-dot">●</span>
                {service.countries ? "Popular Destinations" : "Services Offered"}
              </h2>

              <div className="countries-container">
                <div className="countries-grid">
                  {(service.countries || service.services)?.map((item, index) => (
                    <div key={index} className="country-item">
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Section */}
            <div className="service-cta" ref={ctaRef}>
              <div className="cta-header">
                <div className="cta-icon">
                  <FaPhoneAlt />
                </div>
                <div className="cta-contact">
                  <h3>Speak to our {service.name} Expert</h3>
                  <p className="cta-phone">+91 98765 43210</p>
                </div>
              </div>
              <p className="cta-description">
                Get personalized guidance for your {service.name.toLowerCase()} needs from our experienced consultants.
              </p>
              <Link href="#contact" className="cta-button">
                Request a Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Related Services Section */}
      <div className="related-services">
        <div className="container">
          <h2>Explore Other Services</h2>

          <div className="related-services-grid">
            {Object.entries(serviceData)
              .filter(([key]) => key !== slug)
              .slice(0, 4)
              .map(([key, relatedService]) => (
                <Link href={`/services/${key}`} key={key} className="related-service-card">
                  <div className="related-service-icon">{getIconBySlug(key)}</div>
                  <h3>{relatedService.name}</h3>
                </Link>
              ))}
          </div>

          <div className="view-all-container">
            <Link href="/services" className="view-all-button">
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
