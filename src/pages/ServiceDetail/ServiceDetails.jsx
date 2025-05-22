"use client"

import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import {
  FaCheck,
  FaPassport,
  FaGraduationCap,
  FaBriefcase,
  FaUsers,
  FaBuilding,
  FaPlane,
  FaCreditCard,
  FaGlobe,
  FaChevronRight,
  FaQuoteLeft,
  FaStar,
  FaFileAlt,
  FaCheckCircle,
  FaInfoCircle,
  FaArrowRight,
} from "react-icons/fa"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import WhatsAppButton from "../../components/WhatsAppButton"
import "./ServiceDetails.css"

// Enhanced service details data with more comprehensive information
const serviceDetails = {
  study: {
    title: "Study Visa",
    subtitle: "Your Gateway to International Education",
    description:
      "Our comprehensive study visa services help students achieve their dreams of studying abroad with personalized guidance throughout the entire application process.",
    longDescription:
      "Studying abroad is a life-changing experience that opens doors to global opportunities and personal growth. Our expert consultants provide end-to-end assistance to ensure your international education journey is smooth and successful. From university selection to visa approval, we handle every aspect of your application with precision and care.",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200&auto=format&fit=crop",
    icon: <FaGraduationCap />,
    features: [
      "Personalized university selection based on your academic profile, career goals, and budget constraints",
      "Complete application assistance for top-ranked universities worldwide with direct university partnerships",
      "SOP, LOR, and resume guidance from experienced counselors with country-specific expertise",
      "Visa interview preparation with mock sessions, documentation support, and insider tips from former visa officers",
      "Scholarship application assistance to maximize financial aid opportunities and reduce education costs",
      "Pre-departure orientation sessions for cultural adaptation, housing guidance, and essential local information",
      "Accommodation guidance and airport pickup arrangements through our international partner network",
      "Post-arrival support for settling in your new country, including banking, transportation, and social integration",
    ],
    process: [
      {
        title: "Initial Consultation and Profile Assessment",
        description:
          "We begin with a comprehensive evaluation of your academic background, including grades, standardized test scores, and extracurricular achievements. Our education experts assess your career goals, budget constraints, and personal preferences to understand your requirements and provide personalized guidance.",
      },
      {
        title: "University and Program Selection",
        description:
          "Based on your profile assessment, we help you shortlist universities that align with your academic goals, budget, and location preferences. Our counselors have extensive knowledge of global university rankings, program strengths, admission requirements, and campus cultures.",
      },
      {
        title: "Application Preparation and Documentation",
        description:
          "Our experts assist with preparing compelling applications, including crafting a persuasive statement of purpose that highlights your strengths and aligns with program requirements. We guide you in obtaining strong letters of recommendation from appropriate academic or professional references.",
      },
      {
        title: "Application Submission and Follow-up",
        description:
          "We handle the submission process and follow up with universities to ensure timely processing of your application. Our team maintains regular communication with admissions offices to track your application status and address any additional requirements or queries promptly.",
      },
      {
        title: "Offer Evaluation and Acceptance",
        description:
          "Once you receive offers, we help you evaluate them based on program quality, university reputation, financial considerations, location advantages, and career prospects. We provide a comparative analysis of all offers received, highlighting the strengths and potential challenges of each option.",
      },
      {
        title: "Visa Documentation and Preparation",
        description:
          "We prepare a comprehensive visa file with all required documents to maximize your chances of approval. This includes financial documentation, proof of enrollment, accommodation arrangements, travel insurance, and other country-specific requirements.",
      },
      {
        title: "Visa Application Submission and Interview",
        description:
          "Our team guides you through the visa application process, including form completion, fee payment, and appointment scheduling. We conduct multiple mock interview sessions to build your confidence and refine your responses to potential questions.",
      },
      {
        title: "Pre-Departure Guidance and Orientation",
        description:
          "We provide comprehensive orientation sessions to prepare you for life abroad, including detailed information about your destination country's culture, climate, transportation systems, healthcare facilities, and local customs.",
      },
    ],
    eligibility: [
      "Completed higher secondary education (12th grade) or equivalent with competitive academic performance",
      "Proof of English language proficiency through standardized tests such as IELTS, TOEFL, PTE, or Duolingo English Test",
      "Sufficient financial resources to cover tuition and living expenses",
      "Clean background with no criminal record or immigration violations",
      "Genuine intention to study and return to home country after completion",
      "Admission offer from a recognized educational institution approved for international students",
      "Academic transcripts showing consistent performance and progression throughout your educational history",
      "Standardized test scores relevant to your field of study (such as GRE, GMAT, SAT, or subject-specific tests)",
    ],
    documents: [
      "Valid passport with at least 6 months validity beyond your intended period of stay",
      "Completed visa application form with accurate personal and program information",
      "Acceptance letter from the educational institution clearly stating program details, duration, and tuition fees",
      "Academic transcripts and certificates from all previous educational institutions",
      "English language proficiency test results meeting the minimum requirements of your chosen institution",
      "Financial documents showing sufficient funds for tuition and living expenses",
      "Statement of Purpose (SOP) explaining your academic background, reasons for choosing the program and institution",
      "Medical examination reports from approved physicians confirming you meet the health requirements",
    ],
    countries: [
      {
        name: "Canada",
        description:
          "Known for high-quality education, post-study work opportunities, and pathway to permanent residency.",
        processingTime: "8-12 weeks (2-4 weeks through SDS for eligible countries)",
        successRate: "85%",
      },
      {
        name: "Australia",
        description:
          "Offers world-class education, diverse culture, and excellent quality of life for international students.",
        processingTime: "4-6 weeks",
        successRate: "82%",
      },
      {
        name: "United Kingdom",
        description: "Home to prestigious universities with centuries of academic excellence and vibrant student life.",
        processingTime: "3-5 weeks",
        successRate: "80%",
      },
      {
        name: "United States",
        description:
          "Provides cutting-edge research facilities and diverse academic programs across thousands of institutions.",
        processingTime: "2-3 months",
        successRate: "75%",
      },
      {
        name: "New Zealand",
        description: "Offers quality education in a safe, welcoming environment with stunning natural landscapes.",
        processingTime: "4-8 weeks",
        successRate: "88%",
      },
    ],
    testimonials: [
      {
        name: "Priya Sharma",
        country: "Canada",
        university: "University of Toronto",
        program: "Master of Computer Science",
        rating: 5,
        text: "The team guided me through every step of my study visa process for Canada. Their expertise made the complex application process seem effortless. I was particularly impressed with their SOP guidance, which helped me articulate my academic and career goals effectively.",
      },
      {
        name: "Rahul Patel",
        country: "Australia",
        university: "University of Melbourne",
        program: "Bachelor of Engineering (Mechanical)",
        rating: 5,
        text: "I had applied through another consultant before and got rejected. The team analyzed my profile thoroughly and identified the gaps in my previous application. They suggested specific improvements to my academic profile, including additional certification courses that strengthened my application.",
      },
      {
        name: "Ananya Singh",
        country: "United Kingdom",
        university: "Imperial College London",
        program: "MSc in Environmental Engineering",
        rating: 4,
        text: "The counselors were extremely knowledgeable about UK universities and visa requirements. They helped me craft a compelling SOP that highlighted my strengths and aligned perfectly with my chosen program's objectives. When I was waitlisted initially, they advised me on additional documents and a letter of continued interest that ultimately secured my admission.",
      },
    ],
    stats: {
      successRate: "95%",
      studentsPlaced: "15,000+",
      universityPartners: "750+",
      countriesCovered: "20+",
    },
  },
  "work-permit": {
    title: "Work Permit",
    subtitle: "Advance Your Career Internationally",
    description:
      "Secure your career abroad with our expert work permit services tailored to your professional profile and aspirations.",
    longDescription:
      "International work experience can significantly enhance your career prospects and open doors to global opportunities. Our specialized work permit services are designed to navigate the complex immigration processes of various countries, ensuring a smooth transition to your new workplace abroad.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
    icon: <FaBriefcase />,
    features: [
      "Comprehensive assessment of your eligibility for various work permit programs",
      "Job market analysis for your industry and skill set in target countries",
      "Resume and cover letter optimization for international employers",
      "Interview preparation and salary negotiation guidance",
      "Complete documentation support for work visa applications",
      "Employer verification and job offer validation",
      "Family member visa application assistance",
      "Post-landing settlement assistance including banking, housing, and social insurance",
    ],
    process: [
      {
        title: "Career Consultation",
        description:
          "We evaluate your professional background, skills, and career goals to identify suitable work permit options.",
      },
      {
        title: "Country Selection",
        description:
          "Based on your profile, we recommend countries with favorable immigration policies and job markets for your profession.",
      },
      {
        title: "Job Search Strategy",
        description:
          "We develop a customized job search strategy and optimize your resume for international employers.",
      },
      {
        title: "Employment Offer",
        description:
          "Once you secure a job offer, we verify its authenticity and ensure it meets immigration requirements.",
      },
      {
        title: "Work Permit Application",
        description: "Our experts prepare a comprehensive work permit application with all supporting documents.",
      },
      {
        title: "Application Submission",
        description:
          "We handle the submission process and follow up with immigration authorities for timely processing.",
      },
      {
        title: "Approval and Preparation",
        description:
          "Upon approval, we guide you through pre-departure preparations including accommodation and travel arrangements.",
      },
      {
        title: "Arrival and Settlement",
        description:
          "We provide support for your initial settlement, including banking setup, social insurance registration, and local orientation.",
      },
    ],
    eligibility: [
      "Relevant educational qualifications for the job position",
      "Work experience in the related field (requirements vary by country)",
      "Valid job offer from an employer in the destination country",
      "Language proficiency as required by the employer or immigration authorities",
      "Clean background with no criminal record",
      "Medical clearance as per country requirements",
      "Sufficient funds for initial settlement (for some countries)",
    ],
    documents: [
      "Valid passport with sufficient validity",
      "Completed work permit application form",
      "Employment contract or job offer letter",
      "Educational certificates and transcripts",
      "Work experience letters and references",
      "Resume/CV updated for international standards",
      "Language proficiency certificates (if required)",
      "Police clearance certificate",
      "Medical examination reports",
      "Passport-sized photographs",
    ],
    countries: [
      {
        name: "Canada",
        description:
          "Offers various work permit programs including LMIA-based work permits and International Experience Canada.",
        processingTime: "4-16 weeks",
        successRate: "78%",
      },
      {
        name: "Australia",
        description: "Provides Temporary Skill Shortage (TSS) visa for skilled workers with employer sponsorship.",
        processingTime: "2-3 months",
        successRate: "75%",
      },
      {
        name: "United Kingdom",
        description: "Offers Skilled Worker visa for qualified professionals with job offers from UK employers.",
        processingTime: "3-8 weeks",
        successRate: "72%",
      },
      {
        name: "Germany",
        description:
          "Provides EU Blue Card for highly qualified professionals and regular work permits for skilled workers.",
        processingTime: "1-3 months",
        successRate: "70%",
      },
      {
        name: "Singapore",
        description: "Offers Employment Pass for professionals and S Pass for mid-level skilled staff.",
        processingTime: "3-5 weeks",
        successRate: "68%",
      },
    ],
    testimonials: [
      {
        name: "Vikram Mehta",
        country: "Canada",
        company: "Tech Solutions Inc.",
        rating: 5,
        text: "I received my Canadian work permit through their expert guidance. The team handled my LMIA application professionally and kept me informed throughout the process. Now I'm working with a leading tech company in Toronto!",
      },
      {
        name: "Neha Gupta",
        country: "Australia",
        company: "Sydney Healthcare",
        rating: 4,
        text: "The work permit process for Australia seemed daunting, but the consultants made it straightforward. Their attention to detail in preparing my TSS visa application was impressive. Highly recommend their services!",
      },
      {
        name: "Arjun Kapoor",
        country: "United Kingdom",
        company: "London Finance Group",
        rating: 5,
        text: "The team's knowledge of UK immigration policies is exceptional. They guided me through the Skilled Worker visa process and helped me negotiate a better package with my employer. Excellent service!",
      },
    ],
    stats: {
      successRate: "78%",
      professionalsPlaced: "3000+",
      employerPartners: "350+",
      countriesCovered: "12+",
    },
  },
  "permanent-residency": {
    title: "Permanent Residency",
    subtitle: "Your Path to a New Life Abroad",
    description:
      "Start your new life abroad with our comprehensive permanent residency application services tailored to your profile.",
    longDescription:
      "Permanent residency offers the freedom to live, work, and study in a new country with access to healthcare, education, and social benefits. Our expert team guides you through the complex PR application process, maximizing your chances of approval based on your unique qualifications and circumstances.",
    image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?q=80&w=1200&auto=format&fit=crop",
    icon: <FaPassport />,
    features: [
      "Comprehensive eligibility assessment for various PR pathways",
      "Point-based system optimization strategies to maximize your score",
      "Complete application preparation with attention to detail",
      "Document verification and authentication services",
      "Regular updates on application status and processing",
      "Post-PR guidance on settlement and integration",
      "Citizenship application assistance after meeting residency requirements",
      "Family member inclusion in your PR application",
    ],
    process: [
      {
        title: "Initial Assessment",
        description:
          "We evaluate your profile against various PR programs to determine your eligibility and the best pathway.",
      },
      {
        title: "PR Pathway Selection",
        description:
          "Based on your assessment, we recommend the most suitable PR program and develop a customized strategy.",
      },
      {
        title: "Profile Enhancement",
        description:
          "We identify areas for improvement in your profile and suggest steps to strengthen your application.",
      },
      {
        title: "Document Collection",
        description:
          "Our team guides you through gathering and organizing all required documents for your PR application.",
      },
      {
        title: "Application Preparation",
        description:
          "We meticulously prepare your application forms and supporting documents to ensure accuracy and completeness.",
      },
      {
        title: "Application Submission",
        description: "We handle the submission process and ensure all requirements are met for a valid application.",
      },
      {
        title: "Follow-up and Updates",
        description:
          "We maintain regular communication with immigration authorities and keep you informed of your application status.",
      },
      {
        title: "PR Approval and Guidance",
        description:
          "Upon approval, we provide comprehensive guidance on next steps, including landing and settlement in your new country.",
      },
    ],
    eligibility: [
      "Age (most programs favor applicants between 25-45 years)",
      "Education (higher qualifications typically earn more points)",
      "Work experience (skilled work experience in relevant fields)",
      "Language proficiency in official language(s) of the destination country",
      "Adaptability factors (previous visits, family connections, etc.)",
      "Clean background with no criminal record",
      "Medical clearance as per country requirements",
      "Sufficient settlement funds (requirements vary by country and program)",
    ],
    documents: [
      "Valid passport with sufficient validity",
      "Birth certificate and marriage certificate (if applicable)",
      "Educational credentials assessment and certificates",
      "Language proficiency test results",
      "Work experience letters and references",
      "Resume/CV detailing your career history",
      "Police clearance certificates from all countries of residence",
      "Medical examination reports",
      "Proof of funds for settlement",
      "Passport-sized photographs",
    ],
    countries: [
      {
        name: "Canada",
        description:
          "Offers Express Entry system for skilled workers and Provincial Nominee Programs for specific regions.",
        processingTime: "6-12 months",
        successRate: "82%",
      },
      {
        name: "Australia",
        description:
          "Provides General Skilled Migration program and employer-sponsored pathways to permanent residency.",
        processingTime: "8-14 months",
        successRate: "78%",
      },
      {
        name: "New Zealand",
        description: "Offers Skilled Migrant Category and Residence from Work pathways for permanent residency.",
        processingTime: "6-10 months",
        successRate: "75%",
      },
      {
        name: "United Kingdom",
        description: "Provides routes to settlement through work, family, and investment pathways.",
        processingTime: "6-8 months",
        successRate: "70%",
      },
      {
        name: "Germany",
        description: "Offers settlement permits for skilled workers after a period of temporary residence.",
        processingTime: "3-6 months",
        successRate: "72%",
      },
    ],
    testimonials: [
      {
        name: "Rajesh and Sunita Kumar",
        country: "Canada",
        program: "Express Entry",
        rating: 5,
        text: "We received our Canadian PR through Express Entry in just 8 months! The team's expertise in optimizing our CRS score and preparing a flawless application made all the difference. We're now happily settled in Toronto with our children.",
      },
      {
        name: "Amit Verma",
        country: "Australia",
        program: "Skilled Independent Visa",
        rating: 5,
        text: "After trying on my own and facing challenges, I approached the team for my Australian PR. Their strategic approach to my skills assessment and point calculation helped me secure an invitation quickly. Their service is worth every penny!",
      },
      {
        name: "Meera Patel",
        country: "New Zealand",
        program: "Skilled Migrant Category",
        rating: 4,
        text: "The consultants provided excellent guidance throughout my New Zealand PR journey. They were particularly helpful in addressing the complex documentation requirements and responding to additional information requests from Immigration NZ.",
      },
    ],
    stats: {
      successRate: "82%",
      familiesSettled: "2500+",
      programsOffered: "20+",
      countriesCovered: "10+",
    },
  },
  "family-immigration": {
    title: "Family Immigration",
    subtitle: "Reuniting Families Across Borders",
    description:
      "Reunite with your loved ones through our specialized family immigration services designed to navigate complex sponsorship processes.",
    longDescription:
      "Family immigration allows citizens and permanent residents to sponsor their family members to join them abroad. Our expert team guides you through the intricate sponsorship process, ensuring all documentation is properly prepared to maximize approval chances and minimize processing times.",
    image: "https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1200&auto=format&fit=crop",
    icon: <FaUsers />,
    features: [
      "Comprehensive eligibility assessment for family sponsorship",
      "Relationship documentation preparation and verification",
      "Financial requirement guidance and documentation",
      "Complete application preparation with attention to detail",
      "Regular updates on application status and processing",
      "Interview preparation for sponsors and applicants",
      "Appeal assistance for refused applications",
      "Post-approval guidance for family settlement",
    ],
    process: [
      {
        title: "Sponsorship Eligibility",
        description:
          "We assess the sponsor's eligibility to sponsor family members based on their status, income, and relationship to the applicants.",
      },
      {
        title: "Relationship Verification",
        description:
          "We guide you through documenting and proving your relationship with the family members you wish to sponsor.",
      },
      {
        title: "Financial Assessment",
        description:
          "We help you prepare financial documentation to demonstrate your ability to support sponsored family members.",
      },
      {
        title: "Application Preparation",
        description:
          "Our team meticulously prepares all application forms and supporting documents for both sponsor and applicants.",
      },
      {
        title: "Application Submission",
        description: "We handle the submission process and ensure all requirements are met for a valid application.",
      },
      {
        title: "Follow-up and Updates",
        description:
          "We maintain regular communication with immigration authorities and keep you informed of your application status.",
      },
      {
        title: "Interview Preparation",
        description:
          "If interviews are required, we provide comprehensive preparation for both sponsors and applicants.",
      },
      {
        title: "Arrival Coordination",
        description:
          "Upon approval, we assist with coordination of travel arrangements and initial settlement for your family members.",
      },
    ],
    eligibility: [
      "Sponsor must be a citizen or permanent resident of the destination country",
      "Minimum income requirements to support sponsored family members",
      "Genuine relationship with the family members being sponsored",
      "Family members typically include spouse/partner, dependent children, and in some cases, parents and grandparents",
      "Sponsor must meet residency obligations in their country",
      "Sponsored family members must meet health and character requirements",
      "Age restrictions may apply for certain family members (e.g., dependent children)",
    ],
    documents: [
      "Sponsor's citizenship or permanent residency proof",
      "Marriage certificate for spouse sponsorship",
      "Birth certificates proving parent-child relationships",
      "Proof of relationship (photos, communication records, joint accounts)",
      "Financial documents (tax returns, employment letters, bank statements)",
      "Accommodation details for family settlement",
      "Police clearance certificates for applicants",
      "Medical examination reports",
      "Passport-sized photographs",
      "Statutory declarations and supporting letters",
    ],
    countries: [
      {
        name: "Canada",
        description:
          "Offers sponsorship for spouses, partners, children, parents, and grandparents through Family Class immigration.",
        processingTime: "12-24 months",
        successRate: "85%",
      },
      {
        name: "United States",
        description: "Provides family-based immigration for immediate relatives and family preference categories.",
        processingTime: "1-5 years (varies by category)",
        successRate: "80%",
      },
      {
        name: "Australia",
        description: "Offers Partner visas, Child visas, and Parent visas for family reunification.",
        processingTime: "12-30 months",
        successRate: "82%",
      },
      {
        name: "United Kingdom",
        description:
          "Provides family visas for spouses, children, and dependent relatives of UK citizens and settled persons.",
        processingTime: "8-12 months",
        successRate: "78%",
      },
      {
        name: "New Zealand",
        description: "Offers Partnership, Dependent Child, and Parent Retirement Category visas for family members.",
        processingTime: "6-18 months",
        successRate: "83%",
      },
    ],
    testimonials: [
      {
        name: "Arun and Deepa Sharma",
        country: "Canada",
        relationship: "Spouse Sponsorship",
        rating: 5,
        text: "After our marriage, I wanted to bring my wife to Canada. The team handled our spousal sponsorship application with great care and attention to detail. We are now happily living together in Toronto thanks to their expertise!",
      },
      {
        name: "Sanjay Patel",
        country: "Australia",
        relationship: "Parent Visa",
        rating: 4,
        text: "Sponsoring my elderly parents to join me in Australia seemed complicated, but the consultants made it straightforward. They were particularly helpful with the financial requirements and health waiver process. My parents are now enjoying their retirement in Sydney!",
      },
      {
        name: "Priya and Rahul Malhotra",
        country: "United Kingdom",
        relationship: "Child Sponsorship",
        rating: 5,
        text: "We needed to bring our adopted child to the UK, which involved complex documentation. The team's expertise in handling adoption cases was invaluable. Their thorough approach ensured our family could be reunited without unnecessary delays.",
      },
    ],
    stats: {
      successRate: "85%",
      familiesReunited: "1800+",
      sponsorshipPrograms: "15+",
      countriesCovered: "8+",
    },
  },
  "business-immigration": {
    title: "Business Immigration",
    subtitle: "Expanding Your Business Horizons Globally",
    description:
      "Expand your business horizons with our expert business immigration services designed for entrepreneurs and investors.",
    longDescription:
      "Business immigration programs offer entrepreneurs and investors the opportunity to establish or invest in businesses abroad while gaining residency benefits. Our specialized team guides high-net-worth individuals and business owners through the complex process of business establishment and investment-based immigration.",
    image: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=1200&auto=format&fit=crop",
    icon: <FaBuilding />,
    features: [
      "Comprehensive assessment of business immigration options",
      "Business plan development tailored for immigration purposes",
      "Investment options analysis and recommendation",
      "Complete documentation for business establishment",
      "Business viability assessment and market research",
      "Corporate structure and tax planning guidance",
      "Business interview preparation and coaching",
      "Post-landing business setup assistance",
    ],
    process: [
      {
        title: "Business Concept Evaluation",
        description:
          "We assess your business concept, experience, and investment capacity to determine suitable business immigration pathways.",
      },
      {
        title: "Program Selection",
        description:
          "Based on your profile, we recommend the most appropriate business immigration program and destination country.",
      },
      {
        title: "Business Plan Development",
        description:
          "Our experts help develop a comprehensive business plan that meets immigration requirements and demonstrates viability.",
      },
      {
        title: "Investment Strategy",
        description:
          "We provide guidance on investment options, amounts, and structures that comply with program requirements.",
      },
      {
        title: "Documentation Preparation",
        description:
          "Our team assists with preparing all business and personal documentation required for your application.",
      },
      {
        title: "Application Submission",
        description: "We handle the submission process and ensure all requirements are met for a valid application.",
      },
      {
        title: "Business Interview",
        description:
          "If required, we provide comprehensive preparation for business interviews with immigration authorities.",
      },
      {
        title: "Business Establishment",
        description:
          "Upon approval, we assist with business registration, licensing, banking, and other setup requirements in your new country.",
      },
    ],
    eligibility: [
      "Minimum net worth requirements (varies by program and country)",
      "Business ownership or senior management experience",
      "Investment capacity to meet program requirements",
      "Viable business concept or investment plan",
      "Language proficiency (requirements vary by country)",
      "Clean background with no criminal record",
      "Medical clearance as per country requirements",
      "Intent to actively manage the business (for entrepreneur programs)",
    ],
    documents: [
      "Personal financial statements and proof of net worth",
      "Business ownership documentation and corporate records",
      "Detailed business plan for the proposed venture",
      "Source of funds documentation for investment",
      "Business experience evidence and resume",
      "Tax returns and financial statements",
      "Bank statements and investment portfolios",
      "Police clearance certificates",
      "Medical examination reports",
      "Passport-sized photographs",
    ],
    countries: [
      {
        name: "Canada",
        description:
          "Offers Start-up Visa Program and Provincial Nominee Programs with business streams for entrepreneurs.",
        processingTime: "12-24 months",
        successRate: "75%",
        investmentRange: "CAD 100,000 - CAD 1.5 million (varies by program)",
      },
      {
        name: "United States",
        description: "Provides E-2 Treaty Investor visa and EB-5 Immigrant Investor Program for business immigration.",
        processingTime: "6-24 months",
        successRate: "70%",
        investmentRange: "USD 100,000 (E-2) - USD 800,000 (EB-5)",
      },
      {
        name: "Australia",
        description: "Offers Business Innovation and Investment visas for entrepreneurs and investors.",
        processingTime: "12-18 months",
        successRate: "72%",
        investmentRange: "AUD 200,000 - AUD 5 million (varies by stream)",
      },
      {
        name: "United Kingdom",
        description: "Provides Innovator visa and Investor visa routes for business immigration.",
        processingTime: "3-6 months",
        successRate: "68%",
        investmentRange: "GBP 50,000 (Innovator) - GBP 2 million (Investor)",
      },
      {
        name: "Singapore",
        description: "Offers EntrePass for entrepreneurs and Global Investor Programme for investors.",
        processingTime: "3-8 months",
        successRate: "65%",
        investmentRange: "SGD 50,000 (EntrePass) - SGD 2.5 million (GIP)",
      },
    ],
    testimonials: [
      {
        name: "Vikram Malhotra",
        country: "Canada",
        business: "Tech Startup",
        rating: 5,
        text: "The team's expertise in Canada's Start-up Visa program was exceptional. They helped refine my business concept, connected me with a designated organization, and guided me through the complex application process. My tech startup is now thriving in Vancouver!",
      },
      {
        name: "Anita and Suresh Kapoor",
        country: "Australia",
        business: "Restaurant Chain",
        rating: 4,
        text: "We wanted to expand our restaurant business to Australia. The consultants provided valuable market insights and helped us navigate the Business Innovation visa requirements. Their business plan development service was particularly helpful in securing our visa approval.",
      },
      {
        name: "Rajiv Mehta",
        country: "United Kingdom",
        business: "Investment Portfolio",
        rating: 5,
        text: "As an investor looking to diversify internationally, I found their UK Investor visa guidance invaluable. They provided comprehensive advice on investment options and helped structure my portfolio to meet visa requirements while maximizing returns.",
      },
    ],
    stats: {
      successRate: "75%",
      businessesEstablished: "500+",
      investmentFacilitated: "$200M+",
      countriesCovered: "10+",
    },
  },
  tourist: {
    title: "Tourist Visa",
    subtitle: "Explore the World with Confidence",
    description:
      "Explore the world with our hassle-free tourist visa application services designed to maximize approval chances.",
    longDescription:
      "Tourist visas allow you to visit foreign countries for leisure, sightseeing, visiting friends and relatives, or short-term non-business activities. Our expert team simplifies the application process, ensuring your documentation meets all requirements for a smooth and successful visa approval.",
    image: "https://images.unsplash.com/photo-1488085061387-422e29b40080?q=80&w=1200&auto=format&fit=crop",
    icon: <FaGlobe />,
    features: [
      "Country-specific visa requirement guidance",
      "Travel itinerary planning assistance",
      "Documentation preparation and verification",
      "Visa application form completion assistance",
      "Appointment scheduling for biometrics and interviews",
      "Application submission and tracking",
      "Travel insurance guidance and recommendations",
      "Pre-travel orientation and tips",
    ],
    process: [
      {
        title: "Travel Consultation",
        description:
          "We discuss your travel plans, destination countries, and specific requirements to provide personalized guidance.",
      },
      {
        title: "Document Assessment",
        description:
          "We review your documentation and advise on additional documents needed to strengthen your application.",
      },
      {
        title: "Itinerary Planning",
        description: "We help develop a comprehensive travel itinerary that supports your visa application.",
      },
      {
        title: "Application Preparation",
        description:
          "Our team assists with accurately completing application forms and organizing supporting documents.",
      },
      {
        title: "Visa Submission",
        description: "We guide you through the submission process, including appointment scheduling if required.",
      },
      {
        title: "Application Tracking",
        description: "We monitor your application status and provide updates throughout the processing period.",
      },
      {
        title: "Visa Collection",
        description: "Upon approval, we assist with visa collection procedures and verification of visa details.",
      },
      {
        title: "Pre-Travel Guidance",
        description:
          "We provide orientation on entry procedures, customs regulations, and travel tips for your destination.",
      },
    ],
    eligibility: [
      "Valid passport with sufficient validity (typically 6 months beyond intended stay)",
      "Proof of sufficient funds to cover your trip",
      "Evidence of ties to your home country (employment, property, family)",
      "Clear travel purpose and itinerary",
      "Accommodation arrangements for your stay",
      "Return ticket or onward journey proof",
      "Clean travel history with no visa violations",
      "Travel insurance coverage (required by some countries)",
    ],
    documents: [
      "Valid passport with blank visa pages",
      "Completed visa application form",
      "Recent passport-sized photographs",
      "Proof of accommodation (hotel reservations, host invitation)",
      "Flight itinerary or round-trip ticket booking",
      "Bank statements showing sufficient funds",
      "Employment letter or business registration",
      "Income tax returns or financial statements",
      "Travel insurance policy",
      "Previous visa copies and travel history (if applicable)",
    ],
    countries: [
      {
        name: "Schengen Countries",
        description: "26 European countries with a unified visa system allowing travel throughout the Schengen Area.",
        processingTime: "2-15 days",
        successRate: "85%",
        visaFee: "€80",
      },
      {
        name: "United States",
        description: "B-2 Tourist Visa for leisure travel, medical treatment, or visiting friends and relatives.",
        processingTime: "1-3 months",
        successRate: "70%",
        visaFee: "$160",
      },
      {
        name: "United Kingdom",
        description: "Standard Visitor visa for tourism, visiting family, or short-term activities.",
        processingTime: "3-6 weeks",
        successRate: "80%",
        visaFee: "£100",
      },
      {
        name: "Australia",
        description: "Visitor visa (subclass 600) for tourism or visiting family and friends.",
        processingTime: "15-30 days",
        successRate: "88%",
        visaFee: "AUD 145",
      },
      {
        name: "Canada",
        description: "Temporary Resident Visa (TRV) for tourism, visiting family, or short-term stays.",
        processingTime: "2-4 weeks",
        successRate: "75%",
        visaFee: "CAD 100",
      },
    ],
    testimonials: [
      {
        name: "Ravi and Sunita Gupta",
        country: "Schengen Countries",
        trip: "European Tour",
        rating: 5,
        text: "We planned a 15-day European tour covering 5 countries. The team's expertise in Schengen visa applications was impressive. They guided us through the complex documentation process and our visa was approved in just 5 days! Highly recommend their services.",
      },
      {
        name: "Anjali Sharma",
        country: "United States",
        trip: "Family Visit",
        rating: 4,
        text: "After a previous US visa rejection, I approached the consultants for help. Their thorough preparation for my interview and documentation guidance made all the difference. Successfully got my B-2 visa to visit my sister in California!",
      },
      {
        name: "Prakash Mehta",
        country: "Australia",
        trip: "Holiday",
        rating: 5,
        text: "The team made my Australian tourist visa application incredibly smooth. Their attention to detail in preparing my financial documentation and travel itinerary resulted in a quick approval. My holiday in Sydney and Melbourne was amazing!",
      },
    ],
    stats: {
      successRate: "85%",
      visasProcessed: "10,000+",
      countriesCovered: "50+",
      satisfiedTravelers: "9,500+",
    },
  },
  "air-ticket-service": {
    title: "Air Ticket Service",
    subtitle: "Seamless Travel Planning and Booking",
    description:
      "Get the best deals on international flights with our specialized air ticket service tailored to your travel needs.",
    longDescription:
      "Our comprehensive air ticket service goes beyond simple bookings to provide end-to-end travel solutions. We leverage our airline partnerships and industry expertise to secure competitive fares, convenient routes, and special accommodations for all types of travelers, from students to business professionals.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop",
    icon: <FaPlane />,
    features: [
      "Competitive airfare options from multiple airlines",
      "Special student and immigration fares",
      "Group booking discounts for families and organizations",
      "Flexible booking options with minimal change fees",
      "Multi-city and round-the-world itinerary planning",
      "Baggage allowance optimization",
      "Seat selection and special meal arrangements",
      "24/7 travel support and emergency assistance",
    ],
    process: [
      {
        title: "Travel Consultation",
        description: "We discuss your travel requirements, preferences, and budget to understand your specific needs.",
      },
      {
        title: "Flight Research",
        description: "Our team researches multiple airlines and routes to find the best options for your journey.",
      },
      {
        title: "Fare Comparison",
        description: "We present various fare options with detailed comparisons of benefits, restrictions, and value.",
      },
      {
        title: "Booking Confirmation",
        description:
          "Once you select your preferred option, we handle the booking process and secure your reservation.",
      },
      {
        title: "Additional Services",
        description: "We arrange supplementary services like seat selection, meal preferences, and extra baggage.",
      },
      {
        title: "E-Ticket Issuance",
        description: "We issue electronic tickets and provide all necessary documentation for your journey.",
      },
      {
        title: "Pre-Travel Reminder",
        description: "Before your travel date, we send reminders and check for any schedule changes or updates.",
      },
      {
        title: "Travel Support",
        description: "Our team remains available throughout your journey to assist with any travel-related issues.",
      },
    ],
    services: [
      {
        title: "Student Travel",
        description: "Special fares with extra baggage allowance for students traveling to international universities.",
        features: ["Discounted rates", "Extra baggage allowance", "Flexible date changes", "One-way options"],
      },
      {
        title: "Immigration Travel",
        description: "Specialized booking service for permanent residency and work permit holders moving abroad.",
        features: [
          "One-way tickets with competitive pricing",
          "Extra baggage options",
          "Pet transport assistance",
          "Settlement guidance",
        ],
      },
      {
        title: "Family Travel",
        description: "Comprehensive service for families traveling together with special needs consideration.",
        features: [
          "Group discounts",
          "Adjacent seating",
          "Special meals for children",
          "Stroller and bassinet arrangements",
        ],
      },
      {
        title: "Business Travel",
        description: "Premium service for business travelers with emphasis on convenience and comfort.",
        features: ["Business class options", "Lounge access", "Priority boarding", "Frequent flyer optimization"],
      },
    ],
    airlines: [
      "Air Canada",
      "Emirates",
      "Lufthansa",
      "Singapore Airlines",
      "British Airways",
      "Qatar Airways",
      "Air India",
      "United Airlines",
      "Cathay Pacific",
      "Etihad Airways",
    ],
    testimonials: [
      {
        name: "Aditya Sharma",
        journey: "Delhi to Toronto",
        purpose: "Student Travel",
        rating: 5,
        text: "As a student traveling to Canada, I was concerned about baggage allowance and costs. The team found me an excellent deal with Air Canada that included extra baggage and was much cheaper than what I found online. Their service saved me both money and stress!",
      },
      {
        name: "The Patel Family",
        journey: "Mumbai to Sydney",
        purpose: "Immigration",
        rating: 5,
        text: "Moving our family of four to Australia permanently required careful planning. The consultants arranged our one-way tickets with optimal baggage allowance and even helped with pet transport arrangements for our dog. Excellent comprehensive service!",
      },
      {
        name: "Corporate Solutions Ltd.",
        journey: "Multiple Routes",
        purpose: "Business Travel",
        rating: 4,
        text: "We use their services for all our executive travel needs. Their 24/7 support and ability to handle last-minute changes has been invaluable for our business. The personalized service and competitive rates keep us coming back.",
      },
    ],
    stats: {
      ticketsBooked: "25,000+",
      airlinesPartnered: "40+",
      averageSavings: "15-20%",
      customerSatisfaction: "98%",
    },
  },
  "show-money-assistance": {
    title: "Show Money Assistance",
    subtitle: "Financial Documentation for Visa Success",
    description:
      "Get expert guidance on financial documentation for your visa application to maximize approval chances.",
    longDescription:
      "Financial documentation is a critical component of most visa applications, demonstrating your ability to support yourself during your stay abroad. Our specialized show money assistance service provides expert guidance on preparing and presenting financial documents that meet immigration requirements and strengthen your visa application.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?q=80&w=1200&auto=format&fit=crop",
    icon: <FaCreditCard />,
    features: [
      "Country-specific financial requirement guidance",
      "Bank statement preparation and formatting assistance",
      "Sponsorship documentation guidance",
      "Financial verification letter templates",
      "Source of funds documentation support",
      "Asset valuation and documentation",
      "Financial history organization and presentation",
      "Customized financial documentation strategy",
    ],
    process: [
      {
        title: "Financial Assessment",
        description:
          "We evaluate your financial situation and determine the requirements for your specific visa category and destination.",
      },
      {
        title: "Documentation Strategy",
        description:
          "We develop a customized strategy for presenting your financial documents in the most favorable light.",
      },
      {
        title: "Bank Statement Guidance",
        description:
          "We provide detailed guidance on bank statement preparation, including timing, format, and presentation.",
      },
      {
        title: "Sponsorship Documentation",
        description:
          "If applicable, we assist with preparing sponsorship documents, including affidavits of support and relationship proof.",
      },
      {
        title: "Source of Funds Verification",
        description:
          "We help document the legitimate source of your funds to address potential concerns from visa officers.",
      },
      {
        title: "Document Review",
        description:
          "Our experts review your financial documents to ensure they meet all requirements and present a strong case.",
      },
      {
        title: "Final Preparation",
        description:
          "We organize your financial documentation in a clear, logical manner for submission with your visa application.",
      },
      {
        title: "Submission Guidance",
        description:
          "We provide guidance on how to present and explain your financial situation during interviews or in cover letters.",
      },
    ],
    requirements: [
      {
        country: "Canada",
        studentRequirement: "Tuition fees + CAD 10,000 for living expenses (for first year)",
        touristRequirement: "CAD 100 per day of stay (recommended)",
        format: "Bank statements for last 6 months, GIC option for students",
      },
      {
        country: "United States",
        studentRequirement: "Full tuition and living expenses for first year (varies by institution)",
        touristRequirement: "No fixed amount, but sufficient funds for intended stay",
        format: "Bank statements, sponsor affidavits, tax returns",
      },
      {
        country: "United Kingdom",
        studentRequirement: "Tuition fees + £1,334/month for London (£1,023/month outside London)",
        touristRequirement: "£100 per day of stay (recommended)",
        format: "Bank statements for 28 consecutive days",
      },
      {
        country: "Australia",
        studentRequirement: "AUD 21,041 per year for living expenses + tuition fees",
        touristRequirement: "AUD 1,000 per month (recommended)",
        format: "Bank statements for last 3-6 months",
      },
      {
        country: "Schengen Countries",
        studentRequirement: "€700-€1,000 per month (varies by country)",
        touristRequirement: "€100 per day of stay (varies by country)",
        format: "Bank statements, traveler's cheques, sponsorship letters",
      },
    ],
    services: [
      {
        title: "Bank Statement Preparation",
        description: "Guidance on maintaining and presenting bank statements that meet visa requirements.",
        includes: [
          "Account selection advice",
          "Transaction management",
          "Statement formatting",
          "Balance maintenance strategy",
        ],
      },
      {
        title: "Sponsorship Documentation",
        description: "Comprehensive assistance for cases involving financial sponsors.",
        includes: [
          "Sponsor eligibility assessment",
          "Relationship documentation",
          "Affidavit of support preparation",
          "Sponsor financial verification",
        ],
      },
      {
        title: "Asset Documentation",
        description: "Assistance with documenting fixed and liquid assets to strengthen financial proof.",
        includes: [
          "Property valuation guidance",
          "Investment portfolio documentation",
          "Asset ownership verification",
          "Liquid asset conversion strategy",
        ],
      },
      {
        title: "Source of Funds Verification",
        description: "Support for documenting the legitimate source of your funds.",
        includes: ["Income verification", "Gift documentation", "Loan documentation", "Business income verification"],
      },
    ],
    testimonials: [
      {
        name: "Rahul Verma",
        country: "Canada",
        visaType: "Study Permit",
        rating: 5,
        text: "After my first study permit application was rejected due to financial documentation issues, I sought help from the team. Their guidance on GIC investment and bank statement preparation was invaluable. My second application was approved without any questions about finances!",
      },
      {
        name: "Meera and Suresh Patel",
        country: "Schengen Countries",
        visaType: "Tourist Visa",
        rating: 5,
        text: "We were confused about the financial requirements for our European tour covering 5 countries. The consultants provided clear guidance on the exact amount needed and how to present our bank statements. Our visa was approved without any financial queries!",
      },
      {
        name: "Amit Kumar",
        country: "Australia",
        visaType: "Student Visa",
        rating: 4,
        text: "The team's advice on documenting my education loan and showing additional family support was crucial for my Australian student visa approval. Their templates for financial documents and sponsor letters were particularly helpful.",
      },
    ],
    stats: {
      successRate: "90%",
      clientsAssisted: "7,500+",
      countriesCovered: "30+",
      rejectionReversal: "85%",
    },
  },
}

