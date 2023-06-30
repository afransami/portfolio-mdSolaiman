import React, { useEffect } from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";
import { FaAddressBook } from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link as ScrollLink } from "react-scroll";
import "tailwindcss/tailwind.css";
import { PiArrowFatLinesUp } from "react-icons/pi";

const Contact = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_4yyna3h",
        "template_h73vefb",
        form.current,
        "5G5vBNgAg44JaJ6RX"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Successfully toasted!");
        },
        (error) => {
          toast.error(error.text);
          console.log(error.text);
        }
      );
  };
  return (
    <div className="mb-10 relative" id="contact">

      <div className="flex flex-col items-center mb-10">
        <h1 className="text-xl">Keep In Touch</h1>
        <h1 className="text-4xl font-bold text-info">Contact Me</h1>
      </div>

      <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8">
        
        <form
          ref={form}
          onSubmit={sendEmail}
          className="text-black lg:pb-20 gap-4 grid lg:grid-cols-1 lg:col-span-2"
          id="contact"
          data-aos="zoom-in"
          data-aos-duration="1000"
        >
          <div className="space-y-4 bg-slate-800 lg:p-20 p-4 rounded-lg">
            <h1 className="text-2xl font-semibold text-info">
              Please Say Something
            </h1>
            <div className="grid grid-cols-2 justify-between items-center gap-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered border-b-info w-full"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="input input-bordered border-b-info w-full"
              />
            </div>

            <div className="lg:flex flex-col space-y-4">
              <input
                type="text"
                placeholder="Subject"
                name="subject"
                className="input input-bordered border-b-info w-full"
              />
              <textarea
                className="textarea textarea-bordered border-b-info w-full"
                placeholder="Message"
                name="message"
              ></textarea>
              <input
                type="submit"
                value="Send Message"
                className="btn border-b-info btn-outline btn-info border-1 border-l-0 border-r-0 border-b-4"
              />
            </div>
          </div>
        </form>

        <div
          className="lg:pb-20 gap-4 grid lg:grid-rows-3"
          data-aos="slide-up"
          data-aos-duration="1000"          
        >
          <div className="bg-slate-800 flex justify-start items-center gap-8 pl-8 rounded-xl">
            <p className="text-4xl text-info">
              <FaAddressBook></FaAddressBook>
            </p>
            <div>
              <p className="font-bold">Address</p>
              <p>Chittagong, Bangladesh</p>
            </div>
          </div>

          <div className="bg-slate-800 flex justify-start items-center gap-8 pl-8 rounded-xl">
            <p className="text-4xl text-info">
              <FiPhoneCall />
            </p>
            <div>
              <p className="font-bold">Phone Number</p>
              <p>+8801818755715</p>
              <p>+8801602785522</p>
            </div>
          </div>

          <div className="bg-slate-800 flex justify-start items-center gap-8 pl-8 rounded-xl">
            <p className="text-4xl text-info">
              <MdEmail></MdEmail>
            </p>
            <div>
              <p className="font-bold">Email Address</p>
              <p>afran.sami007@gmail.com</p>
            </div>
          </div>
          
        </div>

      </div>

      <div className="absolute right-0 mt-5" 
      data-aos="slide-up"
      data-aos-duration="1000">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className=" cursor-pointer"          
        >
          <div className="flex flex-col gap-8 items-center">
            <p>
              <PiArrowFatLinesUp className="h-full text-info text-3xl"></PiArrowFatLinesUp>
            </p>
            <p className=" -rotate-90 text-info">Scroll up</p>
            <p>
              <PiArrowFatLinesUp className="h-full text-info text-3xl"></PiArrowFatLinesUp>
            </p>
          </div>
        </ScrollLink>
      </div>

    </div>
  );
};

export default Contact;
