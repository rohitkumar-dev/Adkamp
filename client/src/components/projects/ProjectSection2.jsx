// import React from "react";

// export default function ProjectSection2() {
//   const images = [
//     "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=650&fm=jpg",
//     "https://images.unsplash.com/photo-1497733942558-e74c87ef89db?w=650&fm=jpg",
//     "https://images.unsplash.com/photo-1540744276164-9dc898353c7b?w=650&fm=jpg",
//     "https://images.unsplash.com/photo-1469975692758-66d107a536cb?w=650&fm=jpg",
//     "https://images.unsplash.com/photo-1490845060161-85f9ce08a9f4?w=650&fm=jpg",
//     "https://images.unsplash.com/photo-1541673504494-8bcc1a340180?w=650&fm=jpg",
//     "https://images.unsplash.com/photo-1515937350506-3e7b51a95339?w=650&fm=jpg",
//   ];

//   const nRows = 3;
//   const nColsMin = 2;
//   const nColsMax = nColsMin + 1;
//   const nColsSum = nColsMin + nColsMax;

//   const count =
//     Math.ceil(0.5 * nRows) * nColsMin +
//     Math.floor(0.5 * nRows) * nColsMax;

//   return (
//     <section style={{ background: "#ffffff", padding: "80px 0" }}>
//       <div
//         style={{
//           maxWidth: "1280px",
//           margin: "0 auto",
//           padding: "0 20px",
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           alignItems: "center",
//           gap: "40px",
//         }}
//       >
//         {/* LEFT = HEX GRID */}
//         <div
//           className="hex-body"
//           style={{
//             ["--n-rows"]: nRows,
//             ["--n-cols"]: 2 * nColsMax,
//           }}
//         >
//           {Array.from({ length: count }).map((_, i) => (
//             <div
//               key={i}
//               className="hex-cell"
//               style={
//                 (i + 1) % nColsSum === 1
//                   ? { gridColumnStart: 2 }
//                   : undefined
//               }
//             >
//               <img src={images[i % images.length]} alt="" />
//             </div>
//           ))}
//         </div>

//         {/* RIGHT SIDE TEXT */}
//         <div>
//           <h4
//             style={{
//               textTransform: "uppercase",
//               letterSpacing: "3px",
//               fontSize: "14px",
//               color: "#888",
//               marginBottom: "10px",
//             }}
//           >
//             Our Approach
//           </h4>

//           <h2
//             style={{
//               fontSize: "40px",
//               fontWeight: "800",
//               lineHeight: "1.2",
//               marginBottom: "20px",
//               color: "#111",
//             }}
//           >
//             Creative solutions built for
//             <span style={{ color: "#f8a926" }}> modern brands</span>
//           </h2>

//           <p
//             style={{
//               fontSize: "16px",
//               lineHeight: "1.7",
//               color: "#555",
//               maxWidth: "450px",
//               marginBottom: "30px",
//             }}
//           >
//             We combine innovative strategies with beautiful design to deliver
//             projects that elevate brand presence and generate real business
//             impact. From full-scale campaigns to digital branding — we craft
//             everything with precision.
//           </p>

//           <button
//             style={{
//               background: "#f8a926",
//               color: "#111",
//               padding: "14px 30px",
//               fontSize: "16px",
//               fontWeight: "600",
//               borderRadius: "50px",
//               border: "none",
//               cursor: "pointer",
//               transition: "0.3s",
//             }}
//           >
//             Explore All Projects →
//           </button>
//         </div>
//       </div>

//       {/* INLINE CSS */}
//       <style>{`
//         .hex-body {
//           --l: calc(70vmin / var(--n, var(--n-cols)));
//           --hl: calc(.5 * var(--l));
//           --ri: calc(.5 * sqrt(3) * var(--l));
          
//           display: grid;
//           place-content: center;
//           box-sizing: border-box;
//           grid-template: repeat(var(--n-rows), var(--l)) / repeat(var(--n-cols), var(--ri));
//           grid-gap: var(--hl) 0;

//           margin: auto;
//           padding: var(--hl) 0;
//           width: 100%;
//           height: 90vh;

//           filter: drop-shadow(3px 3px 8px rgba(0,0,0,0.15));
//         }

//         @media (orientation: landscape) {
//           .hex-body {
//             --n: calc(var(--n-rows) + 3);
//           }
//         }

//         .hex-cell {
//           overflow: hidden;
//           grid-column-end: span 2;
//           margin: calc(-1 * var(--hl)) 0;
//           transform: scale(.96);

//           clip-path: polygon(
//             50% 0,
//             100% 25%,
//             100% 75%,
//             50% 100%,
//             0 75%,
//             0 25%
//           );
//         }

//         .hex-cell img {
//           --hl: 0;
//           width: 100%;
//           height: 100%;
//           object-fit: cover;

//           transform: scale(calc(1 + .2 * var(--hl)));
//           filter: brightness(calc(.8 * (1 + var(--hl))));
//           transition: .6s ease;
//         }

//         .hex-cell img:hover {
//           --hl: 1;
//         }

//         /* Mobile Responsive */
//         @media (max-width: 900px) {
//           section > div {
//             grid-template-columns: 1fr;
//             text-align: center;
//           }

//           .hex-body {
//             height: 70vh;
//             margin-bottom: 30px;
//           }

