import React from "react";
import { Aurora } from "../index";
import heroImg from "../../assets/hero.jpg"

function Home() {
  return (
    // <div className="h-300 bg-black">
    //   <Aurora
    //     colorStops={["#FF7518", "#000000", "#FF7518"]}
    //     blend={0.5}
    //     amplitude={1.0}
    //     speed={0.5}
    //   />
    // </div>

    <div className="relative h-scree bg-black overflow-hidden ">
      <div className="absolute inset-0">
        <Aurora
          colorStops={["#FF7518", "#000000", "#FF7518"]}
          blend={0.5}
          amplitude={1.0}
          speed={0.5}
        />
      </div>

      {/* content */}
      <div className="relative ">
        <div className="text-white text-center px-2">
          <h1 className=" text-5xl md:text-7xl font-medium md:font-bold mt-15 md:mt-20">Managing Your Solutions</h1>
          <h2 className="text-2xl md:text-5xl mt-7 md:mt-10 text-center">Perspective <span className="text-amber-500">|</span> Process <span className="text-amber-500">|</span> Productivity</h2>
        </div>
        



<div className=" w-8/9 rounded-2xl overflow-hidden mt-10 md:mt-20 mx-auto mb-20">
  <img
    // src="https://images.pexels.com/photos/31308009/pexels-photo-31308009.jpeg"
    src={heroImg}
    alt="team"
    className="main-img-path w-full max-h-150 object-cover"
  />

</div>  













      </div>
    </div>
  );
}

export default Home;
