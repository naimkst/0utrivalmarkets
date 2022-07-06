import React from "react";
import AmazonSeller from "../components/ServicePage/AmazonSeller";
import AskQuestion from "../components/ServicePage/AskQuestion";
import Branding from "../components/ServicePage/Branding";
import EcommerceWebsite from "../components/ServicePage/EcommerceWebsite";
import HeroSection from "../components/ServicePage/HeroSection";
import PriceSection from "../components/ServicePage/PriceSection";

export default function Service() {
  return (
    <>
      <HeroSection />
      <AmazonSeller />
      <PriceSection />
      <AskQuestion />
      <EcommerceWebsite />
      <Branding />
    </>
  );
}
