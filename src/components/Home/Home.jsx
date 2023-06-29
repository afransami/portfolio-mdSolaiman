import React, { useEffect, useState } from "react";
import LoadingScreen from "../pages/LoadingScreen";
import Projects from "../pages/Projects";
import Skill from "../pages/Skill";
import HomeIntro from "./HomeIntro";
import Contact from "../pages/Contact";
import About from "../pages/About";

const Home = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);
  return (
    <div>
      {!loading ? (
        <>
          <HomeIntro></HomeIntro>
          <About></About>
          <Skill></Skill>
          <Projects></Projects>
          <Contact></Contact>
        </>
      ) : (
        <LoadingScreen></LoadingScreen>
      )}
    </div>
  );
};

export default Home;
