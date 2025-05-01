import React from 'react';
import './ServicesSectionWithIcons.css';
import { Network, Server, Shield, Cog, PenTool, Speaker } from 'lucide-react';
import { 
  FaGraduationCap, 
  FaBriefcase, 
  FaHome, 
  FaUsers, 
  FaBuilding, 
  FaPlane, 
  FaFileInvoiceDollar,
  FaPlaneDeparture, 
} from "react-icons/fa";
const services = [
  { name: "Study ", icon: <FaGraduationCap size={50} color="#819cd7" />, link: "#contact" },
  { name: "Work Permit", icon: <FaBriefcase size={50} color="#819cd7" />, link: "#contact" },
  { name: "Permanent Residency", icon: <FaHome size={50} color="#819cd7" />, link: "#contact" },
  { name: "Family Immigration", icon: <FaUsers size={50} color="#819cd7" />, link: "#contact" },
  { name: "Business Immigration", icon: <FaBuilding size={50} color="#819cd7" />, link: "#contact" },
  { name: "Tourist ", icon: <FaPlane size={50} color="#819cd7" />, link: "#contact" },
  { name: "Air ticket service ", icon: <FaPlaneDeparture size={50} color="#819cd7" />, link: "#contact" },
  { name: "Show Money assistance", icon: <FaFileInvoiceDollar size={50} color="#819cd7" />, link: "#contact" }
];

const ServicesSectionWithIcons = () => {
  return (
    <section className="services-section">
      <div className="services-container">
        {services.map((service, index) => (
          <a href={service.link} key={index} className="service-card">
            <div className="icon-circle">
              {service.icon} {/* Render the icon directly here */}
            </div>
            <h3>{service.name}</h3>
          </a>
        ))}
      </div>
    </section>
  );
};

export default ServicesSectionWithIcons;
