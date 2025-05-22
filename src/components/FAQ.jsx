"use client"

import { useState } from "react"
import "./FAQ.css"

const FAQ = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [activeAccordion, setActiveAccordion] = useState(0)

  // Define services and their corresponding FAQs
  const serviceFaqs = [
    {
      id: 1,
      title: "Study Visa",
      // icon: "📚",
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
        {
          question: "Do I need to take an English language test for a student visa?",
          answer:
            "Most English-speaking countries require proof of English proficiency through tests like IELTS, TOEFL, or PTE for non-native English speakers.",
        },
        {
          question: "Can my family members join me on a student visa?",
          answer:
            "Many countries allow students to bring dependents (spouse and children) under certain conditions, usually requiring proof of additional financial capacity.",
        },
      ],
    },
    {
      id: 2,
      title: "Work Permit",
      // icon: "💼",
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
        {
          question: "What documents are required for a work permit application?",
          answer:
            "Typically required documents include a valid passport, job offer letter, educational qualifications, work experience certificates, and sometimes a police clearance certificate.",
        },
        {
          question: "Can my family join me on a work permit?",
          answer:
            "Many countries allow workers to bring their spouse and dependent children. They may be eligible for dependent visas that sometimes include work rights for spouses.",
        },
        {
          question: "Can a work permit lead to permanent residency?",
          answer:
            "In many countries, yes. After working legally for a certain period, you may become eligible to apply for permanent residency, though requirements vary significantly by country.",
        },
      ],
    },
    {
      id: 3,
      title: "Permanent Residency",
      // icon: "🏠",
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
        {
          question: "How long does it take to get permanent residency?",
          answer:
            "Processing times vary widely by country and pathway, ranging from several months to several years. Skilled migration and investment pathways are often faster than family-based options.",
        },
        {
          question: "What is the points-based system for permanent residency?",
          answer:
            "Many countries use a points-based system to assess skilled migration applicants, awarding points for factors like age, education, work experience, language proficiency, and adaptability. Applicants must score above a threshold to qualify.",
        },
        {
          question: "Can I lose my permanent resident status?",
          answer:
            "Yes, PR status can be revoked if you spend too much time outside the country, commit serious crimes, or obtain PR fraudulently. Most countries have residency requirements to maintain PR status.",
        },
        {
          question: "What rights do permanent residents have?",
          answer:
            "PR holders typically have the right to live, work, and study indefinitely, access healthcare and social services, own property, and sponsor eligible family members. They cannot vote or hold certain government positions.",
        },
        {
          question: "Can permanent residents apply for citizenship?",
          answer:
            "Yes, after maintaining PR status for a specified period (typically 3-5 years), meeting residency requirements, and fulfilling other criteria like language proficiency and good character, PR holders can usually apply for citizenship.",
        },
      ],
    },
    {
      id: 4,
      title: "Family Immigration",
      // icon: "👪",
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
        {
          question: "How long does family sponsorship take?",
          answer:
            "Processing times vary widely by country and relationship category, ranging from several months for spouses and dependent children to several years for parents, siblings, or extended family members.",
        },
        {
          question: "What financial requirements exist for family sponsorship?",
          answer:
            "Sponsors typically need to demonstrate sufficient income or assets to support sponsored family members. This often involves meeting minimum income thresholds and sometimes signing an undertaking of support.",
        },
        {
          question: "Can I sponsor my fiancé(e)?",
          answer:
            "Many countries offer fiancé(e) visas that allow the future spouse of a citizen to enter the country for the purpose of marriage, after which they can apply for permanent residency.",
        },
        {
          question: "What happens if a relationship breaks down after sponsorship?",
          answer:
            "If a relationship breaks down after sponsorship, the immigration status of the sponsored person may be affected. Some countries have provisions for victims of domestic violence or genuine relationship breakdowns.",
        },
        {
          question: "Can sponsored family members work and study?",
          answer:
            "In most cases, yes. Spouses and adult children typically receive work and study rights, though there may be restrictions for certain categories like parents or extended family members in some countries.",
        },
      ],
    },
    {
      id: 5,
      title: "Business Immigration",
      // icon: "🏢",
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
        {
          question: "What types of business visas are available?",
          answer:
            "Common types include entrepreneur visas, investor visas, start-up visas, and self-employed visas. Each has different requirements regarding investment amount, business experience, and business plans.",
        },
        {
          question: "Do I need to actively manage the business for a business visa?",
          answer:
            "This depends on the visa type. Entrepreneur visas typically require active management, while some investor visas may only require passive investment without day-to-day involvement.",
        },
        {
          question: "Can I bring my family on a business immigration visa?",
          answer:
            "Yes, most business immigration programs allow the primary applicant to bring their spouse and dependent children, who typically receive the same rights and status.",
        },
        {
          question: "How quickly can I get permanent residency through business immigration?",
          answer:
            "Timeframes vary by country. Some offer immediate permanent residency upon approval, while others grant temporary status first with a pathway to permanent residency after 1-5 years of successful business operation.",
        },
        {
          question: "What happens if my business fails after immigration?",
          answer:
            "The consequences depend on the country and visa type. Some may revoke your status if the business fails within a certain period, while others may allow you to stay if you can demonstrate genuine effort and compliance with conditions.",
        },
      ],
    },
    {
      id: 6,
      title: "Tourist Visa",
      // icon: "✈️",
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
        {
          question: "What documents are required for a tourist visa application?",
          answer:
            "Common requirements include a valid passport, completed application form, proof of accommodation, return ticket, travel itinerary, proof of sufficient funds, and sometimes travel insurance.",
        },
        {
          question: "Can I extend my tourist visa while in the country?",
          answer:
            "Some countries allow tourist visa extensions for a limited period if applied for before the original visa expires. Others require you to leave and re-apply from outside the country.",
        },
        {
          question: "Can I work on a tourist visa?",
          answer:
            "No, working on a tourist visa is generally prohibited and can result in deportation and future visa bans. Tourist visas are strictly for tourism and leisure purposes.",
        },
        {
          question: "How far in advance should I apply for a tourist visa?",
          answer:
            "It's recommended to apply 1-3 months before your planned travel date. Processing times vary by country and season, with peak travel periods often having longer processing times.",
        },
        {
          question: "What is visa-free travel and who qualifies?",
          answer:
            "Visa-free travel allows citizens of certain countries to enter other countries for short stays without obtaining a visa in advance. Eligibility depends on agreements between countries and your passport's nationality.",
        },
      ],
    },
    {
      id: 7,
      title: "Air Ticket Service",
      // icon: "🎫",
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
        {
          question: "Can you help with booking flights that meet visa requirements?",
          answer:
            "Absolutely. We understand visa requirements for different countries and can book appropriate flights that satisfy immigration authorities, including return tickets for tourist visas or one-way tickets for permanent moves.",
        },
        {
          question: "What is your cancellation and change policy?",
          answer:
            "Our cancellation and change policies vary depending on the airline and fare type. We prioritize booking flexible tickets for immigration clients due to the potential for visa processing delays.",
        },
        {
          question: "Do you arrange special assistance for elderly or disabled travelers?",
          answer:
            "Yes, we can arrange special assistance including wheelchair services, airport escorts, special meals, and other accommodations for elderly, disabled, or travelers with special needs.",
        },
        {
          question: "Can you book connecting flights with sufficient layover time?",
          answer:
            "Yes, we carefully plan itineraries with appropriate connection times, especially for clients traveling internationally for the first time or with families, ensuring comfortable transfers between flights.",
        },
        {
          question: "Do you provide assistance with excess baggage for immigration moves?",
          answer:
            "Yes, we can advise on baggage allowances, book extra baggage in advance at discounted rates, and recommend the most economical options for moving personal belongings internationally.",
        },
      ],
    },
    {
      id: 8,
      title: "Show Money Assistance",
      // icon: "💰",
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
        {
          question: "What forms of proof of funds are acceptable?",
          answer:
            "Acceptable proof typically includes bank statements (usually for the past 3-6 months), fixed deposit certificates, loan approval letters, property valuations, and sometimes affidavits of support from sponsors.",
        },
        {
          question: "How long do funds need to be in my account?",
          answer:
            "Most countries require funds to be held for a minimum period, typically 3-6 months, to show stability. Recently transferred large sums may be questioned without proper documentation of their source.",
        },
        {
          question: "Can I use a sponsor's funds as show money?",
          answer:
            "Yes, many countries accept funds from sponsors, usually close family members. You'll need to provide relationship proof, the sponsor's financial documents, and often a letter of sponsorship or affidavit of support.",
        },
        {
          question: "What is fund sourcing and why is it important?",
          answer:
            "Fund sourcing involves documenting the origin of your funds. Immigration authorities want to ensure money comes from legitimate sources. We help prepare documentation explaining large deposits, gifts, property sales, or loans.",
        },
        {
          question: "How do you help with show money preparation?",
          answer:
            "We provide guidance on required amounts, acceptable fund types, documentation preparation, fund sourcing explanations, and strategies for presenting financial documents in the most favorable way to immigration authorities.",
        },
      ],
    },
  ]

  const toggleAccordion = (index) => {
    setActiveAccordion(activeAccordion === index ? null : index)
  }

  return (
    <section className="faq-section">
      <div className="faq-container">
        <div className="faq-header">
          <h2>Frequently Asked Questions</h2>
          <p>Find answers to common questions about our immigration services</p>
        </div>

        <div className="faq-wrapper">
          <div className="faq-categories">
            {serviceFaqs.map((service, index) => (
              <button
                key={service.id}
                className={`category-button ${activeTab === index ? "active" : ""}`}
                onClick={() => {
                  setActiveTab(index)
                  setActiveAccordion(0)
                }}
              >
                <span className="category-icon">{service.icon}</span>
                <span className="category-name">{service.title}</span>
              </button>
            ))}
          </div>

          <div className="faq-questions">
            <div className="category-title">
              <span className="category-icon large">{serviceFaqs[activeTab].icon}</span>
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
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
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
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
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
