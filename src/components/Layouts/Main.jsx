import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className="container mx-auto text-white">
      <div className="flex justify-center items-center">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-0px)] ">
        <Outlet />
        {/* <Footer></Footer> */}
      </div>
    </div>
  );
};

export default Main;

// bg-gray-800