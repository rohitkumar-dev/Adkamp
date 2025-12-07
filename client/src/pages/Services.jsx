// import React from "react";
// import {
//   FiCamera,
//   FiMonitor,
//   FiTrendingUp,
//   FiBarChart2,
//   FiCheckCircle,
//   FiLayers,
//   FiFeather,
//   FiUsers,
// } from "react-icons/fi";

// export default function Services() {
//   return (
//     <div className="w-full font-sans bg-white text-gray-900">

//       {/* ================= HERO ================= */}
//       <section className="w-full bg-amber-600 text-white py-16 px-4 md:px-10">
//         <div className="max-w-6xl mx-auto text-center md:text-left">
//           <h1 className="text-3xl md:text-5xl font-bold leading-tight">
//             Our <span className="text-yellow-300">Services</span>
//           </h1>
//           <p className="text-white/90 md:text-lg max-w-2xl mt-4">
//             We empower brands with creative and result-driven media solutions.
//             From advertising to full digital marketing, we cover everything
//             needed to help your business grow.
//           </p>
//         </div>
//       </section>

//       {/* ================= SERVICES GRID ================= */}
//       <section className="py-16 px-4 md:px-10">
//         <div className="max-w-6xl mx-auto text-center mb-12">
//           <h2 className="text-3xl md:text-4xl font-bold">What We Offer</h2>
//           <p className="text-gray-600 mt-2">
//             World-class creative services tailored for your business.
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {[
//             {
//               icon: <FiCamera />,
//               title: "Photography",
//               text: "High-quality product, brand & lifestyle photography.",
//             },
//             {
//               icon: <FiMonitor />,
//               title: "Video Production",
//               text: "Engaging videos for ads, promos, and social campaigns.",
//             },
//             {
//               icon: <FiTrendingUp />,
//               title: "Digital Marketing",
//               text: "Boost your online presence and attract more customers.",
//             },
//             {
//               icon: <FiBarChart2 />,
//               title: "Brand Strategy",
//               text: "Actionable strategies to grow your brand with clarity.",
//             },
//             {
//               icon: <FiFeather />,
//               title: "Content Creation",
//               text: "Creative content that represents your brand voice.",
//             },
//             {
//               icon: <FiLayers />,
//               title: "Graphic Design",
//               text: "Modern visual designs for ads, brochures, and more.",
//             },
//           ].map((service, i) => (
//             <div
//               key={i}
//               className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
//             >
//               <div className="text-amber-600 text-4xl mb-4">{service.icon}</div>
//               <h3 className="font-semibold text-xl">{service.title}</h3>
//               <p className="text-gray-600 mt-2 text-sm">{service.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= WHY CHOOSE US ================= */}
//       <section className="py-16 px-4 md:px-10 bg-[#FFF8E8]">
//         <div className="max-w-6xl mx-auto text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
//           <p className="text-gray-600 mt-2">
//             We deliver quality, creativity, and measurable results.
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {[
//             {
//               icon: <FiCheckCircle />,
//               title: "Proven Expertise",
//               text: "Years of experience delivering exceptional results.",
//             },
//             {
//               icon: <FiUsers />,
//               title: "Client-Focused",
//               text: "We understand your needs and turn them into solutions.",
//             },
//             {
//               icon: <FiTrendingUp />,
//               title: "Growth Driven",
//               text: "Every service aims to grow your business rapidly.",
//             },
//             {
//               icon: <FiLayers />,
//               title: "Creative Solutions",
//               text: "Unique ideas tailored for your brand identity.",
//             },
//           ].map((item, i) => (
//             <div
//               key={i}
//               className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center"
//             >
//               <div className="text-amber-600 text-4xl mb-4">{item.icon}</div>
//               <h3 className="font-semibold text-xl">{item.title}</h3>
//               <p className="text-gray-600 mt-2 text-sm">{item.text}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* ================= PROCESS STEPS ================= */}
//       <section className="py-16 px-4 md:px-10">
//         <div className="max-w-6xl mx-auto text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-bold">Our Work Process</h2>
//           <p className="text-gray-600 mt-2">
//             Simple, transparent, and effective workflow.
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-6">

//           {[
//             { step: "01", title: "Understand Needs", text: "We analyze your business goals & audience." },
//             { step: "02", title: "Plan Strategy", text: "We design a customized creative & marketing plan." },
//             { step: "03", title: "Execution", text: "Our team produces high-quality creative deliverables." },
//             { step: "04", title: "Deliver & Improve", text: "We measure performance and optimize results." },
//           ].map((step, i) => (
//             <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition">
//               <div className="text-amber-600 font-bold text-2xl">{step.step}</div>
//               <h3 className="font-semibold text-xl mt-2">{step.title}</h3>
//               <p className="text-gray-600 mt-2 text-sm">{step.text}</p>
//             </div>
//           ))}

//         </div>
//       </section>

//       {/* ================= TESTIMONIALS (SIMPLE) ================= */}
//       <section className="py-16 px-4 md:px-10 bg-[#FFF8E8]">
//         <div className="max-w-6xl mx-auto text-center mb-10">
//           <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
//           <p className="text-gray-600 mt-2">
//             Feedback from businesses we’ve worked with.
//           </p>
//         </div>

//         <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

//           {[1, 2, 3].map((i) => (
//             <div
//               key={i}
//               className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
//             >
//               <p className="text-gray-700 italic">
//                 “ADKAMP helped us elevate our brand presence and grow faster.
//                 Their creativity is unmatched.”
//               </p>
//               <div className="mt-4">
//                 <h3 className="font-semibold text-lg">Client {i}</h3>
//                 <p className="text-gray-500 text-sm">Business Owner</p>
//               </div>
//             </div>
//           ))}

//         </div>
//       </section>

//       {/* ================= CTA ================= */}
//       <section className="py-16 px-4 md:px-10 bg-white text-black">
//         <div className="max-w-4xl mx-auto text-center space-y-4">
//           <h2 className="text-3xl md:text-4xl font-bold">Ready to Grow Your Brand?</h2>
//           <p className="text-gray-500 md:text-lg">
//             Let’s build something amazing together.
//           </p>
//           <button className="px-8 py-3 bg-amber-600 text-white rounded-md font-semibold hover:bg-yellow-50 transition">
//             Contact Us
//           </button>
//         </div>
//       </section>

//     </div>
//   );
// }









import React from "react";
import {
  FiCamera,
  FiMonitor,
  FiTrendingUp,
  FiBarChart2,
  FiCheckCircle,
  FiLayers,
  FiFeather,
  FiUsers,
} from "react-icons/fi";

export default function ServicesPage() {
  return (
    <div className="w-full font-sans bg-white text-gray-900">

      {/* ================= HERO ================= */}
      <section className="relative w-full bg-amber-600 text-white py-20 px-4 md:px-10 overflow-hidden">
        
        {/* BG IMAGE */}
        {/* <img
          src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1200&q=80"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          alt="Event Background"
        /> */}

        <div className="relative max-w-6xl mx-auto text-center md:text-left">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            Our <span className="text-black">Services</span>
          </h1>
          <p className="text-white/90 md:text-lg max-w-2xl mt-4">
            Creative solutions for events, branding, media production, and 
            marketing campaigns — everything you need to elevate your brand.
          </p>
        </div>
      </section>

      {/* ================= SERVICES GRID ================= */}
      <section className="py-16 px-4 md:px-10">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold">What We Offer</h2>
          <p className="text-gray-600 mt-2">High-impact creative services for your brand.</p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: <FiCamera />,
              img:
                "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=800&q=80",
              title: "Photography",
              text: "Product, branding & event photography.",
            },
            {
              icon: <FiMonitor />,
              img:
                "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
              title: "Video Production",
              text: "Ad films, reels, event coverage & promotions.",
            },
            {
              icon: <FiTrendingUp />,
              img:
                "https://images.unsplash.com/photo-1551836022-4c4c79ecde53?auto=format&fit=crop&w=800&q=80",
              title: "Digital Marketing",
              text: "Grow fast with targeted social media campaigns.",
            },
            {
              icon: <FiBarChart2 />,
              img:
                "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80",
              title: "Brand Strategy",
              text: "Strategy, storytelling & identity design.",
            },
            {
              icon: <FiFeather />,
              img:
                "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80",
              title: "Content Creation",
              text: "Creative content for ads, websites & campaigns.",
            },
            {
              icon: <FiLayers />,
              img:
                "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=800&q=80",
              title: "Graphic Design",
              text: "Posters, brochures, packaging & branding visuals.",
            },
          ].map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden"
            >
              {/* IMAGE */}
              <img
                src={service.img}
                alt={service.title}
                className="w-full h-40 object-cover"
              />

              <div className="p-6">
                <div className="text-amber-600 text-4xl mb-4">{service.icon}</div>
                <h3 className="font-semibold text-xl">{service.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{service.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-16 px-4 md:px-10 bg-[#FFF8E8]">

        {/* decorative image strip */}
        <div className="max-w-6xl mx-auto mb-10 grid grid-cols-3 gap-3">
          {[
            "https://images.unsplash.com/photo-1521335629791-ce4aec67dd47?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?auto=format&fit=crop&w=800&q=80",
            "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=80",
          ].map((img, idx) => (
            <img
              key={idx}
              src={img}
              className="w-full h-32 rounded-xl object-cover shadow"
              alt="showcase"
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Why Choose Us</h2>
          <p className="text-gray-600 mt-2">
            Creative vision + flawless execution.
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <FiCheckCircle />, title: "Experienced Team", text: "Seasoned experts across events & marketing." },
            { icon: <FiUsers />, title: "Client-Centric", text: "We shape solutions around your goals." },
            { icon: <FiTrendingUp />, title: "Result Driven", text: "Focused on growth & measurable outcomes." },
            { icon: <FiLayers />, title: "Creative Vision", text: "Unique ideas that bring brands to life." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow hover:shadow-md transition text-center">
              <div className="text-amber-600 text-4xl mb-4">{item.icon}</div>
              <h3 className="font-semibold text-xl">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ================= PROCESS ================= */}
      <section className="py-16 px-4 md:px-10">

        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">Our Work Process</h2>
          <p className="text-gray-600 mt-2">From planning to final execution.</p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-4 sm:grid-cols-2 gap-6">
          {[
            {
              step: "01",
              img:
                "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=600&q=80",
              title: "Understand Needs",
              text: "We analyze goals, ideas & audience."
            },
            {
              step: "02",
              img:
                "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?auto=format&fit=crop&w=600&q=80",
              title: "Plan Strategy",
              text: "We design a creative & marketing roadmap."
            },
            {
              step: "03",
              img:
                "https://images.unsplash.com/photo-1531297484001-80022131f5a1?auto=format&fit=crop&w=600&q=80",
              title: "Execution",
              text: "Production, content & campaign deployment."
            },
            {
              step: "04",
              img:
                "https://images.unsplash.com/photo-1603575448364-1df57cc82ab2?auto=format&fit=crop&w=600&q=80",
              title: "Deliver & Improve",
              text: "We evaluate results and optimize."
            },
          ].map((step, i) => (
            <div key={i} className="bg-white rounded-xl shadow hover:shadow-md transition overflow-hidden">
              
              <img src={step.img} className="w-full h-32 object-cover" alt={step.title} />

              <div className="p-6">
                <div className="text-amber-600 font-bold text-2xl">{step.step}</div>
                <h3 className="font-semibold text-xl mt-2">{step.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">{step.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="py-16 px-4 md:px-10 bg-[#FFF8E8]">
        <div className="max-w-6xl mx-auto text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold">What Clients Say</h2>
          <p className="text-gray-600 mt-2">Real stories from real brands.</p>
        </div>

        <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex items-center gap-3 mb-4">
                <img
                  src={`https://randomuser.me/api/portraits/${
                    i % 2 === 0 ? "men" : "women"
                  }/${20 + i}.jpg`}
                  className="w-12 h-12 rounded-full object-cover"
                  alt="client"
                />
                <div>
                  <h3 className="font-semibold text-lg">Client {i}</h3>
                  <p className="text-gray-500 text-sm">Business Owner</p>
                </div>
              </div>

              <p className="text-gray-700 italic">
                “ADKAMP transformed our brand presence through stunning media
                and effective marketing. Highly recommended!”
              </p>
            </div>
          ))}

        </div>
      </section>

      {/* ================= SHOWCASE BANNER ================= */}
      <section className="px-4 md:px-10 py-10">
        <img
          src="https://images.unsplash.com/photo-1515162305281-7a8da3e65b2c?auto=format&fit=crop&w=1400&q=80"
          className="w-full h-64 object-cover rounded-2xl shadow-lg"
          alt="Event Showcase"
        />
      </section>

      {/* ================= CTA ================= */}
      <section className="py-16 px-4 md:px-10 bg-amber-50 text-black">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold">Ready to Elevate Your Brand?</h2>
          <p className="text-gray-400 md:text-lg">
            Let’s create unforgettable campaigns & events together.
          </p>
          <button className="px-8 py-3 bg-amber-600 text-white rounded-3xl font-semibold hover:bg-amber-500 transition">
            Contact Us
          </button>
        </div>
      </section>

    </div>
  );
}
