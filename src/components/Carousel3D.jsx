import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
// import { Autoplay } from "swiper/modules";

import { motion } from "framer-motion";

import { EffectCoverflow, Pagination, Mousewheel } from "swiper/modules";
import PackageCard from "./PackageCard";

const Carousel3D = ({ items }) => {
  return (
    <>
      {/* Desktop / Tablet Carousel */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.4 }}
        className="hidden md:block w-full"
      >
        <Swiper
          initialSlide={Math.floor(items.length / 2)} // 👈 This line centers the middle slide initially
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={10}
          // autoplay={{
          //   delay: 3000, // 3 seconds between slides
          //   disableOnInteraction: false, // continues even if user interacts
          // }}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          modules={[EffectCoverflow, Pagination, Mousewheel]}
          className="w-full max-w-7xl mx-auto py-16 lg:mt-40"
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <PackageCard title={item.title} details={item.details} />
              
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>

      {/* Mobile Stack View */}
      <div className="block md:hidden space-y-10 px-6 py-10">
        {items.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <PackageCard title={item.title} details={item.details} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default Carousel3D;
