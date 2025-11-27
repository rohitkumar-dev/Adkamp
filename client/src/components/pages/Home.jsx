import React from "react";
import { Aurora } from "../index";
import ClipBR from "../clipimage/ClipBR";
import heroImg from "../../assets/hero.jpg"
import ClipHero from "../clipimage/ClipHero";
import ResponsiveHeroCard from "../clipimage/ClipHero";

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
        



<div className="relative w-8/9 rounded-2xl overflow-hidden mt-10 md:mt-20 mx-auto mb-20">
  <img
    // src="https://images.pexels.com/photos/31308009/pexels-photo-31308009.jpeg"
    src={heroImg}
    alt="team"
    className=" w-full max-h-150 object-cover"
  />
  <div className="absolute  border border-white h-10 w-20 "></div>
</div>  



{/* <div className="w-8/9 mt-10 md:mt-20 mx-auto mb-20 max-h-100 ">
<ClipBR imageUrl={heroImg}/>
</div> */}






<div className="min-h-screen py-15 flex justify-center">
             <ResponsiveHeroCard 
                imageSrc={heroImg} 
             />
        </div>





<p className="text-red-700">gggg</p>






      </div>
    </div>
  );
}

export default Home;
