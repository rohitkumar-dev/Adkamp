import React from "react";
import { useOutletContext } from "react-router-dom";

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
  // Get modal functions from App.jsx
  const { openContact, openDemo } = useOutletContext();

  return (
    <div>
      <HeroSection onContact={openContact} onDemo={openDemo} />
      <AboutSection />
      <ServicesSection />
      <ProjectSection2 />
      <AchievementSection />
      {/* <TestimonialSection /> */}
      <BrandSlider />
    </div>
  );
}

export default Home;
