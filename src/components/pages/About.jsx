import React from "react";
import {
  FaAward,
  FaDownload,
  FaPhone,
  FaSpeakap,
  FaVoicemail,
} from "react-icons/fa";
import { PiUsersThree, PiProjectorScreenChart } from "react-icons/pi";
import pictureAbout from "../../assets/picture/picture-2.jpg";

const About = () => {
  return (
    <section id="about" className="pb-10">
      <div className="flex flex-col items-center mt-20">
        <h1 className="text-xl text-gray-300">Get To Know</h1>
        <h1 className="text-4xl font-bold text-info">About Me</h1>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mt-20">
        <div className="max-w-7xl rounded-xl relative ">
          <img
            className="rounded-xl border-t-8 border-l-8 lg:hover:scale-110 w-full rounded-tl-lg rounded-tr-[50%] rounded-br-[50%] rounded-bl-[50%] transition-all"
            src={pictureAbout}
            alt="about me"
          />
          <div className="absolute bg-gradient-to-b from-transparent to-indigo-950 opacity-90"></div>
        </div>

        <div className="px-4 flex flex-col ">
          <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 mb-10">
            <div className="card w-40 bg-indigo-900">
              <div className="flex flex-col items-center  py-5 justify-center hover:text-info lg:hover:scale-110">
                <p className="text-2xl">
                  <FaAward></FaAward>
                </p>
                <h2 className="px-4">Experience</h2>
                <small>1+ year working</small>
              </div>
            </div>

            <div className="card w-40 bg-indigo-900">
              <div className="flex flex-col items-center py-5 justify-center hover:text-info lg:hover:scale-110">
                <p className="text-2xl">
                  <PiUsersThree></PiUsersThree>
                </p>
                <h2 className="px-4">Client</h2>
                <small>30+ Satisfied Clients</small>
              </div>
            </div>

            <div className="card w-40 bg-indigo-900">
              <div className="flex flex-col items-center  py-5 justify-center hover:text-info lg:hover:scale-110">
                <p className="text-2xl">
                  <PiProjectorScreenChart></PiProjectorScreenChart>
                </p>
                <h2 className="px-4">Projects</h2>
                <small>12+ Live Projects</small>
              </div>
            </div>
          </div>

          <div className="w-full text-justify grid lg:grid-rows-2">
            <p>
              Hello there, I am Md. Solaiman, I have recently completed a web
              development course, gaining a solid foundation in HTML5, CSS3,
              Tailwind, Bootstrap5, JavaScript, ReactJs, and Firebase Auth.
              Despite being new to the field, my enthusiasm and dedication to
              learning new technologies make me a quick learner. I have worked
              on various projects during my course, which improved my
              problem-solving abilities and attention to detail. I am confident
              that I can contribute effectively to your team's projects and
              collaborate well.
              <br />
              <br />
              If you have any question/query, Please feel free to nock me.
            </p>
            <div className="flex gap-4 mt-8">
            <a href="../../../src/assets/Resume of Md Solaiman.pdf" target="_blank" className="btn btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4">
              <FaDownload></FaDownload>        
              Resume
            </a>
              <button className="btn btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4">
                <FaPhone></FaPhone>
                Lets Talk
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

// grid lg:grid-cols-1 md:grid-cols-2 sm:grid-cols-2
