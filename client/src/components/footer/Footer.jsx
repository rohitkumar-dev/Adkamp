import React from "react";
import {
  FaFacebookF,
  FaYoutube,
  FaLinkedinIn,
  FaInstagram,
  FaPaperPlane,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full bg-amber-600 rounded-3xl p-8 md:p-16">
      {/* === Row 1: Heading + Socials === */}
      <div className="w-full grid md:grid-cols-2 gap-10">
        {/* Left Text Block */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">
            Let’s Talk
          </h2>

          <p className="mt-6 text-gray-700 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-8">
            {[FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram].map(
              (Icon, i) => (
                <span
                  key={i}
                  className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl hover:bg-gray-800 transition"
                >
                  <Icon />
                </span>
              )
            )}
          </div>
        </div>

        {/* Newsletter Block (Desktop visible here, mobile moved down) */}
        <div className="hidden md:block">
          <h5 className="text-lg font-semibold mb-4">
            Get the latest inspiration & insights
          </h5>

          <div className="relative w-full max-w-md">
            <input
              type="email"
              placeholder="Your Email address"
              className="w-full h-14 rounded-full px-6 pr-16 bg-white outline-none shadow"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
              <FaPaperPlane size={18} />
            </button>
          </div>
        </div>
      </div>

      {/* === Row 2 + Row 3: Columns (Mobile Grid 2x2) === */}
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
        {/* Column 1 – Service Links */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Address</h4>
          <ul className="space-y-2 text-gray-800">
            <li>Web Development</li>
            <li>UX / UI Design</li>
            <li>Mobile Application</li>
            <li>Brand Identity</li>
            <li>Cyber Security</li>
          </ul>
        </div>

        {/* Column 2 – Office Address */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Address</h4>
          <p className="text-gray-800 leading-relaxed">
            4140 Parker Rd. <br />
            Allentown, New Mexico 31134
          </p>
        </div>

        {/* Column 3 – Support */}
        <div>
          <h4 className="text-lg font-semibold mb-4">Support</h4>
          <p className="text-gray-800 leading-relaxed">
            needhelp@company.com <br />
            (+123) 456789 00
          </p>
        </div>

        {/* Empty Column for layout balance on large screens */}
        <div></div>
      </div>

      {/* === Mobile Newsletter (Full Width) === */}
      <div className="mt-10 md:hidden">
        <h5 className="text-lg font-semibold mb-4">
          Get the latest inspiration & insights
        </h5>

        <div className="relative w-full max-w-full">
          <input
            type="email"
            placeholder="Your Email address"
            className="w-full h-14 rounded-full px-6 pr-16 bg-white outline-none shadow"
          />
          <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black text-white w-10 h-10 rounded-full flex items-center justify-center">
            <FaPaperPlane size={18} />
          </button>
        </div>
      </div>

      {/* === Copyright === */}
      <div className="text-center mt-16 text-gray-700 text-sm">
        © Copyright Reserved by Digitaal.com
      </div>
    </footer>
  );
}
