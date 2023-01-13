import React, { useState } from 'react';
import AllPosts from './AllPosts';
import Form from './Form';
import './Home.css'

const Home = () => {
  const [loadPosts, setLoadPosts] = useState(false);
  return (
    <div className='md:home-bg home-bg-mobile  flex justify-center'>
      <div className='flex justify-evenly   items-center'>

        <section className='md:backdrop-blur-lg    section-style rounded-2xl h-full mt-8 md:mt-0 md:h-[82vh] mx-2 md:mx-12'>
          <div className="max-w-screen-xl  px-4 py-10 sm:px-6  lg:px-8">
            <div className="grid grid-cols-3  gap-y-5 items-center lg:gap-x-16">
              <div className='col-span-3  md:col-span-1 '>
                <Form setLoadPosts={setLoadPosts}></Form>
              </div>

              <div className='col-span-3 md:col-span-2 '>
                <AllPosts setLoadPosts={setLoadPosts} loadPosts={loadPosts}></AllPosts>
              </div>

            </div>
          </div>
        </section>
      </div >
    </div >
  );
};

export default Home;