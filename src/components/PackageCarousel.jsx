import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import packages from "../data/packages"; // adjust the path as needed

// const sessionData = [
//   {
//     id: "pkg1",
//     title: "Fat Burner Blitz",
//     tagline: "Melt fat fast with 1-on-1 support",
//     imageUrl:
//       "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "pkg2",
//     title: "Strength & Power",
//     tagline: "Get ripped with expert strength coaching",
//     imageUrl:
//       "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=869&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//   },
//   {
//     id: "pkg3",
//     title: "Group Grind",
//     tagline: "Train hard together, stay motivated",
//     imageUrl:
//       "https://thetitanprinciples.com/wp-content/uploads/2024/08/Uncover-The-Power-Of-Small-Group-Training-_8_11zon.webp",
//   },
//   {
//     id: "pkg4",
//     title: "Elite Transformation",
//     tagline: "Top-tier plan for serious physique goals",
//     imageUrl:
//       "https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?auto=format&fit=crop&w=800&q=80",
//   },
//   {
//     id: "pkg5",
//     title: "Shred Squad",
//     tagline: "Burn, build, and bond in group sessions",
//     imageUrl:
//       "https://images.unsplash.com/photo-1605296867304-46d5465a13f1?auto=format&fit=crop&w=800&q=80",
//   },
// ];

const PackageCarousel = () => {
  return (
    <div className="w-full px-4 md:px-10 2xl:px-32 py-16 bg-black">
      {/* Show Swiper only for medium+ screens */}
      <div className="hidden sm:block">
        <Swiper
          modules={[Autoplay, FreeMode, Pagination]}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          freeMode={true}
          pagination={{ clickable: true, dynamicBullets: true }}
          spaceBetween={20}
          slidesPerView={1.1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1440: { slidesPerView: 3.5 },
          }}
          className="w-full"
        >
          {packages.map((pkg) => (
            <SwiperSlide
              key={pkg.id}
              className="flex justify-center items-center px-2"
              style={{ width: "100%", height: "520px" }}
            >
              <div className="relative w-full h-full overflow-hidden group shadow-lg hover:scale-[1.02] transition-transform duration-300">
                <img
                  src={pkg.imageUrl}
                  alt={pkg.title}
                  className="w-full h-full object-cover select-none brightness-75 group-hover:brightness-100 transition-all duration-500"
                />
                {/* Overlay content */}
                <div className="absolute inset-0 bg-black/40 flex flex-col justify-center select-none items-center px-6 text-center text-white">
                  <h3 className="text-2xl md:text-3xl xl:text-5xl font-['Superset'] drop-shadow-lg">
                    {pkg.title}
                  </h3>
                  <p className="mt-2 text-sm md:text-base text-gray-200 max-w-xs drop-shadow-md">
                    {pkg.tagline}
                  </p>
                  <Link to={`/package/${pkg.id}`} state={pkg}>
                    <button className="mt-6 px-6 py-2 bg-white text-black font-semibold rounded-full hover:bg-[#F82E14] hover:text-white transition-all shadow-md">
                      View Details
                    </button>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <style>{`
  .swiper-pagination {
    text-align: center;
    margin-top: 20px;
  }
  .swiper-pagination-bullet {
    background: #fff; /* ✅ Default dot color */
    opacity: 0.4;
    transition: all 0.3s ease;
  }
  .swiper-pagination-bullet-active {
    background: #F82E14; /* ✅ Active dot color */
    opacity: 1;
    transform: scale(1.2);
  }
`}</style>

      {/* Mobile fallback: No Swiper */}
      <div className="block sm:hidden space-y-10">
        {packages.map((pkg) => (
          <div
            key={pkg.id}
            className="relative w-full h-[480px]  overflow-hidden group shadow-lg"
          >
            <img
              src={pkg.imageUrl}
              alt={pkg.title}
              className="w-full h-full object-cover brightness-75 group-hover:brightness-100 transition-all duration-500"
            />
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center px-4 text-center text-white">
              <h3 className="text-5xl uppercase  font-['Superset'] drop-shadow-md">
                {pkg.title}
              </h3>
              <p className="mt-2 text-sm text-gray-200 max-w-xs">
                {pkg.tagline}
              </p>
              <Link to={`/package/${pkg.id}`} state={pkg}>
                <button className="mt-6 px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-[#F82E14] hover:text-white transition-all shadow-md">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackageCarousel;
