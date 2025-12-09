import React from "react";
import managerImg from "../../assets/manager.jpg";

export default function AboutSection() {
  return (
    <section className="w-full bg-amber-50 py-15 px-4 md:px-10 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative">
        {/* LEFT SIDE — IMAGE & FLOATING ELEMENTS */}
        <div className="relative flex items-center justify-center lg:justify-start">
          {/* Small Star Icon + About Us */}
          <div className="absolute top-0 left-0 flex items-center gap-2">
            {/* <img
              src="https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/Soft-Star-2.png"
              alt="star"
              className="w-5 h-5"
            /> */}
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E17100"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
            <p className="text-gray-800 font-medium text-2xl">About Us</p>
          </div>

          {/* Main Floating Image */}
          <div className="relative mt-15">
            <img
              // src="https://images.pexels.com/photos/34955053/pexels-photo-34955053.jpeg"
              // src="https://images.pexels.com/photos/34285502/pexels-photo-34285502.jpeg"
              src="https://images.pexels.com/photos/13464092/pexels-photo-13464092.jpeg"
              alt="about"
              className="w-80 h-64 md:w-100 md:h-100 object-cover rounded-3xl "
            />

            {/* Floating ellipse */}
            {/* <span
              className="absolute -bottom-6 -left-6 w-16 h-16 bg-contain bg-no-repeat animate-[float_5s_ease-in-out_infinite]"
              style={{
                backgroundImage:
                  "url(https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/footer-ellipse1.png)",
              }}
            ></span> */}
          </div>
        </div>

        {/* RIGHT SIDE — TEXT CONTENT */}
        <div className="relative">
          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            We deliver innovative ideas to elevate your presence{' '}
            <span className="text-amber-600">and </span>
            <span className="text-amber-600">sharpen your brand</span>
          </h2>

          {/* Subtitle paragraph */}
          <p className="mt-6 text-gray-700 text-base md:text-lg max-w-xl leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim.
          </p>

          {/* Read More button */}
          <div className="mt-8">
            <button className="bg-black text-white px-7 py-3 rounded-full text-base font-semibold flex items-center gap-3 hover:bg-gray-900 transition">
              Read More
              <span className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center"></span>
            </button>
          </div>

          {/* Profile + Stats */}
          <div className="mt-12 flex items-center gap-2 md:gap-15 ">
            {/* Profile */}
            <div className="flex items-center gap-3">
              <img
                // src="https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/test1.png"
                src={managerImg}
                alt="Virat Kolhi"
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="text-gray-900 font-semibold text-sm md:text-lg">Virat Kolhi</h4>
                <p className="text-gray-600 text-xs md:text-sm">Manager</p>
              </div>
            </div>

            {/* Stats */}
            <div className="ml-4">
              <h3 className="text-6xl md:text-7xl font-bold text-amber-600 leading-none flex items-center gap-2">
                10
                <span className="text-4xl text-gray-900">+</span>
              </h3>
              <p className="text-gray-700 text-sm max-w-[150px] mt-2">
                Years of Excellence in Digital Solutions and Revolutionizing Brand
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Float Animation Keyframes */}
      {/* <style>
        {`
          @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-12px); }
          }
        `}
      </style> */}
    </section>
  );
}
