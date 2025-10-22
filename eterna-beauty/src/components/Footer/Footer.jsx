import './Footer.css';

export default function Footer() {
    return (
        <>
            <footer className="footer">
                <div className="footer-container">
                    {/* <!-- Column 1: Logo + Description --> */}
                    <div className="footer-about">
                        <h2 className="footer-logo">Eterna Beauty</h2>
                        <p className='p-footer'>
                            Your sanctuary of beauty and wellness. We enhance your style and
                            confidence with professional services.
                        </p>
                    </div>

                    {/* <!-- Column 2: Navigation --> */}
                    <div className="footer-links">
                        <h3>Links</h3>
                        <ul>
                            <li><a href="#" id='/#home'>Home</a></li>
                            <li><a href="#" id='/#about'>About Us</a></li>
                            <li><a href="#" id='#pricing'>Pricing</a></li>
                            <li><a href="#" id='/#testimonials'>Testimonials</a></li>
                            <li><a href="#" id='/#contact'>Contact</a></li>
                        </ul>
                    </div>

                    {/* <!-- Column 3: Contact --> */}
                    <div className="footer-contact">
                        <h3>Contact</h3>
                        <p>📍 123 Beauty Street, City</p>
                        <p>📞 +123 456 7890</p>
                        <p>✉️ contact@eternabeauty.com</p>
                    </div>

                    {/* <!-- Column 4: Newsletter --> */}
                    <div className="footer-newsletter">
                        <h3>Subscribe</h3>
                        <p>Receive exclusive offers and beauty tips in your inbox.</p>
                        <form>
                            <input
                                type="email"
                                placeholder="Your email address"
                                required
                            />
                            <button type="submit">Subscribe</button>
                        </form>
                    </div>
                </div>

                {/* <!-- Bottom Section --> */}
                <div className="footer-bottom">
                    <p>© 2025 Eterna Beauty. All rights reserved.</p>
                    <div className="footer-socials">
                        <a href="#">Instagram</a> |
                        <a href="#">Facebook</a> |
                        <a href="#">TikTok</a>
                    </div>
                </div>
            </footer>

        </>
    )
}
