import { Link } from "react-router-dom";
import { useEffect } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import StatisticsSection from "../../components/StatisticsSection";
import WhatsAppButton from "../../components/WhatsAppButton";
import { FaCheckCircle, FaUsers, FaGlobe, FaTrophy, FaHandshake, FaChartLine } from "react-icons/fa";
import "./AboutPage.css";

const AboutPage = () => {


  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  return (
    <div className="app">
      <Header />

      <div className="about-page">
        <div className="about-hero">
          <div className="container">
            <h1>About Pravasa Immigration</h1>
            <p>Your Trusted Partner for Global Immigration Solutions</p>
          </div>
        </div>

        <section className="about-section">
          <div className="container">
            <div className="about-grid">
              <div className="about-content">
                <h2>Our Story</h2>
                <p>
                  Founded in 2008, Pravasa Immigration has grown from a small consultancy to one of the leading
                  immigration service providers in India. Our journey began with a simple mission: to help people
                  achieve their dreams of studying, working, and living abroad through honest, professional guidance.
                </p>
                <p>
                  Over the past 15 years, we have successfully assisted more than 10,000 individuals and families in
                  navigating the complex immigration processes of countries around the world. Our team of experienced
                  consultants, many of whom have lived abroad themselves, brings personal insight and professional
                  expertise to every case.
                </p>
                <p>
                  Today, Pravasa stands as a symbol of trust and excellence in the immigration industry, with a
                  reputation built on integrity, personalized service, and exceptional success rates.
                </p>
              </div>
              <div className="about-image-container">
                <img src="/about-office.png" alt="Pravasa Immigration Office" className="about-image" />
              </div>
            </div>
          </div>
        </section>

        <section className="mission-section">
          <div className="container">
            <div className="mission-vision-grid">
              <div className="mission-box">
                <h2>Our Mission</h2>
                <p>
                  To empower individuals and families to achieve their global mobility goals through expert guidance,
                  personalized solutions, and unwavering support throughout their immigration journey.
                </p>
              </div>
              <div className="vision-box">
                <h2>Our Vision</h2>
                <p>
                  To be the most trusted name in global immigration services, known for our integrity, expertise, and
                  commitment to transforming our clients' international dreams into reality.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="values-section">
          <div className="container">
            <h2 className="values-title">Our Core Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <div className="value-icon">
                  <FaHandshake />
                </div>
                <h3>Integrity</h3>
                <p>
                  We operate with complete transparency and honesty, providing accurate information and ethical
                  guidance.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <FaUsers />
                </div>
                <h3>Client-Centric</h3>
                <p>
                  We put our clients' needs and goals at the center of everything we do, offering personalized
                  solutions.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <FaCheckCircle />
                </div>
                <h3>Excellence</h3>
                <p>
                  We strive for excellence in all our services, maintaining the highest standards of professionalism.
                </p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <FaGlobe />
                </div>
                <h3>Global Perspective</h3>
                <p>We embrace cultural diversity and bring a global mindset to our approach and solutions.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <FaChartLine />
                </div>
                <h3>Innovation</h3>
                <p>We continuously evolve our services and processes to meet changing immigration landscapes.</p>
              </div>
              <div className="value-card">
                <div className="value-icon">
                  <FaTrophy />
                </div>
                <h3>Results-Driven</h3>
                <p>We are committed to achieving successful outcomes for our clients through strategic approaches.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="team-section">
          <div className="container">
            <h2 className="team-title">Our Leadership Team</h2>
            <div className="team-grid">
              <div className="team-member">
                <div className="member-image">
                  <img src="/team/ceo.png" alt="Rajiv Sharma - CEO & Founder" />
                </div>
                <h3>Rajiv Sharma</h3>
                <p className="member-title">CEO & Founder</p>
                <p className="member-bio">
                  With over 20 years of experience in immigration consulting, Rajiv founded Pravasa with a vision to
                  provide honest and effective immigration solutions.
                </p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="/team/coo.jpg" alt="Priya Patel - Chief Operations Officer" />
                </div>
                <h3>Priya Patel</h3>
                <p className="member-title">Chief Operations Officer</p>
                <p className="member-bio">
                  Priya oversees all operational aspects of Pravasa, ensuring efficient processes and exceptional
                  service delivery to our clients.
                </p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="/team/head-consultant.png" alt="Anil Kumar - Head Immigration Consultant" />
                </div>
                <h3>Anil Kumar</h3>
                <p className="member-title">Head Immigration Consultant</p>
                <p className="member-bio">
                  A certified immigration consultant with expertise in multiple countries' immigration systems and
                  policies.
                </p>
              </div>
              <div className="team-member">
                <div className="member-image">
                  <img src="/team/legal-advisor.png" alt="Meera Joshi - Legal Advisor" />
                </div>
                <h3>Meera Joshi</h3>
                <p className="member-title">Legal Advisor</p>
                <p className="member-bio">
                  Meera brings her extensive legal background to ensure all our immigration strategies comply with
                  international laws and regulations.
                </p>
              </div>
            </div>
          </div>
        </section>

        <StatisticsSection />
        {/* <section className="stats-section">
          <div className="container">
            <div className="stats-grid">
              <div className="stat-item">
                <h3>15+</h3>
                <p>Years of Experience</p>
              </div>
              <div className="stat-item">
                <h3>10,000+</h3>
                <p>Successful Visas</p>
              </div>
              <div className="stat-item">
                <h3>20+</h3>
                <p>Countries Covered</p>
              </div>
              <div className="stat-item">
                <h3>50+</h3>
                <p>Immigration Experts</p>
              </div>
            </div>
          </div>
        </section> */}

        <div className="cta-section">
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
  );
};

export default AboutPage;
