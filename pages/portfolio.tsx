import React from 'react'
import Branding from '../components/PortfolioPage/BrandingSection'
import EcommerceWebsite from '../components/PortfolioPage/EcommerceWebsite'
import HeroSection from '../components/PortfolioPage/HeroSection'
import ProductPhotography from '../components/PortfolioPage/ProductPhotography'
import ProductSectionSlider from '../components/PortfolioPage/ProductSectionSlider'
import ProductSlider from '../components/PortfolioPage/ProductSlider'
import ProjectIdea from '../components/PortfolioPage/ProjectIdea'
import VideoSection from '../components/PortfolioPage/VideoSection'

export default function Portfolio() {
  return (
    <>
      <HeroSection/>
      <ProductSectionSlider/>
      <ProductPhotography />
      <VideoSection />
      <EcommerceWebsite />
      <Branding />
      <ProjectIdea/>
    </>
  )
}
