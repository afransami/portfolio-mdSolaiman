import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import About from '../pages/about';
import LoadingScreen from '../pages/LoadingScreen';
import Projects from '../pages/Projects';
import Resume from '../pages/Resume';
import HomeIntro from './HomeIntro';

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
            <Projects></Projects>
            <Resume></Resume>
            </>):
            (<LoadingScreen></LoadingScreen>)
            }
        </div>
    );
};

export default Home;