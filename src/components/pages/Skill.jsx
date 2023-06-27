import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  FaHtml5,
  FaNodeJs,
  FaPhone,
  FaReact,
} from "react-icons/fa";
import { BiLogoCss3 } from "react-icons/bi";
import { SiFirebase, SiJavascript, SiJsonwebtokens, SiMongodb } from "react-icons/si";

const Skill = () => {

  return (
    <div id="skill" className="mb-20">
      <div
        className="container mx-auto mb-10 transition-all"
        data-aos="fade-up"
        data-aos-duration="1000"        
      >
        <div className="flex flex-col items-center mt-10">
        <h1 className="text-xl text-gray-300">Get To Know</h1>
        <h1 className="text-center text-4xl font-bold text-info"> My Skills</h1>
        </div>
        
        <div className="grid grid-cols-2 gap-16  mt-8 text-xl text-info"
        >
          <div className="space-y-8">
            <h1 className="text-3xl font-bold text-info mb-5 text-center">Front-end</h1>
            <p>
              <FaHtml5></FaHtml5>HTML
              <ProgressBar
                completed={80}
                maxCompleted={100}
                bgColor="#0edbe0"
                labelColor="#0404b7"
                height="20px" 
                transitionTimingFunction="ease-in"
                animateOnRender
                dir="auto"
              />
            </p>
            <p>
              <BiLogoCss3></BiLogoCss3> CSS
              <ProgressBar
                completed={80}
                maxCompleted={100}
                bgColor="#0edbe0"
                labelColor="#0404b7"
                height="20px" 
                transitionTimingFunction="ease-in"
                animateOnRender
                dir="auto"
              />
            </p>
                     
            <p>
              <SiJavascript></SiJavascript>Javascript
              <ProgressBar
                completed={70}
                maxCompleted={100}
                bgColor="#0edbe0"
                labelColor="#0404b7"
                height="20px" 
                transitionTimingFunction="ease-in"
                animateOnRender
                dir="auto"
              />
            </p>
            <p>
              <FaReact></FaReact>ReactJs
              <ProgressBar
                completed={70}
                maxCompleted={100}
                bgColor="#0edbe0"
                labelColor="#0404b7"
                height="20px"                
                transitionTimingFunction="ease-in"
                animateOnRender
                dir="auto"
              />
            </p>
          </div>


          <div className="space-y-8">
          <h1 className="text-3xl font-bold text-info mb-5 text-center">Back-end</h1>
            
            <p>
              <FaNodeJs></FaNodeJs>NodeJs
              <ProgressBar
                completed={60}
                maxCompleted={100}
                bgColor="#0edbe0"
                labelColor="#0404b7"
                height="20px" 
                transitionTimingFunction="ease-in"
                animateOnRender
                dir="auto"
              />
            </p>
            <p>
              <SiMongodb></SiMongodb>Mongodb
              <ProgressBar
                completed={60}
                maxCompleted={100}
                bgColor="#0edbe0"
                labelColor="#0404b7"
                height="20px" 
                transitionTimingFunction="ease-in"
                animateOnRender
                dir="auto"
              />
            </p>
            <p>
              <SiJsonwebtokens></SiJsonwebtokens>JWT
              <ProgressBar
                completed={50}
                maxCompleted={100}
                bgColor="#0edbe0"
                labelColor="#0404b7"
                height="20px" 
                transitionTimingFunction="ease-in"
                animateOnRender
                dir="auto"
              />
            </p>
            <p>
              <SiFirebase></SiFirebase>Firebase
              <ProgressBar
                completed={80}
                maxCompleted={100}
                bgColor="#0edbe0"
                labelColor="#0404b7"
                height="20px" 
                transitionTimingFunction="ease-in"
                animateOnRender
                dir="auto"
              />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
