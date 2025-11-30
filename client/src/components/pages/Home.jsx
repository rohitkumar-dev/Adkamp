import React from "react";
import { Aurora } from "../index";
import ClipBR from "../clipimage/ClipBR";
import heroImg from "../../assets/hero.jpg"
import ClipHero from "../clipimage/ClipHero";
import ResponsiveHeroCard from "../clipimage/ClipHero";
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
import TestimonialSection1 from "../testimonial/TestimonialSection1";


function Home() {
  return (

    <div className="relative h-scree  overflow-hidden bg-black">
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#FF7518", "#000000", "#FF7518"]}
          blend={2}
          amplitude={0.2}
          speed={0.3}
        />
      </div>

      {/* content */}
      <div className="relative ">
        <div className="text-white text-center px-2">
          <h1 className=" text-5xl md:text-7xl font-medium md:font-bold mt-15 md:mt-20">Managing Your Solutions</h1>
          <h2 className="text-2xl md:text-5xl mt-7 md:mt-10 text-center">Perspective <span className="text-amber-500">|</span> Process <span className="text-amber-500">|</span> Productivity</h2>
        </div>
        







          <div className="min-h-screen py-15 flex justify-center">
             <ResponsiveHeroCard 
                imageSrc={heroImg} 
             />
          </div>




      </div>


<AboutSection/>
<ServicesSection/>
<ClientCardsSection/>
<ProjectsSection/>
<AchievementSection/>
<TestimonialSection/>
<TestimonialSection1/>
<WorkProcess/>
<BlogSection/>
<ContactSection/>
<BrandSlider/>


    </div>
  );
}

export default Home;
