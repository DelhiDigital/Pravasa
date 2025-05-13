"use client"

import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
  FaQuoteLeft,
  FaStar,
  FaChevronRight,
  FaFilter,
  FaSearch,
  FaGraduationCap,
  FaBriefcase,
  FaPassport,
  FaUsers,
  FaBuilding,
  FaGlobe,
  FaCreditCard,
  FaPlane,
} from "react-icons/fa"
import Header from "../../components/Header"
import Footer from "../../components/Footer"
import WhatsAppButton from "../../components/WhatsAppButton"
import "./TestimonialsPage.css"

const TestimonialsPage = () => {
  const [activeFilter, setActiveFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [testimonials, setTestimonials] = useState([])
  const [filteredTestimonials, setFilteredTestimonials] = useState([])

  // Service type icons mapping
  const serviceIcons = {
    study: <FaGraduationCap />,
    "work-permit": <FaBriefcase />,
    "permanent-residency": <FaPassport />,
    "family-immigration": <FaUsers />,
    "business-immigration": <FaBuilding />,
    tourist: <FaGlobe />,
    "air-ticket-service": <FaPlane />,
    "show-money-assistance": <FaCreditCard />,
  }

  // Service type display names
  const serviceNames = {
    study: "Study Visa",
    "work-permit": "Work Permit",
    "permanent-residency": "Permanent Residency",
    "family-immigration": "Family Immigration",
    "business-immigration": "Business Immigration",
    tourist: "Tourist Visa",
    "air-ticket-service": "Air Ticket Service",
    "show-money-assistance": "Show Money Assistance",
  }

  const serviceDetails = {
    study: {
      title: "Study Visa",
      subtitle: "Your Gateway to International Education",
      description:
        "Our comprehensive study visa services help students achieve their dreams of studying abroad with personalized guidance throughout the entire application process.",
      longDescription:
        "Studying abroad is a life-changing experience that opens doors to global opportunities and personal growth. Our expert consultants provide end-to-end assistance to ensure your international education journey is smooth and successful. From university selection to visa approval, we handle every aspect of your application with precision and care.\n\nWith over 15 years of experience in international education consulting, we have developed strong relationships with universities worldwide and stay updated with the latest immigration policies. Our team of education experts includes former visa officers, university admissions professionals, and international education specialists who understand the nuances of different education systems and visa requirements.\n\nWe take a personalized approach to each student's application, considering their academic background, career goals, financial situation, and personal preferences. This tailored strategy has resulted in our exceptional success rate of over 95% for study visa approvals across major destinations including Canada, Australia, the UK, the US, and New Zealand.",
      image: "/placeholder.svg?key=b1omv",
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
        "Course and university transfer assistance if your academic preferences change after arrival",
        "Part-time job search guidance to help support your education financially while studying abroad",
        "Regular follow-up and support throughout your academic journey to ensure your success",
        "Alumni network access connecting you with our past students in your destination country",
      ],
      process: [
        {
          title: "Initial Consultation and Profile Assessment",
          description:
            "We begin with a comprehensive evaluation of your academic background, including grades, standardized test scores, and extracurricular achievements. Our education experts assess your career goals, budget constraints, and personal preferences to understand your requirements and provide personalized guidance. This initial assessment helps us identify the most suitable countries, universities, and programs that align with your profile and aspirations. We also evaluate your financial situation to recommend appropriate funding options and scholarship opportunities.",
        },
        {
          title: "University and Program Selection",
          description:
            "Based on your profile assessment, we help you shortlist universities that align with your academic goals, budget, and location preferences. Our counselors have extensive knowledge of global university rankings, program strengths, admission requirements, and campus cultures. We provide detailed information about each recommended institution, including faculty expertise, research opportunities, internship programs, and career placement records. We also consider factors such as cost of living, climate, cultural environment, and post-graduation work opportunities in different locations to ensure a holistic match for your needs.",
        },
        {
          title: "Application Preparation and Documentation",
          description:
            "Our experts assist with preparing compelling applications, including crafting a persuasive statement of purpose that highlights your strengths and aligns with program requirements. We guide you in obtaining strong letters of recommendation from appropriate academic or professional references, and help optimize your resume to showcase relevant achievements. Our team also assists with preparing academic transcripts, standardized test score reports, financial documents, and other supporting materials required by your target universities. We ensure all documents meet the specific formatting and content requirements of each institution.",
        },
        {
          title: "Application Submission and Follow-up",
          description:
            "We handle the submission process and follow up with universities to ensure timely processing of your application. Our team maintains regular communication with admissions offices to track your application status and address any additional requirements or queries promptly. We help you respond effectively to any supplementary questions or interview requests from the universities. Throughout this phase, we keep you informed about the progress of your applications and provide guidance on next steps. Our established relationships with many universities often help expedite the processing of applications submitted through our agency.",
        },
        {
          title: "Offer Evaluation and Acceptance",
          description:
            "Once you receive offers, we help you evaluate them based on program quality, university reputation, financial considerations, location advantages, and career prospects. We provide a comparative analysis of all offers received, highlighting the strengths and potential challenges of each option. Our counselors discuss the long-term implications of each choice on your career path and help you make an informed decision. After you select your preferred offer, we guide you through the acceptance process, including securing your place with the required deposit and completing any additional documentation.",
        },
        {
          title: "Visa Documentation and Preparation",
          description:
            "We prepare a comprehensive visa file with all required documents to maximize your chances of approval. This includes financial documentation, proof of enrollment, accommodation arrangements, travel insurance, and other country-specific requirements. Our visa experts review your entire application to identify and address potential red flags before submission. We also prepare you for the visa interview process with country-specific guidance on common questions, appropriate responses, and professional presentation. Our team stays updated with the latest immigration policies and procedural changes to ensure your application meets current requirements.",
        },
        {
          title: "Visa Application Submission and Interview",
          description:
            "Our team guides you through the visa application process, including form completion, fee payment, and appointment scheduling. We conduct multiple mock interview sessions to build your confidence and refine your responses to potential questions. Our interview preparation includes guidance on appropriate attire, body language, and communication strategies. We also provide support for biometric appointments and other procedural requirements. Throughout this critical phase, our visa experts remain available to address any concerns or questions you may have about the process.",
        },
        {
          title: "Pre-Departure Guidance and Orientation",
          description:
            "We provide comprehensive orientation sessions to prepare you for life abroad, including detailed information about your destination country's culture, climate, transportation systems, healthcare facilities, and local customs. Our pre-departure guidance covers practical matters such as currency exchange, mobile phone options, packing essentials, and travel arrangements. We also connect you with other students traveling to the same destination and with our alumni network in your chosen country. Additionally, we provide guidance on accommodation options, banking services, and essential local registrations required upon arrival.",
        },
        {
          title: "Post-Arrival Support and Settlement",
          description:
            "Our support continues after you arrive at your destination. We assist with initial settlement challenges such as temporary accommodation, local transportation, phone setup, and bank account opening. Our local partners provide orientation to the university campus and surrounding areas. We offer guidance on course registration, student services, and academic support resources available at your institution. Our team also provides information about student organizations, cultural activities, and networking opportunities to help you integrate into your new academic and social environment. Throughout your study program, we remain available for consultation on visa extensions, program changes, or any other issues that may arise.",
        },
      ],
      eligibility: [
        "Completed higher secondary education (12th grade) or equivalent with competitive academic performance (typically 65% or higher, though requirements vary by country and institution)",
        "Proof of English language proficiency through standardized tests such as IELTS (typically 6.0-7.0), TOEFL (typically 80-100), PTE (typically 58-65), or Duolingo English Test (typically 105-120), with specific requirements varying by destination and institution",
        "Sufficient financial resources to cover tuition and living expenses, typically demonstrated through bank statements, education loans, scholarships, or sponsorship letters",
        "Clean background with no criminal record or immigration violations, verified through police clearance certificates from countries of residence",
        "Genuine intention to study and return to home country after completion, demonstrated through ties to home country and clear career progression plans",
        "Admission offer from a recognized educational institution approved for international students by the destination country's immigration authorities",
        "Academic transcripts showing consistent performance and progression throughout your educational history",
        "Standardized test scores relevant to your field of study (such as GRE, GMAT, SAT, or subject-specific tests) for certain programs and levels of study",
        "Relevant work experience for graduate programs, particularly for MBA and other professional master's degrees",
        "Portfolio of work for creative programs such as architecture, design, fine arts, or film production",
        "Research proposal for research-based graduate programs, particularly at the doctoral level",
        "Letters of recommendation from academic or professional references attesting to your abilities and potential",
      ],
      documents: [
        "Valid passport with at least 6 months validity beyond your intended period of stay, with blank visa pages",
        "Completed visa application form with accurate personal and program information",
        "Acceptance letter from the educational institution clearly stating program details, duration, and tuition fees",
        "Academic transcripts and certificates from all previous educational institutions, properly authenticated and translated if not in English",
        "English language proficiency test results (IELTS, TOEFL, PTE, etc.) meeting the minimum requirements of your chosen institution",
        "Financial documents showing sufficient funds for tuition and living expenses, including bank statements, education loans, or sponsorship letters",
        "Statement of Purpose (SOP) explaining your academic background, reasons for choosing the program and institution, and future career plans",
        "Medical examination reports from approved physicians confirming you meet the health requirements of the destination country",
        "Passport-sized photographs meeting the specific dimension and background requirements of the destination country",
        "Proof of accommodation arrangements, such as university housing confirmation, rental agreements, or host family information",
        "Travel insurance covering medical emergencies, hospitalization, and repatriation for the duration of your stay",
        "Proof of tuition fee payment or deposit as required by your institution",
        "Curriculum Vitae (CV) or resume detailing your academic achievements, work experience, and extracurricular activities",
        "Letters of recommendation from professors, employers, or other relevant individuals attesting to your abilities and character",
        "Proof of scholarships or financial aid if you have received any",
        "Previous visa refusal letters and explanations if you have been refused a visa in the past",
      ],
      countries: [
        {
          name: "Canada",
          description:
            "Known for high-quality education, post-study work opportunities, and pathway to permanent residency. Canada's Student Direct Stream (SDS) offers expedited processing for qualified applicants from certain countries. Canadian institutions are globally recognized for research excellence, particularly in fields like artificial intelligence, environmental science, and healthcare. The country's multicultural environment makes it welcoming for international students, with vibrant campus communities and strong support services. After graduation, the Post-Graduation Work Permit Program (PGWPP) allows students to gain valuable Canadian work experience for up to 3 years, which can significantly enhance permanent residency applications through the Express Entry system or Provincial Nominee Programs.",
          processingTime: "8-12 weeks (2-4 weeks through SDS for eligible countries)",
          successRate: "85%",
          costOfLiving: "CAD 10,000-15,000 per year (varies by city)",
          tuitionRange: "CAD 15,000-35,000 per year for undergraduate programs",
          workRights: "Up to 20 hours per week during academic sessions, full-time during scheduled breaks",
          postStudyWork: "Post-Graduation Work Permit for up to 3 years, depending on program length",
          scholarships:
            "Entrance scholarships, merit-based awards, research grants, and country-specific scholarships available",
          popularPrograms: "Business, Engineering, Computer Science, Healthcare, Environmental Studies",
          topInstitutions:
            "University of Toronto, McGill University, University of British Columbia, University of Waterloo",
        },
        {
          name: "Australia",
          description:
            "Offers world-class education, diverse culture, and excellent quality of life for international students. Australia's education system is known for its practical approach, with strong industry connections and emphasis on research and innovation. The country's unique natural environment provides exceptional opportunities for field studies in areas like marine biology, environmental science, and agriculture. Australian universities have strong support services for international students, including orientation programs, academic assistance, and mental health resources. The Temporary Graduate visa (subclass 485) allows graduates to remain in Australia to work after completing their studies, with duration depending on the level of qualification obtained.",
          processingTime: "4-6 weeks",
          successRate: "82%",
          costOfLiving: "AUD 21,000-25,000 per year (varies by city)",
          tuitionRange: "AUD 20,000-45,000 per year for undergraduate programs",
          workRights: "Up to 40 hours per fortnight during academic sessions, unlimited during scheduled breaks",
          postStudyWork: "Temporary Graduate visa (subclass 485) for 2-4 years, depending on qualification level",
          scholarships: "Australia Awards, Destination Australia, university-specific scholarships, and research grants",
          popularPrograms: "Business, Engineering, Information Technology, Healthcare, Hospitality and Tourism",
          topInstitutions:
            "University of Melbourne, Australian National University, University of Sydney, University of Queensland",
        },
        {
          name: "United Kingdom",
          description:
            "Home to prestigious universities with centuries of academic excellence and vibrant student life. The UK's education system is renowned for its rigorous academic standards and research contributions across disciplines. British universities offer specialized programs with focused curriculum, allowing students to delve deeply into their chosen field from the beginning of their undergraduate studies. The UK's compact geography makes it easy to explore diverse cities, historical sites, and cultural attractions during your study period. The Graduate Route visa allows international students to stay in the UK for 2 years after graduation (3 years for PhD graduates) to work or look for work at any skill level, providing valuable international experience.",
          processingTime: "3-5 weeks",
          successRate: "80%",
          costOfLiving: "£12,000-15,000 per year (£15,000-20,000 in London)",
          tuitionRange: "£10,000-26,000 per year for undergraduate programs (higher for medicine and MBA)",
          workRights: "Up to 20 hours per week during term time, full-time during holidays",
          postStudyWork: "Graduate Route visa allowing 2 years of post-study work (3 years for PhD graduates)",
          scholarships:
            "Chevening Scholarships, Commonwealth Scholarships, GREAT Scholarships, and university-specific awards",
          popularPrograms: "Business, Law, Engineering, Arts and Humanities, Social Sciences",
          topInstitutions:
            "University of Oxford, University of Cambridge, Imperial College London, London School of Economics",
        },
        {
          name: "United States",
          description:
            "Provides cutting-edge research facilities and diverse academic programs across thousands of institutions. The US higher education system is known for its flexibility, allowing students to explore different subjects before declaring a major. American universities emphasize critical thinking, class participation, and practical application of knowledge. Campus life in the US is vibrant, with numerous extracurricular activities, sports programs, and student organizations that enhance the overall educational experience. The Optional Practical Training (OPT) program allows international students to gain up to 12 months of practical work experience related to their field of study, with an additional 24 months for STEM graduates.",
          processingTime: "2-3 months",
          successRate: "75%",
          costOfLiving: "USD 10,000-18,000 per year (varies significantly by location)",
          tuitionRange: "USD 20,000-50,000 per year for undergraduate programs",
          workRights: "Up to 20 hours per week on-campus during academic sessions, full-time during scheduled breaks",
          postStudyWork: "Optional Practical Training (OPT) for 12 months, with 24-month extension for STEM graduates",
          scholarships:
            "Fulbright Program, university-specific scholarships, athletic scholarships, and private foundation awards",
          popularPrograms: "Computer Science, Business, Engineering, Life Sciences, Social Sciences",
          topInstitutions: "Harvard University, Stanford University, MIT, California Institute of Technology",
        },
        {
          name: "New Zealand",
          description:
            "Offers quality education in a safe, welcoming environment with stunning natural landscapes. New Zealand's education system is based on the British model but has evolved to incorporate innovative teaching methods and practical skills development. The country is particularly strong in agricultural sciences, environmental studies, and film production. New Zealand's smaller class sizes allow for more personalized attention and interaction with professors. The post-study work visa allows graduates to work for any employer in any location in New Zealand, gaining valuable international experience while enjoying the country's exceptional quality of life and work-life balance.",
          processingTime: "4-8 weeks",
          successRate: "88%",
          costOfLiving: "NZD 15,000-20,000 per year",
          tuitionRange: "NZD 22,000-32,000 per year for undergraduate programs",
          workRights: "Up to 20 hours per week during academic sessions, full-time during scheduled breaks",
          postStudyWork: "Post-study work visa for 1-3 years, depending on level of study and location",
          scholarships: "New Zealand Excellence Awards, university-specific scholarships, and research grants",
          popularPrograms: "Agriculture, Environmental Science, Tourism Management, Film Production, Marine Biology",
          topInstitutions:
            "University of Auckland, University of Otago, Victoria University of Wellington, University of Canterbury",
        },
        {
          name: "Germany",
          description:
            "Offers excellent tuition-free or low-tuition education with strong emphasis on research and innovation. German universities are known for their strong focus on research and practical training, particularly in engineering, sciences, and technology. Many programs are now offered in English, especially at the graduate level, making Germany increasingly accessible to international students. The country's strong economy provides excellent internship and employment opportunities, particularly in automotive, manufacturing, and technology sectors. After graduation, international students can apply for an 18-month residence permit to seek employment, with pathways to permanent residency for those who secure relevant employment.",
          processingTime: "6-12 weeks",
          successRate: "78%",
          costOfLiving: "€10,000-12,000 per year",
          tuitionRange: "Most public universities are tuition-free (administrative fees of €100-350 per semester)",
          workRights: "120 full days or 240 half days per year",
          postStudyWork: "18-month residence permit to seek employment after graduation",
          scholarships: "DAAD Scholarships, Erasmus+, Deutschland Stipendium, and state-funded research grants",
          popularPrograms: "Engineering, Computer Science, Medicine, Natural Sciences, Business",
          topInstitutions:
            "Technical University of Munich, Ludwig Maximilian University of Munich, Heidelberg University",
        },
      ],
      testimonials: [
        {
          name: "Priya Sharma",
          country: "Canada",
          university: "University of Toronto",
          program: "Master of Computer Science",
          rating: 5,
          text: "The team guided me through every step of my study visa process for Canada. Their expertise made the complex application process seem effortless. I was particularly impressed with their SOP guidance, which helped me articulate my academic and career goals effectively. The mock visa interviews were incredibly helpful in building my confidence. When I received additional document requests from the visa office, the team responded promptly and professionally, ensuring all requirements were met. I'm now pursuing my dream course at the University of Toronto, and I couldn't have done it without their comprehensive support and guidance. Their post-arrival assistance also helped me settle in quickly and connect with other students.",
          challenges: "Previous visa rejection, limited financial documentation",
        },
        {
          name: "Rahul Patel",
          country: "Australia",
          university: "University of Melbourne",
          program: "Bachelor of Engineering (Mechanical)",
          rating: 5,
          text: "I had applied through another consultant before and got rejected. The team analyzed my profile thoroughly and identified the gaps in my previous application. They suggested specific improvements to my academic profile, including additional certification courses that strengthened my application. Their guidance on financial documentation was particularly valuable, as this had been a weak point in my previous application. The counselors maintained regular communication with the university admissions team, which expedited my acceptance. Their strategic approach helped me secure admission to the University of Melbourne with a partial scholarship! The pre-departure orientation was comprehensive, covering everything from accommodation options to banking setup. I'm now excelling in my program and have even secured an internship with a leading engineering firm in Melbourne.",
          challenges: "Previous visa rejection, competitive program with limited seats",
        },
        {
          name: "Ananya Singh",
          country: "United Kingdom",
          university: "Imperial College London",
          program: "MSc in Environmental Engineering",
          rating: 4,
          text: "The counselors were extremely knowledgeable about UK universities and visa requirements. They helped me craft a compelling SOP that highlighted my strengths and aligned perfectly with my chosen program's objectives. When I was waitlisted initially, they advised me on additional documents and a letter of continued interest that ultimately secured my admission. Their guidance on the UK visa process was detailed and accurate, preparing me for every step of the application. The financial planning assistance helped me identify and apply for scholarships I wasn't aware of, resulting in a £5,000 grant. Grateful for their support throughout my journey! The only reason I'm giving 4 stars instead of 5 is that there were occasional delays in communication during peak admission season, but the quality of service was exceptional overall.",
          challenges: "Initial waitlist, competitive scholarship application",
        },
        {
          name: "Vikram Malhotra",
          country: "United States",
          university: "Stanford University",
          program: "MBA",
          rating: 5,
          text: "Applying to top US business schools seemed daunting until I consulted with this team. Their MBA admissions specialists provided invaluable insights into what each program values in candidates. They helped me develop a compelling narrative across my applications, connecting my professional experience with my future goals in a coherent way. The interview preparation was rigorous and realistic, covering both standard and unexpected questions. When I received multiple offers, they provided a detailed comparison of programs, considering factors beyond rankings such as specializations, alumni networks, and career placement statistics. Their visa guidance was flawless, preparing me thoroughly for the visa interview with program-specific talking points. I'm now at Stanford MBA program, building the skills and network to achieve my entrepreneurial goals. Their service was truly end-to-end, from university selection to airport pickup arrangements.",
          challenges: "Highly competitive program, needed strong differentiation from other applicants",
        },
        {
          name: "Neha Gupta",
          country: "Germany",
          university: "Technical University of Munich",
          program: "MS in Automotive Engineering",
          rating: 5,
          text: "I was initially hesitant about studying in Germany due to language concerns, but the team provided comprehensive information about English-taught programs and German language learning resources. They guided me through the unique German university application system, which differs significantly from other countries. Their assistance with the APS certification process (required for Indian students) was invaluable. The team also helped me navigate the German blocked account requirement for visa purposes, ensuring my financial documentation was flawless. Their guidance extended to finding affordable accommodation in Munich, which is notoriously difficult. I'm now thriving at TU Munich, one of Europe's top engineering universities, with a clear pathway to working in Germany's automotive industry after graduation. The team's expertise in German education and immigration systems made this possible.",
          challenges: "Language barriers, complex documentation requirements specific to Germany",
        },
      ],
      faqs: [
        {
          question: "How long does the study visa process take?",
          answer:
            "The study visa processing time varies by country, ranging from 2 weeks to 3 months. Canada typically takes 8-12 weeks for regular processing, but only 2-4 weeks through the Student Direct Stream (SDS) for eligible countries. Australia generally processes student visas in 4-6 weeks, while the UK takes 3-5 weeks with priority services available for an additional fee. US student visa processing can take 2-3 months, including interview wait times which vary significantly by location. New Zealand typically processes student visas in 4-8 weeks, while Germany takes 6-12 weeks on average. We recommend starting the process at least 6 months before your intended start date to ensure smooth processing and allow time for any additional document requests or administrative reviews. During peak seasons (May-July and November-January), processing times may be longer, so early application is particularly important for these periods.",
        },
        {
          question: "What are the language requirements for studying abroad?",
          answer:
            "Most universities require English proficiency tests like IELTS, TOEFL, PTE, or Duolingo English Test. For undergraduate programs, typical minimum requirements are: IELTS (6.0-6.5), TOEFL (80-90), PTE (58-65), or Duolingo (105-115). For graduate programs, requirements are usually higher: IELTS (6.5-7.0), TOEFL (90-100), PTE (65-70), or Duolingo (115-125). Competitive programs at prestigious universities may require even higher scores. Some countries like France, Germany, or Spain may require proficiency in their native language for certain programs, though many now offer English-taught programs, especially at the graduate level. Some institutions offer conditional admission with English language pathway programs for students who don't meet the minimum requirements. Certain countries may waive the English proficiency requirement if you've completed previous education in English (typically requiring 2-3 years of full-time study in English). We provide detailed guidance on language requirements specific to your target institutions and programs, as well as preparation resources and strategies to achieve your required scores.",
        },
        {
          question: "How much bank balance is required for a study visa?",
          answer:
            "The required funds vary by country and depend on tuition fees, program duration, and location. For Canada, you need to show tuition fees plus CAD 10,000 for living expenses for the first year (additional CAD 4,000 for a spouse and CAD 3,000 per dependent child). For the UK, you need tuition fees plus £1,334 per month for living in London (£1,023 per month outside London) for up to 9 months. Australia requires evidence of AUD 21,041 per year for living expenses plus tuition fees. The US has no fixed amount but requires proof of sufficient funds to cover all expenses without working. Germany requires approximately €10,332 per year in a blocked account. New Zealand requires NZD 17,000 per year for living expenses plus tuition fees. These funds typically need to be held in your or your sponsor's account for a certain period (usually 3-6 months) to show stability. We provide detailed guidance on financial documentation based on your destination country, including strategies for demonstrating funds through various sources such as education loans, scholarships, sponsorships, and personal savings. We also advise on the format and presentation of financial documents to maximize visa approval chances.",
        },
        {
          question: "Can I work while studying abroad?",
          answer:
            "Most countries allow international students to work part-time during academic sessions and full-time during breaks, but regulations vary. In Canada, you can work up to 20 hours per week during academic sessions and full-time during scheduled breaks with your study permit. Australia allows up to 40 hours per fortnight (two weeks) during term and unlimited hours during scheduled breaks. The UK permits up to 20 hours per week during term time and full-time during holidays for university students (10 hours for language school students). In the US, F-1 visa holders can work up to 20 hours per week on-campus only during the academic year, and full-time on-campus during breaks. New Zealand allows up to 20 hours per week during term and full-time during scheduled breaks. Germany permits 120 full days or 240 half days per year. Work rights are automatically included with student visas in most countries, though some may require additional work authorization. On-campus jobs are often easier to obtain and may have fewer restrictions. We provide country-specific guidance on work regulations, typical student jobs, average wages, tax obligations, and strategies for finding employment that complements your studies without affecting your academic performance.",
        },
        {
          question: "What happens if my visa gets rejected?",
          answer:
            "In case of rejection, we analyze the reasons provided in the refusal letter and help you address them for a reapplication. Common reasons for rejection include insufficient financial documentation, unclear study plans, limited ties to your home country, incomplete application, or concerns about genuine student status. Our expertise in handling rejection cases has resulted in successful approvals in subsequent attempts for many students. We may recommend several strategies depending on the specific reason for rejection: strengthening your financial documentation, revising your statement of purpose to better articulate your study plans and career goals, providing additional evidence of ties to your home country, addressing any discrepancies or gaps in your application, or considering alternative destinations with similar educational opportunities but different visa requirements. In some cases, we may recommend appealing the decision if there are grounds to believe the visa officer made an error in assessing your application. The reapplication process typically involves submitting a new application with strengthened documentation addressing the specific concerns raised in the refusal letter. Our success rate for visa approvals after initial rejection is approximately 70%, demonstrating our effectiveness in overcoming visa challenges.",
        },
        {
          question: "How do I choose the right university and program?",
          answer:
            "Choosing the right university and program involves considering multiple factors including academic reputation, program curriculum, faculty expertise, research opportunities, location, cost, scholarship availability, and career outcomes. Our counselors conduct a thorough assessment of your academic background, career goals, personal preferences, and budget to recommend institutions that best match your profile. We provide detailed information about university rankings in your field of interest, program-specific accreditations, faculty research areas, internship opportunities, and graduate employment statistics. We also consider practical factors such as campus facilities, student support services, accommodation options, and local environment. For graduate programs, we evaluate research alignment with faculty members and funding opportunities. We help you balance aspirational choices with realistic options, typically recommending a mix of ambitious, moderate, and safe options to maximize your chances of admission. Our university selection process is data-driven, considering admission statistics and your competitive position relative to typical admitted students. We also leverage insights from our alumni network to provide first-hand perspectives on specific programs and institutions.",
        },
        {
          question: "What scholarships are available for international students?",
          answer:
            "Various scholarships are available for international students, including university-specific scholarships, government-funded scholarships, private foundation awards, and country-specific opportunities. Merit-based scholarships reward academic excellence, standardized test scores, or specific talents. Need-based scholarships consider financial circumstances. Research assistantships and teaching assistantships are common for graduate students, particularly in STEM fields, often providing tuition waivers and stipends. Country-specific scholarships include Chevening (UK), Fulbright (US), DAAD (Germany), Endeavour (Australia), and Vanier (Canada). Many universities offer international student scholarships specifically for students from certain countries or regions. External organizations like the Aga Khan Foundation, Rotary International, and various corporate foundations also offer scholarships. Our scholarship assistance includes identifying opportunities matching your profile, guidance on application requirements and deadlines, essay review and optimization, and interview preparation for scholarship finalists. We recommend applying early as many scholarships have limited funds allocated on a first-come, first-served basis. Our students have secured over $5 million in scholarships collectively over the past five years through our guidance.",
        },
        {
          question: "What are the post-graduation work opportunities in different countries?",
          answer:
            "Post-graduation work opportunities vary significantly by country. Canada offers the Post-Graduation Work Permit (PGWP) for up to 3 years, depending on program length, with clear pathways to permanent residency through Express Entry or Provincial Nominee Programs. Australia provides the Temporary Graduate visa (subclass 485) for 2-4 years based on qualification level, with potential pathways to permanent residency through skilled migration programs. The UK's Graduate Route allows graduates to stay and work for 2 years (3 years for PhD graduates) without sponsorship requirements. The US offers Optional Practical Training (OPT) for 12 months, with a 24-month extension for STEM graduates, though transitioning to longer-term work visas like H-1B can be competitive. New Zealand's post-study work visa allows 1-3 years of open work rights depending on study level and location. Germany permits graduates to stay for 18 months to seek employment, with good prospects in engineering, IT, and healthcare sectors. These opportunities allow international graduates to gain valuable work experience, build professional networks, and potentially transition to permanent residency. We provide detailed guidance on application procedures, eligibility requirements, and strategies for maximizing post-graduation employment prospects in your chosen destination.",
        },
        {
          question: "How do I prepare for a student visa interview?",
          answer:
            "Visa interview preparation is crucial for success, particularly for countries like the US where interviews are standard practice. Our comprehensive interview preparation includes multiple mock sessions conducted by former visa officers or experienced counselors familiar with country-specific interview patterns. We help you prepare concise, confident answers about your study plans, university choice, program details, career goals, financial arrangements, and ties to your home country. We advise on appropriate professional attire and body language that conveys confidence and sincerity. Common questions cover your academic background, reasons for choosing the specific university and program, how your course relates to your previous studies or work experience, your career plans after graduation, how you'll finance your education, and your intentions to return home after completing your studies. We provide guidance on supporting documents to bring to the interview, including acceptance letters, financial documentation, academic records, and test scores. Our preparation emphasizes the importance of honesty, clarity, and brevity in your responses. We also address strategies for handling difficult or unexpected questions and managing interview anxiety. Our visa interview success rate exceeds 90% for well-prepared students.",
        },
        {
          question: "What are the accommodation options for international students?",
          answer:
            "International students have several accommodation options, each with advantages and considerations. University-managed dormitories or residence halls offer convenience, integration with campus life, and included utilities, though they may be more expensive and have limited availability. Private purpose-built student accommodation provides modern facilities, security, and social opportunities, typically located near universities. Shared apartments or houses with other students offer more independence and often lower costs, but require managing utilities and household responsibilities. Homestays with local families provide cultural immersion and sometimes include meals, ideal for younger students or those seeking language practice. Some universities offer guaranteed accommodation for first-year international students, while others operate on a first-come, first-served basis. We provide guidance on application procedures and deadlines for university housing, resources for finding private accommodation, typical costs in different cities, standard lease terms and tenant rights, and considerations for choosing accommodation that balances location, cost, and amenities. We also connect students with our alumni network for first-hand advice on specific housing options and neighborhoods. Early application is recommended, especially for popular student cities where affordable housing can be competitive.",
        },
        {
          question: "How can I manage my finances while studying abroad?",
          answer:
            "Financial management is crucial for international students. We recommend creating a detailed budget before departure, accounting for tuition, accommodation, food, transportation, books, insurance, personal expenses, and emergency funds. Opening a local bank account soon after arrival facilitates managing funds and reduces international transaction fees. Many countries offer student banking packages with reduced fees and special benefits. For transferring money internationally, services like Wise (formerly TransferWise), OFX, or XE often provide better exchange rates than traditional banks. Part-time work can supplement your budget within the allowed work hours for your student visa. Scholarships, bursaries, and campus employment opportunities should be actively researched and pursued. We advise maintaining an emergency fund covering at least three months of essential expenses. For daily savings, student discounts are widely available for transportation, entertainment, software, and services—always carry your student ID. Tax obligations vary by country; some offer special provisions for international students, while others require filing returns even for part-time work. We provide country-specific guidance on cost of living, banking systems, tax requirements, and financial support services available at different institutions. Our pre-departure orientation includes detailed financial planning workshops to help you prepare for the financial aspects of international education.",
        },
        {
          question: "What healthcare arrangements do I need to make as an international student?",
          answer:
            "Healthcare arrangements are essential for international students and vary by destination country. Most countries require health insurance as part of visa requirements. In Australia, the Overseas Student Health Cover (OSHC) is mandatory for all international students. Canada requires provincial health insurance in some provinces, while others need private coverage. The UK charges an Immigration Health Surcharge during the visa application process, providing access to National Health Service. The US requires comprehensive health insurance, typically offered through universities but available from private providers. Germany requires proof of health insurance for residence permit issuance, with options for public or private insurance depending on age and circumstances. New Zealand requires appropriate medical insurance for the duration of study. We provide guidance on insurance requirements, coverage options, typical costs, and application procedures specific to your destination country. Many universities offer their own health insurance plans designed for international students, often with convenient on-campus health services. We advise on coverage considerations including outpatient care, hospitalization, prescription medications, emergency evacuation, dental and vision care, and mental health services. We also provide information about accessing healthcare services in your destination country, including university health centers, local medical facilities, emergency services, and telehealth options.",
        },
      ],
      stats: {
        successRate: "95%",
        studentsPlaced: "15,000+",
        universityPartners: "750+",
        countriesCovered: "20+",
        scholarshipsSecured: "$5M+",
      },
      caseStudies: [
        {
          title: "From Visa Rejection to Full Scholarship",
          student: "Arjun Mehta",
          destination: "Canada",
          challenge:
            "Arjun had received a visa rejection for Canada due to insufficient financial documentation and unclear study plans. His academic profile was strong with a 3.8 GPA in Computer Engineering, but his visa application failed to effectively communicate his genuine intent and financial stability.",
          solution:
            "Our team conducted a comprehensive analysis of his rejection reasons and developed a strategic plan. We restructured his financial documentation to show stable fund history, obtained additional sponsorship from a close relative with clear documentation of relationship and financial capacity, rewrote his study plan to clearly connect his academic background with his chosen program and future career goals in artificial intelligence, and prepared him extensively for the visa interview with emphasis on addressing the previous concerns.",
          result:
            "Arjun not only received visa approval on his second attempt but also secured a $20,000 merit scholarship from the University of Waterloo for his Master's in Computer Science with specialization in AI. He is now completing his final semester with a job offer from a leading Canadian tech company and plans to apply for permanent residency through the Express Entry program.",
        },
        {
          title: "Career Transition Through International Education",
          student: "Priyanka Sharma",
          destination: "Australia",
          challenge:
            "Priyanka had 5 years of experience in traditional marketing but wanted to transition to digital marketing. She faced challenges in demonstrating the relevance of her chosen program to her career progression and had limited savings for international education.",
          solution:
            "We guided Priyanka to select a specialized Master of Digital Marketing program at RMIT University that built upon her existing marketing experience while providing the digital skills she needed. We helped her secure an education loan covering 70% of her expenses and identified a scholarship opportunity specifically for career-changers. Her statement of purpose was crafted to highlight how the Australian program would bridge her skills gap and accelerate her career transition, with specific reference to Australia's advanced digital marketing sector.",
          result:
            "Priyanka successfully completed her program with distinction and secured an internship with a leading Australian digital agency during her studies. This led to sponsorship for a Temporary Skill Shortage visa after graduation. She has now been promoted to Digital Marketing Manager and is on track for permanent residency through the Employer Nomination Scheme.",
        },
        {
          title: "Navigating Complex Documentation Requirements",
          student: "Rahul and Neha Patel (Family)",
          destination: "United Kingdom",
          challenge:
            "Rahul was pursuing a PhD in Renewable Energy with his wife Neha and 5-year-old daughter accompanying him. The family faced complex documentation challenges including proving relationship history, arranging appropriate accommodation for a family, and demonstrating sufficient funds for supporting three people.",
          solution:
            "We provided comprehensive guidance on dependent visa requirements, helping them prepare a detailed relationship history with supporting evidence spanning their 7-year marriage. We assisted with securing family accommodation near the university and childcare arrangements for their daughter. For financial documentation, we helped structure their funds across personal savings, a research stipend, and a family sponsor, ensuring all sources were properly documented with clear fund trails.",
          result:
            "The entire family received visa approval within 4 weeks. Rahul's research has been recognized with additional funding from the university, and Neha has found part-time employment using her dependent visa work rights. Their daughter has adapted well to the British education system, and the family is considering settlement options after completion of the PhD program.",
        },
      ],
      commonChallenges: [
        {
          challenge: "Insufficient Financial Documentation",
          solution:
            "We provide detailed guidance on financial requirements specific to each country and institution, helping students prepare comprehensive documentation that demonstrates not just the required amount but also the stability and legitimacy of funds. We advise on the optimal timing for fund arrangements, proper formatting of bank statements, and supplementary documentation such as income sources, tax returns, and sponsor verification that strengthen the financial portion of visa applications.",
        },
        {
          challenge: "Visa Interview Anxiety",
          solution:
            "Our interview preparation program includes multiple mock sessions that simulate actual visa interviews, with feedback on content, delivery, and body language. We provide country-specific interview guides covering common questions and appropriate responses, techniques for managing anxiety, and strategies for addressing difficult questions. Our preparation emphasizes authenticity while effectively communicating study plans and post-graduation intentions.",
        },
        {
          challenge: "Previous Visa Rejections",
          solution:
            "We conduct thorough analysis of previous rejection reasons and develop targeted strategies to address each concern. This may include strengthening financial documentation, clarifying study plans, demonstrating stronger ties to home country, or considering alternative study destinations. Our experience with thousands of visa cases, including many successful reapplications after initial rejection, informs our approach to overcoming previous visa challenges.",
        },
        {
          challenge: "Gap in Education or Unexplained Career Breaks",
          solution:
            "We help students develop compelling narratives that explain gaps in education or career breaks in a positive light, focusing on constructive activities, skill development, or personal circumstances that necessitated the break. We assist in documenting these explanations with supporting evidence such as certificates from short courses, volunteer work, family responsibilities, or health situations that provide context for the gaps.",
        },
        {
          challenge: "Demonstrating English Language Proficiency",
          solution:
            "For students struggling with language requirements, we provide access to specialized English preparation resources, recommend appropriate test options based on individual strengths (IELTS, TOEFL, PTE, or Duolingo), and identify institutions offering conditional admission with English pathway programs. We also guide students on documenting previous English-medium education that may qualify for language requirement waivers.",
        },
      ],
      legalRequirements: {
        visaCompliance:
          "International students must maintain full-time enrollment, report address changes, and adhere to work hour restrictions to maintain legal status. Violation of visa conditions can result in status termination and future immigration difficulties.",
        healthInsurance:
          "Most countries mandate health insurance coverage for the duration of study. This is often linked to visa issuance and renewal, with specific minimum coverage requirements varying by destination.",
        taxObligations:
          "International students may have tax filing requirements even with limited income. Tax treaties between countries may provide exemptions or reduced rates for students, but awareness of obligations is essential.",
        registrationRequirements:
          "Many countries require international students to register with local authorities, immigration offices, or police within a specified period after arrival. Failure to complete these registrations can affect legal status.",
        workRestrictions:
          "Strict adherence to work hour limitations is critical for maintaining student status. Unauthorized employment can result in visa cancellation and deportation in most countries.",
      },
      applicationTimeline: {
        "12-18 months before":
          "Research universities and programs, take standardized tests (IELTS/TOEFL, GRE/GMAT if required), begin preparing financial resources",
        "10-12 months before":
          "Shortlist universities, prepare application materials, request recommendation letters, draft personal statements/essays",
        "8-10 months before":
          "Submit university applications (for fall intake), begin scholarship applications, prepare financial documentation",
        "6-8 months before": "Receive admission decisions, select final institution, pay deposits, apply for housing",
        "4-6 months before":
          "Begin visa application process, prepare financial documentation, schedule visa interview if required",
        "3-4 months before": "Receive visa decision, book flights, arrange accommodation, purchase insurance",
        "2-3 months before": "Attend pre-departure orientation, arrange currency exchange, prepare essential documents",
        "1-2 months before":
          "Finalize travel arrangements, pack appropriately, arrange airport pickup, notify bank of travel",
        "Upon arrival":
          "Attend university orientation, complete registration, open bank account, obtain local phone/transportation",
      },
    },
    "air-ticket-service": {
      title: "Air Ticket Service",
      subtitle: "Seamless Travel Planning and Booking",
      description:
        "Get the best deals on international flights with our specialized air ticket service tailored to your travel needs.",
      longDescription:
        "Our comprehensive air ticket service goes beyond simple bookings to provide end-to-end travel solutions. We leverage our airline partnerships and industry expertise to secure competitive fares, convenient routes, and special accommodations for all types of travelers, from students to business professionals.",
      image: "/placeholder.svg?key=7pz9f",
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
        {
          title: "Group Travel",
          description: "Specialized service for large groups traveling for events, tours, or corporate functions.",
          features: [
            "Bulk booking discounts",
            "Coordinated arrivals",
            "Charter options for large groups",
            "Group check-in assistance",
          ],
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
      faqs: [
        {
          question: "How far in advance should I book international flights?",
          answer:
            "For the best fares, we recommend booking 3-6 months in advance for international flights. However, for peak seasons (summer, major holidays), booking 6-8 months ahead is advisable. For student travel to popular destinations, early booking is essential as student fares have limited availability.",
        },
        {
          question: "What is the baggage allowance for international flights?",
          answer:
            "Baggage allowance varies by airline, route, and fare class. Economy class typically allows 23-30kg checked baggage, while business and first class allow 30-40kg or more. Student fares often include extra allowance. We provide detailed baggage information for your specific booking.",
        },
        {
          question: "Can you help with special requirements like wheelchair assistance or medical conditions?",
          answer:
            "Yes, we specialize in arranging special assistance for passengers with specific needs. This includes wheelchair service, oxygen requirements, medical equipment, special meals for dietary restrictions, and assistance for elderly passengers or unaccompanied minors.",
        },
        {
          question: "What happens if my flight is cancelled or delayed?",
          answer:
            "Our 24/7 support team assists with immediate rebooking options if your flight is cancelled or significantly delayed. We also help with accommodation arrangements if necessary and guide you through the process of claiming compensation where applicable.",
        },
        {
          question: "Do you offer travel insurance with flight bookings?",
          answer:
            "Yes, we offer comprehensive travel insurance options that cover flight cancellations, delays, medical emergencies, baggage loss, and other travel-related issues. We recommend appropriate coverage based on your destination and travel purpose.",
        },
      ],
      stats: {
        ticketsBooked: "25,000+",
        airlinesPartnered: "40+",
        averageSavings: "15-20%",
        customerSatisfaction: "98%",
      },
      caseStudies: [
        {
          title: "From Visa Rejection to Full Scholarship",
          student: "Arjun Mehta",
          destination: "Canada",
          challenge:
            "Arjun had received a visa rejection for Canada due to insufficient financial documentation and unclear study plans. His academic profile was strong with a 3.8 GPA in Computer Engineering, but his visa application failed to effectively communicate his genuine intent and financial stability.",
          solution:
            "Our team conducted a comprehensive analysis of his rejection reasons and developed a strategic plan. We restructured his financial documentation to show stable fund history, obtained additional sponsorship from a close relative with clear documentation of relationship and financial capacity, rewrote his study plan to clearly connect his academic background with his chosen program and future career goals in artificial intelligence, and prepared him extensively for the visa interview with emphasis on addressing the previous concerns.",
          result:
            "Arjun not only received visa approval on his second attempt but also secured a $20,000 merit scholarship from the University of Waterloo for his Master's in Computer Science with specialization in AI. He is now completing his final semester with a job offer from a leading Canadian tech company and plans to apply for permanent residency through the Express Entry program.",
        },
        {
          title: "Career Transition Through International Education",
          student: "Priyanka Sharma",
          destination: "Australia",
          challenge:
            "Priyanka had 5 years of experience in traditional marketing but wanted to transition to digital marketing. She faced challenges in demonstrating the relevance of her chosen program to her career progression and had limited savings for international education.",
          solution:
            "We guided Priyanka to select a specialized Master of Digital Marketing program at RMIT University that built upon her existing marketing experience while providing the digital skills she needed. We helped her secure an education loan covering 70% of her expenses and identified a scholarship opportunity specifically for career-changers. Her statement of purpose was crafted to highlight how the Australian program would bridge her skills gap and accelerate her career transition, with specific reference to Australia's advanced digital marketing sector.",
          result:
            "Priyanka successfully completed her program with distinction and secured an internship with a leading Australian digital agency during her studies. This led to sponsorship for a Temporary Skill Shortage visa after graduation. She has now been promoted to Digital Marketing Manager and is on track for permanent residency through the Employer Nomination Scheme.",
        },
        {
          title: "Navigating Complex Documentation Requirements",
          student: "Rahul and Neha Patel (Family)",
          destination: "United Kingdom",
          challenge:
            "Rahul was pursuing a PhD in Renewable Energy with his wife Neha and 5-year-old daughter accompanying him. The family faced complex documentation challenges including proving relationship history, arranging appropriate accommodation for a family, and demonstrating sufficient funds for supporting three people.",
          solution:
            "We provided comprehensive guidance on dependent visa requirements, helping them prepare a detailed relationship history with supporting evidence spanning their 7-year marriage. We assisted with securing family accommodation near the university and childcare arrangements for their daughter. For financial documentation, we helped structure their funds across personal savings, a research stipend, and a family sponsor, ensuring all sources were properly documented with clear fund trails.",
          result:
            "The entire family received visa approval within 4 weeks. Rahul's research has been recognized with additional funding from the university, and Neha has found part-time employment using her dependent visa work rights. Their daughter has adapted well to the British education system, and the family is considering settlement options after completion of the PhD program.",
        },
      ],
      commonChallenges: [
        {
          challenge: "Insufficient Financial Documentation",
          solution:
            "We provide detailed guidance on financial requirements specific to each country and institution, helping students prepare comprehensive documentation that demonstrates not just the required amount but also the stability and legitimacy of funds. We advise on the optimal timing for fund arrangements, proper formatting of bank statements, and supplementary documentation such as income sources, tax returns, and sponsor verification that strengthen the financial portion of visa applications.",
        },
        {
          challenge: "Visa Interview Anxiety",
          solution:
            "Our interview preparation program includes multiple mock sessions that simulate actual visa interviews, with feedback on content, delivery, and body language. We provide country-specific interview guides covering common questions and appropriate responses, techniques for managing anxiety, and strategies for addressing difficult questions. Our preparation emphasizes authenticity while effectively communicating study plans and post-graduation intentions.",
        },
        {
          challenge: "Previous Visa Rejections",
          solution:
            "We conduct thorough analysis of previous rejection reasons and develop targeted strategies to address each concern. This may include strengthening financial documentation, clarifying study plans, demonstrating stronger ties to home country, or considering alternative study destinations. Our experience with thousands of visa cases, including many successful reapplications after initial rejection, informs our approach to overcoming previous visa challenges.",
        },
        {
          challenge: "Gap in Education or Unexplained Career Breaks",
          solution:
            "We help students develop compelling narratives that explain gaps in education or career breaks in a positive light, focusing on constructive activities, skill development, or personal circumstances that necessitated the break. We assist in documenting these explanations with supporting evidence such as certificates from short courses, volunteer work, family responsibilities, or health situations that provide context for the gaps.",
        },
        {
          challenge: "Demonstrating English Language Proficiency",
          solution:
            "For students struggling with language requirements, we provide access to specialized English preparation resources, recommend appropriate test options based on individual strengths (IELTS, TOEFL, PTE, or Duolingo), and identify institutions offering conditional admission with English pathway programs. We also guide students on documenting previous English-medium education that may qualify for language requirement waivers.",
        },
      ],
      legalRequirements: {
        visaCompliance:
          "International students must maintain full-time enrollment, report address changes, and adhere to work hour restrictions to maintain legal status. Violation of visa conditions can result in status termination and future immigration difficulties.",
        healthInsurance:
          "Most countries mandate health insurance coverage for the duration of study. This is often linked to visa issuance and renewal, with specific minimum coverage requirements varying by destination.",
        taxObligations:
          "International students may have tax filing requirements even with limited income. Tax treaties between countries may provide exemptions or reduced rates for students, but awareness of obligations is essential.",
        registrationRequirements:
          "Many countries require international students to register with local authorities, immigration offices, or police within a specified period after arrival. Failure to complete these registrations can affect legal status.",
        workRestrictions:
          "Strict adherence to work hour limitations is critical for maintaining student status. Unauthorized employment can result in visa cancellation and deportation in most countries.",
      },
      applicationTimeline: {
        "12-18 months before":
          "Research universities and programs, take standardized tests (IELTS/TOEFL, GRE/GMAT if required), begin preparing financial resources",
        "10-12 months before":
          "Shortlist universities, prepare application materials, request recommendation letters, draft personal statements/essays",
        "8-10 months before":
          "Submit university applications (for fall intake), begin scholarship applications, prepare financial documentation",
        "6-8 months before": "Receive admission decisions, select final institution, pay deposits, apply for housing",
        "4-6 months before":
          "Begin visa application process, prepare financial documentation, schedule visa interview if required",
        "3-4 months before": "Receive visa decision, book flights, arrange accommodation, purchase insurance",
        "2-3 months before": "Attend pre-departure orientation, arrange currency exchange, prepare essential documents",
        "1-2 months before":
          "Finalize travel arrangements, pack appropriately, arrange airport pickup, notify bank of travel",
        "Upon arrival":
          "Attend university orientation, complete registration, open bank account, obtain local phone/transportation",
      },
    },
    "show-money-assistance": {
      title: "Show Money Assistance",
      subtitle: "Financial Documentation for Visa Success",
      description:
        "Get expert guidance on financial documentation for your visa application to maximize approval chances.",
      longDescription:
        "Financial documentation is a critical component of most visa applications, demonstrating your ability to support yourself during your stay abroad. Our specialized show money assistance service provides expert guidance on preparing and presenting financial documents that meet immigration requirements and strengthen your visa application.",
      image: "/placeholder.svg?key=oflll",
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
        {
          title: "Financial History Organization",
          description: "Comprehensive organization of your financial history for visa applications.",
          includes: [
            "Financial timeline creation",
            "Income documentation",
            "Tax return organization",
            "Financial obligation documentation",
          ],
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
      faqs: [
        {
          question: "How much money do I need to show for a student visa?",
          answer:
            "The amount varies by country. For example, Canada requires tuition fees plus CAD 10,000 for living expenses for the first year, while the UK requires tuition fees plus £1,334 per month for living in London. We provide country-specific guidance based on current requirements.",
        },
        {
          question: "How long should funds be in my account before applying for a visa?",
          answer:
            "Most countries require funds to be held for a minimum period, typically 3-6 months, to show stability. Some countries like the UK have specific requirements (28 consecutive days). Recent large deposits without clear sources may raise concerns during visa processing.",
        },
        {
          question: "Can I use a sponsor for my financial requirements?",
          answer:
            "Yes, many countries allow financial sponsorship, typically from close relatives. Sponsors must provide their own financial documents, proof of relationship to you, and often a letter of sponsorship or affidavit of support. Requirements vary by country and visa type.",
        },
        {
          question: "What if I don't have enough funds in my account?",
          answer:
            "We can advise on alternative documentation strategies, such as combining funds from multiple sources, using education loans, scholarship documentation, or legitimate sponsorships. We never advise temporary fund parking or misrepresentation, as these can lead to visa rejection and future immigration issues.",
        },
        {
          question: "Do I need to show funds for my entire course duration?",
          answer:
            "It depends on the country. Some countries like the US require proof of funds for the entire program, while others like Canada and Australia focus on the first year. For longer programs, you may need to demonstrate how you'll finance subsequent years through scholarships, loans, or family support.",
        },
      ],
      stats: {
        successRate: "90%",
        clientsAssisted: "7,500+",
        countriesCovered: "30+",
        rejectionReversal: "85%",
      },
      caseStudies: [
        {
          title: "From Visa Rejection to Full Scholarship",
          student: "Arjun Mehta",
          destination: "Canada",
          challenge:
            "Arjun had received a visa rejection for Canada due to insufficient financial documentation and unclear study plans. His academic profile was strong with a 3.8 GPA in Computer Engineering, but his visa application failed to effectively communicate his genuine intent and financial stability.",
          solution:
            "Our team conducted a comprehensive analysis of his rejection reasons and developed a strategic plan. We restructured his financial documentation to show stable fund history, obtained additional sponsorship from a close relative with clear documentation of relationship and financial capacity, rewrote his study plan to clearly connect his academic background with his chosen program and future career goals in artificial intelligence, and prepared him extensively for the visa interview with emphasis on addressing the previous concerns.",
          result:
            "Arjun not only received visa approval on his second attempt but also secured a $20,000 merit scholarship from the University of Waterloo for his Master's in Computer Science with specialization in AI. He is now completing his final semester with a job offer from a leading Canadian tech company and plans to apply for permanent residency through the Express Entry program.",
        },
        {
          title: "Career Transition Through International Education",
          student: "Priyanka Sharma",
          destination: "Australia",
          challenge:
            "Priyanka had 5 years of experience in traditional marketing but wanted to transition to digital marketing. She faced challenges in demonstrating the relevance of her chosen program to her career progression and had limited savings for international education.",
          solution:
            "We guided Priyanka to select a specialized Master of Digital Marketing program at RMIT University that built upon her existing marketing experience while providing the digital skills she needed. We helped her secure an education loan covering 70% of her expenses and identified a scholarship opportunity specifically for career-changers. Her statement of purpose was crafted to highlight how the Australian program would bridge her skills gap and accelerate her career transition, with specific reference to Australia's advanced digital marketing sector.",
          result:
            "Priyanka successfully completed her program with distinction and secured an internship with a leading Australian digital agency during her studies. This led to sponsorship for a Temporary Skill Shortage visa after graduation. She has now been promoted to Digital Marketing Manager and is on track for permanent residency through the Employer Nomination Scheme.",
        },
        {
          title: "Navigating Complex Documentation Requirements",
          student: "Rahul and Neha Patel (Family)",
          destination: "United Kingdom",
          challenge:
            "Rahul was pursuing a PhD in Renewable Energy with his wife Neha and 5-year-old daughter accompanying him. The family faced complex documentation challenges including proving relationship history, arranging appropriate accommodation for a family, and demonstrating sufficient funds for supporting three people.",
          solution:
            "We provided comprehensive guidance on dependent visa requirements, helping them prepare a detailed relationship history with supporting evidence spanning their 7-year marriage. We assisted with securing family accommodation near the university and childcare arrangements for their daughter. For financial documentation, we helped structure their funds across personal savings, a research stipend, and a family sponsor, ensuring all sources were properly documented with clear fund trails.",
          result:
            "The entire family received visa approval within 4 weeks. Rahul's research has been recognized with additional funding from the university, and Neha has found part-time employment using her dependent visa work rights. Their daughter has adapted well to the British education system, and the family is considering settlement options after completion of the PhD program.",
        },
      ],
      commonChallenges: [
        {
          challenge: "Insufficient Financial Documentation",
          solution:
            "We provide detailed guidance on financial requirements specific to each country and institution, helping students prepare comprehensive documentation that demonstrates not just the required amount but also the stability and legitimacy of funds. We advise on the optimal timing for fund arrangements, proper formatting of bank statements, and supplementary documentation such as income sources, tax returns, and sponsor verification that strengthen the financial portion of visa applications.",
        },
        {
          challenge: "Visa Interview Anxiety",
          solution:
            "Our interview preparation program includes multiple mock sessions that simulate actual visa interviews, with feedback on content, delivery, and body language. We provide country-specific interview guides covering common questions and appropriate responses, techniques for managing anxiety, and strategies for addressing difficult questions. Our preparation emphasizes authenticity while effectively communicating study plans and post-graduation intentions.",
        },
        {
          challenge: "Previous Visa Rejections",
          solution:
            "We conduct thorough analysis of previous rejection reasons and develop targeted strategies to address each concern. This may include strengthening financial documentation, clarifying study plans, demonstrating stronger ties to home country, or considering alternative study destinations. Our experience with thousands of visa cases, including many successful reapplications after initial rejection, informs our approach to overcoming previous visa challenges.",
        },
        {
          challenge: "Gap in Education or Unexplained Career Breaks",
          solution:
            "We help students develop compelling narratives that explain gaps in education or career breaks in a positive light, focusing on constructive activities, skill development, or personal circumstances that necessitated the break. We assist in documenting these explanations with supporting evidence such as certificates from short courses, volunteer work, family responsibilities, or health situations that provide context for the gaps.",
        },
        {
          challenge: "Demonstrating English Language Proficiency",
          solution:
            "For students struggling with language requirements, we provide access to specialized English preparation resources, recommend appropriate test options based on individual strengths (IELTS, TOEFL, PTE, or Duolingo), and identify institutions offering conditional admission with English pathway programs. We also guide students on documenting previous English-medium education that may qualify for language requirement waivers.",
        },
      ],
      legalRequirements: {
        visaCompliance:
          "International students must maintain full-time enrollment, report address changes, and adhere to work hour restrictions to maintain legal status. Violation of visa conditions can result in status termination and future immigration difficulties.",
        healthInsurance:
          "Most countries mandate health insurance coverage for the duration of study. This is often linked to visa issuance and renewal, with specific minimum coverage requirements varying by destination.",
        taxObligations:
          "International students may have tax filing requirements even with limited income. Tax treaties between countries may provide exemptions or reduced rates for students, but awareness of obligations is essential.",
        registrationRequirements:
          "Many countries require international students to register with local authorities, immigration offices, or police within a specified period after arrival. Failure to complete these registrations can affect legal status.",
        workRestrictions:
          "Strict adherence to work hour limitations is critical for maintaining student status. Unauthorized employment can result in visa cancellation and deportation in most countries.",
      },
      applicationTimeline: {
        "12-18 months before":
          "Research universities and programs, take standardized tests (IELTS/TOEFL, GRE/GMAT if required), begin preparing financial resources",
        "10-12 months before":
          "Shortlist universities, prepare application materials, request recommendation letters, draft personal statements/essays",
        "8-10 months before":
          "Submit university applications (for fall intake), begin scholarship applications, prepare financial documentation",
        "6-8 months before": "Receive admission decisions, select final institution, pay deposits, apply for housing",
        "4-6 months before":
          "Begin visa application process, prepare financial documentation, schedule visa interview if required",
        "3-4 months before": "Receive visa decision, book flights, arrange accommodation, purchase insurance",
        "2-3 months before": "Attend pre-departure orientation, arrange currency exchange, prepare essential documents",
        "1-2 months before":
          "Finalize travel arrangements, pack appropriately, arrange airport pickup, notify bank of travel",
        "Upon arrival":
          "Attend university orientation, complete registration, open bank account, obtain local phone/transportation",
      },
    },
    "show-money-assistance": {
      title: "Show Money Assistance",
      subtitle: "Financial Documentation for Visa Success",
      description:
        "Get expert guidance on financial documentation for your visa application to maximize approval chances.",
      longDescription:
        "Financial documentation is a critical component of most visa applications, demonstrating your ability to support yourself during your stay abroad. Our specialized show money assistance service provides expert guidance on preparing and presenting financial documents that meet immigration requirements and strengthen your visa application.",
      image: "/placeholder.svg?key=oflll",
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
        {
          title: "Financial History Organization",
          description: "Comprehensive organization of your financial history for visa applications.",
          includes: [
            "Financial timeline creation",
            "Income documentation",
            "Tax return organization",
            "Financial obligation documentation",
          ],
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
      faqs: [
        {
          question: "How much money do I need to show for a student visa?",
          answer:
            "The amount varies by country. For example, Canada requires tuition fees plus CAD 10,000 for living expenses for the first year, while the UK requires tuition fees plus £1,334 per month for living in London. We provide country-specific guidance based on current requirements.",
        },
        {
          question: "How long should funds be in my account before applying for a visa?",
          answer:
            "Most countries require funds to be held for a minimum period, typically 3-6 months, to show stability. Some countries like the UK have specific requirements (28 consecutive days). Recent large deposits without clear sources may raise concerns during visa processing.",
        },
        {
          question: "Can I use a sponsor for my financial requirements?",
          answer:
            "Yes, many countries allow financial sponsorship, typically from close relatives. Sponsors must provide their own financial documents, proof of relationship to you, and often a letter of sponsorship or affidavit of support. Requirements vary by country and visa type.",
        },
        {
          question: "What if I don't have enough funds in my account?",
          answer:
            "We can advise on alternative documentation strategies, such as combining funds from multiple sources, using education loans, scholarship documentation, or legitimate sponsorships. We never advise temporary fund parking or misrepresentation, as these can lead to visa rejection and future immigration issues.",
        },
        {
          question: "Do I need to show funds for my entire course duration?",
          answer:
            "It depends on the country. Some countries like the US require proof of funds for the entire program, while others like Canada and Australia focus on the first year. For longer programs, you may need to demonstrate how you'll finance subsequent years through scholarships, loans, or family support.",
        },
      ],
      stats: {
        successRate: "90%",
        clientsAssisted: "7,500+",
        countriesCovered: "30+",
        rejectionReversal: "85%",
      },
      caseStudies: [
        {
          title: "From Visa Rejection to Full Scholarship",
          student: "Arjun Mehta",
          destination: "Canada",
          challenge:
            "Arjun had received a visa rejection for Canada due to insufficient financial documentation and unclear study plans. His academic profile was strong with a 3.8 GPA in Computer Engineering, but his visa application failed to effectively communicate his genuine intent and financial stability.",
          solution:
            "Our team conducted a comprehensive analysis of his rejection reasons and developed a strategic plan. We restructured his financial documentation to show stable fund history, obtained additional sponsorship from a close relative with clear documentation of relationship and financial capacity, rewrote his study plan to clearly connect his academic background with his chosen program and future career goals in artificial intelligence, and prepared him extensively for the visa interview with emphasis on addressing the previous concerns.",
          result:
            "Arjun not only received visa approval on his second attempt but also secured a $20,000 merit scholarship from the University of Waterloo for his Master's in Computer Science with specialization in AI. He is now completing his final semester with a job offer from a leading Canadian tech company and plans to apply for permanent residency through the Express Entry program.",
        },
        {
          title: "Career Transition Through International Education",
          student: "Priyanka Sharma",
          destination: "Australia",
          challenge:
            "Priyanka had 5 years of experience in traditional marketing but wanted to transition to digital marketing. She faced challenges in demonstrating the relevance of her chosen program to her career progression and had limited savings for international education.",
          solution:
            "We guided Priyanka to select a specialized Master of Digital Marketing program at RMIT University that built upon her existing marketing experience while providing the digital skills she needed. We helped her secure an education loan covering 70% of her expenses and identified a scholarship opportunity specifically for career-changers. Her statement of purpose was crafted to highlight how the Australian program would bridge her skills gap and accelerate her career transition, with specific reference to Australia's advanced digital marketing sector.",
          result:
            "Priyanka successfully completed her program with distinction and secured an internship with a leading Australian digital agency during her studies. This led to sponsorship for a Temporary Skill Shortage visa after graduation. She has now been promoted to Digital Marketing Manager and is on track for permanent residency through the Employer Nomination Scheme.",
        },
        {
          title: "Navigating Complex Documentation Requirements",
          student: "Rahul and Neha Patel (Family)",
          destination: "United Kingdom",
          challenge:
            "Rahul was pursuing a PhD in Renewable Energy with his wife Neha and 5-year-old daughter accompanying him. The family faced complex documentation challenges including proving relationship history, arranging appropriate accommodation for a family, and demonstrating sufficient funds for supporting three people.",
          solution:
            "We provided comprehensive guidance on dependent visa requirements, helping them prepare a detailed relationship history with supporting evidence spanning their 7-year marriage. We assisted with securing family accommodation near the university and childcare arrangements for their daughter. For financial documentation, we helped structure their funds across personal savings, a research stipend, and a family sponsor, ensuring all sources were properly documented with clear fund trails.",
          result:
            "The entire family received visa approval within 4 weeks. Rahul's research has been recognized with additional funding from the university, and Neha has found part-time employment using her dependent visa work rights. Their daughter has adapted well to the British education system, and the family is considering settlement options after completion of the PhD program.",
        },
      ],
      commonChallenges: [
        {
          challenge: "Insufficient Financial Documentation",
          solution:
            "We provide detailed guidance on financial requirements specific to each country and institution, helping students prepare comprehensive documentation that demonstrates not just the required amount but also the stability and legitimacy of funds. We advise on the optimal timing for fund arrangements, proper formatting of bank statements, and supplementary documentation such as income sources, tax returns, and sponsor verification that strengthen the financial portion of visa applications.",
        },
        {
          challenge: "Visa Interview Anxiety",
          solution:
            "Our interview preparation program includes multiple mock sessions that simulate actual visa interviews, with feedback on content, delivery, and body language. We provide country-specific interview guides covering common questions and appropriate responses, techniques for managing anxiety, and strategies for addressing difficult questions. Our preparation emphasizes authenticity while effectively communicating study plans and post-graduation intentions.",
        },
        {
          challenge: "Previous Visa Rejections",
          solution:
            "We conduct thorough analysis of previous rejection reasons and develop targeted strategies to address each concern. This may include strengthening financial documentation, clarifying study plans, demonstrating stronger ties to home country, or considering alternative study destinations. Our experience with thousands of visa cases, including many successful reapplications after initial rejection, informs our approach to overcoming previous visa challenges.",
        },
        {
          challenge: "Gap in Education or Unexplained Career Breaks",
          solution:
            "We help students develop compelling narratives that explain gaps in education or career breaks in a positive light, focusing on constructive activities, skill development, or personal circumstances that necessitated the break. We assist in documenting these explanations with supporting evidence such as certificates from short courses, volunteer work, family responsibilities, or health situations that provide context for the gaps.",
        },
        {
          challenge: "Demonstrating English Language Proficiency",
          solution:
            "For students struggling with language requirements, we provide access to specialized English preparation resources, recommend appropriate test options based on individual strengths (IELTS, TOEFL, PTE, or Duolingo), and identify institutions offering conditional admission with English pathway programs. We also guide students on documenting previous English-medium education that may qualify for language requirement waivers.",
        },
      ],
      legalRequirements: {
        visaCompliance:
          "International students must maintain full-time enrollment, report address changes, and adhere to work hour restrictions to maintain legal status. Violation of visa conditions can result in status termination and future immigration difficulties.",
        healthInsurance:
          "Most countries mandate health insurance coverage for the duration of study. This is often linked to visa issuance and renewal, with specific minimum coverage requirements varying by destination.",
        taxObligations:
          "International students may have tax filing requirements even with limited income. Tax treaties between countries may provide exemptions or reduced rates for students, but awareness of obligations is essential.",
        registrationRequirements:
          "Many countries require international students to register with local authorities, immigration offices, or police within a specified period after arrival. Failure to complete these registrations can affect legal status.",
        workRestrictions:
          "Strict adherence to work hour limitations is critical for maintaining student status. Unauthorized employment can result in visa cancellation and deportation in most countries.",
      },
      applicationTimeline: {
        "12-18 months before":
          "Research universities and programs, take standardized tests (IELTS/TOEFL, GRE/GMAT if required), begin preparing financial resources",
        "10-12 months before":
          "Shortlist universities, prepare application materials, request recommendation letters, draft personal statements/essays",
        "8-10 months before":
          "Submit university applications (for fall intake), begin scholarship applications, prepare financial documentation",
        "6-8 months before": "Receive admission decisions, select final institution, pay deposits, apply for housing",
        "4-6 months before":
          "Begin visa application process, prepare financial documentation, schedule visa interview if required",
        "3-4 months before": "Receive visa decision, book flights, arrange accommodation, purchase insurance",
        "2-3 months before": "Attend pre-departure orientation, arrange currency exchange, prepare essential documents",
        "1-2 months before":
          "Finalize travel arrangements, pack appropriately, arrange airport pickup, notify bank of travel",
        "Upon arrival":
          "Attend university orientation, complete registration, open bank account, obtain local phone/transportation",
      },
    },
  }

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0)

    // Collect all testimonials from service details
    const allTestimonials = []
    Object.entries(serviceDetails).forEach(([serviceType, service]) => {
      if (service.testimonials && service.testimonials.length > 0) {
        service.testimonials.forEach((testimonial) => {
          allTestimonials.push({
            ...testimonial,
            serviceType,
            serviceName: service.title,
          })
        })
      }
    })

    setTestimonials(allTestimonials)
    setFilteredTestimonials(allTestimonials)
  }, [])

  useEffect(() => {
    // Filter testimonials based on active filter and search term
    let filtered = testimonials

    // Apply service type filter
    if (activeFilter !== "all") {
      filtered = filtered.filter((testimonial) => testimonial.serviceType === activeFilter)
    }

    // Apply search term filter
    if (searchTerm.trim() !== "") {
      const term = searchTerm.toLowerCase()
      filtered = filtered.filter(
        (testimonial) =>
          testimonial.name.toLowerCase().includes(term) ||
          testimonial.text.toLowerCase().includes(term) ||
          testimonial.country.toLowerCase().includes(term) ||
          (testimonial.university && testimonial.university.toLowerCase().includes(term)) ||
          (testimonial.program && testimonial.program.toLowerCase().includes(term)) ||
          (testimonial.company && testimonial.company.toLowerCase().includes(term)) ||
          (testimonial.business && testimonial.business.toLowerCase().includes(term)) ||
          (testimonial.trip && testimonial.trip.toLowerCase().includes(term)) ||
          (testimonial.visaType && testimonial.visaType.toLowerCase().includes(term)),
      )
    }

    setFilteredTestimonials(filtered)
  }, [activeFilter, searchTerm, testimonials])

  return (
    <div className="testimonials-page">
      <Header />

     

      {/* Hero Section */}
      <div className="testimonials-hero">
        <div className="hero-background">
          <div className="hero-shape hero-shape-1"></div>
          <div className="hero-shape hero-shape-2"></div>
          <div className="hero-shape hero-shape-3"></div>
        </div>
        <div className="container">
          <div className="testimonials-hero-content">
            <h1>Client Testimonials</h1>
            <h2>Success Stories from Around the World</h2>
            <div className="hero-divider"></div>
            <p className="hero-description">
              Discover what our clients have to say about their experience with our services. These testimonials reflect
              our commitment to excellence and client satisfaction.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="testimonials-stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-value">2,500+</div>
              <div className="stat-label">Happy Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">95%</div>
              <div className="stat-label">Success Rate</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">20+</div>
              <div className="stat-label">Countries Covered</div>
            </div>
            <div className="stat-item">
              <div className="stat-value">15+</div>
              <div className="stat-label">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="testimonials-filter">
        <div className="container">
          <div className="filter-container">
            <div className="filter-header">
              <h2>
                <FaFilter /> Filter Testimonials
              </h2>
              <div className="search-box">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search testimonials..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
            <div className="filter-buttons">
              <button
                className={`filter-btn ${activeFilter === "all" ? "active" : ""}`}
                onClick={() => setActiveFilter("all")}
              >
                All Services
              </button>
              {Object.keys(serviceIcons).map((serviceType) => (
                <button
                  key={serviceType}
                  className={`filter-btn ${activeFilter === serviceType ? "active" : ""}`}
                  onClick={() => setActiveFilter(serviceType)}
                >
                  <span className="filter-icon">{serviceIcons[serviceType]}</span>
                  {serviceNames[serviceType]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Grid */}
      <div className="testimonials-content">
        <div className="container">
          {filteredTestimonials.length > 0 ? (
            <>
              <h2 className="section-title">
                {activeFilter === "all" ? "All Testimonials" : `${serviceNames[activeFilter]} Testimonials`}
              </h2>
              <div className="testimonials-grid">
                {filteredTestimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial-card">
                    <div className="testimonial-service-type">
                      <span className="service-icon">{serviceIcons[testimonial.serviceType]}</span>
                      <span className="service-name">{testimonial.serviceName}</span>
                    </div>
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
            </>
          ) : (
            <div className="no-testimonials">
              <h3>No testimonials found</h3>
              <p>Try adjusting your search criteria or select a different service category.</p>
              <button
                className="btn btn-primary"
                onClick={() => {
                  setActiveFilter("all")
                  setSearchTerm("")
                }}
              >
                View All Testimonials
              </button>
            </div>
          )}
        </div>
      </div>

      

      {/* CTA Section */}
      <div className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Start Your Immigration Journey?</h2>
            <p>Our expert consultants are ready to guide you through every step of the process.</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get Free Assessment
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

export default TestimonialsPage
