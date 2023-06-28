import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <div className="container mx-auto px-2 text-white">
      <div className="flex justify-center items-center">
        <Navbar></Navbar>
      </div>
      <div className="min-h-[calc(100vh-0px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};
export default Main;
