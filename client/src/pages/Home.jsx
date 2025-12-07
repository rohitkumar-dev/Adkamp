import React from "react";
// import HeroSection from "../components/hero/HeroSection"
// import AboutSection from "../components/about/AboutSection"
// import ServicesSection from "../components/services/ServiceSection"
// import ClientCardsSection from "../components/clientcards/ClientCardsSection"
// import ProjectSection from "../components/projects/ProjectSection"
// import AchievementSection from "../components/achievement/AchievementSection"
// import TestimonialSection from "../components/testimonial/TestimonialSection"
// import WorkProcess from "../components/workprocess/WorkProcess"
// import BlogSection from "../components/blog/BlogSection"
// import ContactSection from "../components/contact/ContactSection"
// import BrandSlider from "../components/brands/BrandSlider"

import {
  AboutSection,
  ServicesSection,
  ClientCardsSection,
  ProjectSection,
  AchievementSection,
  TestimonialSection,
  WorkProcess,
  BlogSection,
  ContactSection,
  BrandSlider,
  HeroSection,
} from "../components";
import ProjectSection2 from "../components/projects/ProjectSection2";

function Home() {
  return (
    <div className="">
      <HeroSection/>
      <AboutSection />
      <ServicesSection />
      <ClientCardsSection />
      <ProjectSection />
      <ProjectSection2 />
      <AchievementSection />
      <TestimonialSection />
      <WorkProcess />
      <BlogSection />
      <ContactSection />
      <BrandSlider />
    </div>
  );
}

export default Home;
