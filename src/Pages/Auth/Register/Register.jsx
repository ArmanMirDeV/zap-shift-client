import React from "react";
import { useForm } from "react-hook-form";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegistration = (data) => {
    console.log(data);
  };

  return (
    <div className=" mt-15 rounded-2xl text-secondary flex justify-center items-center bg-gray-100 px-4">
      <div className="w-full m-15 max-w-md bg-white p-8 rounded-lg shadow-sm">
        {/* Header */}
        <h1 className="text-3xl font-bold mb-1 text-center">
          Create an Account
        </h1>
        <p className="text-gray-600 text-center mb-6">Register with ZapShift</p>

        {/* Profile Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gray-100 border flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="32"
              viewBox="0 -960 960 960"
              width="32"
              fill="#9ca3af"
            >
              <path
                d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 
              47t47 113q0 66-47 113t-113 47Zm0 60q93 0 162.5 51.5T720-240q0 
              18-12 29t-30 11H282q-18 0-30-11t-12-29q0-93 69.5-156.5T480-420Z"
              />
            </svg>
          </div>
        </div>

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
                })}
                type="password"
                className="border mt-1 p-2 w-full rounded-md"
                placeholder="Password"
              />

              {errors.password && (
                <p className="text-red-500 text-sm">
                  Password must be at least 6 characters.
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
        <div className="text-center mt-4 text-gray-600">
          Already have an account?{" "}
          <span className="text-blue-600 hover:underline cursor-pointer">
            Login
          </span>
        </div>

        {/* Divider */}
        <div className="text-center my-4 text-gray-500">Or</div>

        {/* Google Button */}
        <button className="w-full flex items-center justify-center gap-3 bg-gray-100 border border-gray-300 py-2 rounded-md hover:bg-gray-200 transition">
          <img
            src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg"
            alt="Google logo"
            className="w-5 h-5"
          />
          Register with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
