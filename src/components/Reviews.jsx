import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

const reviews = [
  {
    name: "Naomi C.",
    date: "Sep 02, 2024",
    message: "Honestly, this is a solid place for great service.",
    img: "https://randomuser.me/api/portraits/women/1.jpg",
    rating: 5,
  },
  {
    name: "Nina V.",
    date: "Sep 01, 2024",
    message: "Been the best spot to visit!",
    img: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 5,
  },
  {
    name: "Christal M.",
    date: "Sep 01, 2024",
    message: "First time here and it was amazing.",
    img: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 4,
  },
  {
    name: "Andrew N.",
    date: "Aug 26, 2024",
    message: "I’ve tried their world-famous chicken wings!",
    img: "https://randomuser.me/api/portraits/men/2.jpg",
    rating: 4,
  },
];

const Review = () => {
  return (
    <div className="w-full h-screen px-4 py-10   bg-[#0e0e0e] text-white">
      <div className="text-center mb-8">
        <h2 className="text-[4rem] md:text-4xl leading-none uppercase font-['Superset']">What Our Customers Say</h2>
        <p className="text-gray-400 mt-4">Based on 8,351 reviews</p>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        breakpoints={{
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000 }}
        modules={[Pagination, Autoplay]}
        className="px-2"
      >
        {reviews.map((review, index) => (
          <SwiperSlide key={index}>
            <div className="bg-[#1a1a1a] rounded-2xl shadow-lg p-6 flex flex-col gap-3 text-left h-1/2">
              <div className="flex items-center gap-4">
                <img
                  src={review.img}
                  alt={review.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold">{review.name}</h4>
                  <p className="text-sm text-gray-400">{review.date}</p>
                </div>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <span key={i}>⭐</span>
                ))}
              </div>
              <p className="text-sm text-gray-300">{review.message}</p>
              <button className="text-blue-400 text-sm hover:underline">Read More</button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Review;
