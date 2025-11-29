import React from 'react';

// Example data
const avatars = [
  "https://i.pravatar.cc/150?img=32",
  "https://i.pravatar.cc/150?img=41",
  "https://i.pravatar.cc/150?img=11",
];

const ResponsiveHeroCard = ({
  imageSrc,
  heightClass = "h-[400px] md:h-[600px]", // Control total height here
  radius = "rounded-[40px]",               // Control corner roundness here
}) => {
  return (
    <div className="w-8/9 ">
      {/* 1. PARENT CONTAINER 
        - Controls the outer shape and overall size.
        - 'overflow-hidden' ensures the image and black box respect the rounded corners.
      */}
      <div className={`relative w-full ${heightClass} ${radius} overflow-hidden shadow-2xl mx-auto`}>
        
        {/* 2. THE BACKGROUND IMAGE
          - absolute inset-0: Fills the entire parent.
          - object-cover: Ensures image scales correctly without stretching.
        */}
        <img
          src={imageSrc}
          alt="Team working"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div 
          className={`
            h-20 md:h-30
            absolute bottom-0 right-0 
            bg-black
            z-10 
            flex flex-col md:flex-row items-start md:items-center justify-between gap-4
            p-6 md:p-10 
            max-w-[80%] md:max-w-[600px]
            rounded-tl-[40px]  /* This must match or complement the parent radius */
          `}
        >
          {/* Avatar Group */}
          <div className="flex items-center">
            {avatars.map((src, i) => (
              <img
                key={i}
                src={src}
                alt="user"
                className={`
                  w-10 h-10 md:w-14 md:h-14 
                  rounded-full border-2 border-[#1a1a1a] 
                  object-cover
                  ${i > 0 ? '-ml-4 md:-ml-6' : ''} 
                  relative z-${30 - i * 10}
                `}
              />
            ))}
          </div>

          {/* Text Content */}
          <div className="text-white text-left md:text-right">
            <h3 className="text-2xl md:text-4xl font-bold leading-none">200k</h3>
            <p className="text-xs md:text-base text-gray-300 opacity-90">satisfied customers</p>
          </div>
        </div>

      </div>
    </div>
  );
};


export default ResponsiveHeroCard;