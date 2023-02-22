import { Scard } from '../sCard/scard';

// Import Swiper styles


import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import './szp.css';


  

// import required modules
import { Pagination } from "swiper";

export function TestSwiper() {
  return (
    <>
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={30}
        centeredSlides={false}
        /* pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper" */
      >
        <SwiperSlide><Scard/></SwiperSlide>
        <SwiperSlide><Scard/></SwiperSlide>
        <SwiperSlide><Scard/></SwiperSlide>
        <SwiperSlide><Scard/></SwiperSlide>
        <SwiperSlide><Scard/></SwiperSlide>
        <SwiperSlide><Scard/></SwiperSlide>

      </Swiper>
    </>
  );
}
