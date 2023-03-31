import React from 'react';
import { BsInstagram,BsArrowLeftShort,BsArrowRightShort } from 'react-icons/bs';
import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Gallery.css';

const galerryImages = [images.gallery01, images.gallery02, images.gallery03, images.gallery04]
 
const Gallery = () => {
  const scrollRef =React.useRef(null);
  const scroll =(direction)=> {
    const {current} =scrollRef;
    if(direction === 'left'){
      current.scrollLeft -=300
    }else{
      current.scrollLeft +=300;
    }

  }
   return(
   <div className='app__galery flex__center section__padding'>
    <div className='app__galery-content'>
      <SubHeading title='Instagram' />
      <h1 className='headtext__cormorant'>Photo Galery</h1>
      <p className='p__opensans' style={{color:'#AAA',marginTop:'2rem'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
      <button type='button' className='custom__button'>View More</button>
     </div>
     <div className='app__galery-images'>
      <div className='appp__galary-images_conatiner' ref={scrollRef}>
          {galerryImages.map((image,index)=>(
            <div className='app__galerry-images_card flex__center' key={ `gallery_image-${index +1}`}>
              <img src={image} alt='food-image' />
              <BsInstagram className='galery-image-icon' />

                </div>
          ))}
      </div>

        <div className='app__galery-images_arrow'>
          <BsArrowLeftShort className=' galerry__arrow-icon' onClick={()=>scroll('left')} />
          <BsArrowRightShort className=' galerry__arrow-icon' onClick={()=>scroll('right')} />

        </div>
    </div>
    
  </div>)
};

export default Gallery;
