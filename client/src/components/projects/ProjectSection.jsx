import React from "react";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Mastartery",
      year: "2016",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project1-550x550.jpg",
    },
    {
      title: "Branding Solutions",
      year: "2021",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project2-600x800.jpg",
    },
    {
      title: "Traffic Grow",
      year: "2018",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project4-600x800.jpg",
    },
    {
      title: "Roadmap",
      year: "2019",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project8-550x550.jpg",
    },
  ];

  return (
    <section className="w-full bg-red-100 text-black pb-20 px-4 md:px-10">
      {/* ------------------ TOP TITLE AREA ------------------ */}
      <div className="max-w-7xl mx-auto mb-14">
        <div className="flex items-start gap-4">
          <img
            src="https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/Soft-Star.png"
            alt="icon"
            className="w-6 h-6 mt-2"
          />

          <div>
            <p className="uppercase text-sm tracking-widest text-white">Projects</p>

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
              Discover the artistry behind <br />
              <span className="text-lime-400">our projects</span>
            </h2>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-white mt-6 max-w-xl md:ml-auto md:text-right">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit sed diam nonummy nibh
          euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.
        </p>
      </div>

      {/* ------------------ PROJECT GRID ------------------ */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <div key={index} className="group">
            <div className="rounded-3xl overflow-hidden mb-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-400">Design - {project.year}</p>
          </div>
        ))}
      </div>

      {/* ------------------ VIEW ALL BUTTON ------------------ */}
      <div className="flex justify-center mt-16">
        <a
          href="#"
          className="bg-lime-300 text-black px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-lime-400 transition"
        >
          View All Work
          <span className="text-xl">➜</span>
        </a>
      </div>



       <div className="max-w-5xl mx-auto mt-25">
        {/* Outer rounded banner */}
        <div className="relative rounded-3xl overflow-hidden border border-black/40 bg-black shadow-xl">
          {/* Background image (team photo) */}
          <img
            src="https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project8-550x550.jpg"
            alt="Agency team"
            className="w-full h-full object-cover md:h-120 md:w-300"
          />

          {/* Play button */}
          <a
            href="https://www.youtube.com/watch?v=hddwAIXbKZo"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-black/80 flex items-center justify-center border-4 border-lime-300 shadow-lg transition-transform duration-300 hover:scale-105">
              <span className="text-white text-2xl md:text-3xl leading-none">
                ▶
              </span>
            </div>
          </a>

          {/* Lime circle overlay with text (uses same circle image as original) */}
          <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[85%] sm:w-[75%] md:w-[60%] z-20">
            {/* Circle image */}
            <img
              src="https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/05/circle.png"
              alt="Highlight circle"
              className="w-full h-auto"
            />

            {/* Text centered inside circle */}
            <div className="absolute inset-0 flex items-center justify-center pt-25 px-4 pb-4 md:pb-6">
              <h2 className="text-center text-lg sm:text-xl md:text-2xl lg:text-[26px] font-semibold text-black leading-snug">
                Most trusted agency
                <br />
                in your town
              </h2>
            </div>
          </div>
        </div>
      </div>


    </section>
  );
}
