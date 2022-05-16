import React, { useState } from "react";
import { Link } from 'react-scroll';
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa';
import { BsFillPersonLinesFill } from 'react-icons/bs';

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClickEvent = () => setNav(!nav);
  let Links = [
    { name: "Home", link: "/Home" },
    { name: "About", link: "/About" },
    { name: "Projects", link: "/Projects" },
    { name: "Contact", link: "/Contact" },
  ];
  return (
    <div className="w-full fixed flex justify-between items-center px-4 py-5 bg-blue-900 text-white z-20">
        <h1 className="flex text-3xl font-serif italic justify-start font-semibold text-cyan-100">Lamor Odingo</h1>
      <div to="Home">
          <ul className="hidden md:flex">
            {Links.map((Linking) => (
                 <Link onClick={handleClickEvent} to={Linking.name} smooth={true} duration={500} className="px-5">
                   <button>
                   <li className="hover:text-[#ed6a5a] hover:animate-pulse" cursor-pointer>{Linking.name}</li>
                   </button>
                 </Link>
            ))}
          </ul>
      </div>

    {/* Media Menu */}

      <div onClick={handleClickEvent} className="md:hidden z-30">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
    
      <div className="hidden lg:flex fixed flex-col top-[60%] left-[95%] px-5">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[100px] hover:ml-[-100px] duration-300 hover:bg-blue-600 text-cyan-100 hover:text-gray-300 px-3">
            <a
              className="flex justify-between items-center w-full"
              href="https://www.linkedin.com/in/lamor-odingo/"
              target="_blank"
              rel="noreferrer"
            >
            <FaLinkedin size={30} /> Linkedin 
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[100px] hover:ml-[-100px] duration-300 hover:bg-[#333] text-cyan-100 hover:text-gray-300 px-3">
            <a
              className="flex justify-between items-center w-full"
              href="https://github.com/odingol"
              target="_blank"
              rel="noreferrer"
            >
            <FaGithub size={30} /> GitHub
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center mr-[100px] hover:ml-[-100px] duration-300 hover:bg-red-700 text-cyan-100 hover:text-gray-300 px-3">
            <a
              className="flex justify-between items-center w-full"
              href="https://drive.google.com/file/d/1rVx3H1ZsgJyI4gzMk3Du5hvU2aVvONsy/view"
              target="_blank"
              rel="noreferrer"
            >
           <BsFillPersonLinesFill size={30} /> Resume
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
}
