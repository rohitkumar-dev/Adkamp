import React from "react";
import {
  FiAward,
  FiUsers,
  FiTarget,
  FiCheckCircle,
} from "react-icons/fi";

export default function AboutPage() {
  return (
    <div className="w-full font-sans bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="w-full bg-amber-600 text-white py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
          
          {/* TEXT */}
          <div className="flex-1 space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold leading-tight">
              About <span className="text-yellow-300">ADKAMP</span>
            </h1>
            <p className="text-white/90 md:text-lg leading-relaxed">
              We are a creative media marketing agency helping brands grow
              through powerful visuals, strategy, and digital experiences.
            </p>

            <button className="px-6 py-3 rounded-md bg-white text-amber-600 font-semibold hover:bg-yellow-50 transition">
              Contact Us
            </button>
          </div>

          {/* IMAGE */}
          <div className="flex-1 flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1598218457842-14e6c76e1473?auto=format&fit=crop&w=600&q=80"
              className="w-64 h-64 object-cover rounded-xl shadow-xl"
              alt="About Team"
            />
          </div>
        </div>
      </section>

      {/* ================= COMPANY OVERVIEW ================= */}
      <section className="py-16 px-4 md:px-10 bg-[#FFF8E8]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
            className="rounded-xl shadow-lg"
            alt=""
          />

          {/* TEXT */}
          <div className="space-y-5">
            <h2 className="text-3xl md:text-4xl font-bold">
              Our Mission & Vision
            </h2>

            <p className="text-gray-700 leading-relaxed">
              At ADKAMP, we combine creativity and strategy to deliver
              high-impact digital marketing solutions. Our team works closely
              with brands to elevate their presence and create long-lasting
              connections with their audience.
            </p>

            <div className="flex gap-4 mt-6">
              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                <FiTarget className="text-amber-600 text-xl" />
                <span className="font-semibold">Brand Strategy</span>
              </div>

              <div className="flex items-center gap-2 bg-white px-4 py-3 rounded-lg shadow-sm">
                <FiCheckCircle className="text-amber-600 text-xl" />
                <span className="font-semibold">Creative Execution</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= OUR VALUES ================= */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Our Core Values</h2>
          <p className="text-gray-600">What drives our team every day.</p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          {[
            { icon: <FiTarget />, title: "Innovation", text: "We build modern, creative solutions." },
            { icon: <FiUsers />, title: "Teamwork", text: "Collaboration leads to better outcomes." },
            { icon: <FiAward />, title: "Quality", text: "We ensure top-notch results." },
            { icon: <FiCheckCircle />, title: "Integrity", text: "We deliver with honesty and transparency." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
              <div className="text-amber-600 text-3xl mb-3">{item.icon}</div>
              <h3 className="font-semibold text-xl mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= TEAM ================= */}
      <section className="py-16 px-4 md:px-10 bg-[#FFF8E8]">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Meet Our Team</h2>
          <p className="text-gray-600">The brilliant creative minds behind our work.</p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Sarah Johnson", role: "Creative Director" },
            { name: "Mark Thompson", role: "Marketing Lead" },
            { name: "Aisha Patel", role: "Brand Strategist" },
            { name: "David Kim", role: "Photographer" },
          ].map((member, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow overflow-hidden hover:shadow-md transition text-center"
            >
              <img
                src={`https://randomuser.me/api/portraits/${i % 2 === 0 ? "women" : "men"}/${10 + i}.jpg`}
                alt={member.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-5">
                <h3 className="font-bold text-lg">{member.name}</h3>
                <p className="text-gray-500 text-sm">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= AWARDS ================= */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">Awards & Achievements</h2>
          <p className="text-gray-600">Recognitions we are proud of.</p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((n) => (
            <div
              key={n}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center"
            >
              <FiAward className="text-amber-600 text-4xl mx-auto mb-3" />
              <h3 className="font-semibold text-lg">Award Title {n}</h3>
              <p className="text-gray-600 text-sm">202{n}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-4 md:px-10 bg-amber-50 text-black">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Let's Work Together</h2>
          <p className="text-gray-600/90 md:text-lg">
            Ready to elevate your brand? Let’s create something amazing.
          </p>
          <button className="px-8 py-3 bg-amber-600 text-white rounded-md font-semibold hover:bg-yellow-50 transition">
            Get In Touch
          </button>
        </div>
      </section>

    </div>
  );
}
