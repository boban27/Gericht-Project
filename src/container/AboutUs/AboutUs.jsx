import React from 'react';
import {images} from '../../constants'

import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className='app__aboutus-overlay  flex__center'>
      <img src={images.G}></img>
    </div>
    <div className='app__aboutus-content flex__center'>
      <div className='app_aboutus-content-about'>
        <h1 className='headtext__cormorant'>Abaout Us</h1>
        <img src={images.spoon} alt='abaout spon'className='spoon__image' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button' > Know More</button>
      </div>
      <div className='app__aboutus-content-knife flex__center'>
        <img src={images.knife} alt='knife' />
      </div>
      <div className='app_aboutus-content-history'>
        <h1 className='headtext__cormorant'>Abaout Us</h1>
        <img src={images.spoon} alt='abaout spon'className='spoon__image' />
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button' > Know More</button>
      </div>

    </div>

  </div>
);

export default AboutUs;
