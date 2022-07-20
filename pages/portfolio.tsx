import React from 'react'
import HeroSection from '../components/PortfolioPage/HeroSection'
import ProductPhotography from '../components/PortfolioPage/ProductPhotography'
import ProductSectionSlider from '../components/PortfolioPage/ProductSectionSlider'
import ProductSlider from '../components/PortfolioPage/ProductSlider'
import VideoSection from '../components/PortfolioPage/VideoSection'


export default function Portfolio() {
  return (
    <>
      <HeroSection/>
      <ProductSectionSlider/>
      <ProductPhotography />
      <VideoSection/>
    </>
  )
}
