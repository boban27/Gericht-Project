import React from 'react';
import SubHeading from '../SubHeading/SubHeading';

import './Newsletter.css';

const Newsletter = () => (
  <div className='app__newslater'>
    <div className='app__newslater-heading'>
      <SubHeading  title='Newsletter'/>
      <h1 className='headtext__cormorant'>Subscribe To Our Newslatter </h1>
      <p className='p__opensans'> And never miss Latest Updates!</p>
    </div>
    <div className='app__newslater-input'>
      <input type='email' placeholder='Enter your e-mail adress.' />
      <button className='custom__button' >Subscribe</button>
    </div>
    
  </div>
);

export default Newsletter;
