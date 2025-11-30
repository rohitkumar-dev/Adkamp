// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import Button from "../Button"; // Make sure Button has className support

// function Header2() {
//   const [open, setOpen] = useState(false);

//   return (
//     <div className="flex items-center sticky top-0 z-50">
//       <nav className="px-5 md:px-8 h-18 md:h-20 w-full flex flex-wrap justify-between items-center bg-white/90 backdrop-blur-lg shadow-sm">

//         {/* LOGO */}
//         <div className="w-1/2 md:w-auto flex items-center">
//           <h1 className="text-amber-600 text-xl md:text-3xl font-black cursor-pointer">
//             AD<span className="text-black">KAMP</span>
//           </h1>
//         </div>

//         {/* NAV MENU */}
//         <div
//           className={`${
//             open ? "block" : "hidden"
//           } text-center md:inline-block w-full md:w-1/2 transition-all duration-300 
//           bg-white md:bg-transparent shadow-sm md:shadow-none rounded-lg md:rounded-none p-4 md:p-0 font-medium`}
//         >
//           <ul className="md:flex flex-row justify-evenly gap-3 md:gap-0">

//             {["Home", "Portfolio", "Services", "Events", "About"].map((item) => (
//               <li key={item} className="pb-2 md:pb-0">
//                 <Link
//                   to=""
//                   className="block py-2 md:py-0 hover:bg-amber-50 md:hover:bg-transparent rounded-md 
//                   hover:text-amber-600 transition duration-200 relative group"
//                 >
//                   {item}
//                   <span className="hidden md:block h-[2px] w-0 bg-amber-600 transition-all duration-300 group-hover:w-full"></span>
//                 </Link>
//               </li>
//             ))}

//             {/* MOBILE CONSULT BUTTON */}
//             {open && (
//               <button className="w-full bg-amber-600 text-white py-3 rounded-lg mt-3 hover:bg-amber-700 transition md:hidden">
//                 Consult now
//               </button>
//             )}
//           </ul>
//         </div>

//         {/* DESKTOP CONSULT BUTTON */}
//         <div className="hidden md:block">
//           <Button
//             name="Consult now"
//             className="px-5 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition font-medium shadow-sm"
//           />
//         </div>

//         {/* MOBILE MENU ICON */}
//         <button
//           onClick={() => setOpen(!open)}
//           className="md:hidden ml-3 cursor-pointer transition duration-200"
//         >
//           {!open ? (
//             /* HAMBURGER ICON */
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-7 h-7"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//               stroke="black"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="3" y1="6" x2="21" y2="6" />
//               <line x1="3" y1="12" x2="21" y2="12" />
//               <line x1="3" y1="18" x2="21" y2="18" />
//             </svg>
//           ) : (
//             /* CROSS ICON */
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               className="w-7 h-7"
//               viewBox="0 0 24 24"
//               strokeWidth="2"
//               stroke="black"
//               fill="none"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               <line x1="18" y1="6" x2="6" y2="18" />
//               <line x1="6" y1="6" x2="18" y2="18" />
//             </svg>
//           )}
//         </button>
//       </nav>
//     </div>
//   );
// }

// export default Header2;

