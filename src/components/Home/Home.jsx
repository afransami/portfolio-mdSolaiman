import React from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../pages/about';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';

const Home = () => {
    return (
        <div>
            <About></About>       
            <Projects></Projects>
            <Resume></Resume>
        </div>
    );
};

export default Home;