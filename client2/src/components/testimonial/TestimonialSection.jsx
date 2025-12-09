
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
    rating: 5,
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

function StarRow({ count = 5, filled = 4 , className=""}) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`inline-block text-sm ${i < filled ? "text-amber-600" : "text-gray-600"}`}
        >
          ★
        </span>
      ))}
    </div>
  );
}

function StarRow2({ count = 5, filled = 4 , className=""}) {
  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: count }).map((_, i) => (
        <span
          key={i}
          className={`inline-block text-sm ${i < filled ? "text-black" : "text-gray-200"}`}
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
    <section className="w-full text-black py-12 px-4 sm:px-6 md:py-20">
      <div className="max-w-6xl mx-auto rounded-2xl bg-gray-100 border border-[#161821] px-4 sm:px-6 md:px-10 py-8 sm:py-10 md:py-14 relative overflow-hidden">
        {/* Background decorative mesh */}
        {/* <div className="pointer-events-none absolute -left-20 top-10 h-60 w-60 rounded-full opacity-100" /> */}

        <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] items-start">
          {/* LEFT SIDE */}
          <div className="relative z-10 flex flex-col gap-5">
            {/* <p className="text-[10px] tracking-[0.25em] uppercase text-gray-400 flex items-center gap-2">
              <span className="inline-block h-[1px] w-4 bg-lime-400" /> Testimonial
            </p> */}

            <div className=" mb-3 flex items-center gap-2 ">
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E17100"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
                <p className="font-medium text-2xl text-black">Testimonials</p>
             </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-snug">
              Hear what others say
              <br /> about <span className="text-amber-600">partnering with us</span>
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
            <div className="bg-blac rounded-2xl p-0.5 shadow-[0_0_30px_rgba(190,242,100,0.25)]">
              <div className="bg-amber-600 border-3 border-gray-500 rounded-2xl p-4 sm:p-6 md:p-8 flex flex-col gap-5 min-h-[200px] sm:min-h-[230px]">
                {/* Stars row */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs">
                    <StarRow2 className={""}/>
                    <span className="hidden sm:inline text-[11px] text-white">
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
                            className="h-10 w-10 sm:h-11 sm:w-11 rounded-full object-cover border-2 border-white"
                          />
                          <div>
                            <span className="text-[12px] sm:text-sm font-medium">{item.name}</span>
                            <span className="block text-[10px] uppercase tracking-[0.18em] text-gray-200">
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
                    className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-white flex items-center justify-center text-black hover:bg-lime-400 hover:text-black transition"
                  >
                    ←
                  </button>
                  <button
                    onClick={handleNext}
                    className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black flex items-center justify-center text-white hover:bg-lime-300 transition"
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
