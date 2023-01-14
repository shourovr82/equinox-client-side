import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useState } from 'react';
import AllPosts from './AllPosts';
import Form from './Form';
import './Home.css'

const Home = () => {
  const [loadPosts, setLoadPosts] = useState(false);
  const [loadDetails, setLoadDetails] = useState(false);

  const { status, data: logConnections, error, refetch: fetchlog } = useQuery({
    queryKey: ['logConnections'],
    queryFn: async () => {
      const res = await axios.get('https://equinox-server.vercel.app/getlogconnections')
      return res.data
    },
  })




  if (loadPosts) {
    fetchlog();
  }



  return (
    <div className='md:home-bg relative home-bg-mobile   flex justify-center'>

      <div className='flex justify-evenly    items-center'>
        <section className='md:backdrop-blur-lg  relative    section-style rounded-2xl h-full mt-8 md:mt-0 md:h-[82vh] mx-2 md:mx-12'>
          <div className='absolute hidden md:block w-[28%] top-5 left-8'>
            {/* <!-- ALERT COMPONENT --> */}
            <div
              className="bg-[#7771d125] border text-sm border-[#4c43cd48] text-yellow-600 px-4  rounded relative my-5"
              role="alert"
            >
              <strong className="font-bold">Alert! </strong>

              {logConnections &&
                <span className="block sm:inline">Frontend connected with Database {logConnections[0]?.logConnections} times</span>

              }
            </div>

          </div>
          <div className="max-w-screen-xl  px-4 py-10 sm:px-6  lg:px-8">
            <div className="grid grid-cols-3  gap-y-5 items-center lg:gap-x-16">
              <div className='col-span-3  md:col-span-1 '>
                <Form setLoadPosts={setLoadPosts}></Form>
              </div>

              <div className='col-span-3 md:col-span-2 '>
                <AllPosts loadDetails={loadDetails} setLoadDetails={setLoadDetails} setLoadPosts={setLoadPosts} loadPosts={loadPosts}></AllPosts>
              </div>

            </div>
          </div>

        </section>

      </div >
      <div className='absolute w-[87%] md:hidden text-sm bottom-0 left-6'>
        {/* <!-- ALERT COMPONENT --> */}
        <div
          className="bg-[#7771d125] border border-[#4c43cd48] text-yellow-600 px-4  rounded relative my-5"
          role="alert"
        >
          <strong className="font-bold">Alert!</strong>

          {logConnections &&
            <span className="block sm:inline">Frontend connected with Database {logConnections[0]?.logConnections} times</span>

          }
        </div>

      </div>
    </div >
  );
};

export default Home;