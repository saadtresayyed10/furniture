"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { motion } from "framer-motion";

const HomeImage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut", delay: 1 }}
      className="lg:mt-16 mt-2 flex justify-center"
    >
      <div className="lg:w-full w-screen lg:p-0 p-2 max-w-3xl mt-8">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          navigation
          pagination={{ clickable: true }}
          className="mySwiper"
        >
          <SwiperSlide>
            <Image
              width={1000}
              height={1000}
              src="/bed.jpg"
              className="object-cover w-fit rounded-2xl"
              alt="Bed"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1000}
              height={1000}
              src="/wardrobe.jpg"
              className="object-cover w-fit rounded-2xl"
              alt="Wardrobe"
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              width={1000}
              height={1000}
              src="/sofa.jpeg"
              className="object-cover w-fit rounded-2xl"
              alt="Sofa"
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </motion.div>
  );
};

export default HomeImage;
