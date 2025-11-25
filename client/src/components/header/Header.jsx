import React from "react";
import { useState } from "react";
import { Link } from 'react-router-dom'
import {Button} from '../index'

function Header() {
  const [open, setOpen] = useState(false);
  return (
    <div className="h-18 flex items-center sticky top-0 z-1"> 
     <nav className="px-3 md:px-8 h-18 w-full flex flex-wrap justify-between  items-center bg-white/80 backdrop-blur-sm rounded-4xl ">
      <div className="w-1/2 shrink md:w-auto h-full flex items-center ">
        <h1 className="text-amber-600 text-xl md:text-4xl font-extrabold cursor-pointer ">AD<span className="text-black">KAMP</span></h1>
      </div>
      <div className={` ${open? "": "hidden"} md:inline-block w-full order-last md:order-0 md:w-1/2 font-medium text-xl bg-white/80 backdrop-blur-lg  md:bg-none rounded-4xl p-5`}>
        <ul className=" md:flex flex-row justify-evenly">
          <li><Link to="">Home</Link></li>
          <li><Link to="">Portfolio</Link></li>
          <li><Link to="">Services</Link></li> 
          <li><Link to="">Events</Link></li>
          <li><Link to="">About</Link></li>
        </ul>
      </div>
      <div className="flex flex-row justify-end w-1/2 md:w-auto ">
        <Button name={"Consult Now"}></Button>
        <button onClick={()=>setOpen(!open)} className="md:hidden ml-5 ">
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#000000"><path d="M92-52v-104.67h776.67V-52H92Zm0-250.33V-407h776.67v104.67H92ZM92-553v-104.67h776.67V-553H92Zm0-250.33v-105.34h776.67v105.34H92Z"/></svg>
        </button>
      </div>
      </nav>
    </div>
  );
}

export default Header;
