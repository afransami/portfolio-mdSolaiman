import React, { useEffect } from "react";
import {
  FaDownload,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaPhone,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import profilePicture from "../../assets/picture/picture-2.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
import { PiArrowFatLinesDown } from "react-icons/pi";

        

const HomeIntro = () => {
  

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <div className="text-white mt-40" id="home">
      <div className="grid lg:grid-cols-2 md:grid-cols-1 ">
        <div
          className="flex flex-col justify-center items-center mb-10 transition-all"
          data-aos="slide-right"
          data-aos-duration="1000"
        >
          <h5 className="text-2xl text-gray-300">Hello, I'm</h5>
          <h1 className="text-4xl font-bold text-info">Md Solaiman</h1>
          <h5 className="text-2xl text-gray-300">Front-end Developer</h5>
          <div className="flex gap-4 mt-8">
            <a href="../../../src/assets/Resume of Md Solaiman.pdf" target="_blank" className="btn btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4">
              <FaDownload></FaDownload>        
              Resume
            </a>
            <button className="btn btn-outline btn-info border-l-0 border-r-0 border-b-4">
              <FaPhone></FaPhone>
              Lets Talk
            </button>
          </div>
        </div>

        <div
          className="relative w-full h-full flex justify-center items-center"
          data-aos="fade-down"
          data-aos-duration="1000"
        >
          <img
            className=" w-full h-full object-cover rounded-2xl border-b-8 border-r-8 rounded-tl-[50%] rounded-tr-[50%] rounded-br-lg rounded-bl-[50%] transition-all"
            src={profilePicture}
            alt="picture"
          />
          <div className="absolute inset-0 "></div>
        </div>
      </div>

      <div
        className="mt-20 flex items-center justify-between"
        data-aos="fade-down"
        data-aos-duration="1000"
      >
        <div className="px-5  flex  flex-col items-center gap-4 text-info text-xl">
          <Link to="https://www.linkedin.com/" target={"blank"}>
            <FaLinkedin className=""></FaLinkedin>
          </Link>
          <Link to="https://github.com/afransami/" target={"blank"}>
            <FaGithub></FaGithub>
          </Link>
          <Link to="https://www.facebook.com/afransami/" target={"blank"}>
            <FaFacebook></FaFacebook>
          </Link>
          <p className="w-[3px] h-12 bg-info"></p>
        </div>
        <div className="flex flex-col gap-8 items-center">
          <p>
            <PiArrowFatLinesDown className="h-full text-info text-3xl"></PiArrowFatLinesDown>
          </p>
          <p className=" rotate-90 text-info">Scroll Down</p>          
          <p>
            <PiArrowFatLinesDown className="h-full text-info text-3xl"></PiArrowFatLinesDown>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomeIntro;
