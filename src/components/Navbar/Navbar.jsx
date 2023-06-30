import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FaUserTie, FaBrain } from "react-icons/fa";
import { ImDisplay, ImHome } from "react-icons/im";
import { MdEditDocument } from "react-icons/md";


const Navbar = () => {
  
  const NavOptions = (
    <>
      <li>
        <a href="#home" className="text-info">
          <ImHome />
        </a>{" "}
      </li>
      <li>
        <a href="#about" className="text-info">
          <FaUserTie></FaUserTie>
        </a>
      </li>
      <li>
        <a href="#skill" className="text-info">
          <FaBrain></FaBrain>
        </a>
      </li>
      <li>
        <a href="#projects" className="text-info">
          <ImDisplay></ImDisplay>
        </a>{" "}
      </li>
      <li>
        <a href="#contact" className="text-info">
          <MdEditDocument></MdEditDocument>
        </a>{" "}
      </li>
    </>
  );

  return (
    <div className="fixed bottom-4 bg-indigo-500 bg-opacity-20 rounded-full z-10">
      <div className=" menu menu-horizontal px-2 gap-4 text-2xl">
        {NavOptions}        
      </div>
    </div>
  );
};

export default Navbar;
