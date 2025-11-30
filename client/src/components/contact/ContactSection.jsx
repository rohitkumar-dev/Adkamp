import React, { useEffect, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';


const ContactSection = () => {
  // Original text
  const rawText = "ADKAMP • MEDIA • MARKETING • AND • MORE";
  
  // 1. Add a separator at the end to create a perfect loop
  const text = rawText + " • ";
  
  // 2. Split into segments (words and bullets)
  const items = text.split(" ").filter(Boolean);

  // 3. Define a vibrant color palette for the words
  const colors = [
    "#FF6B6B", // Coral Red
    "#4ECDC4", // Turquoise
    "#FFE66D", // Pastel Yellow
    "#A855F7", // Purple
    "#FF8C42", // Orange
    "#3B82F6", // Blue
  ];

  // SVG Path constants
  const radius = 75;
  const circumference = 2 * Math.PI * radius;

  // Animation Refs
  const containerRef = useRef(null);
  const requestRef = useRef();
  const rotationRef = useRef(0);      // Tracks current angle (0-360)
  const speedRef = useRef(0.5);       // Tracks current speed
  const isHoveredRef = useRef(false); // Tracks hover state efficiently

  useEffect(() => {
    // This function runs ~60 times per second
    const animate = () => {
      // Configuration
      const NORMAL_SPEED = 0.5; // Degrees per frame (~30deg/sec)
      const SLOW_SPEED = 0.05;  // Degrees per frame (very slow)
      const INERTIA = 0.05;     // Smoothness factor (0.0 to 1.0) - Lower is smoother

      // 1. Determine target speed
      const targetSpeed = isHoveredRef.current ? SLOW_SPEED : NORMAL_SPEED;

      // 2. Smoothly interpolate current speed towards target speed (Lerp)
      // This creates the "momentum" effect
      speedRef.current += (targetSpeed - speedRef.current) * INERTIA;

      // 3. Update rotation based on current speed
      rotationRef.current = (rotationRef.current + speedRef.current) % 360;

      // 4. Apply to DOM
      if (containerRef.current) {
        containerRef.current.style.transform = `rotate(${rotationRef.current}deg)`;
      }

      // 5. Loop
      requestRef.current = requestAnimationFrame(animate);
    };

    // Start loop
    requestRef.current = requestAnimationFrame(animate);

    // Cleanup on unmount
    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current);
      }
    };
  }, []);

  const handleMouseEnter = () => {
    isHoveredRef.current = true;
  };

  const handleMouseLeave = () => {
    isHoveredRef.current = false;
  };

  return (
    <div className="w-full py-20 px-4 md:px-10 overflow-hidden bg-black flex flex-col items-center justify-center p-4">
      <div className='text-white text-center mb-10 text-2xl'>
      <h2>Lets do something valuable fdgdfgd dfgdfgdf</h2>
      <h3 className='text-orange-500'>Together!</h3>
    </div>
    <div 
      className="relative flex items-center justify-center group cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Rotating Text Wrapper */}
      <div 
        ref={containerRef}
        className="relative w-48 h-48 md:w-64 md:h-64 will-change-transform"
      >
        <svg 
          viewBox="0 0 200 200" 
          className="w-full h-full"
        >
          <path 
            id="textPath" 
            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0" 
            fill="none" 
          />
          <text className="font-bold text-[13px] uppercase tracking-widest">
            {/* textLength forces the text to evenly fill the circle */}
            <textPath 
              href="#textPath" 
              startOffset="0%" 
              textLength={circumference} 
              lengthAdjust="spacing"
            >
              {items.map((item, index) => {
                const isBullet = item === "•";
                const color = isBullet 
                  ? "#FFFFFF" 
                  : colors[(index / 2) % colors.length];

                return (
                  <tspan key={index} fill={color}>
                    {/* {item}{" "} */}
                     {'\u00A0'}{item}{'\u00A0'}
                  </tspan>
                );
              })}
            </textPath>
          </text>
        </svg>
      </div>

      {/* Center "Contact Us" Button */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <div className="bg-white hover:bg-gray-200 text-black w-24 h-24 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-[0_0_30px_rgba(255,255,255,0.1)]">
          <span className="text-sm md:text-base font-bold">Contact</span>
          <span className="text-sm md:text-base font-bold">Us</span>
          <ArrowUpRight className="w-5 h-5 mt-1 transition-transform duration-300 group-hover:rotate-45" />
        </div>
      </div>
    </div>
</div>
  );
};

export default ContactSection