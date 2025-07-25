// src/components/PackagesPlan.jsx
import React, { useEffect, useRef } from "react";
import { FaCheckCircle } from "react-icons/fa";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useNavigate, useParams } from "react-router-dom";
import packages from "../data/packages";
import { useUser } from "../context/UserContext";
gsap.registerPlugin(ScrollTrigger);

const allFeatures = [
  "Live Coaching Access",
  "5 Sessions per Month",
  "Flexible Timing",
  "Priority Support",
  "Personalized Feedback",
  "Exclusive Q&A Access",
  "Nutrition Guidance",
  "Progress Tracking",
];

const PackagesPlan = () => {
const { refreshUser } = useUser();

  const { id } = useParams();

  const pkg = packages.find((p) => p.id === id);

  if (!pkg) {
    return <div className="text-white p-10 text-3xl">Package not found.</div>;
  }


  const { title, plans = [] } = pkg;

  const navigate = useNavigate();

  useEffect(() => {
    gsap.utils.toArray(".pricing-card").forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <section className="px-6 text-white">
      <div className="max-w-7xl mx-auto py-20">
        <h2 className="text-8xl md:text-7xl xl:text-[6rem] font-['Superset'] uppercase text-center mb-20 text-white">
          Choose Your Plan
        </h2>

        <div className="flex flex-wrap justify-center gap-10 md:gap-5 xl:gap-5">
          {plans.map((plan, i) => (
            <div
              key={i}
              className="pricing-card relative w-full sm:w-[calc(50%-20px)] lg:w-[calc(33.333%-22px)] shadow-2xl p-8 md:p-10 border flex flex-col items-center border-red-400 backdrop-blur-sm group"
            >
              {plan.badge && (
                <span className="absolute -top-4 font-['light'] left-6 bg-red-400 text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md tracking-wide uppercase">
                  {plan.badge}
                </span>
              )}

              <h3 className="text-[5rem] font-['Superset'] uppercase text-zinc-800 dark:text-white mb-2">
                {plan.name}
              </h3>
              <p className="text-xl text-zinc-600 font-['light'] dark:text-zinc-300 mb-1">
                {plan.duration}
              </p>
              <p className="text-[4rem] text-red-400 font-['Superset'] mb-6">
                {plan.price}
              </p>

              <ul className="space-y-3 mb-8">
                {allFeatures.map((feature, i) => {
                  const available = plan.features.includes(feature);
                  return (
                    <li
                      key={i}
                      className={`flex items-start gap-2 text-sm md:text-base ${
                        available
                          ? "text-[zinc-800] dark:text-zinc-200"
                          : "text-zinc-400 dark:text-zinc-500 opacity-50 line-through"
                      }`}
                    >
                      <FaCheckCircle
                        className={`mt-1 ${
                          available ? "text-[#ECF0F7]" : "text-gray-400"
                        }`}
                      />
                      <span className="font-['light']">{feature}</span>
                    </li>
                  );
                })}
              </ul>

              <button
                onClick={() => {
                  const user = JSON.parse(localStorage.getItem("loggedInUser"));
                  if (!user) {
                    navigate("/login");
                    return;
                  }

                  const newPackageEntry = {
                    package: title, // 👈 pass this prop into your component
                    plan: {
                      name: plan.name,
                      duration: plan.duration,
                      price: plan.price,
                    },
                  };

                  const updatedUser = {
                    ...user,
                    plans: [...(user.plans || []), newPackageEntry],
                  };

                  localStorage.setItem(
                    "loggedInUser",
                    JSON.stringify(updatedUser)
                  );

                  refreshUser();
                  alert(
                    `✅ ${plan.name} plan added under ${packageName} package!`
                  );
                  // Optional: navigate("/profile");
                }}
                className="mt-auto w-full text-center py-3 text-white font-semibold text-sm tracking-wide uppercase transition hover:scale-105 group"
              >
                <div className="relative w-fit mx-auto flex flex-col gap-1 group">
                  <span className="z-10 font-light">Choose Plan</span>
                  <span className="absolute bottom-0 h-[3px] w-full bg-red-400 origin-left z-0" />
                  <span className="absolute bottom-0 h-[3px] w-full bg-green-400 origin-left z-10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out" />
                </div>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackagesPlan;
