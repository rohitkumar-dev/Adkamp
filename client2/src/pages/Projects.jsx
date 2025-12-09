// src/pages/Projects.jsx
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

export default function Projects() {
  const categories = ["All", "Branding", "Marketing", "Design"];
  const [active, setActive] = useState("All");

  const projects = [
    {
      id: 1,
      title: "Mahakumbh Mela Branding",
      category: "Branding",
      description:
        "Large-scale festival branding, visual identity, and campaign design for a landmark event.",
      images: [
        "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project1-550x550.jpg",
        "https://images.pexels.com/photos/167964/pexels-photo-167964.jpeg",
        "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg",
      ],
    },
    {
      id: 2,
      title: "Brand Identity System",
      category: "Design",
      description:
        "Complete brand identity overhaul with a consistent design language and rollout assets.",
      images: [
        "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project2-600x800.jpg",
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg",
        "https://images.pexels.com/photos/322887/pexels-photo-322887.jpeg",
      ],
    },
    {
      id: 3,
      title: "Traffic Growth Campaign",
      category: "Marketing",
      description:
        "Performance-first social and search campaigns that increased conversions by 230%.",
      images: [
        "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project4-600x800.jpg",
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg",
        "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg",
      ],
    },
    {
      id: 4,
      title: "Mahindra Corporate Visuals",
      category: "Branding",
      description:
        "Corporate storytelling, product visuals, and communication assets for internal + external campaigns.",
      images: [
        "https://images.pexels.com/photos/29130156/pexels-photo-29130156.jpeg",
        "https://images.pexels.com/photos/29130174/pexels-photo-29130174.jpeg",
        "https://images.pexels.com/photos/29130180/pexels-photo-29130180.jpeg",
      ],
    },
  ];

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="w-full bg-white text-[#1A1A1A] px-4 md:px-12 py-12 md:py-16 font-sans">

      {/* HERO */}
      <div className="max-w-6xl mx-auto text-center mb-8">
        <h1 className="text-3xl md:text-5xl font-extrabold">
          Our <span className="text-[#faa719]">Projects</span>
        </h1>
        <p className="mt-3 text-gray-600 max-w-3xl mx-auto">
          Selected work across branding, design and performance marketing — compact, purposeful and measurable.
        </p>
      </div>

      {/* FILTERS */}
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-3 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all
              ${active === cat
                ? "bg-[#faa719] text-white shadow-md"
                : "bg-white text-[#1A1A1A] border border-gray-200 hover:border-[#faa719] hover:text-[#faa719]"
              }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* ======== MOBILE: HORIZONTAL FULL-WIDTH SLIDER ======== */}
      <div className="md:hidden max-w-full">
        <Swiper
          modules={[Autoplay, Pagination]}
          loop={true}
          centeredSlides={true}
          centeredSlidesBounds={true}
          slidesPerView={"auto"}
          spaceBetween={20}
          autoplay={{ delay: 2800, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          className="!py-6"
        >
          {filtered.map((p) => (
            <SwiperSlide key={p.id} className="!w-[88%] flex justify-center">
              <article className="bg-white rounded-2xl shadow-lg overflow-hidden w-full">
                {/* image (first image) */}
                <div className="h-56 md:h-64 w-full overflow-hidden">
                  <img
                    src={p.images[0]}
                    alt={p.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="p-4">
                  <div className="text-sm text-[#faa719] font-semibold mb-1">{p.category}</div>
                  <h3 className="text-lg font-bold mb-2">{p.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{p.description}</p>
                </div>
              </article>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* ======== DESKTOP: GRID with inner Swiper per card ======== */}
      <div className="hidden md:block max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((p) => (
            <div key={p.id} className="rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition transform hover:-translate-y-1 bg-white">
              {/* inner Swiper for project images */}
              <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation={{
                  nextEl: `.next-${p.id}`,
                  prevEl: `.prev-${p.id}`
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                className="h-64"
                style={{ "--swiper-navigation-color": "#FAA719" }}
              >
                {p.images.map((src, idx) => (
                  <SwiperSlide key={idx}>
                    <img src={src} alt={`${p.title} ${idx + 1}`} className="w-full h-64 object-cover" />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* nav buttons (styled small, placed below) */}
              <div className="flex items-center justify-between px-4 pt-3">
                <div className="flex items-center">
                  <button className={`prev-${p.id} inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border shadow-sm hover:shadow-md transition`}>
                    <FiChevronLeft className="text-[#1A1A1A]" />
                  </button>
                  <button className={`next-${p.id} ml-3 inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border shadow-sm hover:shadow-md transition`}>
                    <FiChevronRight className="text-[#1A1A1A]" />
                  </button>
                </div>

                <span className="text-sm text-gray-500">{p.category}</span>
              </div>

              {/* content */}
              <div className="p-5">
                <h3 className="text-lg font-bold text-[#1A1A1A]">{p.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{p.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button className="px-8 py-3 bg-[#faa719] text-white font-bold rounded-full shadow-md hover:shadow-lg hover:bg-[#f89b09] transition">
            Start Your Project
          </button>
        </div>
      </div>
    </div>
  );
}
