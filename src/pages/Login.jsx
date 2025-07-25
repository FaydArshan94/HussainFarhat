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
    login(matchedUser); // set in context
    navigate("-1");
  } else {
    alert("Invalid email or password");
  }
};


  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-400 to-pink-600 px-4">
      <div className="w-full max-w-sm bg-white text-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-2xl font-bold text-center mb-6 text-pink-600">
          Login
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md font-semibold transition duration-300"
          >
            Login
          </button>

          <Link to="/register">
            <h1>Don't Have an account</h1>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
