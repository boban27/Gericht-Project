import React from 'react';
import { FiFacebook,FiTwitter,FiInstagram} from 'react-icons/fi'
 import { FooterOverlay,Newsletter } from '../../components';
 import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className='app__footer section__padding app__bg' >
    <FooterOverlay />
    <Newsletter />
    <div className='app__footer-links'>
      <div className='app__footer-links_contact'>
        <h1 className='app__footer-headtet'> Contact Us</h1>
        <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
        <p className='p__opensans'>+1 212-555-1230</p>
        <p className='p__opensans'>+1 212-344-1230</p>
      </div>
      <div className='app__footer-links_logo'>
        <img src={images.gericht} alt='gericht logo' />
        <p className='p__opensans'>“The best way to find yourself is to lose yourself in the service of others.”</p>
        <img src={images.spoon} alt='spoon'className='spoon__img' style={{marginTop:'15px'}} />
       <div className='app__footer-links-icon'>
        <FiFacebook />
        <FiTwitter />
        <FiInstagram />
        </div>

      </div>
      <div className='app__footer-links_work'>
      <h1 className='app__footer-headtet'> Working Hours</h1>
        <p className='p__opensans'>Monday-Friday:<br />
08:00 am -12:00 am</p><br />
        <p className='p__opensans'>Saturday-Sunday:<br />
07:00am -11:00 pm</p>


      </div>

    </div>
    <div className='footer-copyright'>
      <p className='p__opensans'> 2023 Gericht. All Rights reserved.</p>
    </div>
  </div>
);

export default Footer;
