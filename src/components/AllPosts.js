import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import './allpost.css'

// import required modules

import { Grid, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";




const AllPosts = () => {

  return (
    <div className=' rounded-2xl overflow-hidden  h-[70vh]'>

      <>
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >
          <SwiperSlide className='rounded-2xl'>Slide 1</SwiperSlide>
          <SwiperSlide className='rounded-2xl'>Slide 2</SwiperSlide>
          <SwiperSlide className='rounded-2xl'>Slide 3</SwiperSlide>
          <SwiperSlide className='rounded-2xl'>Slide 4</SwiperSlide>
          <SwiperSlide className='rounded-2xl'>Slide 5</SwiperSlide>
          <SwiperSlide className='rounded-2xl'>Slide 6</SwiperSlide>
          <SwiperSlide className='rounded-2xl'>Slide 7</SwiperSlide>
          <SwiperSlide className='rounded-2xl'>Slide 8</SwiperSlide>
          <SwiperSlide className='rounded-2xl'>Slide 9</SwiperSlide>
        </Swiper>
      </>
    </div>
  );
};

export default AllPosts;