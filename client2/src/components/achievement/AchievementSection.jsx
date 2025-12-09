import React from "react";

export default function AchievementSection() {
  const awards = [
    {
      id: "01",
      title: "Brand Booster\nExcellence",
      year: "2025",
    },
    {
      id: "02",
      title: "Super Suffer\nAgency of the Year",
      year: "2024",
    },
    {
      id: "03",
      title: "Creative Agencies\nWorldwide",
      year: "2023",
    },
    {
      id: "04",
      title: "Awesome\nBusiness Models",
      year: "2022",
    },
  ];

  return (
    <section className="w-full bg-gray-100 text-black pt-15 pb-16 md:pb-24 md:pt-15 px-4 md:px-10 relative overflow-hidden">
                <div className=" mb-3 flex items-center gap-2 text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E17100"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
                  <p className="font-medium text-2xl">Achievements</p>
                </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)] gap-10 lg:gap-16 items-start">
        {/* LEFT COLUMN */}
        <div className="relative">
          {/* Green concentric circles background (desktop only)
          <div className="hidden md:block absolute -left-40 top-10 w-72 h-72 rounded-full border border-lime-500/40" />
          <div className="hidden md:block absolute -left-32 top-20 w-96 h-96 rounded-full border border-lime-500/20" /> */}

          {/* Heading */}
          <div className="relative z-10 mb-8">
            <div className="flex items-center gap-2 mb-3">
              {/* <img
                src="https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/Soft-Star.png"
                alt="icon"
                className="w-4 h-4"
              />
              <span className="uppercase text-xs tracking-[0.25em] text-gray-300">
                Achievements
              </span> */}

               {/* <div className="pt-15 mb-3 flex items-center gap-2 text-black">
                  <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E17100"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
                  <p className="font-medium text-lg">Projects</p>
                </div> */}
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight">
              Company Awards
              <br />
              <span className="text-amber-600">Achievements</span>
            </h2>
          </div>

          {/* Description + Trophy */}
          <div className="relative z-10 flex flex-col sm:flex-row sm:items-end gap-8">
            <p className="text-sm md:text-base text-gray-600 max-w-xs leading-relaxed">
              Duis aute lorem ipsum is simply free text available in the market
              reprehen.
            </p>

            <div className="flex justify-center sm:justify-start">
              <img
                src="https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/Award.png"
                alt="Award trophy"
                className="w-28 md:w-36 h-auto object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.7)]"
              />
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN - AWARD LIST */}
        <div className="relative">
          {/* Floating sparkles icon */}
          {/* <img
            src="https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/image-33.png"
            alt="sparkles"
            className="hidden md:block absolute -top-8 right-6 w-10 h-10 animate-spin-slow"
          /> */}

          <div className="divide-y divide-white/5 border-t border-b border-white/5">
            {awards.map((award, index) => (
              <div
                key={award.id}
                className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8 py-6 sm:py-7"
              >
                {/* Count Circle */}
                <div className="flex items-center sm:items-center gap-4 sm:gap-6 flex-1">
                  <div className="w-12 h-12 rounded-full text-white bg-amber-600 flex items-center justify-center shrink-0">
                    <span className="text-sm font-semibold">{award.id}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-base sm:text-lg font-semibold leading-snug whitespace-pre-line">
                    {award.title}
                  </h3>
                </div>

                {/* Year + Plus Icon */}
                <div className="flex items-center justify-between sm:justify-end gap-6 sm:min-w-[140px]">
                  <span className="text-sm text-gray-400">{award.year}</span>
                  <button
                    type="button"
                    className=" w-8 h-8 rounded-full border border-white/30 flex items-center justify-center text-lg leading-none hover:bg-amber-600 hover:text-black transition"
                    aria-label="More details"
                  >
                    <span className="md:pb-1">+</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Slow spin animation keyframes */}
      {/* <style>
        {`
          @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
          .animate-spin-slow {
            animation: spin-slow 16s linear infinite;
          }
        `}
      </style> */}
    </section>
  );
}
