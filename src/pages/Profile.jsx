import React from "react";
import { useUser } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import fht from "../assets/fht.jpg";
const Profile = () => {
  const { currentUser, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // clear context
    localStorage.removeItem("loggedInUser"); // clear localStorage
    navigate("/login"); // redirect to login page
  };

  if (!currentUser) {
    return (
      <div
      
      className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl">🚫 Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen  px-6 py-16 text-white">
      <div
        className={
          "max-w-4xl  mx-auto backdrop-blur-md  p-10 rounded-2xl shadow-2xl border border-white/20"
        }
      >
        <div className="flex items-center  justify-between mb-6">
          <h1 className="text-4xl xl:text-7xl font-['Superset'] uppercase text-red-400">
            {currentUser.name}'s Profile
          </h1>
        </div>

        <h2 className="text-2xl font-semibold text-white mb-6">My Plans</h2>

        {currentUser.plans?.length > 0 ? (
          <ul className="space-y-6">
            {currentUser.plans.map((item, i) => (
              <li
                key={i}
                className="bg-white/5 p-6 rounded-xl border border-zinc-700 shadow-lg"
              >
                <p className="text-xl text-red-400 font-semibold">
                  Package: {item.package}
                </p>
                <p className="mt-2">
                  <strong>Plan:</strong> {item.plan.name}
                </p>
                <p>
                  <strong>Duration:</strong> {item.plan.duration}
                </p>
                <p>
                  <strong>Price:</strong> {item.plan.price}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-lg text-zinc-300">No plans purchased yet.</p>
        )}

        <button
          onClick={handleLogout}
          className="px-4 py-2 mt-10 bg-red-500 hover:bg-red-600 text-white text-sm rounded-md transition font-semibold"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Profile;
