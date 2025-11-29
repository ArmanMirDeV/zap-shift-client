import React from "react";
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/animations/loading.json"; 

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen w-full bg-gray-100">
      <div className="w-48 h-48">
        <Lottie animationData={loadingAnimation} loop={true} />
      </div>
    </div>
  );
};

export default Loading;
