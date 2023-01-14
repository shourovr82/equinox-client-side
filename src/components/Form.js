import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import './form.css'

const Form = ({ setLoadPosts }) => {
  const [mainpost, setMainPost] = useState('');

  const { register, handleSubmit, reset, formState: { errors } } = useForm();



  const handleChangeText = (e) => {
    setMainPost(e.target.value)
  }

  const handleSubmitPost = data => {
    const postedDate = new Date().toDateString();
    const allData = {
      ...data, postedDate
    }
    if (data) {
      fetch('http://localhost:9999/poststatus', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(allData)
      })
        .then(res => res.json())
        .then(result => {
          setLoadPosts(true);
          reset();
          toast.success('Successfully Posted.', {
            style: {
              border: '1px solid #713200',
              padding: '16px',
              color: '#713200',
            },
            iconTheme: {
              primary: '#713200',
              secondary: '#FFFAEE',
            },
          });
        })
    }
  }





  return (
    <form
      onSubmit={handleSubmit(handleSubmitPost)} className={` ${!errors ? 'gap-0' : 'gap-0 md:gap-3 '} grid grid-cols-6`}>
      <div className="col-span-6  ">
        <label className="pure-material-textfield-outlined  w-full">
          <input placeholder=' '   {...register("fullname", {
            required: 'Your Name is Required ', minLength: { value: 3, message: 'Your name must be at least 3' }
          })} />
          <span>Your Name</span>
        </label>
        {errors.fullname && <p className='text-white text-xs bg-red-600 rounded-lg p-1'><span className='mx-2'>{errors.fullname?.message}</span></p>}
      </div>

      <div className="col-span-6 ">
        <label className="pure-material-textfield-outlined w-full">
          <input placeholder=' ' {...register("email", {
            required: 'Your Email is Required',
            pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Email must be Valid' }
          })} />
          <span>Your Email</span>
          {errors.email && <p className='text-white text-xs mt-1 bg-red-600 rounded-lg p-1'><span className='mx-2'>{errors.email?.message}</span></p>}

        </label>
      </div>

      <div className="col-span-6 ">
        <label className="pure-material-textfield-outlined w-full">
          <input placeholder=' ' {...register("posttitle", {
            required: 'Posttitle is Required',
            minLength: { value: 3, message: 'Post title must be at least 3 Characters' }
          })} />
          <span>Post Title</span>
          {errors.posttitle && <p className='text-white text-xs mt-1 bg-red-600 rounded-lg p-1'><span className='mx-2'>{errors.posttitle?.message}</span></p>}

        </label>
      </div>

      <div className="col-span-6 ">
        <label className="pure-material-textfield-outlined w-full">
          <textarea onChange={(e) => handleChangeText(e)} defaultValue={mainpost} name="alltext" rows='4' style={{ overflow: 'hidden' }} cols="50" placeholder=' '{...register("posttext", {
            required: 'Full Post is Required  ',
            minLength: { value: 10, message: 'Post  must be at  least 10  Characters' }

          })} ></textarea>
          <span>What's On Your mind?</span>
          {errors.posttext && <p className='text-white text-xs bg-red-600 rounded-lg p-1'><span className='mx-2'>{errors.posttext?.message}</span></p>}

        </label>
      </div>
      <div className="col-span-6 ">
        <button type='submit' className={` button-90 `} >Post Blog</button>
      </div>








    </form>
  );
};

export default Form;