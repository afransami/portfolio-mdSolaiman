import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";
import {
  FaBootstrap,
  FaDownload,
  FaHtml5,
  FaNodeJs,
  FaPhone,
  FaReact,
} from "react-icons/fa";
import { TbBrandTailwind } from "react-icons/tb";
import { BiLogoCss3 } from "react-icons/bi";
import { SiFirebase, SiJavascript, SiMongodb } from "react-icons/si";

const Skill = () => {
  const Example = () => {
    return <ProgressBar completed={60} />;
  };

  return (
    <div id="skill" className="">
      <div
        className="flex flex-col justify-center items-center mb-10 transition-all"
        data-aos="slide-right"
        data-aos-duration="1000"
      >
        <h1 className="text-4xl font-bold text-info"> My Skills</h1>
        <div className="grid grid-cols-4 gap-16 mt-8 text-3xl text-info">
          <p>
            <FaHtml5></FaHtml5>Bootstrap
            <ProgressBar
              completed={80}
              maxCompleted={100}
              bgColor="#0a808f"
              height="15px"
              labelColor="#ffffff"
            />
          </p>
          <p>
            <BiLogoCss3></BiLogoCss3> CSS
            <ProgressBar
              completed={90}
              maxCompleted={100}
              bgColor="#0a808f"
              height="15px"
              labelColor="#ffffff"
              transitionTimingFunction="ease-in"
              animateOnRender
              dir="auto"
            />
          </p>
          <p>
            <FaBootstrap></FaBootstrap>Bootstrap
          </p>
          <p>
            <TbBrandTailwind></TbBrandTailwind>Tailwind
          </p>
          <p>
            <SiJavascript></SiJavascript>Javascript
          </p>
          <p>
            <FaReact></FaReact>ReactJs
          </p>
          <p>
            <FaNodeJs></FaNodeJs>NodeJs
          </p>
          <p>
            <SiMongodb></SiMongodb>Mongodb
          </p>
          <p>
            <SiFirebase></SiFirebase>Firebase
          </p>

          <button className="btn btn-outline btn-info border-1 border-1 border-l-0 border-r-0 border-b-4">
            <FaDownload></FaDownload>
            Resume
          </button>
          <button className="btn btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4">
            <FaPhone></FaPhone>
            Lets Talk
          </button>
        </div>
      </div>
    </div>
  );
};

export default Skill;
