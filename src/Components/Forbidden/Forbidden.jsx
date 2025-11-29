import React from "react";
import { Link } from "react-router";
import Lottie from "lottie-react";
import forbiddenAnimation from "../../assets/animations/error.json"; 

const Forbidden = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen text-center px-6">
      <div className="w-64 h-64">
        <Lottie animationData={forbiddenAnimation} loop={true} />
      </div>

      <h1 className="text-5xl font-bold text-red-700 mt-4">403</h1>
      <h2 className="text-2xl font-semibold mt-2">Access Forbidden</h2>

      <p className="text-gray-600 mt-3 max-w-md">
        You don’t have permission to access this page.
        <br />
        Please contact an administrator if you believe this is a mistake.
      </p>

      <Link
        to="/"
        className="mt-6 px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
      >
        Go Back Home
      </Link>
    </div>
  );
};

export default Forbidden;
