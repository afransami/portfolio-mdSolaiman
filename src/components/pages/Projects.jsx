import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  return (
    <section id="projects" className="mb-20"
    data-aos="zoom-in"
          data-aos-duration="1000"
    
    >
      <div className="flex flex-col items-center my-20">
        <h1 className="text-xl text-gray-300">What Projects I did</h1>
        <h1 className="text-4xl font-bold text-info mb-10">My Projects</h1>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-10">

          <div className="card max-w-sm h-auto  bg-slate-900 text-white shadow-xl">
            <figure>
              <img
                className="w-96  bg-cover"
                src="https://i.ibb.co/7tCGmdf/Screenshot-2.png"
                alt="musicalMingle"
              />
            </figure>
            <div className="card-body bg-indigo-950 rounded-b-lg">
              <h2 className="card-title">Musical Mingle</h2>
              <p>A Summer School Camp MERN stack website.</p>
              <div className="card-actions justify-end">
                <a
                  href="https://music-school-client.web.app"
                  target="_blank"
                  className="badge badge-outline p-3 btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4"
                >
                  Live site
                </a>
                <a
                  href="https://github.com/afransami/Musical-Mingle-Client"
                  target="_blank"
                  className="badge badge-outline p-3 btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4"
                >
                  Client Code
                </a>
                <a
                  href="https://github.com/afransami/Musical-Mingle-Server"
                  target="_blank"
                  className="badge badge-outline p-3 btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4"
                >
                  Server Code
                </a>
              </div>
            </div>
          </div>

          <div className="card max-w-sm h-96  bg-slate-900 text-white shadow-xl">
            <figure>
              <img
                className="w-96 h-auto bg-fit"
                src="https://i.ibb.co/6HZF0CT/Screenshot-4.png"
                alt="hublotToys"
              />
            </figure>
            <div className="card-body bg-indigo-950 rounded-b-lg">
              <h2 className="card-title">Hublot Toys</h2>
              <p>An E-commerce MERN stack website.</p>
              <div className="card-actions justify-end">
                <a
                  href="https://assignment-11-client-f3cb1.web.app/"
                  target="_blank"
                  className="badge badge-outline p-3 btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4"
                >
                  Live site
                </a>
                <a
                  href="https://github.com/afransami/Hublot-Toys-Client"
                  target="_blank"
                  className="badge badge-outline p-3 btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4"
                >
                  Client Code
                </a>
                <a
                  href="https://github.com/afransami/Hublot-Toys-Server"
                  target="_blank"
                  className="badge badge-outline p-3 btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4"
                >
                  Server Code
                </a>
              </div>
            </div>
          </div>

          <div className="card max-w-sm h-96  bg-slate-900 text-white shadow-xl">
            <figure>
              <img
                className="w-96 h-auto bg-fit"
                src="https://i.ibb.co/253TYzb/Screenshot-7.png"
                alt="ThaiTaste"
              />
            </figure>
            <div className="card-body bg-indigo-950 rounded-b-lg">
              <h2 className="card-title">Hublot Toys</h2>
              <p>A chef's MERN stack website.</p>
              <div className="card-actions justify-end">
                <a
                  href="https://module-10-4101c.web.app/"
                  target="_blank"
                  className="badge badge-outline p-3 btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4"
                >
                  Live site
                </a>
                <a
                  href="https://github.com/afransami/Thai-Taste-Client"
                  target="_blank"
                  className="badge badge-outline p-3 btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4"
                >
                  Client Code
                </a>
                <a
                  href="https://github.com/afransami/Thai-Taste-Server"
                  target="_blank"
                  className="badge badge-outline p-3 btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4"
                >
                  Server Code
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Projects;
