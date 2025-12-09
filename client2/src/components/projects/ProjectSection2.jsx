import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectSection2() {
  const projects = [
    {
      title: "Mahakumbh Mela",
      year: "2025",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project1-550x550.jpg",
      desc: "Large-scale festival branding & experiential design.",
    },
    {
      title: "Branding Solutions",
      year: "2024",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project2-600x800.jpg",
      desc: "Identity systems, visual language and rollout.",
    },
    // {
    //   title: "Traffic Grow",
    //   year: "2021",
    //   img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/project4-600x800.jpg",
    //   desc: "Performance creative & campaign design.",
    // },
    // {
    //   title: "Mahindra Group",
    //   year: "2026",
    //   img: "https://images.pexels.com/photos/29130156/pexels-photo-29130156.jpeg",
    //   desc: "Corporate communication and product visuals.",
    // },
  ];

  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);

  return (
    <section className="w-full bg-white text-[#1A1A1A] pb-20 px-4 md:px-10">

      {/* ------------------ HEADER ------------------ */}
      <div className="max-w-7xl mx-auto py-8">
        <div className="flex items-center gap-3">
          <svg xmlns="http://www.w3.org/2000/svg" height="26" viewBox="0 -960 960 960" width="26" fill="#faa719">
            <path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z" />
          </svg>
          <h2 className="text-2xl font-medium">Projects</h2>
        </div>

       
          <div className="flex gap-1">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          Discover the artistry behind<span className="text-amber-400">&nbsp; our projects</span>
        </h2>

          </div>
          {/* <p className="text-gray-500 md:text-right max-w-xl">
            We blend strategy, design, and technology to create high-impact brand experiences.
          </p> */}
        </div>

      {/* ------------------ PROJECT GRID ------------------ */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((p, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="group rounded-2xl overflow-hidden shadow-md bg-white"
          >
            <button
              onClick={() => { setActive(index); setOpen(true); }}
              className="w-full block"
            >
              <div className="relative h-72 md:h-96 overflow-hidden">

                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105"
                />

                {/* year pill */}
                <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded-full font-medium text-sm shadow">
                  {p.year}
                </div>

                {/* FIXED GRADIENT OVERLAY */}
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent"></div>
              </div>
            </button>

            <div className="p-5">
              <h3 className="text-lg font-semibold">{p.title}</h3>

              {/* FIXED className typo */}
              <p className="text-gray-500 text-sm mb-3">{p.desc}</p>

              <div className="flex items-center gap-3">
                <a
                  href="#"
                  className="px-5 py-2 rounded-full font-semibold text-white bg-[#faa719] 
                  transition-all duration-300 transform hover:scale-[1.07]
                  hover:shadow-[0_8px_22px_rgba(250,167,25,0.35)]"
                >
                  View more
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ------------------ VIEW ALL BUTTON ------------------ */}
      <div className="flex justify-center mt-14">
        <a
          href="/projects"
          className="bg-[#faa719] text-white px-8 py-4 rounded-full font-bold flex items-center gap-3
          transition-all duration-300 transform hover:scale-[1.06] 
          hover:shadow-[0_10px_28px_rgba(250,167,25,0.35)]"
        >
          View All Work <span className="text-xl">➜</span>
        </a>
      </div>

      {/* ------------------ VIDEO BANNER ------------------ */}

      {/* ------------------ LIGHTBOX ------------------ */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-xl w-full p-5 shadow-xl overflow-hidden"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 className="text-xl font-bold mb-3">{projects[active].title}</h3>

              <img
                src={projects[active].img}
                className="w-full h-72 object-cover rounded-md"
              />

              <p className="text-gray-600 mt-4">{projects[active].desc}</p>

              <div className="mt-5 flex justify-between">
                <a
                  href="/projects/#1"
                  className="px-5 py-2 rounded-md bg-[#faa719] text-white font-semibold hover:opacity-90 transition"
                >
                  View Case
                </a>

                <button
                  className="px-5 py-2 rounded-md border"
                  onClick={() => setOpen(false)}
                >
                  Close
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
