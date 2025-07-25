// src/pages/Register.jsx
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import { useUser } from "../context/UserContext";

const Register = () => {
  const { register, handleSubmit, setError } = useForm();
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useUser();

  const { planName } = useParams();
  const selectedPlan = planName || "Starter";

  const onSubmit = (data) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if user already exists
    const existingUser = users.find((user) => user.email === data.email);
    if (existingUser) {
      setError("email", {
        type: "manual",
        message: "User already exists with this email.",
      });
      return;
    }

    data.plan = selectedPlan;

    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));

    login(data);
    navigate("/profile");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black px-4 py-16">
      <div className="w-full max-w-md bg-[#121212] text-white rounded-2xl shadow-xl p-8 border border-[#F82E14]">
        <h2 className="text-5xl text-center mb-6 text-[#F82E14] font-['Superset'] uppercase">
          Register & Start Training
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#F82E14]"
          />

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#F82E14]"
          />

          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#F82E14]"
          />

          <input
            type="number"
            placeholder="Age"
            {...register("age", { required: "Age is required" })}
            className="w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#F82E14]"
          />

          <select
            {...register("gender")}
            className="w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#F82E14]"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <input
            type="number"
            placeholder="Weight (kg)"
            {...register("weight", { required: "Weight is required" })}
            className="w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#F82E14]"
          />

          <input
            type="number"
            placeholder="Height (cm)"
            {...register("height", { required: "Height is required" })}
            className="w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#F82E14]"
          />

          <select
            {...register("goal")}
            className="w-full px-4 py-2 bg-[#1a1a1a] text-white border border-gray-600 rounded-md focus:outline-none focus:border-[#F82E14]"
          >
            <option value="fat loss">Fat Loss</option>
            <option value="muscle gain">Muscle Gain</option>
            <option value="general fitness">General Fitness</option>
          </select>

          {/* Hidden Plan */}
          <input type="hidden" value={selectedPlan} {...register("plan")} />

          <button
            type="submit"
            className="w-full bg-[#F82E14] hover:bg-[#d02611] text-white py-2 rounded-md font-semibold transition duration-300"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
