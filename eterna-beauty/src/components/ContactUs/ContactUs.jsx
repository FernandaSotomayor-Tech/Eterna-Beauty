import React from "react";
import "./ContactUs.css";
import ContactUsImg from '../../assets/ContactUs.jpg'
import { useEffect } from "react";

export default function ContactUs() {
  useEffect(() => {
    // cada vez que se monta la página de contacto, sube al inicio
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
    <div className="container-contactUs" id="contact">
      <div className="container-contactUs1">
        <h1>Contact Us</h1>
        <p>Contact us to transform your look and pamper yourself as you deserve!!!</p>
        <form className="contact-form">
          <div className="form-group">
            <label htmlFor="name">Your Name</label>
            <input type="text"  placeholder="Enter your name" required/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Your email</label>
            <input type="text" placeholder="Enter your email" required/>
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumer">your phone number</label>
            <input type="text" placeholder="Enter your phone number" required/>
          </div>
        </form>
         <button type="submit" className="btn-submit">Send</button>
         <div className="contact-details-contact">
          <h3 className="h3-contact"><span className="span-contact">Phone Number</span> : 1 (232) 252 55 22</h3>
          <h3 className="h3-contact"><span className="span-contact">Location</span>:  75 street, WI 63025</h3>
          <h3 className="h3-contact"><span className="span-contact">Email</span> eternabeauty@gmail.com</h3>
         </div>
      </div>
      <div className="container-contactUs2">
        <img src={ContactUsImg} alt="" />
      </div>
    </div>
    </>
  );
}
