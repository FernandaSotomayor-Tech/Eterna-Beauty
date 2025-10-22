import { BrowserRouter, Routes, Route } from 'react-router-dom';
// COMPONENTS
import Navbar from './components/Navbar/Navbar.jsx'
import Hero from './components/Hero/Hero.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'
import Pricing from './components/Pricing/Pricing.jsx'
import Testimonials from './components/Testimonials/Testimonials.jsx'
import ContactUs from './components/ContactUs/ContactUs.jsx';
import BookAppointment from './components/BookAppointment/BookAppointment.jsx'
import Footer from './components/Footer/Footer.jsx'
// STYLES & ASSETS
import './App.css'
import hairCardHero from './assets/card-dressing salon.webp'
import makeUpCardHero from './assets/card-makeup.webp'
import nailCardHero from './assets/card-nail.webp'

function App() {
  // Main section
  const beautyServices = [
    {
      category: "Hair",
      description: "If you want to change your style or just keep your  hair cut up to date here is the best place you’re looking for.",
      image: hairCardHero,
      cta: "Book Now"
    },
    {
      category: "Nails",
      description: "If you want your nails to look flawless or just keep them perfectly maintained, this is the right place for you.",
      image: nailCardHero,
      cta: "Book Now"
    },
    {
      category: "Makeup",
      description: "If you want to enhance your beauty or get the perfect look for a special occasion, you’ve found the place you need.",
      image: makeUpCardHero,
      cta: "Book Now"
    }
  ];


  // AboutUsCards
  const AboutUsCards = [
    {
      icono: <i className="fa fa-scissors"></i>,
      title: "From hair color makeover to stylish highlights",
      description: "From just a color retouch or a color correction to an extreme make over our great colorists will show you a huge variety of color to match your skin tone.",
    },
    {
      icono: <i className="fa fa-eye"></i>,
      title: "Makeup artist services will make your beauty shine",
      description: "Our make-up artists will make your appearance memorable and bright, and take care of your skin's health! We work only with the top quality cosmetics!",
    },
    {
      icono: <i className="fa fa-spa"></i>,
      title: "Natural skin care for face and body & SPA",
      description: "Exfoliation improves the texture of the skin, helps reduce lines and wrinkles, and allows deeper absorption of moisturizers and antioxidants."
    },
    {
      icono: <i className="fa fa-bag-shopping"></i>,
      title: "Personal shopping and styling services",
      description: "We offer a premiere image consulting service no other styling beauty salon offers. You, as our client, will benefit from a team of two personal stylists",
    }
  ];



  // Pricing

  const Princig = [
    {
      title: "HairCuts",
      price: "From $45",
      listServices: [
        "Women's Haircut",
        "Men's Haircut",
        "Children's Haircut"
      ],
      btn: "Make an Appointment"
    },
    {
      title: "Waxing",
      price: "From $45",
      listServices: [
        "Brazilian waxing",
        "Eyebrows trimming",
        "Full body waxing"
      ],
      btn: "Make an Appointment"
    },
    {
      title: "Wellness",
      price: "From $45",
      listServices: [
        "Swedish massage",
        "Spa manicure",
        "Makeup"
      ],
      btn: "Make an Appointment"
    }
  ]

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <section id="home"><Hero services={beautyServices} /></section>
              <section id="about"><AboutUs aboutCard={AboutUsCards} /></section>
              <section id="services"><Pricing pricingData={Princig} /></section>
              <section id="testimonials"><Testimonials /></section>
              <BookAppointment />
            </>
          } />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App

