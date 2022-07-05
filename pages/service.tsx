import React from "react";
import AmazonSeller from "../components/ServicePage/AmazonSeller";
import HeroSection from "../components/ServicePage/HeroSection";
import PriceSection from "../components/ServicePage/PriceSection";

export default function Service() {
  return (
    <>
      <HeroSection />
      <AmazonSeller />
      <PriceSection/>
    </>
  );
}
