import React from "react";
import AboutSection from "../about/AboutSection";
import ServicesSection from "../services/ServiceSection";
import ClientCardsSection from "../clientcards/ClientCardsSection";
import ProjectsSection from "../projects/ProjectSection";
import AchievementSection from "../achievement/AchievementSection";
import TestimonialSection from "../testimonial/TestimonialSection";
import WorkProcess from "../workprocess/WorkProcess";
import BlogSection from "../blog/BlogSection";
import ContactSection from "../contact/ContactSection";
import BrandSlider from "../brands/BrandSlider";
import HeroSection from "../hero/HeroSection";

function Home() {
  return (
    <div className="">
      <HeroSection/>
      <AboutSection />
      <ServicesSection />
      <ClientCardsSection />
      <ProjectsSection />
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
