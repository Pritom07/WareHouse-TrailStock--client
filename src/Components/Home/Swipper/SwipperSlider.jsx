import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Navigation, Pagination, EffectCoverflow } from "swiper/modules";
import slide1 from "../../../../public/Images/slide1.jpg";
import slide2 from "../../../../public/Images/slide2.jpg";
import slide3 from "../../../../public/Images/slide3.jpg";
import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import "./SwipperSlider.css";

const SwipperSlider = () => {
  const [activeIndex, setActiveindex] = useState(0);

  return (
    <div className="w-full">
      <Swiper
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        }}
        navigation={true}
        pagination={{ clickable: true }}
        speed={1000}
        spaceBetween={30}
        modules={[Navigation, Pagination, EffectCoverflow]}
        className="h-full"
        onSlideChange={(swipper) => setActiveindex(swipper.activeIndex)}
      >
        <SwiperSlide className="relative w-[280px] md:w-[500px] lg:w-[600px] overflow-hidden">
          <img
            src={slide1}
            className="w-full min-h-screen md:h-[600px] object-cover contrast-100"
            alt="Slide 1"
          />
          {activeIndex === 0 && (
            <motion.div
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="absolute z-10 flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <p className="text-6xl xl:text-7xl text-white font-bold text-justify lg:text-center font-bebas">
                <span className="text-[#ed1c24]">Adventure</span> begins where
                your gear is ready.
              </p>
            </motion.div>
          )}
        </SwiperSlide>
        <SwiperSlide className="relative w-[280px] md:w-[500px] lg:w-[600px] overflow-hidden">
          <img
            src={slide2}
            className="w-full min-h-screen md:h-[600px] object-cover"
            alt="Slide 2"
          />
          {activeIndex === 1 && (
            <motion.div
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="absolute z-10 flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <p className="text-6xl xl:text-7xl text-lime-500 font-bold text-center font-bebas">
                Pack smart, <span className="text-red-600">hike far</span> — let
                your inventory lead the way
              </p>
            </motion.div>
          )}
        </SwiperSlide>
        <SwiperSlide className="relative w-[280px] md:w-[500px] lg:w-[600px] overflow-hidden">
          <img
            src={slide3}
            className="w-full min-h-screen md:h-[600px] object-cover"
            alt="Slide 3"
          />
          {activeIndex === 2 && (
            <motion.div
              initial={{ opacity: 0, y: -500 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.4 }}
              className="absolute z-10 flex justify-center items-center top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <p className="text-6xl xl:text-7xl font-bold text-center font-bebas">
                <span className="text-red-600">Great journeys</span> begin with
                the perfect pack.
              </p>
            </motion.div>
          )}
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default SwipperSlider;
