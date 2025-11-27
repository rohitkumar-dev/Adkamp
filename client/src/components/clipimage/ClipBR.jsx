// import React from 'react';

// const CroppedImageSvg = ({ imageUrl, altText="img" }) => {
//   // This is the path data for the custom shape
//   const shapePathData = "M0 24C0 10.7452 10.7452 0 24 0H466C479.255 0 490 10.7452 490 24V234C490 247.255 479.255 258 466 258H378C364.745 258 354 268.745 354 282V315C354 328.255 343.255 339 330 339H24C10.7452 339 0 328.255 0 315V24Z";

//   // Define the aspect ratio of the shape path above (approx 490 width x 339 height)
//   const viewBoxStr = "0 0 490 339";

//   return (
//     <div style={{ maxWidth: '500px', margin: '20px auto' }}>
//       {/* We use an svg element as a container */}
//       <svg
//         viewBox={viewBoxStr}
//         width="100%"
//         height="auto"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <defs>
//           {/* Define the mask. White areas are visible, black are hidden. */}
//           <mask id="custom-shape-mask">
//             <path d={shapePathData} fill="white" />
//           </mask>
//         </defs>

//         {/* The actual image positioned within the SVG */}
//         {/* We apply the mask ID here */}
//         <image
//           href={imageUrl} // Note: use 'href', not 'src' in SVG
//           width="100%"
//           height="100%"
//           preserveAspectRatio="xMidYMid slice" // Acts like object-fit: cover
//           mask="url(#custom-shape-mask)"
//           alt={altText}
//         />
//       </svg>
//     </div>
//   );
// };

// export default CroppedImageSvg;



import React from 'react';

const ClipBR = ({ imageUrl }) => {
  // Path logic for a 16:9 box (1600x900) with a "bite" out of the bottom right.
  // We use relative coordinates to ensure it scales perfectly.
  const shapePath = `
    M 40 0 
    L 1560 0 Q 1600 0 1600 40 
    L 1600 580 
    Q 1600 630 1550 630 
    L 1250 630 
    Q 1200 630 1200 680 
    L 1200 860 
    Q 1200 900 1160 900 
    L 40 900 
    Q 0 900 0 860 
    L 0 40 
    Q 0 0 40 0 
    Z
  `;

  return (
    // Kept your layout classes (margins, centering, width)
    // Removed 'rounded-2xl' and 'overflow-hidden' as the SVG handles the shape now
    <div className="">
      
      {/* viewBox="0 0 1600 900" forces the 16:9 Aspect Ratio.
         Even if the screen resizes, the SVG maintains this ratio.
      */}
      <svg
        viewBox="0 0 1600 900"
        className="w-full h-auto drop-shadow-xl" // Optional: drop-shadow adds depth
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <mask id="hero-mask">
            {/* The white shape defines what is visible */}
            <path d={shapePath} fill="white" />
          </mask>
        </defs>

        {/* The Image */}
        <image
          href={imageUrl}
          width="100%"
          height="100%"
          mask="url(#hero-mask)"
          preserveAspectRatio="xMidYMid slice" // This acts exactly like object-cover
          className="object-cover" 
        />
        
        {/* Optional: Add a subtle border outline if you want the shape to pop */}
        {/* <path 
          d={shapePath} 
          fill="none" 
          stroke="rgba(255,255,255,0.1)" 
          strokeWidth="2" 
        /> */}
      </svg>
    </div>
  );
};

export default ClipBR;