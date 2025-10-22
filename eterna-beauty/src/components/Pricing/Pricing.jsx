import React from 'react'
import './Pricing.css';


export default function Pricing({pricingData}) {
  
  return (
    <>
      <div className="container-pricing" id='pricing'>
        <h1 className='h1-pricing'>Pricing</h1>
        <h2 className='h2-pricing'>Services</h2>
        <div className="container-cards">
           {pricingData.map((item,index)=>(
              <div className='pricing-card' key={index}>
                <h3 className='title-price'>{item.title}</h3>
                <p className='p-price'>{item.price}</p>
                <ul className='ul-pricing-services'>
                 {item.listServices.map((service,index)=>(
                  <li key={index}>{service}</li>
                 ))}
                </ul>
                <button className='btn-pricing'>{item.btn}</button>
              </div>
           ))}
        </div>
      </div>
    </>
  )
}
