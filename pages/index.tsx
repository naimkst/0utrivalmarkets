import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import AboutSection from "../components/HomePage/AboutSection";
import BlogSection from "../components/HomePage/BlogSection";
import CreativeMind from "../components/HomePage/CreativeMind";
import HappyClientSection from "../components/HomePage/HappyClientSection";
import HeroSection from "../components/HomePage/HeroSection";
import OurPortfolio from "../components/HomePage/OurPortfolio";
import ProjectIdea from "../components/HomePage/ProjectIdea";
import SellerSection from "../components/HomePage/SellerSection";
import TestimonialSection from "../components/HomePage/TestimonialSection";
import WeOffer from "../components/HomePage/WeOffer";
import styles from "../styles/Home.module.css";

const Home: NextPage = ({ data }: any) => {
  console.log(data);
  return (
    <>
      <HeroSection heroData={data.homeHero} />
      <AboutSection aboutData={data.homeOurPhilosophy} />
      <TestimonialSection
        testimonailSectionData={data.homeTestimonialSection}
        testimonialData={data.homeTestimonial}
      />
      <CreativeMind creativeMindData={data.homeCreativeMind} />
      <HappyClientSection counterData={data.homeCounter} />
      <SellerSection
        amazonSeller={data.homeAmazonSeller}
        amazonSellerSection={data.homeAmazonSellerSection}
      />
      <OurPortfolio portfolioData={data.homePortfolio} />
      <ProjectIdea projectData={data.homeProject} />
      <WeOffer weOffer={data.homeBrand} />
      <BlogSection />
    </>
  );
};

export default Home;

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/home/home-data`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}