//           section button {
//             margin: auto;
//           }
//         }
//       `}</style>
//     </section>
//   );
// }







import React from "react";

export default function ProjectSection2() {
  const images = [
    "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=650&fm=jpg",
    "https://images.unsplash.com/photo-1497733942558-e74c87ef89db?w=650&fm=jpg",
    "https://images.unsplash.com/photo-1540744276164-9dc898353c7b?w=650&fm=jpg",
    "https://images.unsplash.com/photo-1469975692758-66d107a536cb?w=650&fm=jpg",
    "https://images.unsplash.com/photo-1490845060161-85f9ce08a9f4?w=650&fm=jpg",
    "https://images.unsplash.com/photo-1541673504494-8bcc1a340180?w=650&fm=jpg",
    "https://images.unsplash.com/photo-1515937350506-3e7b51a95339?w=650&fm=jpg",
  ];

  const nRows = 3;
  const nColsMin = 2;
  const nColsMax = nColsMin + 1;
  const nColsSum = nColsMin + nColsMax;

  const count =
    Math.ceil(0.5 * nRows) * nColsMin +
    Math.floor(0.5 * nRows) * nColsMax;

  return (
    <section className="hidden md:inline-block" style={{ background: "#ffffff", padding: "80px 0" }}>
      <div
        className="project-grid-wrapper"
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 20px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          alignItems: "center",
          gap: "40px",
        }}
      >
        {/* LEFT = HEX GRID (moves to top on mobile) */}
        <div
          className="hex-body"
          style={{
            ["--n-rows"]: nRows,
            ["--n-cols"]: 2 * nColsMax,
          }}
        >
          {Array.from({ length: count }).map((_, i) => (
            <div
              key={i}
              className="hex-cell"
              style={
                (i + 1) % nColsSum === 1
                  ? { gridColumnStart: 2 }
                  : undefined
              }
            >
              <img src={images[i % images.length]} alt="" />
            </div>
          ))}
        </div>

        {/* RIGHT SIDE TEXT */}
        <div className="project-text">
          <h4
            style={{
              textTransform: "uppercase",
              letterSpacing: "3px",
              fontSize: "14px",
              color: "#888",
              marginBottom: "10px",
            }}
          >
            Our Approach
          </h4>

          <h2
            className="project-title"
            style={{
              fontSize: "40px",
              fontWeight: "800",
              lineHeight: "1.2",
              marginBottom: "20px",
              color: "#111",
            }}
          >
            Creative solutions built for
            <span style={{ color: "#f8a926" }}> modern brands</span>
          </h2>

          <p
            className="project-desc"
            style={{
              fontSize: "16px",
              lineHeight: "1.7",
              color: "#555",
              maxWidth: "450px",
              marginBottom: "30px",
            }}
          >
            We combine innovative strategies with beautiful design to deliver
            projects that elevate brand presence and generate real business
            impact. From full-scale campaigns to digital branding — we craft
            everything with precision.
          </p>

          <button
            className="project-btn"
            style={{
              background: "#f8a926",
              color: "#111",
              padding: "14px 30px",
              fontSize: "16px",
              fontWeight: "600",
              borderRadius: "50px",
              border: "none",
              cursor: "pointer",
              transition: "0.3s",
            }}
          >
            Explore All Projects →
          </button>
        </div>
      </div>

      {/* INLINE CSS */}
      <style>{`
        .project-grid-wrapper {
          display: grid;
        }

        /* ORDER FIX FOR MOBILE */
        @media (max-width: 900px) {
          .project-grid-wrapper {
            grid-template-columns: 1fr;
            text-align: center;
          }

          /* move HEX GRID to top */
          .hex-body {
            order: 1;
          }

          /* move TEXT below */
          .project-text {
            order: 2;
          }

          .project-title {
            font-size: 32px !important;
          }

          .project-desc {
            margin: 0 auto 30px;
          }

          .project-btn {
            margin: auto;
          }
        }

        .hex-body {
          --l: clamp(38px, 15vw, 90px);
          --hl: calc(.5 * var(--l));
          --ri: calc(.5 * sqrt(3) * var(--l));
          
          display: grid;
          place-content: center;
          box-sizing: border-box;
          grid-template: repeat(var(--n-rows), var(--l)) 
                         / repeat(var(--n-cols), var(--ri));
          grid-gap: var(--hl) 0;

          margin: auto;
          padding: var(--hl) 0;
          width: 100%;
          max-width: 500px;
          height: auto;
          overflow: hidden;
        }

        .hex-cell {
          overflow: hidden;
          grid-column-end: span 2;
          margin: calc(-1 * var(--hl)) 0;
          transform: scale(.96);
          clip-path: polygon(
            50% 0,
            100% 25%,
            100% 75%,
            50% 100%,
            0 75%,
            0 25%
          );
        }

        .hex-cell img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: .5s ease;
        }

        .hex-cell img:hover {
          transform: scale(1.15);
          filter: brightness(1.15);
        }

        /* EXTRA SMALL FIX (300px phones) */
        @media (max-width: 350px) {
          .hex-body {
            --l: 32px;
            max-width: 250px;
          }

          .project-title {
            font-size: 26px !important;
          }

          .project-desc {
            font-size: 14px !important;
          }
        }
      `}</style>
    </section>
  );
}
