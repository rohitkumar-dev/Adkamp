import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import {Button} from '../index'

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center sticky top-0 z-2"> 
     <nav className="px-5 md:px-8 h-18 md:h-20 w-full flex flex-wrap justify-between  items-center bg-red-100/80 backdrop-blur-sm  ">
      <div className="w-1/2 shrink md:w-auto h-full flex items-center ">
        <h1 className="text-amber-600 text-xl md:text-3xl font-black cursor-pointer ">AD<span className="text-black">KAMP</span></h1>
      </div>
      <div className={` ${open? "": "hidden"} text-center bg-white backdrop-blur-sm md:backdrop-blur-none md:bg-transparent mt-1 md:mt-0 md:inline-block w-full order-last md:order-0 md:w-1/2 font-normal md:font-medium text-md md:text-[16] lg:text-lg rounded-lg p-4 md:p-5`}>
        <ul className=" md:flex flex-row justify-evenly ">
          <li className="pb-2 md:pb-0"><Link to="">Home</Link></li>
          <li className="pb-2 md:pb-0"><Link to="">Portfolio</Link></li>
          <li className="pb-2 md:pb-0"><Link to="">Services</Link></li> 
          <li className="pb-2 md:pb-0"><Link to="">Events</Link></li>
          <li className=""><Link to="">About</Link></li>
        </ul>
      </div>
      <div className="flex flex-row justify-end w-1/2 md:w-auto ">
        <Button name={"Consult now"}></Button>
        <button onClick={()=>setOpen(!open)} className="md:hidden ml-3 cursor-pointer">
          {!open? ( 
            // <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>) 
            // <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M120-120v-80h720v80H120Zm0-320v-80h720v80H120Zm0-320v-80h720v80H120Z"/></svg>
            // <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M100.78-100.78v-100.35h758.44v100.35H100.78Zm0-329.05v-100.34h758.44v100.34H100.78Zm0-329.04v-100.35h758.44v100.35H100.78Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="M74-74v-126h812v126H74Zm0-343v-126h812v126H74Zm0-343v-126h812v126H74Z"/></svg>
          )
            : (
            // <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m357-384 123-123 123 123 57-56-180-180-180 180 57 56ZM480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000"><path d="m254-159-94-95 225-226-225-226 94-96 226 226 226-226 94 96-225 226 225 226-94 95-226-226-226 226Z"/></svg>
            )}
              
        </button>
      </div>
      </nav>
    </div> 
  );
}

export default Header;
