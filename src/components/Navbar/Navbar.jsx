import React from "react";
import { Link } from "react-router-dom";
import { FaUserTie } from "react-icons/fa";
import { ImDisplay, ImHome } from "react-icons/im";
import { MdEditDocument } from "react-icons/md";

const Navbar = () => {
  const NavOptions = (
    <>
      <li>
        <Link to="/" className="text-info">
          <ImHome/>          
        </Link>
      </li>
      <li>
        <Link to="/about" className="text-info">
          <FaUserTie></FaUserTie>
        </Link>
      </li>
      <li>
        <Link to="/projects" className="text-info">
          <ImDisplay></ImDisplay>
        </Link>
      </li>
      <li>
        <Link to="/resume" className="text-info">
          <MdEditDocument></MdEditDocument>          
        </Link>
      </li>
    </>
  );

  return (
    <div className="fixed bottom-8 bg-indigo-500 bg-opacity-20 rounded-xl">
      {/* <div className="dropdown">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl"
        >
          {NavOptions}
        </ul>
      </div> */}

   
        <div className="menu menu-horizontal px-20 py-4 gap-16 text-4xl">{NavOptions}</div>
 
    </div>
  );
};

export default Navbar;
