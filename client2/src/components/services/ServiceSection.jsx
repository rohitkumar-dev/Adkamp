import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import './ServiceSection.css'

export default function ServicesSection() {
  const services = [
    {
      title: "Brand Identity Design",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/bg-news4-672x448.jpg",
      icon: "fab fa-pushed",
    },
    {
      title: "Web Design & Development",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/bg5-672x448.jpg",
      icon: "fab fa-connectdevelop",
    },
    {
      title: "Digital Marketing",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/bg-news2-672x448.jpg",
      icon: "flaticon-business-008-trophy",
    },
    {
      title: "Digital",
      desc: "Lorem ipsumscing elit, sed do",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/bg-news2-672x448.jpg",
      icon: "flaticon-business-008-trophy",
    },
    {
      title: "Digital Marketing and SEO",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/bg-news2-672x448.jpg",
      icon: "flaticon-business-008-trophy",
    },
    {
      title: "Digital Marketing Web developemnt",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do lorem dsf sdf sdfsf",
      img: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/bg-news2-672x448.jpg",
      icon: "flaticon-business-008-trophy",
    },
  ];

  return (
    <section className="w-full bg-white text-black py-20 px-4 md:px-10 overflow-hidden relative">
      {/* TOP TITLES */}
      <div className="max-w-7xl mx-auto">
        <div className="mb-5 flex items-center gap-2">
          {/* <img
            src="https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/Soft-Star-3.png"
            alt="icon"
            className="w-4 h-4"
          /> */}
          <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#E17100"><path d="M383-480 200-664l56-56 240 240-240 240-56-56 183-184Zm264 0L464-664l56-56 240 240-240 240-56-56 183-184Z"/></svg>
          <p className="font-medium text-2xl">Services</p>
        </div>

        <div className="flex gap-1">
          <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          We provide digital <span className="text-amber-400">services for you</span>
        </h2>
        {/* <h2 className="text-3xl md:text-4xl font-bold"></h2>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-600">
            for you
          </h2> */}

        </div>
        <div className="flex flex-wrap items-center gap-4 mt-2">
          {/* <h2 className="text-3xl md:text-4xl font-bold">services</h2> */}
          {/* <h2 className="text-3xl md:text-4xl font-bold text-amber-600">
            for you
          </h2> */}
          {/* <img
            src="https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/section-img.jpg"
            alt="shape"
            className="w-40 rounded-xl "
          /> */}
        </div>
      </div>

        {/* <div className="h-55  md:h-120 px-1 md:px-30 mt-10">
      <img
            // src="https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/section-img.jpg"
            src="https://images.pexels.com/photos/7972560/pexels-photo-7972560.jpeg"
            alt="shape"
            className="w-full h-full rounded-2xl object-cover"
        />
        </div> */}

        {/* <div className="pt-15 pb-7">
            <h2 className="text-gray-500 text-center font-normal text-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate aut, reiciendis unde veritatis maiores sequi?</h2>
        </div> */}

      {/* SERVICE CARDS CAROUSEL */}
      <div className="max-w-7xl mx-auto mt-10">
        <div className="bg-gray-100 rounded-2xl p-6 md:p-10">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop
            breakpoints={{
              480: { slidesPerView: 1 },
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
          >
            {services.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" my-5 rounded-2xl overflow-hidden shadow-lg group borde border-gray-800">
                  <div className="relative">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-56 object-cover rounded-t-2xl"
                    />

                    <div className="absolute top-2 left-2 w-12 h-12 bg-white rounded-full flex items-center justify-center">
                      <i className={`${item.icon} text-black text-xl`}></i>
                    </div>
                  </div>

                  <div className="p-5 h-45 md:h-35">
                    <h3 className="font-bold text-xl mb-2">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed overflow-clip">{item.desc}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* CTA BOTTOM */}
        {/* <div className="flex flex-wrap gap-4 items-center justify-center mt-15 text-center">
          <a
            href="#"
            className="bg-amber-600 text-white px-6 py-2 rounded-full font-bold"
          >
            CALL
          </a>
          <p className="text-gray-400 text-sm md:text-base">
            Let's make something great work together.{' '}
            <strong className="text-amber-600 cursor-pointer">Get Free Quote</strong>
          </p>
        </div> */}
      </div>
    </section>
  );
}
