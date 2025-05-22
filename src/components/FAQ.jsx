"use client"

import { useState, useEffect, useRef } from "react"
import "./FAQ.css"

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [activeAccordion, setActiveAccordion] = useState(0)
  const [isAutoSliding, setIsAutoSliding] = useState(true)
  const [isMobile, setIsMobile] = useState(false)
  const autoSlideTimerRef = useRef(null)
  const tabsRef = useRef(null)

  // Define services and their corresponding FAQs
  const serviceFaqs = [
    {
      id: 1,
      title: "Study Visa",
      faqs: [
        {
          question: "What are the requirements for a student visa?",
          answer:
            "Requirements typically include an acceptance letter from a recognized educational institution, proof of financial support, health insurance, and language proficiency. Specific requirements vary by country.",
        },
        {
          question: "How long does it take to process a student visa?",
          answer:
            "Processing times vary by country and can range from 2 weeks to 3 months. It's advisable to apply at least 3 months before your course start date.",
        },
        {
          question: "Can I work while studying on a student visa?",
          answer:
            "Many countries allow international students to work part-time during their studies, typically 20 hours per week during term time and full-time during holidays. Regulations vary by country.",
        },
        {
          question: "What is a Confirmation of Enrollment (CoE)?",
          answer:
            "A CoE is an official document issued by an educational institution confirming that you have been accepted into a course of study. It's required for student visa applications in many countries.",
        },
        {
          question: "Can I extend my student visa if needed?",
          answer:
            "Yes, most countries allow student visa extensions if you need to continue your studies. You'll need to apply before your current visa expires and meet certain criteria.",
        },
      ],
    },
    {
      id: 2,
      title: "Work Permit",
      faqs: [
        {
          question: "What is a work permit visa?",
          answer:
            "A work permit visa allows foreign nationals to legally work in a specific country for a defined period. It's typically sponsored by an employer.",
        },
        {
          question: "How long does it take to process a work permit?",
          answer:
            "Processing times vary by country and visa type, ranging from a few weeks to several months. Some countries offer expedited processing for an additional fee.",
        },
        {
          question: "Do I need a job offer to apply for a work permit?",
          answer:
            "In most cases, yes. Most work permits require a job offer from an employer in the destination country who is willing to sponsor your visa.",
        },
        {
          question: "Can I change employers while on a work permit?",
          answer:
            "This depends on the country and visa type. Some work permits are tied to a specific employer, while others allow more flexibility. In many cases, you'll need to apply for a new permit or amendment.",
        },
      ],
    },
    {
      id: 3,
      title: "Permanent Residency",
      faqs: [
        {
          question: "What is permanent residency?",
          answer:
            "Permanent residency (PR) is an immigration status that allows foreign nationals to live and work indefinitely in a country without citizenship. PR holders enjoy most of the same rights as citizens except for voting rights and some government positions.",
        },
        {
          question: "What are the pathways to permanent residency?",
          answer:
            "Common pathways include skilled migration, family sponsorship, business investment, refugee/humanitarian programs, and transitioning from temporary visas after meeting certain requirements.",
        },
      ],
    },
    {
      id: 4,
      title: "Family Immigration",
      faqs: [
        {
          question: "Who can sponsor family members for immigration?",
          answer:
            "Citizens and permanent residents can typically sponsor certain family members, including spouses, dependent children, parents, and in some cases, siblings and extended family members. Eligibility varies by country.",
        },
        {
          question: "What is family reunification?",
          answer:
            "Family reunification is an immigration principle that allows citizens and permanent residents to sponsor close family members to join them in their country of residence, keeping families together.",
        },
      ],
    },
    {
      id: 5,
      title: "Business Immigration",
      faqs: [
        {
          question: "What is a business immigration visa?",
          answer:
            "Business immigration visas allow entrepreneurs, investors, and business owners to establish or purchase businesses, make significant investments, or engage in business activities in a foreign country.",
        },
        {
          question: "What are the investment requirements for business visas?",
          answer:
            "Investment requirements vary widely by country, ranging from approximately $100,000 USD to several million dollars depending on the program. Some countries also have job creation requirements.",
        },
      ],
    },
    {
      id: 6,
      title: "Tourist Visa",
      faqs: [
        {
          question: "What is a tourist visa?",
          answer:
            "A tourist visa is a temporary visa that allows individuals to visit a foreign country for leisure, sightseeing, visiting friends and relatives, or other non-work purposes for a limited period.",
        },
        {
          question: "How long can I stay on a tourist visa?",
          answer:
            "Tourist visa duration varies by country, typically ranging from 30 days to 6 months. Some countries offer multiple-entry visas valid for several years, though each stay is still limited.",
        },
      ],
    },
    {
      id: 7,
      title: "Air Ticket Service",
      faqs: [
        {
          question: "What air ticket services do you provide?",
          answer:
            "We offer comprehensive air ticket booking services including one-way, round-trip, and multi-city flights, group bookings, and special assistance for immigration clients with flexible dates and complex itineraries.",
        },
        {
          question: "Do you offer discounted fares for immigration clients?",
          answer:
            "Yes, we have special arrangements with major airlines to offer competitive fares for our immigration clients, particularly for one-way flights to new countries of residence.",
        },
      ],
    },
    {
      id: 8,
      title: "Show Money Assistance",
      faqs: [
        {
          question: "What is 'show money' in immigration?",
          answer:
            "'Show money' refers to the funds applicants must demonstrate they have access to when applying for certain visas, proving they can support themselves and any dependents without relying on public funds.",
        },
        {
          question: "How much money do I need to show for different visa types?",
          answer:
            "Required amounts vary by country and visa type. Student visas typically require proof of tuition fees plus living expenses for 1-2 years, while business visas may require substantial investment capital. We provide specific guidance for each case.",
        },
      ],
    },
  ]

  // Check if the device is mobile
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 576)
    }

    // Initial check
    checkIfMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkIfMobile)

    // Clean up
    return () => {
      window.removeEventListener("resize", checkIfMobile)
    }
  }, [])

  // Auto-slide functionality for mobile
  useEffect(() => {
    // Only auto-slide on mobile and when auto-sliding is enabled
    if (isMobile && isAutoSliding) {
      // Clear any existing timer
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current)
      }

      // Set up new timer
      autoSlideTimerRef.current = setInterval(() => {
        setActiveTab((prevTab) => {
          const nextTab = (prevTab + 1) % serviceFaqs.length

          // Scroll the tab into view
          if (tabsRef.current) {
            const tabElement = tabsRef.current.children[nextTab]
            if (tabElement) {
              tabElement.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" })
            }
          }

          return nextTab
        })
      }, 5000)
    }

    // Clean up timer when component unmounts or dependencies change
    return () => {
      if (autoSlideTimerRef.current) {
        clearInterval(autoSlideTimerRef.current)
      }
    }
  }, [isMobile, isAutoSliding, serviceFaqs.length])

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  // Pause auto-sliding when user interacts with tabs
  const handleTabClick = (index) => {
    setActiveTab(index)
    setIsAutoSliding(false) // Pause auto-sliding

    // Resume auto-sliding after 30 seconds of inactivity
    setTimeout(() => {
      setIsAutoSliding(true)
    }, 30000)
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our immigration services</p>
        </div>

        <div className="faq-wrapper">
          <div className="faq-categories" ref={tabsRef}>
            {serviceFaqs.map((service, index) => (
              <button
                key={service.id}
                className={`category-button ${activeTab === index ? "active" : ""}`}
                onClick={() => handleTabClick(index)}
              >
                <span className="category-name">{service.title}</span>
              </button>
            ))}
          </div>

          {/* Auto-slide indicator for mobile */}
          {isMobile && (
            <div className="auto-slide-indicator">
              {serviceFaqs.map((_, index) => (
                <span
                  key={index}
                  className={`indicator-dot ${activeTab === index ? "active" : ""}`}
                  onClick={() => handleTabClick(index)}
                ></span>
              ))}
            </div>
          )}

          <div className="faq-questions">
            <div className="category-title">
              <h3>{serviceFaqs[activeTab].title} FAQs</h3>
            </div>

            <div className="accordion-list">
              {serviceFaqs[activeTab].faqs.map((faq, index) => (
                <div
                  key={index}
                  className={`accordion-item ${activeAccordion === index ? "expanded" : ""}`}
                  onClick={() => toggleAccordion(index)}
                >
                  <div className="accordion-header">
                    <h4>{faq.question}</h4>
                    <div className="accordion-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M12 8V16M8 12H16"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="accordion-content">
                    <p>{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="faq-footer">
          <div className="contact-prompt">
            <h3>Still have questions?</h3>
            <p>Our immigration experts are ready to help you with any specific questions about your case.</p>
            <a href="/contact" className="contact-button">
              Contact Us
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 12H19M19 12L12 5M19 12L12 19"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ
