import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import ScrollVelocity from '../reactbits/ScrollVelocity';

export default function ClientCardsSection() {
  const marqueeText = [
    "Working area Skills and web developemnt",
    // "&",
    // "Working area Skills",
    // "&",
    // "Working area Skills",
    // "&",
    // "Working area Skills",
  ];

  const skills = [
    {
      title: "Dribbble",
      percent: "90%",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/wa-dribbble.webp",
    },
    {
      title: "Behance",
      percent: "85%",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/wa-behance.webp",
    },
    {
      title: "Figma",
      percent: "90%",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/skill6.png",
    },
    {
      title: "Bootstrap",
      percent: "70%",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/wa-bootstrap.webp",
    },
    {
      title: "Sketch",
      percent: "90%",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/wa-sketch.webp",
    },
    {
      title: "XD",
      percent: "55%",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/wa-xd.webp",
    },
  ];

  return (
    <section className="w-full bg-black text-white pb-20 overflow-hidden">
      {/* ------------------ TOP MOVING MARQUEE TEXT ------------------ */}
      {/* <div className="relative w-full overflow-hidden border-y bg-white border-gray-800 py-6 select-none">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-10 hover:[animation-play-state:paused]">
          {marqueeText.map((t, i) => (
            <span
              key={i}
              className="text-4xl md:text-6xl font-extrabold uppercase tracking-widest text-lime-400"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="animate-marquee2 absolute top-6 left-0 whitespace-nowrap flex items-center gap-10 hover:[animation-play-state:paused]">
          {marqueeText.map((t, i) => (
            <span
              key={"dup" + i}
              className="text-4xl md:text-6xl font-extrabold uppercase tracking-widest text-lime-400"
            >
              {t}
            </span>
          ))}
        </div>
      </div> */}


      
  
<ScrollVelocity
//   texts={['React Bits', 'Scroll Down']} 
  texts={['Amit is the pubg player']} 
  velocity={20} 
  className="custom-scroll-text bg-white text-orange-600 pt-5 pb-6"
/>



      {/* ------------------ SCROLLING SKILL CARDS ------------------ */}
      <div className="mt-16 px-4 md:px-10">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={2}
          autoplay={{ delay: 0, disableOnInteraction: false }}
          speed={4000}
          loop
          breakpoints={{
            300: { slidesPerView: 2 },
            640: { slidesPerView: 3 },
            1024: { slidesPerView: 5 },
          }}
          className="cursor-pointer"
        >
          {skills.map((skill, i) => (
            <SwiperSlide key={i}>
              <div
                className={`my-10 rounded-3xl bg-[#111] p-6 flex flex-col items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-[0_0_25px_rgba(180,255,120,0.6)] ${
                  skill.glow ? "shadow-[0_0_30px_rgba(180,255,120,0.6)]" : ""
                }`}
              >
                <img src={skill.img} alt={skill.title} className="w-16 h-16 mb-4" />
                <h3 className="text-2xl font-bold mb-1">{skill.percent}</h3>
                <p className="text-gray-300 text-sm">{skill.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ------------------ MARQUEE ANIMATION KEYFRAMES ------------------ */}
      <style>
        {`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0); }
        }
      `}
      </style>
    </section>
  );
}
