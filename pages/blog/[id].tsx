import React from 'react'
import AskQuestion from '../../components/SingleBlog/AskQuestion';
import Content from '../../components/SingleBlog/Content'
import HeroSection from '../../components/SingleBlog/HeroSection'

export default function SingleBlog() {
  return (
    <>
      <HeroSection />
      <Content />
      <AskQuestion/>
    </>
  );
}
