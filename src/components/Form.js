import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import './form.css'

const Form = () => {
  const [mainpost, setMainPost] = useState('');
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  const handleChangeText = (e) => {
    setMainPost(e.target.value)
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)} className=" grid grid-cols-6 gap-3">


      <div className="col-span-6 ">
        <label className="pure-material-textfield-outlined  w-full">
          <input placeholder=' ' {...register("fullname")} />
          <span>Your Name</span>
        </label>
      </div>

      <div className="col-span-6 ">
        <label className="pure-material-textfield-outlined w-full">
          <input placeholder=' ' {...register("email")} />
          <span>Your Email</span>
        </label>
      </div>

      <div className="col-span-6 ">
        <label className="pure-material-textfield-outlined w-full">
          <input placeholder=' ' {...register("posttitle")} />
          <span>Post Title</span>
        </label>
      </div>

      <div className="col-span-6 ">
        <label className="pure-material-textfield-outlined w-full">
          <textarea onChange={(e) => handleChangeText(e)} defaultValue={mainpost} name="alltext" rows="5" style={{ overflow: 'hidden' }} cols="50" placeholder=' '  {...register("posttext")} ></textarea>
          <span>What's On Your mind?</span>
        </label>
      </div>
      <div className="col-span-6 ">
        <button type='submit' className="button-90" >Post Blog</button>
      </div>








    </form>
  );
};

export default Form;