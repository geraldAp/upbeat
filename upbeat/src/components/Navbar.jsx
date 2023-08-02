import React, { useState, useEffect } from "react";
import { NavBarLinks as Links } from "./componentsChildren.jsx/NavBarlinks";
import { HashLink as Link } from "react-router-hash-link";
import { useNavigate } from "react-router-dom";


const Navbar = () => {
  const [nav, setNav] = useState(false);
const navigate = useNavigate()
  
  return (
    <>
      <nav className=" bg-unique-100 py-3 px-7 fixed z-50 top-0 left-0 w-full ease-in duration-300  md:flex md:justify-between items-center ">
        
      <div className="flex items-center w-full ease-in duration-300 justify-between  md:block">
        <img onClick={() => navigate('/')} className="w-40 2xl:w-72 cursor-pointer" src="/img/upbeat.png" alt="Logo" />

        <div className="md:hidden ease-in duration-300">
                <button
                  className="p-2 text-gray-700 rounded-md ease-in duration-300 outline-none focus:border-gray-400 focus:border"
                  onClick={() => setNav(!nav)}
                >
                  {nav ? (
                    <img src="/img/wrong.svg" width={30} height={30} alt="logo" />
                  ) : (
                    <img
                      src="/img/hamburger.png"
                      width={30}
                      height={30}
                      alt="logo"
                      className="focus:border-none active:border-none"
                    />
                  )}
                </button>
      </div>
      </div>

        <ul className={`h-[35vh]  items-center w-full md:h-auto md:flex md:justify-end gap-2 md:gap-5 md:items-center  mr-2 md:mr-0
         ${
          nav ? " flex flex-col md:flex-row" : "hidden"}
        `}>
          {Links.map((links) => (
            <li 
            onClick={() => setNav(!nav)}
            
            className={`  text-white md:font-semibold md:px-0  py-2 px-6 lg:text-base   md:py-0 2xl:text-lg md:last:btn-primary   hover:text-primary-200 `} key={links.id}>
              <Link to={links.hash}>{links.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
