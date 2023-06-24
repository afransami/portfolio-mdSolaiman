import React from 'react';
import profilePicture from '../../assets/picture/20180309_09154514-removebg-preview (1).png'

const HomeIntro = () => {
    return (
        <div className='text-white flex flex-col justify-center items-center mt-40'>
            <h5 className='text-xl text-gray-300'>Hello, I'm</h5>
            <h1 className='text-3xl font-bold text-info'>Md Solaiman</h1>            
            <h5 className='text-xl text-gray-300'>Front-end Developer</h5>
            <div className='flex gap-4 mt-8'>
            <button className='btn btn-outline btn-info'>Download Resume</button>
            <button className='btn btn-info'>Lets Talk</button>
            </div>
            <div className='mt-20'>
                <img className='' style={{borderRadius: '700px 700px 20px 20px'}} src={profilePicture} alt="picture" />
            </div>
            
        </div>
    );
};

export default HomeIntro;