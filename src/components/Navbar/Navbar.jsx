import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserTie, FaBrain } from "react-icons/fa";
import { ImDisplay, ImHome } from "react-icons/im";
import { MdEditDocument } from "react-icons/md";


const Navbar = () => {
  const [isActive, setIsActive] = useState();

  const NavOptions = (
    <>
      <li>
        <a href="#home" className={` ${isActive ? 'text-info' : ' '}`}
      onClick={() => setIsActive(!isActive)}
    >
          <ImHome />
        </a>{" "}
      </li>
      <li>
        <a href="#about" className={` ${isActive ? 'text-info' : ' '}`}
      onClick={() => setIsActive(!isActive)}
    >
          <FaUserTie></FaUserTie>
        </a>
      </li>
      <li>
        <a href="#skill" className={` ${isActive ? 'text-info' : ' '}`}
      onClick={() => setIsActive(!isActive)}
    >
        <FaBrain></FaBrain>
        </a>
      </li>
      <li>
        <a href="#projects" className={` ${isActive ? 'text-info' : ' '}`}
      onClick={() => setIsActive(!isActive)}
    >
          <ImDisplay></ImDisplay>
        </a>{" "}
      </li>
      <li>
        <a href="#contact" className={` ${isActive ? 'text-info' : ' '}`}
      onClick={() => setIsActive(!isActive)}
    >
          <MdEditDocument></MdEditDocument>
        </a>{" "}
      </li>
    </>
  );

  return (
    <div className="fixed bottom-8 bg-indigo-500 bg-opacity-20 rounded-full z-10">
      <div className="relative menu menu-horizontal px-2 gap-4 text-2xl">
        {NavOptions}
      </div>
    </div>
  );
};

export default Navbar;
