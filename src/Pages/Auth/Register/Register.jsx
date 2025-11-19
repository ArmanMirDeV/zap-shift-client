import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router";
import SocialLogin from "../SocialLogin/SocialLogin";
import axios from "axios";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { registerUser, updateUserProfile } = useAuth();

  const handleRegistration = (data) => {
    console.log(data);
    const profileImg = data.photo[0];

    registerUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
        // store the image in form data
          const formData = new FormData();
          
        formData.append("image", profileImg);

        const imageAPI_URL = `https://api.imgbb.com/1/upload?&key=${
          import.meta.env.VITE_img_host_key
        }`;

          axios.post(imageAPI_URL, formData)
              .then(res => {
                console.log("After Image Upload", res.data.data.url);

                const userProfile = {
                  displayName: data.name,
                  photoURL: res.data.data.url,
                  };
                  


                // update user profile here

                updateUserProfile(userProfile)
                  .then()
                  .catch((error) => console.log(error));
              })

      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <div className=" mt-15 rounded-2xl text-secondary flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full m-15 max-w-md bg-white p-8 rounded-lg shadow-sm">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-1 text-center">
          Create an Account
        </h1>
        <p className="text-gray-600 text-center mb-6">Register with ZapShift</p>

        {/* Form */}
        <form onSubmit={handleSubmit(handleRegistration)}>
          <fieldset className="flex flex-col gap-4">
            {/* Name */}
            <div>
              <label className="font-medium">Name</label>
              <input
                {...register("name", { required: true })}
                type="text"
                className="border mt-1 p-2 w-full rounded-md"
                placeholder="Name"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">Name is required.</p>
              )}
            </div>
            {/* Photo field */}
            <div>
              <label className="font-medium">Photo</label>
              <input
                {...register("photo", { required: true })}
                type="file"
                className="border file-input mt-1 p-2 w-full rounded-md"
                placeholder="Your Photo"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">Photo is required.</p>
              )}
            </div>

            {/* Email */}
            <div>
              <label className="font-medium">Email</label>
              <input
                {...register("email", { required: true })}
                type="email"
                className="border mt-1 p-2 w-full rounded-md"
                placeholder="Email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">Email is required.</p>
              )}
            </div>

            {/* Password */}
            <div>
              <label className="font-medium">Password</label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{6,}$/,
                })}
                type="password"
                className="border mt-1 p-2 w-full rounded-md"
                placeholder="Password"
              />

              {/* Required */}
              {errors.password?.type === "required" && (
                <p className="text-red-500 text-sm">Password is required.</p>
              )}

              {/* Min Length */}
              {errors.password?.type === "minLength" && (
                <p className="text-red-500 text-sm">
                  Password must be at least 6 characters long.
                </p>
              )}

              {/* Pattern */}
              {errors.password?.type === "pattern" && (
                <p className="text-red-500 text-sm">
                  Password must contain at least 1 uppercase, 1 lowercase, and 1
                  special symbol.
                </p>
              )}
            </div>

            {/* Register Button */}
            <button className="w-full bg-lime-400 text-black py-2 rounded-md hover:bg-lime-500 transition">
              Register
            </button>
          </fieldset>
        </form>

        {/* Login link under button */}
        <Link to="/login">
          <div className="text-center mt-4 text-gray-600">
            Already have an account?{" "}
            <span className="text-blue-600 hover:underline cursor-pointer">
              Login
            </span>
          </div>
        </Link>

        {/* Google Button */}
        <SocialLogin />
      </div>
    </div>
  );
};

export default Register;
