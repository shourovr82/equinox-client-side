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
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import SinglePost from './SinglePost';




const AllPosts = ({ loadPosts, setLoadPosts }) => {

  const { status, data: allposts, error, refetch } = useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:9999/getallposts')
      return res.data
    },
  })

  if (loadPosts) {
    refetch();
    setLoadPosts(false);
  }



  return (
    <div className=' rounded-2xl   w-full   h-[70vh]'>
      {!allposts?.length &&
        <h1 className='text-center text-white text-2xl'>No Posts Added !! , Please add Some Post</h1>
      }
      <>
        <Swiper
          slidesPerView={3}
          grid={{
            rows: 2,
          }}
          spaceBetween={10}
          pagination={{
            clickable: true,
          }}
          modules={[Grid, Pagination]}
          className="mySwiper"
        >

          {
            allposts?.map((post) => <SwiperSlide className='rounded-2xl shadow-sm shadow-[#ffffff44] bg-[#ffffff21] relative  transition hover:shadow-sm' key={post?._id}><SinglePost setLoadPosts={setLoadPosts} post={post}></SinglePost></SwiperSlide >)
          }

        </Swiper>
      </>
    </div>
  );
};

export default AllPosts;