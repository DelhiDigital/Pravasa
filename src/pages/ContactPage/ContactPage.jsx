"use client"

import { useEffect, useState } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"

import Header from "../../components/Header"
import "./ContactPage.css"
import Contact from "../../components/Contact"
import Footer from "../../components/Footer"
import WhatsAppButton from "../../components/WhatsAppButton"

const ContactPage = () => {
    
  
    useEffect(() => {
      window.scrollTo(0, 0)
    }, [])
  
    

    return (
      <div className="contact-detail-page">
        <Header />

        <Contact/>
        <Footer />
        <WhatsAppButton />
      </div>
    )
  }
  
  export default ContactPage