import React from "react";
import { Aurora } from "../index";

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
          speed={0.6}
        />
      </div>

      {/* content */}
      <div className="relative ">
        <div className="text-white text-center ">
          <h1 className="text-5xl md:text-8xl font-bold mt-20">Managing Your Solutions</h1>
          <h2 className="text-6xl mt-10">Perspective | Process | Productivity</h2>
        </div>
        



<div className="relative w-4/5 h-[350px] rounded-2xl overflow-hidden mt-20 mx-auto mb-20">
  {/* Background Image */}
  <img
    src="https://images.pexels.com/photos/31308009/pexels-photo-31308009.jpeg"
    alt="team"
    className="w-full h-full object-cover"
  />

  {/* Bottom Right Overlay */}
  <div className="absolute bottom-4 right-4 bg-black/70 text-white px-4 py-2 rounded-xl backdrop-blur-sm flex items-center gap-3">
    {/* Small avatars */}
    <div className="flex -space-x-2">
      <img src="/p1.jpg" className="w-8 h-8 rounded-full border-2 border-black" />
      <img src="/p2.jpg" className="w-8 h-8 rounded-full border-2 border-black" />
      <img src="/p3.jpg" className="w-8 h-8 rounded-full border-2 border-black" />
    </div>

    {/* Text */}
    <div className="text-right leading-tight">
      <p className="text-xl font-semibold">200k</p>
      <p className="text-xs opacity-80">satisfied customers</p>
    </div>
  </div>
</div>








      </div>
    </div>
  );
}

export default Home;
