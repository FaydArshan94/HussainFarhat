// PackageCarousel.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Link } from "react-router-dom";

const sessionData = [
  {
    id: "pkg1",
    title: "Fat Burner Blitz",
    tagline: "Melt fat fast with 1-on-1 support",
    imageUrl:
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pkg2",
    title: "Strength & Power",
    tagline: "Get ripped with expert strength coaching",
    imageUrl:
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: "pkg3",
    title: "Group Grind",
    tagline: "Train hard together, stay motivated",
    imageUrl:
      "https://thetitanprinciples.com/wp-content/uploads/2024/08/Uncover-The-Power-Of-Small-Group-Training-_8_11zon.webp",
  },
  {
    id: "pkg4",
    title: "Elite Transformation",
    tagline: "Top-tier plan for serious physique goals",
    imageUrl:
      "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "pkg5",
    title: "Shred Squad",
    tagline: "Burn, build, and bond in group sessions",
    imageUrl:
      "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
  },
];

const PackageCarousel = () => {
  return (
    <div className="w-full px-4 md:px-10 2xl:px-32 py-16 bg-black">
      <Swiper
        modules={[Autoplay, FreeMode, Pagination]}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        freeMode={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        spaceBetween={20}
        slidesPerView={1.1}
        breakpoints={{
          640: { slidesPerView: 1.2 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1440: { slidesPerView: 4 },
        }}
        className="w-full"
      >
        {sessionData.map((pkg) => (
          <SwiperSlide
            key={pkg.id}
            className="flex justify-center items-center px-4" // ensures center alignment
            style={{ width: "300px", height: "420px" }} // optional, or use Tailwind
          >
            <div className="w-full h-full bg-[#121212] border border-[#F82E14] rounded-xl overflow-hidden group hover:bg-red-500 transition-all duration-300 flex flex-col">
              <img
                src={pkg.imageUrl}
                alt={pkg.title}
                className="w-full h-48 object-cover group-hover:opacity-90 transition"
              />
              <div className="flex-grow p-6 text-white text-center flex flex-col justify-between">
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold font-['light'] group-hover:text-white">
                    {pkg.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-gray-300 group-hover:text-white font-['light']">
                    {pkg.tagline}
                  </p>
                </div>
                <Link to={`/package/${pkg.id}`} state={pkg}>
                  {" "}
                  <button className="mt-4 px-4 py-2 bg-white text-black font-semibold rounded-md hover:bg-black hover:text-white transition-all">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination style override (optional for center alignment) */}
      <style>{`
        .swiper-pagination {
          text-align: center;
          margin-top: 20px;
        }
        .swiper-pagination-bullet {
          background: #f82e14;
          opacity: 0.6;
        }
        .swiper-pagination-bullet-active {
          background: #f82e14;
          opacity: 1;
          transform: scale(1.2);
        }
      `}</style>
    </div>
  );
};

export default PackageCarousel;
