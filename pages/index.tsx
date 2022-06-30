import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutSection from '../components/HomePage/AboutSection'
import CreativeMind from '../components/HomePage/CreativeMind'
import HappyClientSection from '../components/HomePage/HappyClientSection'
import HeroSection from '../components/HomePage/HeroSection'
import OurPortfolio from '../components/HomePage/OurPortfolio'
import ProjectIdea from '../components/HomePage/ProjectIdea'
import SellerSection from '../components/HomePage/SellerSection'
import TestimonialSection from '../components/HomePage/TestimonialSection'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <>
      <HeroSection/>
      <AboutSection/>
      <TestimonialSection/>
      <CreativeMind/>
      <HappyClientSection/>
      <SellerSection/>
      <OurPortfolio/>
      <ProjectIdea/>
    </>
  )
}

export default Home
