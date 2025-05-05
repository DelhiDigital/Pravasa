import React from 'react';
import "./Services.css";
import ServiceeSectionWithIcon from "../components/ServicesSectionWithIcons"
const Services = () => {
  return (
    <section id="services" className="section services">
      <div className="container">
        {/* <div className="section-title">
          <h2>Our Services</h2>
          <p>Comprehensive immigration solutions tailored to your needs</p>
        </div> */}
        <div className="services-container1">
        <ServiceeSectionWithIcon />
        </div>
      </div>
    </section>
  );
};

export default Services;
