
import "./About.css"

const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-header">
          {/* <span className="section-tag">About Us</span> */}
          <h2>Trusted Immigration Expertise Since 2008</h2>
        </div>
        
        <div className="about-grid">
          <div className="about-stats">
            <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">10k+</span>
              <span className="stat-label">Successful Visas</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">20+</span>
              <span className="stat-label">Countries Served</span>
            </div>
          </div>
          
          <div className="about-content">
            <p className="about-lead">
              Pravasa Immigration provides expert guidance and personalized solutions for all your immigration needs.
            </p>
            
            <div className="about-text">
              <p>
                With a team of licensed consultants and a global presence, we've helped thousands of individuals and families achieve their immigration goals. Our commitment to excellence and attention to detail ensures the highest success rates in the industry.
              </p>
            </div>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                    <polyline points="22 4 12 14.01 9 11.01"></polyline>
                  </svg>
                </div>
                <div className="feature-text">Licensed Professionals</div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div className="feature-text">Global Network</div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                  </svg>
                </div>
                <div className="feature-text">Client-Focused</div>
              </div>
              
              <div className="feature">
                <div className="feature-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                </div>
                <div className="feature-text">High Success Rate</div>
              </div>
            </div>
          </div>
          
          <div className="about-image">
            <img src="/whyImage.webp" alt="Pravasa Immigration Office" />
            <div className="image-overlay">
              <a href="/contact" className="cta-button">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About




// import "./About.css"


// const About = () => {


  

//   return (
//     <section id="about" className="section about">
//       <div className="container">
//         <div className="section-title">
//           <h2>Your trusted partner for immigration and visa services</h2>
//         </div>

//         <div className="about-content">
//           <div className="about-image">
//             <img src="/whyImage.webp" alt="Pravasa Immigration Office" />
//           </div>

//           <div className="about-text">
//             <div className="about-text-content">
//               <h3>Why Choose Pravasa?</h3>
//               <p>
//                 With over 15 years of experience in the immigration industry, Pravasa has established itself as a
//                 leading immigration consultancy firm. We specialize in providing comprehensive immigration solutions to
//                 individuals, families, and businesses.
//               </p>

//               <div className="about-features">
//                 <div className="feature">
//                   <div className="feature-icon">
//                     <i className="fas fa-check-circle"></i>
//                   </div>
//                   <div className="feature-text">
//                     <h4>Licensed Consultants</h4>
//                     <p>Our team consists of licensed immigration consultants with years of experience.</p>
//                   </div>
//                 </div>

//                 <div className="feature">
//                   <div className="feature-icon">
//                     <i className="fas fa-globe"></i>
//                   </div>
//                   <div className="feature-text">
//                     <h4>Global Presence</h4>
//                     <p>With offices in multiple countries, we provide services worldwide.</p>
//                   </div>
//                 </div>

//                 <div className="feature">
//                   <div className="feature-icon">
//                     <i className="fas fa-trophy"></i>
//                   </div>
//                   <div className="feature-text">
//                     <h4>High Success Rate</h4>
//                     <p>We pride ourselves on our high visa approval success rate.</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <a href="/contact" className="btn btn-primary">
//               Get in Touch
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

// export default About
