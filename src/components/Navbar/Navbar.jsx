import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
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
        <a href="#projects" className="text-info">
          <ImDisplay></ImDisplay>
        </a>{" "}
      </li>
      <li>
        <a href="#resume" className="text-info">
          <MdEditDocument></MdEditDocument>
        </a>{" "}
      </li>
    </>
  );

  return (
    <div className="fixed bottom-8 bg-indigo-500 bg-opacity-20 rounded-full z-10">
      <div className="relative menu menu-horizontal px-5 gap-8 text-2xl">
        {NavOptions}
      </div>
    </div>
  );
};

export default Navbar;
