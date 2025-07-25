import React from "react";
import { useUser } from "../context/UserContext";

const Profile = () => {
  const { currentUser } = useUser();

  if (!currentUser) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        <p className="text-xl">🚫 Please login to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-zinc-800 px-6 py-16 text-white">
      <div className="max-w-4xl mx-auto backdrop-blur-md bg-white/10 p-10 rounded-2xl shadow-2xl border border-white/20">
        <h1 className="text-4xl xl:text-7xl font-['Superset'] uppercase text-red-400 mb-6">
          {currentUser.name}'s Profile
        </h1>

        <h2 className="text-2xl font-semibold text-white mb-6">My Plans</h2>

        {currentUser.plans?.length > 0 ? (
          <ul className="space-y-6">
            {currentUser.plans.map((item, i) => (
              <li
                key={i}
                className="bg-white/5 p-6 rounded-xl border border-zinc-700 shadow-lg"
              >
                <p className="text-xl text-red-400 font-semibold">
                  📦 Package: {item.package}
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
      </div>
    </div>
  );
};

export default Profile;
