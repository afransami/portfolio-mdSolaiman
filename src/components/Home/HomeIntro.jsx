import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import profilePicture from "../../assets/picture/20180309_09154514-removebg-preview (3).png";

const HomeIntro = () => {
  return (
    <div className="text-white mt-40" id="home">
      <div className="flex flex-col justify-center items-center">
      <h5 className="text-xl text-gray-300">Hello, I'm</h5>
      <h1 className="text-3xl font-bold text-info">Md Solaiman</h1>
      <h5 className="text-xl text-gray-300">Front-end Developer</h5>
      <div className="flex gap-4 mt-8">
        <button className="btn btn-outline btn-info border-1 border-b-4">
          Download Resume
        </button>
        <button className="btn btn-outline btn-info border-1 border-b-4">
          Lets Talk
        </button>
      </div>
      </div>
      
      <div className="mt-20 flex items-center justify-between">
        
        <div className="px-5  flex  flex-col items-center gap-4 text-info text-xl" >
          <Link to='https://www.linkedin.com/' target={'blank'}>
            <FaLinkedin className=""></FaLinkedin>
          </Link>
          <Link to='https://github.com/afransami/' target={'blank'}>
            <FaGithub></FaGithub>
          </Link>
          <Link to='https://www.facebook.com/afransami/' target={'blank'}>
            <FaFacebook></FaFacebook>
          </Link>
          <p className="w-[3px] h-12 bg-info"></p>
        </div>

        <div className="">
        <img          
          style={{ borderRadius: "200px 200px 10px 10px" }}
          src={profilePicture}
          alt="picture"
        />
        </div>
        
        
        <div>
        <p className="relative rotate-90 text-info">Srcoll Down</p>
        </div>
        

      </div>
    </div>
  );
};

export default HomeIntro;
