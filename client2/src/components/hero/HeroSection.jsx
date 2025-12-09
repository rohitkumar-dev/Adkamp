import React, { useState } from "react";
import heroImg2 from "../../assets/image.png";
import RotatingText from "../reactbits/RotatingText";
import CountUp from "../reactbits/CountUp";

const HeroSection = ({ onContact, onDemo }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">
          {/* LEFT SIDE */}
          <div className="w-full md:w-1/2 text-center lg:text-left">
            <div className="inline-block bg-amber-100 text-amber-700 text-sm px-4 py-1 rounded-full font-medium mb-4">
              ✓ Trusted by 10,000+ customers
            </div>

            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Transform Your Business With{" "}
              <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center gap-2 md:gap-5 text-3xl md:text-5xl">
                <span className="font-extrabold">
                  <span className="text-amber-600">AD</span>KAMP
                </span>

                <RotatingText
                  texts={["MEDIA", "MARKETING", "AND", "MORE"]}
                  mainClassName="w-50 md:w-60 text-2xl md:text-3xl px-2 bg-amber-600 text-white overflow-hidden py-2 rounded-lg"
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
            </h1>

            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              The complete solution for modern businesses. Streamline your
              workflow, boost productivity, and grow faster.
            </p>

            {/* CTA BUTTONS */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <button
                onClick={onContact}
                className="px-6 py-3 bg-black text-white rounded-3xl text-sm font-medium hover:bg-amber-600 transition"
              >
                Contact now
              </button>

              <button
                onClick={onDemo}
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-3xl text-sm font-medium hover:bg-gray-100 transition flex items-center gap-2"
              >
                ▶ Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <h3 className="text-xl font-bold">
                  <CountUp from={0} to={99} duration={1} />%
                </h3>
                <p className="text-sm text-gray-500">Customer Satisfaction</p>
              </div>

              <div>
                <h3 className="text-xl font-bold">24/7</h3>
                <p className="text-sm text-gray-500">Support</p>
              </div>

              <div>
                <h3 className="text-xl font-bold">
                  <CountUp from={0} to={250} duration={1} />+
                </h3>
                <p className="text-sm text-gray-500">Projects</p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">
              {!isLoaded && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-xl"></div>
              )}

              <img
                src={heroImg2}
                onLoad={() => setIsLoaded(true)}
                className={`w-full max-w-md rounded-xl shadow-lg object-cover transition-opacity duration-500 ${
                  isLoaded ? "opacity-100" : "opacity-0"
                }`}
                alt="Team working together"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
