
import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Wade Warren",
    role: "DESIGNER",
    rating: 4,
    text:
      "We cannot say enough good things about the team... They took our vision and turned it into a stunning website.",
    avatar: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/test3.png",
  },
  {
    id: 2,
    name: "Theresa Webb",
    role: "DESIGNER",
    rating: 4,
    text:
      "From kickoff to launch, the communication was clear and the results were better than we imagined.",
    avatar: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/test1.png",
  },
  {
    id: 3,
    name: "Ralph Edwards",
    role: "DESIGNER",
    rating: 4,
    text:
      "They turned a rough idea into a polished digital experience. Smooth process from start to end.",
    avatar: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/test.jpg",
  },
];

function StarRow({ count = 5, filled = 4 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`inline-block text-sm ${i < filled ? "text-lime-400" : "text-gray-600"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default function TestimonialSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const active = testimonials[activeIndex];

  return (
    <section className="w-full bg-[#eceef3] text-white py-12 px-4 sm:px-6 md:py-20">
      <div className="max-w-6xl mx-auto rounded-2xl bg-[#090b10] border border-[#161821] px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-14 relative overflow-hidden">
        {/* Background decorative mesh */}
        <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full bg-[radial-gradient(circle,#1e293b,transparent_70%)] opacity-40" />

        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] items-start">
          {/* LEFT SIDE */}
          <div className="relative z-10 flex flex-col gap-5">
            <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 flex items-center gap-2">
              <span className="inline-block h-[1px] w-4 bg-lime-400" /> Testimonial
            </p>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
              Hear what others say
              <br /> about <span className="text-lime-400">partnering with us</span>
            </h2>

            <p className="text-xs sm:text-sm text-gray-400 max-w-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonummy nibh.
            </p>

            {/* Rating block */}
            <div className="mt-2 flex flex-col gap-3">
              <div className="flex items-end gap-3">
                <span className="text-4xl sm:text-6xl font-semibold leading-none">4.8</span>
                <div className="mb-2">
                  <StarRow />
                </div>
              </div>
              <p className="text-[10px] sm:text-xs text-gray-400 max-w-xs -mt-2">
                Eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE – FIXED SLIDER */}
          <div className="relative z-10">
            <div className="bg-gradient-to-r from-lime-400 via-lime-500 to-yellow-400 rounded-2xl p-[2px] shadow-[0_0_30px_rgba(190,242,100,0.25)]">
              <div className="bg-[#050609] rounded-xl p-4 sm:p-6 md:p-8 flex flex-col gap-5 min-h-[200px] sm:min-h-[230px]">
                {/* Stars row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-lime-300">
                    <StarRow />
                    <span className="hidden sm:inline text-[11px] text-gray-400">
                      {active.rating}.0 Rating
                    </span>
                  </div>
                </div>

                {/* Slider viewport */}
                <div className="overflow-hidden">
                  <div
                    className="flex transition-transform duration-500"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    {testimonials.map((item) => (
                      <div key={item.id} className="min-w-full">
                        <p className="text-[13px] sm:text-sm leading-relaxed text-gray-100">
                          {item.text}
                        </p>

                        <div className="mt-5 flex items-center gap-3">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover border-2 border-lime-400/70"
                          />
                          <div>
                            <span className="text-[12px] sm:text-sm font-medium">{item.name}</span>
                            <span className="block text-[10px] uppercase tracking-[0.18em] text-gray-500">
                              {item.role}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Arrows */}
                <div className="mt-4 flex justify-end gap-3">
                  <button
                    onClick={handlePrev}
                    className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-[#111318] flex items-center justify-center text-gray-300 hover:bg-lime-400 hover:text-black transition"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-lime-400 flex items-center justify-center text-black hover:bg-lime-300 transition"
                  >
                    →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
