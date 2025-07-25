// src/pages/Login.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Login = () => {
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { login } = useUser();

  const onSubmit = (data) => {
    const savedUsers = JSON.parse(localStorage.getItem("users")) || [];

    const matchedUser = savedUsers.find(
      (user) => user.email === data.email && user.password === data.password
    );

    if (matchedUser) {
      login(matchedUser);
      navigate(-1); // go back to previous page
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4">
      <div className="w-full max-w-sm bg-[#121212] text-white rounded-xl shadow-xl p-8 border border-[#F82E14]">
        <h2 className="text-5xl  text-center mb-6 text-[#F82E14] font-['Superset'] uppercase">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <label className="block mb-1 text-sm text-gray-400">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#F82E14]"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm text-gray-400">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#F82E14]"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#F82E14] hover:bg-[#d02611] text-white py-2 rounded-md font-semibold transition duration-300"
          >
            Login
          </button>

          <Link to="/register">
            <p className="text-center text-sm text-gray-400 mt-2 hover:underline">
              Don't have an account? <span className="text-[#F82E14]">Register here</span>
            </p>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
