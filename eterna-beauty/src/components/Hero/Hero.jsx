import React, { useEffect } from 'react';
import './Hero.css';
import Button from '../../components/Button.jsx/Button.jsx';
// Assets
import heroVideo from '../../assets/video-hero1 (1).mp4';
// AOS
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero({ services }) {

  useEffect(() => {
    AOS.init({ duration: 800 }); // once: true evita recalcular animaciones al hacer scroll
  }, []);

  return (
    <>
      {/* HERO VIDEO */}
      <section className="container-hero" id='home'>
        <div className="container-hero-video">
          <video className="hero-video" autoPlay muted loop preload="none">
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>

        {/* TEXTOS HERO */}
        <div
          className="container-text"
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine"
        >
          <h1 style={{ visibility: 'visible' }}>Eterna Beauty</h1>
          <h3 data-aos="fade-right" data-aos-once="true">
            "Where every visit leaves you feeling confident, radiant, and unforgettable."
          </h3>
        </div>
      </section>

      {/* HERO CARDS */}
      <section className="cardHero">
        {services.map((service, index) => (
          <div
            className="cards"
            key={index}
            data-aos="fade-right"
            data-aos-delay={index * 200} // escalona animaciones 200ms
            data-aos-once="true"
          >
            <img
              src={service.image}
              alt={service.category}
              className='card-hero-img'
              loading="lazy"
            />
            <div className="container-hero-descriptions">
              <h3 className='category-card'>{service.category}</h3>
              <p className='description-card'>{service.description}</p>
              <Button className="ctaBtn-card">{service.cta}</Button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
