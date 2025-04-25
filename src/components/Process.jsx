import "./Process.css"

const Process = () => {
  const steps = [
    {
      id: 1,
      icon: "fas fa-comments",
      title: "Free Consultation",
      description: "Schedule a free consultation with our immigration experts to discuss your goals and options.",
    },
    {
      id: 2,
      icon: "fas fa-file-alt",
      title: "Document Assessment",
      description: "We'll assess your documents and qualifications to determine the best immigration pathway for you.",
    },
    {
      id: 3,
      icon: "fas fa-clipboard-check",
      title: "Customized Plan",
      description: "Receive a customized immigration plan tailored to your specific needs and circumstances.",
    },
    {
      id: 4,
      icon: "fas fa-edit",
      title: "Application Preparation",
      description: "Our experts will prepare and review your application to ensure it meets all requirements.",
    },
    {
      id: 5,
      icon: "fas fa-paper-plane",
      title: "Application Submission",
      description: "We submit your application and handle all communication with immigration authorities.",
    },
    {
      id: 6,
      icon: "fas fa-plane-departure",
      title: "Pre-Departure Support",
      description: "Receive guidance on pre-departure preparations and post-landing assistance.",
    },
  ]

  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-title">
          <h2>Our Process</h2>
          <p>A simple and transparent approach to your immigration journey</p>
        </div>

        <div className="process-timeline">
          {steps.map((step) => (
            <div className="process-step" key={step.id}>
              <div className="step-number">{step.id}</div>
              <div className="step-content">
                <div className="step-icon">
                  <i className={step.icon}></i>
                </div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
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
