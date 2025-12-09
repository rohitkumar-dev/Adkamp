import React, { useState } from "react";
import { NavLink } from "react-router-dom";


export default function Header() {
  const [open, setOpen] = useState(false);

  const activeClass = ({ isActive }) =>
    `hover:text-orange-500 transition ${
      isActive ? "text-amber-600 font-semibold" : "text-black"
    }`;

  return (
    <header className="sticky top-0 z-50 bg-gray-100 shadow-sm">
      <nav className="px-5 md:px-10 h-20 flex items-center justify-between">
        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          <div className="flex items-center gap-1">
            <span className="text-amber-500 text-3xl font-black font-">AD</span>
            <span className="text-black text-3xl font-black">KAMP</span>
          </div>

          <div className="hidden md:block w-[3px] h-10 bg-amber-500 rounded-full"></div>

          <div className="hidden md:flex flex-col leading-tight ml-2">
            <span className="text-black text-[15px]">Marketing</span>
            <span className="text-black text-[15px]">& More…</span>
          </div>
        </NavLink>

        {/* DESKTOP MENU */}
        <ul className="hidden md:flex items-center gap-10 text-lg font-medium">
          <NavLink to="/" className={activeClass}>
            Home
          </NavLink>
          <NavLink to="/about" className={activeClass}>
            About us
          </NavLink>
          <NavLink to="/services" className={activeClass}>
            Services
          </NavLink>
          <NavLink to="/projects" className={activeClass}>
            Projects
          </NavLink>

          <NavLink to="/contact" className={activeClass}>
            Contact
          </NavLink>
          
        </ul>

        {/* MOBILE MENU ICON */}
        <button onClick={() => setOpen(!open)} className="md:hidden block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8 text-black"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <ul className="md:hidden flex flex-col gap-5 bg-gray-200 px-5 py-6 text-lg font-medium shadow-inner">
          <NavLink
            to="/"
            className={activeClass}
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/services"
            className={activeClass}
            onClick={() => setOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/projects"
            className={activeClass}
            onClick={() => setOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={activeClass}
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={activeClass}
            onClick={() => setOpen(false)}
          >
            About us
          </NavLink>
        </ul>
      )}
    </header>
  );
}
