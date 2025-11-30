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
    <div className="flex w-full p-3 md:p-5">
    <footer className="w-full bg-amber-500 rounded-3xl p-8 md:pt-12 ">
      {/* === Row 1: Heading + Socials === */}
      <div className="w-full grid md:grid-cols-2 gap-10">
        {/* Left Text Block */}
        <div>
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900">Let’s Talk</h2>

          <p className="mt-6 text-gray-700 max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Social Icons */}
          <div className="flex items-center gap-4 mt-4">
            {[FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram].map((Icon, i) => (
              <span
                key={i}
                className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center text-xl hover:bg-gray-800 transition"
              >
                <Icon />
              </span>
            ))}
          </div>
        </div>

        {/* Newsletter Block (Desktop only) */}
        <div className="hidden md:block">
          <h5 className="text-lg font-semibold mb-4">Get the latest inspiration & insights</h5>

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

      {/* === Columns Section (Updated with Information Column) === */}
      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
        {/* Column 1 – Services */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Address</h4>
          <ul className="space-y-2 text-gray-800">
            <li>Web Development</li>
            <li>UX / UI Design</li>
            <li>Mobile Application</li>
            <li>Brand Identity</li>
            <li>Cyber Security</li>
          </ul>
        </div>

        {/* Column 2 – Information */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Information</h4>
          <ul className="space-y-2 text-gray-800">
            <li>About Us</li>
            <li>Our Team</li>
            <li>Pricing</li>
            <li>Case Studies</li>
            <li>FAQs</li>
          </ul>
        </div>

        {/* Column 3 – Support */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Support</h4>
          <p className="text-gray-800 leading-relaxed">
            needhelp@company.com <br />
            (+123) 456789 00
          </p>
        </div>

        {/* Column 4 – Location */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Location</h4>
          <p className="text-gray-800 leading-relaxed">
            4140 Parker Rd. <br />
            Allentown, New Mexico 31134
          </p>
        </div>
      </div>

      {/* === Mobile Newsletter (Full Width Below Columns) === */}
      <div className="mt-5 md:hidden">
        <h5 className="text-lg font-semibold mb-4">Get the latest inspiration & insights</h5>

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
      <div className="text-center md:text-end mt-5 text-gray-700 text-sm">© Copyright Reserved by Digitaal.com</div>
    </footer>
    </div>
  );
}
