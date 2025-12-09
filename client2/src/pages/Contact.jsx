import React from "react";
import { FiMail, FiPhone, FiMapPin, FiUser, FiMessageCircle } from "react-icons/fi";

export default function Contact() {
  return (
    <div className="w-full bg-white text-[#1A1A1A] font-sans">

      {/* ================= HEADER / HERO ================= */}
      <section className="bg-[#faa719] text-white py-20 px-6 md:px-12 rounded-b-3xl shadow-lg">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Let’s Start Your Project
          </h1>
          <p className="mt-4 text-lg max-w-xl text-white/90">
            Tell us about your goals. Our team will contact you within 24 hours.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-6xl mx-auto px-6 md:px-12 py-20 grid md:grid-cols-2 gap-16">

        {/* LEFT: FORM */}
        <div className="space-y-6">
          <h2 className="text-3xl font-bold">Send us a message</h2>

          <div className="space-y-4">

            {/* Name Input */}
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition">
              <FiUser className="text-[#faa719] text-xl" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-transparent outline-none"
              />
            </div>

            {/* Email Input */}
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition">
              <FiMail className="text-[#faa719] text-xl" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-transparent outline-none"
              />
            </div>

            {/* Phone Input */}
            <div className="flex items-center gap-3 border rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition">
              <FiPhone className="text-[#faa719] text-xl" />
              <input
                type="text"
                placeholder="Phone Number"
                className="w-full bg-transparent outline-none"
              />
            </div>

            {/* Message Box */}
            <div className="flex items-start gap-3 border rounded-xl px-4 py-3 shadow-sm hover:shadow-md transition">
              <FiMessageCircle className="text-[#faa719] text-xl mt-1" />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full bg-transparent outline-none resize-none"
              ></textarea>
            </div>

            <button className="w-full py-4 rounded-xl bg-[#faa719] text-white font-semibold text-lg shadow-md hover:shadow-lg hover:bg-[#f89b09] transition">
              Submit Message
            </button>

          </div>
        </div>

        {/* RIGHT: CONTACT INFO */}
        <div className="space-y-10">
          <h2 className="text-3xl font-bold">Contact Information</h2>
          <p className="text-gray-600 max-w-md">
            Prefer direct contact? Reach out to us using the details below.
          </p>

          <div className="space-y-6">

            {/* Info Block */}
            <div className="flex items-start gap-4">
              <div className="p-4 bg-[#fff0d6] rounded-xl shadow">
                <FiMail className="text-[#faa719] text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Email</h4>
                <p className="text-gray-600">contact@adkamp.com</p>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="p-4 bg-[#fff0d6] rounded-xl shadow">
                <FiPhone className="text-[#faa719] text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Phone</h4>
                <p className="text-gray-600">+91 98765 43210</p>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-start gap-4">
              <div className="p-4 bg-[#fff0d6] rounded-xl shadow">
                <FiMapPin className="text-[#faa719] text-2xl" />
              </div>
              <div>
                <h4 className="text-lg font-semibold">Office</h4>
                <p className="text-gray-600">3rd Floor, Creative Plaza, South Delhi, India 110030</p>
              </div>
            </div>

          </div>

          {/* MAP */}
          <div className="rounded-2xl overflow-hidden shadow-xl h-64">
            <iframe
              title="Adkamp Map"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.03102103114!2d77.205678!3d28.527280!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce255a7857d2b%3A0xdeb6e486f937ddfb!2sSouth%20Delhi!5e0!3m2!1sen!2sin!4v1696852045324"
            ></iframe>
          </div>

        </div>

      </section>
    </div>
  );
}
