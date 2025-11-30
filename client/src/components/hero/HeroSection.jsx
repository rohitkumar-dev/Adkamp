import React from "react";
import { Aurora } from "../index";
import ResponsiveHeroCard from "../clipimage/ClipHero";
import heroImg from "../../assets/hero.jpg";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden  flex flex-col items-center justify-start pb-16">
      {/* Aurora Background Only For Hero */}
      <div className="absolute inset-0 h-full">
        <Aurora
          colorStops={["#FF7518", "#000000", "#FF7518"]}
          blend={2}
          amplitude={0.2}
          speed={0.3}
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 text-white text-center px-4 mt-24 md:mt-32">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight">
          Managing Your Solutions
        </h1>

        <h2 className="text-xl sm:text-2xl md:text-4xl mt-6">
          Perspective <span className="text-amber-500">|</span> Process{" "}
          <span className="text-amber-500">|</span> Productivity
        </h2>
      </div>

      {/* Hero Image Section */}
      <div className="relative z-10 flex justify-center w-full mt-12 md:mt-16">
        <ResponsiveHeroCard imageSrc={heroImg} />
      </div>
    </section>
  );
}
