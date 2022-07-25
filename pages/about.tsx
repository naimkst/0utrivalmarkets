import React from 'react'
import AtOutrival from '../components/AboutPage/AtOutrival'
import HayThere from '../components/AboutPage/HayThere'
import HeroSection from '../components/AboutPage/HeroSection'
import MoreAboutUs from '../components/AboutPage/MoreAboutUs';
import WeAreHiring from '../components/AboutPage/WeAreHiring';
import HappyClientSection from '../components/HomePage/HappyClientSection';
import AskQuestion from '../components/ServicePage/AskQuestion';

export default function About() {
  return (
    <>
      <HeroSection />
      <HayThere />
      <AtOutrival />
      <MoreAboutUs />
      <HappyClientSection />
      <WeAreHiring />
      <AskQuestion/>
    </>
  );
}
