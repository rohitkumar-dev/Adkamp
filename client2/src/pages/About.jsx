import React from "react";
import {
  FiTarget,
  FiTrendingUp,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function AboutPage() {
  return (
    <div className="w-full bg-white text-gray-900 font-sans">

      {/* ================= HERO ================= */}
      <section className="w-full py-16 px-6 md:px-12 bg-[#fff7e6]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
              We Build Brands That  
              <span className="text-amber-600"> Stand Out</span>
            </h1>

            <p className="mt-4 text-gray-700 md:text-lg">
              ADKAMP helps businesses grow using creative strategy, digital
              marketing, branding, and high-quality media production.
            </p>

            <p className="text-gray-600 mt-3">
              Our mission is simple:  
              <strong> turn your business into a memorable brand.</strong>
            </p>

            <button className="px-7 py-3 mt-6 bg-black text-white rounded-full font-semibold hover:bg-amber-600 transition">
              Start Your Project →
            </button>
          </div>

          {/* IMAGE */}
          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1598218457842-14e6c76e1473?auto=format&fit=crop&w=600&q=80"
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl shadow-xl"
              alt="Team"
            />
          </div>

        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 px-6 md:px-12 bg-[#fffaf0]">

        <h2 className="text-center text-3xl md:text-4xl font-extrabold">
          Why Brands Choose Us
        </h2>
        <p className="text-center text-gray-600 mt-2 mb-10">
          Clear strategy. Creative execution. Measurable growth.
        </p>

        {/* -------- MOBILE SLIDER -------- */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{ delay: 2200, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            slidesPerView={"auto"}
            centeredSlides={true}
            centeredSlidesBounds={true}
            spaceBetween={20}
            style={{ paddingBottom: "40px" }}
            className="flex justify-center"
          >
            {[
              {
                icon: <FiTarget />,
                title: "Strategy First",
                text: "Every project begins with a clear plan.",
              },
              {
                icon: <FiTrendingUp />,
                title: "Growth Focused",
                text: "Real results, not vanity metrics.",
              },
              {
                icon: <FiUsers />,
                title: "Expert Team",
                text: "Creative professionals & marketers.",
              },
              {
                icon: <FiCheckCircle />,
                title: "Reliable Output",
                text: "We deliver consistent, high-quality work.",
              },
            ].map((i, index) => (
              <SwiperSlide
                key={index}
                className="!w-[80%] sm:!w-[65%] flex justify-center"
              >
                <div className="bg-white rounded-2xl shadow p-6 text-center w-full">
                  <div className="text-amber-600 text-4xl mb-3">{i.icon}</div>
                  <h3 className="font-bold text-lg">{i.title}</h3>
                  <p className="text-gray-600 text-sm mt-1">{i.text}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* -------- DESKTOP GRID -------- */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[
            {
              icon: <FiTarget />,
              title: "Strategy First",
              text: "Every project begins with clarity.",
            },
            {
              icon: <FiTrendingUp />,
              title: "Growth Focused",
              text: "We create work that brings measurable results.",
            },
            {
              icon: <FiUsers />,
              title: "Expert Team",
              text: "Creative thinkers, strategists, marketers.",
            },
            {
              icon: <FiCheckCircle />,
              title: "Reliable Output",
              text: "Consistent delivery, strong communication.",
            },
          ].map((i, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow hover:shadow-lg transition text-center"
            >
              <div className="text-amber-600 text-4xl mb-4">{i.icon}</div>
              <h3 className="font-bold text-lg">{i.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{i.text}</p>
            </div>
          ))}
        </div>

      </section>

      {/* ================= TEAM SECTION ================= */}
      <section className="py-16 px-6 md:px-12 bg-white">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold mb-2">
          Meet Our Team
        </h2>
        <p className="text-center text-gray-600 mb-10">
          The people who bring creativity and strategy together.
        </p>

        {/* -------- MOBILE SLIDER TEAM -------- */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination]}
            loop={true}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            pagination={{ clickable: true }}
            slidesPerView={"auto"}
            centeredSlides={true}
            centeredSlidesBounds={true}
            spaceBetween={20}
            style={{ paddingBottom: "40px" }}
            className="flex justify-center"
          >
            {[
              {
                img: "https://randomuser.me/api/portraits/women/12.jpg",
                name: "Sarah Johnson",
                role: "Creative Director",
              },
              {
                img: "https://randomuser.me/api/portraits/men/15.jpg",
                name: "Mark Thompson",
                role: "Marketing Lead",
              },
              {
                img: "https://randomuser.me/api/portraits/women/18.jpg",
                name: "Aisha Patel",
                role: "Brand Strategist",
              },
              {
                img: "https://randomuser.me/api/portraits/men/20.jpg",
                name: "David Kim",
                role: "Photographer",
              },
            ].map((m, index) => (
              <SwiperSlide
                key={index}
                className="!w-[80%] sm:!w-[65%] flex justify-center"
              >
                <div className="text-center w-full">
                  {/* Circle Photo */}
                  <img
                    src={m.img}
                    className="w-28 h-28 rounded-full mx-auto object-cover shadow"
                  />

                  {/* Card */}
                  <div className="bg-white shadow p-5 rounded-2xl mt-3">
                    <h3 className="font-bold text-lg">{m.name}</h3>
                    <p className="text-gray-600 text-sm">{m.role}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* -------- DESKTOP GRID -------- */}
        <div className="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-10 max-w-6xl mx-auto">
          {[
            {
              img: "https://randomuser.me/api/portraits/women/12.jpg",
              name: "Sarah Johnson",
              role: "Creative Director",
            },
            {
              img: "https://randomuser.me/api/portraits/men/15.jpg",
              name: "Mark Thompson",
              role: "Marketing Lead",
            },
            {
              img: "https://randomuser.me/api/portraits/women/18.jpg",
              name: "Aisha Patel",
              role: "Brand Strategist",
            },
            {
              img: "https://randomuser.me/api/portraits/men/20.jpg",
              name: "David Kim",
              role: "Photographer",
            },
          ].map((m, index) => (
            <div key={index} className="text-center">
              <img
                src={m.img}
                className="w-32 h-32 rounded-full mx-auto object-cover shadow-lg"
              />
              <h3 className="mt-4 text-xl font-bold">{m.name}</h3>
              <p className="text-gray-600">{m.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
