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

    // Add selected plan
    data.plan = selectedPlan;

    // Save user
    users.push(data);
    localStorage.setItem("users", JSON.stringify(users));

    // Auto-login
    login(data);

    navigate("/profile"); // 👈 or "/"
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-400 to-pink-500 px-4">
      <div className="w-full max-w-md bg-white text-gray-800 rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-center mb-6 text-purple-600">
          Register & Start Training
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Name */}
          <input
            type="text"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />

          {/* Age */}
          <input
            type="number"
            placeholder="Age"
            {...register("age", { required: "Age is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />

          {/* Gender */}
          <select
            {...register("gender")}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          {/* Weight */}
          <input
            type="number"
            placeholder="Weight (kg)"
            {...register("weight", { required: "Weight is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />

          {/* Height */}
          <input
            type="number"
            placeholder="Height (cm)"
            {...register("height", { required: "Height is required" })}
            className="w-full px-4 py-2 border rounded-md"
          />

          {/* Goal */}
          <select
            {...register("goal")}
            className="w-full px-4 py-2 border rounded-md"
          >
            <option value="fat loss">Fat Loss</option>
            <option value="muscle gain">Muscle Gain</option>
            <option value="general fitness">General Fitness</option>
          </select>

          {/* Hidden Plan */}
          <input type="hidden" value={selectedPlan} {...register("plan")} />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md font-semibold transition duration-300"
          >
            Register Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
