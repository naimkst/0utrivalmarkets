import React from 'react'
import ContactDetails from '../components/ContactUs/ContactDetails'
import ContactForm from '../components/ContactUs/ContactForm'
import HeroSection from '../components/ContactUs/HeroSection'

export default function ContactUs() {
  return (
    <>
      <HeroSection />
      <ContactForm />
      <ContactDetails/>
    </>
  )
}
