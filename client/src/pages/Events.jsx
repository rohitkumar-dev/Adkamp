import React, { useState } from "react";
import { FaCalendarAlt, FaUsers, FaMapMarkerAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const eventData = [
  {
    id: 1,
    title: "Corporate Annual Meet 2024",
    location: "Bangalore International Expo Center",
    attendees: "1200+ Attendees",
    date: "12 Dec 2024",
    images: [
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0",
      "https://images.unsplash.com/photo-1551836022-d5d88e9218df",
      "https://images.unsplash.com/photo-1526171118335-4aa1a1628435",
    ],
    description:
      "A large-scale annual meet for corporate leaders, featuring keynote speakers, leadership panels, and networking sessions.",
  },
  {
    id: 2,
    title: "Product Launch — TechNova X",
    location: "Hyderabad Convention Center",
    attendees: "500+ Attendees",
    date: "3 Oct 2024",
    images: [
      "https://images.unsplash.com/photo-1561489427-732f7c1b4f84",
      "https://images.unsplash.com/photo-1557804506-669a67965ba0",
      "https://images.unsplash.com/photo-1522199710521-72d69614c702",
    ],
    description:
      "A premium product unveiling event including LED stage setup, hologram displays, and media coverage.",
  },
  {
    id: 3,
    title: "Music Festival — Vibrance 2024",
    location: "Mumbai Open Arena",
    attendees: "8000+ Attendees",
    date: "17 Aug 2024",
    images: [
      "https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2",
      "https://images.unsplash.com/photo-1508973372-b8b6fa5dd070",
      "https://images.unsplash.com/photo-1506157786151-b8491531f063",
    ],
    description:
      "A massive outdoor EDM and cultural festival featuring top Indian and international DJs with custom lighting design.",
  },
];

// Mini carousel component inside each event card
function EventCarousel({ images }) {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % images.length);
  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="relative w-full h-56 sm:h-64 rounded-2xl overflow-hidden">
      <img
        src={images[index]}
        className="w-full h-full object-cover transition-all duration-500"
      />

      {/* Arrows */}
      <button
        onClick={prev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={next}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/70 hover:bg-white text-black p-2 rounded-full shadow"
      >
        <FaChevronRight />
      </button>
    </div>
  );
}

export default function Events() {
  return (
    <div className="w-full bg-white">

      {/* ===========================
          🔥 HERO SECTION
      ============================ */}
      <section className="bg-amber-600 text-white py-20 px-6 ">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold">Our Events</h1>
          <p className="text-lg md:text-xl max-w-2xl mt-4 opacity-90">
            We manage end-to-end offline events, exhibitions, brand activations,
            concerts, corporate summits, and launch shows — bringing brands and
            audiences together.
          </p>
        </div>
      </section>

      {/* ===========================
          🎭 EVENT CATEGORIES
      ============================ */}
      <section className="py-14 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
            Event Categories
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-5">
            {[
              "Corporate Events",
              "Product Launches",
              "Music Festivals",
              "Brand Activations",
              "Award Nights",
            ].map((cat) => (
              <div
                key={cat}
                className="bg-white border shadow-sm rounded-xl py-4 text-center text-sm font-semibold hover:bg-amber-500 hover:text-white transition cursor-pointer"
              >
                {cat}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          📸 EVENT SHOWCASE
      ============================ */}
      <section className="py-10 px-6 bg-gray-50 rounded-3xl">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-gray-900">
            Featured Events
          </h2>

          <div className="grid gap-10">
            {eventData.map((event) => (
              <div
                key={event.id}
                className="bg-white rounded-3xl border shadow-sm p-6 md:p-8"
              >
                {/* Carousel */}
                <EventCarousel images={event.images} />

                {/* EVENT CONTENT */}
                <div className="mt-6 space-y-3">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900">
                    {event.title}
                  </h3>

                  <p className="text-gray-700 text-sm md:text-base max-w-2xl">
                    {event.description}
                  </p>

                  <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                    <span className="flex items-center gap-2">
                      <FaMapMarkerAlt /> {event.location}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaUsers /> {event.attendees}
                    </span>
                    <span className="flex items-center gap-2">
                      <FaCalendarAlt /> {event.date}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          ⭐ EVENT STATS
      ============================ */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
          {[
            { label: "Events Managed", value: "150+" },
            { label: "Brands Served", value: "70+" },
            { label: "Cities Covered", value: "22" },
            { label: "Team Strength", value: "40+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-amber-600">{stat.value}</p>
              <p className="text-gray-600 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===========================
          🤝 PARTNERS
      ============================ */}
      <section className="py-14 px-6 bg-gray-50 rounded-3xl">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">
            Brands We've Worked With
          </h2>

          <div className="flex flex-wrap justify-center gap-8 opacity-80">
            {["Nike", "Pepsi", "Spotify", "Zomato", "Tata"].map((b) => (
              <span key={b} className="text-lg font-semibold">
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===========================
          📞 CTA SECTION
      ============================ */}
      <section className="py-20 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold">
            Ready to Host Your Next Big Event?
          </h2>
          <p className="text-gray-600 mt-4">
            We help brands create unforgettable event experiences.
          </p>

          <button className="mt-6 bg-amber-600 text-white px-6 py-3 rounded-xl shadow hover:bg-amber-700 transition">
            Plan an Event
          </button>
        </div>
      </section>

    </div>
  );
}
