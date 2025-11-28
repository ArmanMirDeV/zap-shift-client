import React from "react";
import useAuth from "../../../Hooks/useAuth";
import { useLocation, useNavigate } from "react-router";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const SocialLogin = () => {
  const { signInGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSecure();

  const handleGoogleSignIn = () => {
    signInGoogle()
      .then((result) => {
        console.log(result.user);

        const userInfo = {
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
        };

        axiosSecure.post("/users", userInfo).then((res) => {
          console.log("User data has been stored to DB", res.data);
          navigate(location.state || "/");
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="text-center p-2">
      <p className="mb-2">Or</p>
      {/* Google Button */}
      <button
        onClick={handleGoogleSignIn}
        className=" w-full flex items-center justify-center gap-3 bg-gray-100 border border-gray-300 py-2 rounded-md hover:bg-gray-200 transition"
      >
        <img
          src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
          alt="Google logo"
          className="w-5 h-5"
        />
        Register with Google
      </button>
    </div>
  );
};

export default SocialLogin;
