import React from "react";
import { FaAward, FaDownload, FaPhone } from "react-icons/fa";
import { PiUsersThree, PiProjectorScreenChart } from "react-icons/pi";
import { handleDownload } from "./PdfDownload";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div id="about">
      <div className="flex flex-col items-center mb-20">
        <h1 className="text-xl">Get To Know</h1>
        <h1 className="text-4xl font-bold text-info">About Me</h1>
      </div>

      <div className="grid lg:grid-cols-2 md:grid-cols-1 justify-between items-center">
        <div
          className="image rounded-xl flex items-center justify-center mb-10"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <img
            className="rounded-xl border-t-8 border-l-8 sm:max-w-sm sm:h-auto lg:max-w-lg lg:h-auto rounded-tl-lg rounded-tr-[50%] rounded-br-[50%] rounded-bl-[50%] transition-all"
            src="https://i.ibb.co/jhnTJkV/picture-2.jpg"
            alt="about me"
          />
        </div>

        <div
          className="lg:flex flex-col gap-4 justify-center items-start "
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="grid grid-cols-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 gap-4 mb-10">
            <div className="card w-40 bg-indigo-900">
              <div className="flex flex-col items-center py-5 justify-center hover:text-info lg:hover:scale-110">
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
                <small> 30+ Satisfied Clients</small>
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

          <div className="w-full text-justify lg:flex flex-col ">
            <p className="text-xl">
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
            <div className="flex gap-4 mt-8 left-0">
              <button
                className="btn btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4"
                onClick={handleDownload}
              >
                <FaDownload></FaDownload>
                Resume
              </button>
              <a
                href="#contact"
                className="btn btn-outline btn-info border-l-0 border-r-0 border-b-4"
              >
                <FaPhone></FaPhone>
                Lets Talk
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
