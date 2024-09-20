import React, { useState } from 'react'
import './Hero.css'
import Header from '../Header/Header'
import iste_logo from '../../assets/istelogo.png'
import hero_image from '../../assets/ISTE_GIRL_IMAGE.png'
import hero_image_back from '../../assets/hero_image_back.png'
import dateicon from '../../assets/dateicon.png'
import { motion } from 'framer-motion'
import NumberCounter from 'number-counter';
import { FaDownload } from "react-icons/fa";

const Hero = () => {
  const transition = { type: 'spring', duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  const handleButtonClick = () => {
    const pdfUrl = process.env.PUBLIC_URL + 'Brochure.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = 'downloaded-file.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="hero" id="hero-section">
      <div className="blur hero-blur"></div>
      <div className='left-h'>
        <Header />

        <div className="the-best-add">
          <motion.div
            initial={{ left: mobile ? "165px" : '238px' }}
            whileInView={{ left: '8px' }}
            transition={{ ...transition, type: 'tween' }}
          >

          </motion.div>
          <span>
            IV ISTE State Level Student Convention for Polytechnics - 2024
          </span>

          {/* <span>
          Theme: “Science and Technology for better living”</span> */}
        </div>





        <div className="hero-text">
          <div>
            <span className='stroke-text'>   KARNATAKA      </span>
            <span>   (GOVT.)      </span>
          </div>
          <div>
            <span>    POLYTECHNIC,    </span>
            <span>    MANGALURU     </span>
          </div>
          <div>
            <span>
              ISTE established in the year 1941 with the motto of Career Development of Engineering
              Teachers and Personality Development of Students and overall development of our
              Technical Education System.
            </span>
          </div>
        </div>

        <div className='figures'>
          <div>
            <span>
              <NumberCounter end={135525}
                start={120000}
                delay="4"
                preFix="+" /></span>
            <span>technical teachers</span>
          </div>
          <div>
            <span><NumberCounter end={500000}
              start={490000}
              delay="4"
              preFix="+" /></span>
            <span>Student Members </span>
          </div>
          <div>
            <span><NumberCounter end={3052}
              start={2000}
              delay="4"
              preFix="+" />  </span>
            <span>Institutional Members  </span>
          </div>
        </div>

        <div className='hero-buttons'>
          <buttons className="btn"
            onClick={() => {
              const section = document.getElementById('plans-section');
              if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >Get Started</buttons>
          <buttons className="btn"
            onClick={() => window.location.href = 'http://www.isteonline.in/'}
          >Learn More</buttons>
        </div>

      </div>
      <div className='right-h'>
        <button className='btn' onClick={handleButtonClick} >
          <div className='brouchurebtn'>
            Brouchure
            <FaDownload />
          </div>

        </button>
        <motion.div
          initial={{ right: '-1rem' }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className='heart-rate'>
          <img src={iste_logo} alt="" />
        </motion.div>

        <img src={hero_image} alt="" className='hero-image' />
        <motion.img
          initial={{ right: '11rem' }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          src={hero_image_back} alt="" className='hero-image-back' />

        <motion.div
          initial={{ right: '37rem' }}
          whileInView={{ right: "20rem" }}
          transition={transition}
          className="date_div">
          <img src={dateicon} alt="" />
          <div>
            <span> DATE</span>
            <span> 27/09/2024</span>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
