import React from "react";
import {
  FiCamera,
  FiMonitor,
  FiTrendingUp,
  FiBarChart2,
  FiLayers,
  FiFeather,
  FiUsers,
  FiCheckCircle,
} from "react-icons/fi";

export default function ServicesPage() {
  return (
    <div className="w-full bg-white text-[#1A1A1A] font-sans">

      {/* ================= HERO (SMALL) ================= */}
      <section className="w-full bg-[#faa719] text-white py-14 px-6 md:px-12 rounded-b-3xl shadow">
        <div className="max-w-5xl mx-auto text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight">
            Our <span className="text-black">Services</span>
          </h1>
          <p className="text-white/90 mt-3 md:text-lg max-w-xl">
            High-impact creative and marketing services crafted to help brands grow fast.
          </p>
        </div>
      </section>

      {/* ================= 6 SERVICES ================= */}
      <section className="py-14 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">What We Offer</h2>
          <p className="text-gray-600 mt-2">Six core services that drive growth.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6">
          {[
            { icon: <FiCamera />, title: "Photography" },
            { icon: <FiMonitor />, title: "Video Production" },
            { icon: <FiTrendingUp />, title: "Digital Marketing" },
            { icon: <FiBarChart2 />, title: "Brand Strategy" },
            { icon: <FiFeather />, title: "Content Creation" },
            { icon: <FiLayers />, title: "Graphic Design" },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-5 shadow-sm hover:shadow-md transition text-center"
            >
              <div className="text-[#faa719] text-3xl mb-3">{service.icon}</div>
              <h3 className="font-semibold text-lg">{service.title}</h3>
              <p className="text-gray-600 text-sm mt-1">
                Premium creative solutions designed for modern brands.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US (4 BLOCKS) ================= */}
      <section className="py-14 px-6 md:px-12 bg-[#FFF8E8]">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="text-gray-600 mt-2">Four reasons brands trust ADKAMP.</p>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: <FiUsers />, title: "Expert Team" },
            { icon: <FiTrendingUp />, title: "Growth Focused" },
            { icon: <FiCheckCircle />, title: "High Quality" },
            { icon: <FiLayers />, title: "Creative Vision" },
          ].map((item, i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-md transition text-center"
            >
              <div className="text-[#faa719] text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm mt-1">
                We deliver work that actually moves your brand forward.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= 4 STEP PROCESS ================= */}
      <section className="py-14 px-6 md:px-12">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
          <p className="text-gray-600 mt-2">Clear and transparent workflow.</p>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discovery" },
            { step: "02", title: "Strategy" },
            { step: "03", title: "Execution" },
            { step: "04", title: "Optimization" },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white border rounded-2xl p-6 shadow-sm hover:shadow-md transition text-center"
            >
              <h3 className="text-3xl font-extrabold text-[#faa719]">{s.step}</h3>
              <h4 className="font-semibold text-lg mt-2">{s.title}</h4>
              <p className="text-gray-600 text-sm mt-1">
                Effective and streamlined workflow for the best results.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-6 md:px-12 text-center bg-[#fff7eb]">
        <h2 className="text-3xl md:text-4xl font-extrabold">
          Ready to Start Your Project?
        </h2>
        <p className="text-gray-600 mt-2 max-w-xl mx-auto">
          Let’s create something powerful for your brand.
        </p>

        <button className="mt-6 px-10 py-4 bg-[#faa719] text-white rounded-full font-semibold shadow-md hover:bg-[#f89b09] transition">
          Contact Us
        </button>
      </section>
    </div>
  );
}
