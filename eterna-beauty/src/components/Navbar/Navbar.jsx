import React, { useEffect } from 'react'
import './Navbar.css'
import { useState } from 'react'
import { HashLink } from 'react-router-hash-link'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(!isOpen)
  }

  function closeMenu() {
    setIsOpen(false)
  }

  useEffect(() => {
    let timeout;

    const handleScroll = () => {
      if (!timeout) {
        timeout = setTimeout(() => {
          setScrolled(window.scrollY > 50);
          timeout = null;
        }, 100); // máximo cada 100ms
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeout);
    };
  }, []);


  return (
    <>
      <div className={`container-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="logo">
          Eterna Beauty | <span className='span-logo'>Beauty Salon</span>
        </div>
        <button className="hamburguer" onClick={openMenu}>
          ☰
        </button>
        <nav>
          <ul className={`lista-navbar ${isOpen ? 'open' : ''}`}>
            <li className="close-btn-mobile">
              <button onClick={closeMenu} className="close-menu-btn" aria-label="Cerrar menú">
                ✕
              </button>
            </li>
            <li><HashLink smooth to="/#home">Home</HashLink></li>
            <li><HashLink smooth to="/#about">About Us</HashLink></li>
            <li><HashLink smooth to="/#pricing">Pricing</HashLink></li>
            <li><HashLink smooth to="/#testimonials">Testimonials</HashLink></li>
            <li><HashLink smooth to="/#contact">Contact</HashLink></li>
          </ul>
        </nav>
      </div>

    </>
  )
}