const ServiceDetail = () => {
  const { serviceId } = useParams()
  const [service, setService] = useState(null)
  const [activeTab, setActiveTab] = useState("overview")
  const navigate = useNavigate()

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // Set service data based on serviceId
    if (serviceId && serviceDetails[serviceId]) {
      setService(serviceDetails[serviceId])
    }
  }, [serviceId])

  // Function to get hero image based on service type
  const getHeroImage = (serviceType) => {
    if (serviceDetails[serviceType] && serviceDetails[serviceType].image) {
      return serviceDetails[serviceType].image
    }
    return "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1200&auto=format&fit=crop"
  }

  // Function to get service icon based on service type
  const getServiceIcon = (serviceType) => {
    const iconMap = {
      study: <FaGraduationCap className="service-icon-large" />,
      "work-permit": <FaBriefcase className="service-icon-large" />,
      "permanent-residency": <FaPassport className="service-icon-large" />,
      "family-immigration": <FaUsers className="service-icon-large" />,
      "business-immigration": <FaBuilding className="service-icon-large" />,
      tourist: <FaGlobe className="service-icon-large" />,
      "air-ticket-service": <FaPlane className="service-icon-large" />,
      "show-money-assistance": <FaCreditCard className="service-icon-large" />,
    }

    return iconMap[serviceType] || <FaGraduationCap className="service-icon-large" />
  }

  if (!service) {
    return (
      <div className="service-not-found">
        <Header />
        <div className="container">
          <h2>Service Not Found</h2>
          <p>The service you're looking for doesn't exist or has been moved.</p>
          <Link to="/" className="btn btn-primary">
            Return to Home
          </Link>
        </div>
        <Footer />
        <WhatsAppButton />
      </div>
    )
  }

  return (
    <div className="service-detail-page">
      <Header />

      {/* Breadcrumb Navigation */}
      <div className="breadcrumb-container">
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Home</Link> <FaChevronRight className="breadcrumb-separator" />
            <Link to="/#services">Services</Link> <FaChevronRight className="breadcrumb-separator" />
            <span>{service.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div
        className="service-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(30, 41, 59, 0.8), rgba(30, 41, 59, 0.9)), url(${getHeroImage(serviceId)})`,
        }}
      >
        <div className="hero-background">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
        <div className="container">
          <div className="service-hero-badge">
            <span className="badge-icon">{service.icon}</span>
            <span className="badge-text">Expert Guidance</span>
          </div>
          <div className="service-hero-content">
            <div className="service-hero-text">
              <h1>{service.title}</h1>
              <h2>{service.subtitle}</h2>
              <div className="hero-divider"></div>
              <p className="service-description">{service.description}</p>
              <ul className="hero-highlights">
                <li>
                  <span className="highlight-icon">✓</span> Personalized Consultation
                </li>
                <li>
                  <span className="highlight-icon">✓</span> Complete Documentation Support
                </li>
                <li>
                  <span className="highlight-icon">✓</span> End-to-End Application Assistance
                </li>
              </ul>
              <div className="hero-cta">
                <Link to="/contact" className="btn btn-primary">
                  Get Free Assessment
                </Link>
                {/* <a href="#service-process" className="btn-outline">
                  Learn Our Process <FaArrowRight style={{ marginLeft: "8px" }} />
                </a> */}
              </div>
            </div>
            <div className="service-hero-image-container">
              <div className="image-frame">
                <img
                  src={getHeroImage(serviceId) || "/placeholder.svg"}
                  alt={`${service.title} Service`}
                  className="service-hero-image"
                />
              </div>
              <div className="image-caption">
                <div className="caption-icon">{getServiceIcon(serviceId)}</div>
                <div className="caption-text">
                  <span className="caption-number">{service.stats && Object.values(service.stats)[0]}</span>
                  <span className="caption-label">Success Rate</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="service-stats">
        <div className="container">
          <div className="stats-grid">
            {service.stats &&
              Object.entries(service.stats).map(([key, value], index) => (
                <div className="stat-item" key={index}>
                  <div className="stat-value">{value}</div>
                  <div className="stat-label">
                    {key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="service-tabs">
        <div className="container">
          <div className="tabs-container">
            <button
              className={`tab ${activeTab === "overview" ? "active" : ""}`}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </button>
            <button
              className={`tab ${activeTab === "process" ? "active" : ""}`}
              onClick={() => setActiveTab("process")}
            >
              Our Process
            </button>
            <button
              className={`tab ${activeTab === "eligibility" ? "active" : ""}`}
              onClick={() => setActiveTab("eligibility")}
            >
              Eligibility
            </button>
            <button
              className={`tab ${activeTab === "countries" ? "active" : ""}`}
              onClick={() => setActiveTab("countries")}
            >
              Countries
            </button>
          </div>
        </div>
      </div>

      {/* Main Content Section */}
      <div className="service-content container">
        {/* Overview Tab Content */}
        {activeTab === "overview" && (
          <div className="tab-content">
            <div className="service-overview">
              <div className="overview-text">
                <h2>About Our {service.title} Services</h2>
                <p className="long-description">{service.longDescription}</p>
              </div>

              <div className="service-features">
                <h3>Our {service.title} Services Include</h3>
                <ul className="feature-list">
                  {service.features.map((feature, index) => (
                    <li key={index} className="feature-item">
                      <div className="feature-icon">
                        <FaCheck />
                      </div>
                      <div className="feature-text">{feature}</div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Documents Checklist */}
              {service.documents && (
                <div className="documents-section">
                  <h3>Required Documents</h3>
                  <div className="documents-grid">
                    {service.documents.map((document, index) => (
                      <div key={index} className="document-item">
                        <div className="document-icon">
                          <FaFileAlt />
                        </div>
                        <div className="document-text">{document}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        )}

        {/* Process Tab Content */}
        {activeTab === "process" && (
          <div className="tab-content" id="service-process">
            <h2>Our {service.title} Process</h2>
            <p>
              We follow a structured approach to ensure your {service.title.toLowerCase()} application is handled
              efficiently and effectively.
            </p>

            <div className="process-timeline">
              {service.process.map((step, index) => (
                <div key={index} className="timeline-item">
                  <div className="timeline-marker">
                    <div className="step-number">{index + 1}</div>
                  </div>
                  <div className="timeline-content">
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Eligibility Tab Content */}
        {activeTab === "eligibility" && (
          <div className="tab-content">
            <h2>Eligibility Requirements</h2>
            <p>To qualify for our {service.title.toLowerCase()} services, you should meet the following criteria:</p>

            <div className="eligibility-list">
              {service.eligibility.map((item, index) => (
                <div key={index} className="eligibility-item">
                  <div className="eligibility-icon">
                    <FaCheckCircle />
                  </div>
                  <div className="eligibility-text">{item}</div>
                </div>
              ))}
            </div>

            <div className="eligibility-note">
              <div className="note-icon">
                <FaInfoCircle />
              </div>
              <p>
                Meeting these requirements doesn't guarantee approval, but our expert team will maximize your chances by
                presenting your case in the best possible light.
              </p>
            </div>
          </div>
        )}

        {/* Countries Tab Content */}
        {activeTab === "countries" && (
          <div className="tab-content">
            <h2>Countries We Cover</h2>
            <p>Our {service.title.toLowerCase()} services are available for the following popular destinations:</p>

            <div className="countries-grid">
              {service.countries.map((country, index) => (
                <div key={index} className="country-card">
                  <h3>{country.name}</h3>
                  <p>{country.description}</p>
                  <div className="country-details">
                    <div className="country-detail">
                      <span className="detail-label">Processing Time:</span>
                      <span className="detail-value">{country.processingTime}</span>
                    </div>
                    <div className="country-detail">
                      <span className="detail-label">Success Rate:</span>
                      <span className="detail-value">{country.successRate}</span>
                    </div>
                    {country.investmentRange && (
                      <div className="country-detail">
                        <span className="detail-label">Investment Range:</span>
                        <span className="detail-value">{country.investmentRange}</span>
                      </div>
                    )}
                    {country.visaFee && (
                      <div className="country-detail">
                        <span className="detail-label">Visa Fee:</span>
                        <span className="detail-value">{country.visaFee}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Testimonials Section */}
        <div className="testimonials-section">
          <h2>What Our Clients Say</h2>
          <div className="testimonials-grid">
            {service.testimonials.map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-quote">
                  <FaQuoteLeft className="quote-icon" />
                  <p>{testimonial.text}</p>
                </div>
                <div className="testimonial-author">
                  <div className="author-details">
                    <h4>{testimonial.name}</h4>
                    <p>
                      {testimonial.country}
                      {testimonial.university && ` • ${testimonial.university}`}
                      {testimonial.company && ` • ${testimonial.company}`}
                      {testimonial.program && ` • ${testimonial.program}`}
                      {testimonial.relationship && ` • ${testimonial.relationship}`}
                      {testimonial.business && ` • ${testimonial.business}`}
                      {testimonial.trip && ` • ${testimonial.trip}`}
                      {testimonial.visaType && ` • ${testimonial.visaType}`}
                    </p>
                  </div>
                  <div className="testimonial-rating">
                    {[...Array(5)].map((_, i) => (
                      <FaStar key={i} className={i < testimonial.rating ? "star-filled" : "star-empty"} />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <div className="aboutcta-section">
            <h2>Ready to Start Your {service.title} Journey?</h2>
            <p>
              Our expert team is ready to guide you through every step of the process. Contact us today for a free
              assessment of your case.
            </p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get Free Assessment
              </Link>
              <Link to="/contact" >
                Speak to an Expert
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
      <WhatsAppButton />
    </div>
  )
}

export default ServiceDetail
