import React, { useState } from 'react';
import AllPosts from './AllPosts';
import Form from './Form';
import './Home.css'

const Home = () => {
  const [loadPosts, setLoadPosts] = useState(false);
  return (
    <div className='home-bg  flex justify-center'>
      <div className='flex justify-evenly   items-center'>

        <section className='backdrop-blur-lg  section-style rounded-2xl h-[82vh] mx-12'>
          <div className="max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="grid grid-cols-3  gap-y-8 items-center lg:gap-x-16">
              <div className='col-span-1 '>
                <Form setLoadPosts={setLoadPosts}></Form>
              </div>

              <div className='col-span-2 '>
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