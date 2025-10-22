import React, { useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    id: 1,
    text: "The best haircut I've ever had! The stylist listened to exactly what I wanted and the result was perfect. Highly recommend!",
    author: "Jessica M.",
    role: "Regular Client",
  },
  {
    id: 2,
    text: "My nails look amazing! The gel manicure lasted for weeks without a single chip. The service was fast and the staff was so friendly.",
    author: "Olivia P.",
    role: "First-Time Visitor",
  },
  {
    id: 3,
    text: "I felt completely pampered during my facial. My skin feels incredibly smooth and refreshed. Can't wait for my next appointment!",
    author: "Emily R.",
    role: "Beauty Enthusiast",
  },
  {
    id: 4,
    text: "The hair coloring session was a true work of art. My highlights are stunning and look so natural. The salon has a great, relaxing atmosphere.",
    author: "Sophia L.",
    role: "Loyal Customer",
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  }

  const prevIndex = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  const currentTestimonial = testimonials[currentIndex];

  return (
    <>
     <div className="container-testimonial1" id='testimonials'>
      <div className="container-testimonials">
        <div className="testitmonials-title">
          <h1 className='testimonial-h1'>Testimonials</h1>
          <h2 className='testimonial-h2'>What people say ?</h2>
          <p className='testimonial-p'>Here's what our clients had to say
            about our services</p>
          <div className="slider-controls">
            <button className="slider-button" onClick={prevIndex}>←</button>
            <button className="slider-button" onClick={nextIndex}>→</button>
          </div>
        </div>
        <div className="testimonials-slider">
          <div className="testimonial-card">
            <p className="testimonial-text">“ {currentTestimonial.text} "</p>
            <p className="testimonial-author">- {currentTestimonial.author}</p>
            <p className="testimonial-role">{currentTestimonial.role}</p>
          </div>
        </div>
      </div>
     </div>
    </>
  )
}
