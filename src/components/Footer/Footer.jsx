import React from "react";
import signature from "../../../src/assets/picture/md-solaiman-high-resolution-logo-color-on-transparent-background.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {

  return (
    <footer className="footer items-center flex-col-reverse justify-between flex bg-transparent text-neutral-content pb-28 ">
      <div className="items-center flex flex-col">
        <img
          className="w-40 h-auto text-white"
          src={signature}
          alt="signature"
        />
        <p>Copyright © 2023 - All right reserved</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end text-4xl text-info">
        <a href="https://www.linkedin.com/" target={"blank"}>
        <FaLinkedin></FaLinkedin>
        </a>
        <a href="https://github.com/afransami/" target={"blank"}>
        <FaGithub></FaGithub>
        </a>
        <a href="https://www.facebook.com/afransami/" target={"blank"}>
        <FaFacebook></FaFacebook>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
