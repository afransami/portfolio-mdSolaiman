import React from "react";
import { InfinitySpin } from "react-loader-spinner";

const LoadingScreen = () => {
  return (
    <div className="flex justify-center items-center h-screen">    
      <div>
        <InfinitySpin width="200" color="cyan" />
      </div>
    </div>
  );
};

export default LoadingScreen;
