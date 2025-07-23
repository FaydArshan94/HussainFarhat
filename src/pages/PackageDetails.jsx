import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import olympia from "../assets/olympia.jpg";
import { motion } from "framer-motion";
const PackageDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <div className="text-white p-10">Package not found.</div>;

  const { title, price, description, benefits, imageUrl } = state;

  return (
    <div className="max-w-5xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-center gap-10">
        {/* Left: Package image */}
        <motion.img
          src={imageUrl}
          alt={title}
          className="w-full  lg:w-1/2 rounded-lg shadow-lg object-cover"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Right: Package content */}
        <motion.div
          className="w-full lg:w-1/2 bg-gray-900 text-white p-8 rounded-lg shadow-lg"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 className="text-4xl font-['Superset'] mb-4">{title}</h2>
          <p className="text-3xl font-bold text-red-500 mb-6">{price}</p>

          

          <p className="text-gray-300 leading-relaxed">{description}</p>

          <button className="mt-8 inline-block bg-red-600 hover:bg-red-700 text-white py-3 px-6 rounded-lg transition">
            Book This Package
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PackageDetails;
