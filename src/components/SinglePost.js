import React from 'react';
import MenuButton from './MenuButton';

const SinglePost = ({ post, setLoadPosts }) => {

  return (
    <div
      className="rounded-2xl   p-2 w-full h-full  transition relative  hover:shadow-sm"
    >

      <div className="rounded-2xl    relative flex justify-between flex-col h-full p-1 ">
        <div>
          <div className='flex justify-between items-center '>
            <h1 className='text-white   font-bold ' >{post?.posttitle}</h1>
            <MenuButton setLoadPosts={setLoadPosts} post={post}></MenuButton>
          </div>

        </div>
        <div>
          <p className='text-white text-sm font-mono'>{post.posttext}</p>
        </div>

        <div className="mt-4 hidden md:flex flex-wrap gap-1 relative">
          <span
            className="whitespace-nowrap rounded-full bg-[#ffffff28] px-2.5 py-1 text-xs text-white"
          >
            Posted By {post?.fullname}
          </span>

          <span
            className="whitespace-nowrap rounded-full bg-[#ffffff28] px-2.5 py-1 text-xs text-white"
          >
            10th Oct 2022
          </span>
        </div>

      </div>
    </div>


  );
};

export default SinglePost;