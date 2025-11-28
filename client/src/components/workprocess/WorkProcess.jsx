import React from "react";

const steps = [
  {
    step: "Step 01",
    title: "Tailored Solutions",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonummy.",
    icon: "🎯",
  },
  {
    step: "Step 02",
    title: "Expert Team",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonummy.",
    icon: "👥",
  },
  {
    step: "Step 03",
    title: "Driven Insights",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonummy.",
    icon: "📊",
  },
  {
    step: "Step 04",
    title: "Ongoing Support",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonummy.",
    icon: "⏱️",
  },
];

export default function WorkProcess() {
  return (
    <section className="min-h-screen bg-black text-white w-full py-14 sm:py-16 md:py-20 px-4 sm:px-6 md:px-10 overflow-hidden rounded-[32px]">
      <div className="max-w-6xl lg:max-w-7xl mx-auto relative">
        {/* Big background heading */}
        <div className="pointer-events-none absolute inset-x-0 -top-6 sm:-top-10 flex justify-center md:justify-start">
          <div className="flex flex-wrap gap-3 md:gap-4 items-baseline font-extrabold tracking-tight uppercase">
            <span className="text-[16vw] sm:text-[11vw] md:text-8xl lg:text-9xl leading-none text-transparent/5 text-white/5">
              OUR
            </span>
            <span className="text-[16vw] sm:text-[11vw] md:text-8xl lg:text-9xl leading-none text-lime-400/70">
              PROCESS
            </span>
          </div>
        </div>

        {/* Foreground content wrapper to ensure spacing below big text */}
        <div className="relative z-10 pt-24 sm:pt-28 md:pt-32">
          {/* Timeline labels row */}
          <div className="hidden md:grid grid-cols-4 gap-4 mb-10">
            {steps.map((item, index) => (
              <div key={item.step} className="flex flex-col items-start">
                <span className="text-xs font-medium text-gray-300 tracking-wide">
                  {item.step}
                </span>
                <div className="mt-4 w-full h-px bg-white/15 relative">
                  <span
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-2 h-2 rounded-[3px] bg-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Mobile timeline: simple row */}
          <div className="md:hidden flex justify-between items-center mb-6 text-[11px] uppercase tracking-wide text-gray-300">
            {steps.map((item) => (
              <div key={item.step} className="flex flex-col items-center flex-1">
                <span>{item.step}</span>
                <div className="mt-2 w-full h-px bg-white/15 relative">
                  <span
                    className="absolute left-1/2 -translate-x-1/2 -top-1/2 w-1.5 h-1.5 rounded-[3px] bg-white"
                    aria-hidden="true"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {steps.map((item) => (
              <article
                key={item.title}
                className="group bg-black/40 border border-white/5 rounded-[22px] px-6 sm:px-7 md:px-8 py-8 sm:py-9 md:py-10 flex flex-col justify-between transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-[0_0_40px_rgba(190,242,100,0.18)]"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border border-lime-400/70 bg-lime-400/10 flex items-center justify-center text-xl sm:text-2xl">
                        <span className="leading-none">{item.icon}</span>
                      </div>
                    </div>
                    <span className="text-[11px] font-semibold tracking-wide uppercase text-gray-400">
                      {item.step}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-4 text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Hover underline */}
                <div className="mt-6 h-px w-full bg-white/5 overflow-hidden">
                  <div className="h-full w-0 bg-lime-400 transition-all duration-300 group-hover:w-full" />
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
