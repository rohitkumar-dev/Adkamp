import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

export default function Footer2() {
  return (
    <div className="flex w-full p-2 md:p-5">
      <footer className="w-full bg-[#faa719] rounded-t-3xl p-6 md:p-10 text-white">

        {/* ================= HEADER ROW ================= */}
        <div className="w-full grid md:grid-cols-2 gap-8">

          {/* LEFT BLOCK */}
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold leading-tight">
              Let’s Build Something Great
            </h2>

            <p className="mt-4 text-white/90 max-w-md leading-relaxed">
              ADKAMP helps ambitious brands grow with strategy-driven creatives
              and performance-focused digital execution.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-4">
              {[
                { Icon: FaFacebookF, href: "https://facebook.com" },
                { Icon: FaYoutube, href: "https://youtube.com" },
                { Icon: FaLinkedinIn, href: "https://linkedin.com" },
                { Icon: FaInstagram, href: "https://instagram.com" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-black/80 text-white rounded-full flex items-center justify-center text-lg
                  hover:bg-black transition cursor-pointer"
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* RIGHT BLOCK (Newsletter Desktop) */}
          <div className="hidden md:block">
            <h5 className="text-lg font-semibold mb-3">
              Get insights & marketing inspiration
            </h5>

            <div className="relative w-full max-w-md">
              <input
                type="email"
                placeholder="Your Email Address"
                className="w-full h-12 rounded-full px-5 pr-14 bg-white text-gray-700 outline-none shadow-md"
              />
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full 
                flex items-center justify-center hover:bg-gray-900 transition"
              >
                <FaPaperPlane size={16} />
              </button>
            </div>
          </div>

        </div>

        {/* ================= LINKS ROW ================= */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

          {/* Column 1 — Company */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Company</h4>
            <ul className="space-y-1.5 text-white/90">
              {[
                { label: "About ADKAMP", href: "/about" },
                { label: "Our Team", href: "/team" },
                { label: "Our Approach", href: "/approach" },
                { label: "Brand Philosophy", href: "/philosophy" },
                { label: "Careers", href: "/careers" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="relative w-fit cursor-pointer group transition-all duration-300 hover:-translate-y-0.5"
                >
                  <a href={item.href}>{item.label}</a>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white/90 group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2 — Services */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <ul className="space-y-1.5 text-white/90">
              {[
                { label: "Brand Strategy", href: "/services/brand-strategy" },
                { label: "Creative Production", href: "/services/creative-production" },
                { label: "Performance Marketing", href: "/services/performance-marketing" },
                { label: "Social Media Management", href: "/services/social-media" },
                { label: "Content Creation", href: "/services/content-creation" },
              ].map((item, i) => (
                <li
                  key={i}
                  className="relative w-fit cursor-pointer group transition-all duration-300 hover:-translate-y-0.5"
                >
                  <a href={item.href}>{item.label}</a>
                  <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-white/90 group-hover:w-full transition-all duration-300"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-white/90 leading-relaxed">
              <a href="mailto:contact@adkamp.com" className="hover:underline">contact@adkamp.com</a> <br />
              <a href="tel:+919876543210" className="hover:underline">+91 98765 43210</a>
            </p>
          </div>

          {/* Column 4 — Location */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Office</h4>
            <p className="text-white/90 leading-relaxed">
              <a
                href="https://maps.google.com/?q=Creative+Plaza+South+Delhi+110030"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                3rd Floor, Creative Plaza, <br />
                South Delhi, India 110030
              </a>
            </p>
          </div>

        </div>

        {/* ================= MOBILE NEWSLETTER ================= */}
        <div className="mt-8 md:hidden">
          <h5 className="text-lg font-semibold mb-3">
            Get insights & marketing inspiration
          </h5>

          <div className="relative w-full">
            <input
              type="email"
              placeholder="Your Email Address"
              className="w-full h-12 rounded-full px-5 pr-14 bg-white text-gray-700 outline-none shadow-md"
            />
            <button
              className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center"
            >
              <FaPaperPlane size={16} />
            </button>
          </div>
        </div>

        {/* ================= COPYRIGHT ================= */}
        <div className="text-center md:text-end mt-6 text-white/90 text-sm">
          © {new Date().getFullYear()} ADKAMP. All Rights Reserved.
        </div>

      </footer>
    </div>
  );
}
