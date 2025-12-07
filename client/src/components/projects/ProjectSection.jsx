import React from "react";

export default function ProjectSection() {
  const projects = [
    {
      title: "Mahakumbh Mela",
      year: "2025",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project1-550x550.jpg",
    },
    {
      title: "Branding Solutions",
      year: "2024",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project2-600x800.jpg",
    },
    {
      title: "Traffic Grow",
      year: "2021",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project4-600x800.jpg",
    },
    {
      title: "Mahindra Group",
      year: "2026",
      // img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project8-550x550.jpg",
      img: "https://images.pexels.com/photos/29130156/pexels-photo-29130156.jpeg",
    },
  ];

  return (
    <section className="w-full bg-red-50 text-black pb-20 px-4 md:px-10">
      {/* ------------------ TOP TITLE AREA ------------------ */}

      <div className="pt-15 mb-3 flex items-center gap-2 text-black">
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E17100"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
          <p className="font-medium text-lg">Projects</p>
      </div>

      <div className="max-w-7xl mx-auto mb-14">
        <div className="flex items-start gap-4">

          <div>
            {/* <p className="uppercase text-sm tracking-widest text-white">Projects</p> */}

            <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mt-2">
              Discover the artistry behind <br />
              <span className="text-amber-600">our projects</span>
            </h2>
          </div>
        </div>

        {/* DESCRIPTION */}
        <p className="text-gray-500 mt-6 max-w-xl md:ml-auto md:text-right">
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
                className="w-full h-full md:h-120 object-cover transition-all duration-500 group-hover:scale-105"
              />
            </div>

            <h3 className="text-lg font-semibold">{project.title}</h3>
            <p className="text-sm text-gray-400">Project - {project.year}</p>
          </div>
        ))}
      </div>

      {/* ------------------ VIEW ALL BUTTON ------------------ */}
      <div className="flex justify-center mt-16">
        <a
          href="#"
          className="bg-amber-600 text-white px-8 py-4 rounded-full font-bold flex items-center gap-3 hover:bg-amber-500 transition"
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
            // src="https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project8-550x550.jpg"
            src="https://images.pexels.com/photos/10680710/pexels-photo-10680710.jpeg"
            alt="Agency team"
            className="w-full h-full object-cover md:h-120 md:w-300"
          />

          {/* Play button */}
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30"
          >
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-amber-600/80 flex items-center justify-center border-4 border-lime-300 shadow-lg transition-transform duration-300 hover:scale-105">
              <span className="text-white text-2xl md:text-3xl leading-none">
                {/* ▶ */}
                <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="m380-300 280-180-280-180v360ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
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
