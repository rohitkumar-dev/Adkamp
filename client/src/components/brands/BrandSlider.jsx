

export default function BrandSlider() {
  // Data array for easy management of logos
  const logos = [
    { id: 1, src: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/client1.png", alt: "logo1" },
    { id: 2, src: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/client2.png", alt: "logo2" },
    { id: 3, src: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/client3.png", alt: "logo3" },
    { id: 4, src: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/client4.png", alt: "logo4" },
    { id: 5, src: "https://dev251.kodesolution.com/digitaal/wp-content/uploads/2025/04/client5.png", alt: "logo5" },
  ];

  // Create a repeated array to ensure we have enough items to fill the screen width
  // (3 sets of 5 logos = 15 logos per block) to handle wide screens seamlessly
  const repeatedLogos = [...logos, ...logos, ...logos];

  return (
    <div className="w-full py-20 text-black flex flex-col items-center bg-transparent">
      <div className="flex items-center gap-4 pb-5">
        <span className="h-px w-16 bg-gray-500" />
        <h2 className="text-xl md:text-3xl font-semibold tracking-wide text-black">
          1K+ Brands Trust Us
        </h2>
        <span className="h-px w-16 bg-gray-500" />
      </div>

      <div className="w-full mt-8 overflow-hidden relative group">
        <style>
          {`
            @keyframes scroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .animate-scroll {
              animation: scroll 30s linear infinite;
              width: max-content; /* Ensure container fits all items */
            }
            /* Pause animation on hover */
            .group:hover .animate-scroll {
              animation-play-state: paused;
            }
          `}
        </style>
        
        {/* Scrolling Container */}
        <div className="flex animate-scroll">
          {/* Block 1 */}
          <div className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
            {repeatedLogos.map((logo, index) => (
              <div 
                key={`block1-${index}`} 
                className="flex justify-center transition ease-out duration-300 hover:brightness-200"
              >
                <img
                  src={logo.src}
                  className="w-28 md:w-36 object-contain"
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>

          {/* Block 2 (Duplicate for seamless loop) */}
          <div className="flex items-center gap-8 md:gap-16 px-4 md:px-8">
            {repeatedLogos.map((logo, index) => (
              <div 
                key={`block2-${index}`} 
                className="flex justify-center transition ease-out duration-300 hover:brightness-200"
              >
                <img
                  src={logo.src}
                  className="w-28 md:w-36 object-contain"
                  alt={logo.alt}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}