import React from 'react';
import './form.css'

const Form = () => {
  return (
    <form class=" grid grid-cols-6 gap-3">

      <div class="col-span-6 ">
        <label class="pure-material-textfield-outlined  w-full">
          <input placeholder=" " />
          <span>Your Name</span>
        </label>
      </div>

      <div class="col-span-6 ">
        <label class="pure-material-textfield-outlined w-full">
          <input placeholder=" " />
          <span>Your Email</span>
        </label>
      </div>

      <div class="col-span-6 ">
        <label class="pure-material-textfield-outlined w-full">
          <input placeholder=" " />
          <span>Post Title</span>
        </label>
      </div>

      <div class="col-span-6 ">
        <label class="pure-material-textfield-outlined w-full">
          <textarea name="alltext" rows="5" style={{ overflow: 'hidden' }} cols="50" placeholder=' '></textarea>
          <span>What's On Your mind?</span>
        </label>
      </div>
      <div class="col-span-6 ">
        <button class="button-90" >Post Blog</button>
      </div>








    </form>
  );
};

export default Form;