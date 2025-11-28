import React, { useState } from "react";

const testimonials = [
  {
    id: 1,
    name: "Wade Warren",
    role: "DESIGNER",
    rating: 4,
    text:
      "We cannot say enough good things about the team at [Company Name]. They took our vision and turned it into a stunning website that perfectly captures our brand and they kept us informed every step of the way.",
    avatar:
      "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/test3.png",
  },
  {
    id: 2,
    name: "Theresa Webb",
    role: "DESIGNER",
    rating: 4,
    text:
      "From kickoff to launch, the communication was clear and the results were better than we imagined. The site feels modern, fast and perfectly on‑brand.",
    avatar:
      "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/test1.png",
  },
  {
    id: 3,
    name: "Ralph Edwards",
    role: "DESIGNER",
    rating: 4,
    text:
      "They turned a rough idea into a polished digital experience. The whole process felt smooth and collaborative, and the final product is something we’re proud to show.",
    avatar:
      "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/test.jpg",
  },
];

function StarRow({ count = 5, filled = 4 }) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`inline-block text-xs md:text-sm ${
            i < filled ? "text-lime-400" : "text-gray-600"
          }`}
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
    <section className="w-full bg-[#eceef3] text-white py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto rounded-[32px] bg-[#090b10] border border-[#161821] px-4 md:px-10 lg:px-14 py-10 md:py-14 lg:py-16 relative overflow-hidden">
        {/* Background mesh / accent */}
        <div className="pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,#1e293b_0,transparent_60%)] opacity-40" />

        <div className="grid gap-10 lg:gap-14 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.5fr)] items-start">
          {/* LEFT SIDE */}
          <div className="relative z-10 flex flex-col gap-6 md:gap-8">
            {/* Label */}
            <p className="text-[11px] md:text-xs tracking-[0.28em] uppercase text-gray-400 flex items-center gap-2">
              <span className="inline-block h-[1px] w-5 bg-lime-400" /> Testimonial
            </p>

            {/* Heading */}
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-[32px] leading-snug font-semibold">
                Hear what others say
                <br />
                about <span className="text-lime-400">partnering with us</span>
              </h2>
              <p className="mt-4 text-[13px] md:text-sm text-gray-400 max-w-md">
                Lorem ipsum dolor sit amet, consc tetuer adipiscing elit sed diam nonummy nibh
                euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
              </p>
            </div>

            {/* Rating block */}
            <div className="mt-2 flex flex-col gap-4 md:gap-5">
              <div className="flex items-end gap-3">
                <span className="text-[56px] md:text-[72px] lg:text-[82px] font-semibold leading-none">
                  4.8
                </span>
                <div className="mb-3">
                  <StarRow />
                </div>
              </div>
              <p className="text-[12px] md:text-xs text-gray-400 max-w-xs">
                Eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>

          {/* RIGHT SIDE – CARD SLIDER */}
          <div className="relative z-10">
            {/* glow border wrapper */}
            <div className="bg-gradient-to-r from-lime-400 via-lime-500 to-yellow-400 rounded-[32px] p-[2px] shadow-[0_0_40px_rgba(190,242,100,0.25)]">
              <div className="bg-[#050609] rounded-[30px] px-5 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10 flex flex-col gap-6 md:gap-8 min-h-[220px] md:min-h-[260px]">
                {/* Stars small row */}
                <div className="flex items-center justify-between gap-4">
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
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    {testimonials.map((item) => (
                      <div key={item.id} className="min-w-full">
                        <p className="text-sm md:text-[15px] leading-relaxed text-gray-100">
                          {item.text}
                        </p>

                        <div className="mt-6 flex items-center gap-3 md:gap-4">
                          <img
                            src={item.avatar}
                            alt={item.name}
                            className="h-11 w-11 md:h-12 md:w-12 rounded-full object-cover border-2 border-lime-400/70"
                          />
                          <div className="flex flex-col">
                            <span className="text-[13px] md:text-sm font-medium">
                              {item.name}
                            </span>
                            <span className="text-[11px] uppercase tracking-[0.18em] text-gray-500">
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
                    type="button"
                    onClick={handlePrev}
                    className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-[#111318] flex items-center justify-center text-gray-300 hover:bg-lime-400 hover:text-black transition"
                    aria-label="Previous testimonial"
                  >
                    <span className="text-lg md:text-xl">←</span>
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="h-9 w-9 md:h-10 md:w-10 rounded-full bg-lime-400 flex items-center justify-center text-black hover:bg-lime-300 transition"
                    aria-label="Next testimonial"
                  >
                    <span className="text-lg md:text-xl">→</span>
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
