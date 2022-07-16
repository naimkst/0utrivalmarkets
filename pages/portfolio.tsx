import React from 'react'
import HeroSection from '../components/PortfolioPage/HeroSection'
import ProductPhotography from '../components/PortfolioPage/ProductPhotography'
import ProductSectionSlider from '../components/PortfolioPage/ProductSectionSlider'
import ProductSlider from '../components/PortfolioPage/ProductSlider'


export default function Portfolio() {
  return (
    <>
      <HeroSection/>
      <ProductSectionSlider/>
      <ProductPhotography/>
    </>
  )
}
