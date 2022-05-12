import React, { useState } from "react";
import { Link } from 'react-scroll';

export default function Navbar() {
  // const [nav, setNav] = useState(false);
  // const handleClickEvent = () => setNav(!nav);
  let Links = [
    { name: "Home", link: "/Home" },
    { name: "About", link: "/About" },
    { name: "Projects", link: "/Projects" },
    { name: "Contact", link: "/Contact" },
  ];
  return (
    <div className="w-full fixed flex justify-between items-center px-4 py-5 bg-blue-900 text-white">
        <h1 className="flex text-3xl font-serif italic justify-start font-semibold text-cyan-100">Lamor Odingo</h1>
      <div>
          <ul className="hidden md:flex">
            {Links.map((Linking) => (
                 <Link to={Linking.name} smooth={true} duration={500} className="px-5">
                   <li className="hover:text-[#ed6a5a] hover:animate-pulse">{Linking.name}</li>
                 </Link>
            ))}
          </ul>
      </div>
    </div>
  );
}
