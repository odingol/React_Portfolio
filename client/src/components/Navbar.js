import React from "react";
import { Link } from 'react-scroll';

export default function Navbar() {
  let Links = [
    { name: "Home", link: "/Home" },
    { name: "About", link: "/" },
    { name: "Projects", link: "/" },
    { name: "Contact", link: "/" },
  ];
  return (
    <div className="shadow-md w-full fixed top-0 left-0">
      <div className="md:flex bg-blue-900 py-4 text-white items-center justify-between">
        <nav>
          <ul>
            {Links.map((Link) => (
              <li>
                 {/* <Link to={Link.link}>{Link.name}</Link> */}
                <a href={Link.link}>{Link.name}</a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
}
/* <Link to= '/'>Home</Link> */
