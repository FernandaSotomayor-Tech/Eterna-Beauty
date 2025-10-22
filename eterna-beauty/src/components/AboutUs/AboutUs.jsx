import React from 'react'
import './AboutUs.css';
import Button from '../../components/Button.jsx/Button.jsx'
// imports Library Scroll Animation
 import AOS from "aos";
// Correcto en AboutUs.jsx
import { useEffect } from 'react';
import img from '../../assets/img 4.jpg'
// iMAGES GRID
 import img1 from '../../assets/Hair-1.jpg';
 import img2 from '../../assets/MakeUp2.webp';
 import img3 from '../../assets/Hair-2.jpg';
 import img4 from '../../assets/MakeUp1.jpg';
 import img5 from '../../assets/Nails-1.png';
 import img6 from '../../assets/Nails2.webp';
 import img7 from '../../assets/Spa1.jpg';
 import img8 from '../../assets/Spa2.jpg';

export default function AboutUs({ aboutCard }) {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8];

  // ANMATION SCROLL
 useEffect(() => {
   AOS.init({ duration: 800 });
 }, []);

  return (
    <>
      {/* PART 1 ABOUT US */}
      <div className="container-AboutUs" id='about'>
        <div className="img-about-us" data-aos="fade-right" >
          <img src={img} alt="hair image" className='img' loading="lazy" />
        </div>
        <div className="container-text-about-us" data-aos="fade-left" >
          <h1 className='AboutUs-h1'>Welcome to</h1>
          <h2 className='AboutUs-h2'>Beauty Salon.</h2>
          <p className='AboutUs-p'>We value our clients and know exactly what will suit you more and how to implement your most creative ideas into reality to enhance your natural looks and make you look gorgeous whenever you go! Trust us to make you look special!</p>
          <Button className='ctaBtn-card-about'>Book Now</Button>
        </div>
      </div>
      {/* PART 2 ABOUT US */}
      <div className="container-aboutUs-part2">
        <div className="sub-container-part2" data-aos="fade-right">
          <h2 className='h2-part2'>About Us</h2>
          <h3 className='h3-part2'>Beauty Salon</h3>
        </div>
        <div className="part2-text-aboutUs" data-aos="fade-left">
          <h4 className='part2-h4'>Our beauty salon was founded in 2015, and since then we are trying to make our customers more happy and confident!</h4>
          <p className='part2-text-information'>We offer a wide range of services, including haircuts,nails, coloring, and styling, as well as makeup and skincare treatments. Our team of experienced professionals is dedicated to providing personalized care and attention to each client, ensuring that you leave our salon feeling and looking your best.</p>
          <Button className='ctaBtn-card-about'>Book Now</Button>
        </div>
      </div>
      {/* PART 3 ABOUT US */}
      <div className="container-aboutUs-part3">
        {aboutCard.map((card, index) => (
          <div className='card-aboutUs' key={index}>
            <div className='icono'>{card.icono}</div>
            <div className='title'>{card.title}</div>
            <div className='description'>{card.description}</div>
          </div>
        ))}
      </div>
      {/* {PART 4 ABOUT US GRID} */}
      <div className="container-about-us-part4"  data-aos="zoom-out">
        {images.map((image,index) => (
          <div
            className="img-grid"
            key={index}
          >
            <img
              src={image}
              alt={`about-us-${index}`}
              loading="lazy"
            />
          </div>
        ))}
      </div>

    </>
  )
}
