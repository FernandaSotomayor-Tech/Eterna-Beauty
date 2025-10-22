import React from 'react'
import './BookAppointment.css'
import BookAppointmentImg from '../../assets/BookAppointment.jpg'
import { Link } from 'react-router-dom'

export default function BookAppointment() {
    return (
        <>
            <div className="cta-card" id='contact'>
                <div className="cta-image">
                    <img src={BookAppointmentImg} alt="Beauty Salon" />
                </div>
                <div className="cta-content">
                    <h2 className="title-price">Pamper Yourself Today!</h2>
                    <p className="p-price">
                        Book your appointment now and enjoy a relaxing experience at our beauty salon.
                    </p>
                     <Link to="/contact" className="btn-pricing">
                        Go to Contact
                    </Link>
                </div>
            </div>
        </>
    )
}
