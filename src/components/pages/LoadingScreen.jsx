import React from 'react';
import { Dna, InfinitySpin } from  'react-loader-spinner'

const LoadingScreen = () => {
    return (
        <div className="flex justify-center items-center h-screen">
      <div>
  
      <InfinitySpin 
  width='200'
  color="cyan"
/>

      {/* <Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperStyle={{}}
  wrapperClass="dna-wrapper"
/> */}


        {/* <img
          src="https://cdn.dribbble.com/users/450343/screenshots/2465762/media/97b14be7af51dcea4d8ae244c545769b.gif"
          alt=""
        /> */}
      </div>
    </div>
    );
};

export default LoadingScreen;