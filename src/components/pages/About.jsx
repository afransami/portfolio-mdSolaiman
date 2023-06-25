import React from "react";
import { FaAward } from "react-icons/fa";
import { PiUsersThree, PiProjectorScreenChart } from "react-icons/pi";
import pictureAbout from "../../../src/assets/picture/20180309_09154514-removebg-preview (1).png";

const About = () => {
  return (
    <section id="about">
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-xl text-gray-300">Get To Know</h1>
        <h1 className="text-4xl text-info">About</h1>
      </div>

      <div className="md:flex justify-center items-start gap-8 mt-20">
        <div style={{width:350, backgroundColor:'#04e0d9'}} className="rounded-xl ml-3 mb-10">            
            <img
            className="rounded-xl hover:rotate-12 relative transition-all" 
            src={pictureAbout}
            alt=""
            style={{width:350}}
          />      
                     
        </div>

        <div className="flex gap-4 items-center justify-between">
          <div className="card w-40 bg-indigo-900">
            <div className="flex flex-col items-center  py-5 justify-center hover:text-info">
              <p>
                <FaAward></FaAward>
              </p>
              <h2 className="px-4">Experience</h2>
              <small>1+ year working</small>
            </div>
          </div>

          <div className="card w-40 bg-indigo-900">
            <div className="flex flex-col items-center py-5 justify-center hover:text-info">
              <p>
              <PiUsersThree></PiUsersThree>
              </p>
              <h2 className="px-4">Client</h2>
              <small>30+ Satisfied Clients</small>
            </div>
          </div>

          <div className="card w-40 bg-indigo-900">
            <div className="flex flex-col items-center  py-5 justify-center hover:text-info">
              <p>
                <PiProjectorScreenChart></PiProjectorScreenChart>
              </p>
              <h2 className="px-4">Projects</h2>
              <small>12+ Live Projects</small>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
