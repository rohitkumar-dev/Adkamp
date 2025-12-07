// import React, { useState } from "react";
// import heroImg from "../../assets/hero.jpg"; // 
// import heroImg2 from "../../assets/hero2.jpg"; // 
// import RotatingText from "../reactbits/RotatingText"
// import CountUp from '../reactbits/CountUp'

// const HeroSection = () => {

//   const [loaded, setLoaded] = useState(false);


//   return (
//     <section className="w-full bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
//         {/* Main container */}
//         <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

//           {/* ------- LEFT TEXT CONTENT ------- */}
//           <div className="w-full md:w-1/2 text-center lg:text-left">
            
//             {/* Top Badge */}
//             <div className="inline-block bg-amber-100 text-amber-700 text-sm px-4 py-1 rounded-full font-medium mb-4">
//               ✓ Trusted by 10,000+ customers
//             </div>

//             {/* Heading */}
//             <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
//               Transform Your Business With{" "}

// <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center gap-2 md:gap-5 text-3xl md:text-5xl">
//               <span className="text-black font-extrabold">
//                 <span className="text-amber-600">AD</span>KAMP
//               </span>
            
// <RotatingText
//   texts={['MEDIA', 'MARKETING', 'AND', 'MORE']}
//   mainClassName="w-50 md:w-60 text-2xl md:text-3xl px-2 sm:px-2 md:px-3 bg-amber-600 text-white overflow-hidden py-2 md:py-1.5 justify-center rounded-lg text-center"
//   staggerFrom={"last"}
//   initial={{ y: "100%" }}
//   animate={{ y: 0 }}
//   exit={{ y: "-120%" }}
//   staggerDuration={0.025}
//   splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
//   transition={{ type: "spring", damping: 30, stiffness: 400 }}
//   rotationInterval={2000}
// />
//     </div>         
// </h1>
//             {/* Subheading */}
//             <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
//               The complete solution for modern businesses. Streamline your 
//               workflow, boost productivity, and achieve your goals faster than 
//               ever before.
//             </p>

//             {/* CTA Buttons */}
//             <div className="mt-6  flex flex-col sm:flex-row items-center gap-4">
//               <button className="px-6 py-3 bg-black text-white rounded-3xl text-sm font-medium hover:bg-amber-600 transition">
//                 Contact now
//               </button>

//               <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-3xl text-sm font-medium hover:bg-gray-100 transition flex items-center gap-2">
//                 ▶  Watch Demo
//               </button>
//             </div>

//             {/* Stats */}
//             <div className="mt-8 grid grid-cols-3 gap-4 text-center lg:text-left">
//               <div>
//                 <h3 className="text-xl font-bold">

// <CountUp
//   from={0}
//   to={99}
//   separator=","
//   direction="up"
//   duration={1}
//   className="count-up-text"
// />%
//                 </h3>
//                 <p className="text-sm text-gray-500">Customer Satisfaction</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold">24/7</h3>
//                 <p className="text-sm text-gray-500">Support Available</p>
//               </div>
//               <div>
//                 <h3 className="text-xl font-bold">
//                   <CountUp
//   from={0}
//   to={250}
//   separator=","
//   direction="up"
//   duration={1}
//   className="count-up-text"
// />+
//                 </h3>
//                 <p className="text-sm text-gray-500">Projects</p>
//               </div>
//             </div>
//           </div>

//           {/* ------- RIGHT IMAGE ------- */}
//           <div className="w-full md:w-1/2 flex justify-center">
//             <div className="relative">
//               <img
//                 src={heroImg2}
//                 alt="Team working together"
//                 className="w-full max-w-l max-h-120  rounded-xl shadow-lg object-cover"
//               />

//               {/* Floating Badge 1 */}
//               <div className="absolute -top-4 border -md:top-4 right-0 md:right-0 bg-white shadow-lg px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
//                 ↑ 34% Growth Rate
//               </div>

//               {/* Floating Badge 2 */}
//               <div className="absolute -bottom-4 border -md:bottom-4 left-0 md:left-0 bg-white shadow-lg px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
//                 ✓ 2,451 Tasks Completed
//               </div>
//             </div>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;






import React, { useState } from "react";
import heroImg from "../../assets/hero.jpg"; 
import heroImg2 from "../../assets/hero2.jpg"; 
import RotatingText from "../reactbits/RotatingText";
import CountUp from "../reactbits/CountUp";

const HeroSection = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <section className="w-full bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        
        {/* Main container */}
        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

          {/* ------- LEFT TEXT CONTENT ------- */}
          <div className="w-full md:w-1/2 text-center lg:text-left">
            
            {/* Top Badge */}
            <div className="inline-block bg-amber-100 text-amber-700 text-sm px-4 py-1 rounded-full font-medium mb-4">
              ✓ Trusted by 10,000+ customers
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Transform Your Business With{" "}
              
              <div className="mt-4 md:mt-0 flex flex-col md:flex-row items-center gap-2 md:gap-5 text-3xl md:text-5xl">
                <span className="text-black font-extrabold">
                  <span className="text-amber-600">AD</span>KAMP
                </span>

                <RotatingText
                  texts={["MEDIA", "MARKETING", "AND", "MORE"]}
                  mainClassName="w-50 md:w-60 text-2xl md:text-3xl px-2 sm:px-2 md:px-3 bg-amber-600 text-white overflow-hidden py-2 md:py-1.5 justify-center rounded-lg text-center"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
            </h1>

            {/* Subheading */}
            <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
              The complete solution for modern businesses. Streamline your 
              workflow, boost productivity, and achieve your goals faster than 
              ever before.
            </p>

            {/* CTA Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4">
              <button className="px-6 py-3 bg-black text-white rounded-3xl text-sm font-medium hover:bg-amber-600 transition">
                Contact now
              </button>

              <button className="px-6 py-3 border border-gray-300 text-gray-700 rounded-3xl text-sm font-medium hover:bg-gray-100 transition flex items-center gap-2">
                ▶  Watch Demo
              </button>
            </div>

            {/* Stats */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <h3 className="text-xl font-bold">
                  <CountUp
                    from={0}
                    to={99}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />%
                </h3>
                <p className="text-sm text-gray-500">Customer Satisfaction</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">24/7</h3>
                <p className="text-sm text-gray-500">Support Available</p>
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  <CountUp
                    from={0}
                    to={250}
                    separator=","
                    direction="up"
                    duration={1}
                    className="count-up-text"
                  />+
                </h3>
                <p className="text-sm text-gray-500">Projects</p>
              </div>
            </div>
          </div>

          {/* ------- RIGHT IMAGE (fixed loader) ------- */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative">

              {/* Loader with EXACT img size */}
              {!isLoaded && (
                <div className="
                  absolute inset-0
                  w-full h-full
                  bg-gray-200 animate-pulse 
                  rounded-xl
                "></div>
              )}

              {/* Actual Image */}
              <img
                src={heroImg2}
                alt="Team working together"
                onLoad={() => setIsLoaded(true)}
                className={`
                  w-full max-w-l max-h-120 rounded-xl shadow-lg object-cover 
                  transition-opacity duration-500
                  ${isLoaded ? "opacity-100" : "opacity-0"}
                `}
              />

              {/* Floating Badge 1 */}
              <div className="absolute -top-4 right-0 bg-white shadow-lg px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
                ↑ 34% Growth Rate
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -bottom-4 left-0 bg-white shadow-lg px-3 py-2 rounded-lg text-xs md:text-sm font-medium">
                ✓ 2,451 Tasks Completed
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
