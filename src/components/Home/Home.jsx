import React from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../pages/about';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import HomeIntro from './HomeIntro';

const Home = () => {
    return (
        <div> 
            <HomeIntro></HomeIntro>
            <About></About>       
            <Projects></Projects>
            <Resume></Resume>
        </div>
    );
};

export default Home;