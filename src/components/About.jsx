import "./About.css"

const About = () => {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="section-title">
          <h2>About Pravasa</h2>
          <p>Your trusted partner for immigration and visa services</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src="/whyImage.webp" alt="Pravasa Immigration Office" />
          </div>

          <div className="about-text">
            <h3>Why Choose Pravasa?</h3>
            <p>
              With over 15 years of experience in the immigration industry, Pravasa has established itself as a leading
              immigration consultancy firm. We specialize in providing comprehensive immigration solutions to
              individuals, families, and businesses.
            </p>

            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-check-circle"></i>
                </div>
                <div className="feature-text">
                  <h4>Licensed Consultants</h4>
                  <p>Our team consists of licensed immigration consultants with years of experience.</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-globe"></i>
                </div>
                <div className="feature-text">
                  <h4>Global Presence</h4>
                  <p>With offices in multiple countries, we provide services worldwide.</p>
                </div>
              </div>

              <div className="feature">
                <div className="feature-icon">
                  <i className="fas fa-trophy"></i>
                </div>
                <div className="feature-text">
                  <h4>High Success Rate</h4>
                  <p>We pride ourselves on our high visa approval success rate.</p>
                </div>
              </div>
            </div>

            <a href="#contact" className="btn btn-primary">
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
