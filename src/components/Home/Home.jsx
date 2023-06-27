import React, { useEffect, useState } from 'react';
import About from '../pages/about';
import LoadingScreen from '../pages/LoadingScreen';
import Projects from '../pages/Projects';
import Skill from '../pages/Skill';
import HomeIntro from './HomeIntro';
import Contact from '../pages/Contact';
import Footer from '../Footer/Footer';

const Home = () => {
  
    const [loading, setLoading] = useState(true)
  useEffect(() => {
    setTimeout(() => setLoading(false), 1000)
  }, [])
    return (
        <div className='container mx-auto'> 
            {
                !loading ? (
            <>
            <HomeIntro></HomeIntro>
            <About></About>
            <Skill></Skill>          
            <Projects></Projects>            
            <Contact></Contact>
            <Footer></Footer>
            </>):
            (<LoadingScreen></LoadingScreen>)
            }
        </div>
    );
};

export default Home;