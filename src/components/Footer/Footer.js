import React from 'react';
import './Footer.css';


const Footer = () => {
    return (
        <footer className='footer-area text-white'>
            <div className="footer-wave-box">
                <div className="footer-wave footer-animation">

                </div>
            </div>
            <div className="main">
                <div className="footer">
                    <div className="single-footer">
                        <h4 >About</h4>
                        <p>The definition of healthcare systems are organizations or policies in place that are designed to plan and provide medical care for people. Hospitals, clinics and community health centers are examples of healthcare systems.</p>
                        <div className="footer-social">
                            <a href="https://www.facebook.com/"><i className="fab fa-facebook"></i></a>
                            <a href="https://twitter.com/"><i className="fab fa-twitter"></i></a>
                            <a href="https://www.instagram.com/"><i className="fab fa-instagram"></i></a>
                            <a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a>
                        </div>
                    </div>
                    <div className="single-footer">
                        <h4>Main Menu</h4>
                        <ul>
                            <li><a href=""><i className="fas fa-chevron-right"></i>Home</a></li>
                            <li><a href=""><i className="fas fa-chevron-right"></i>Services</a></li>
                            <li><a href=""><i className="fas fa-chevron-right"></i>Diagnoses</a></li>
                            <li><a href=""><i className="fas fa-chevron-right"></i>About Us</a></li>
                            <li><a href=""><i className="fas fa-chevron-right"></i>Contact Us</a></li>
                        </ul>
                    </div>
                    <div className="single-footer">
                        <h4>Quick Links</h4>
                        <ul>
                            <li><a href=""><i className="fas fa-chevron-right"></i>Privacy</a></li>
                            <li><a href=""><i className="fas fa-chevron-right"></i>Terms & Conditions</a></li>
                            <li><a href=""><i className="fas fa-chevron-right"></i>Disclaim</a></li>
                        </ul>
                    </div>
                    <div className="single-footer">
                        <h4>Contact Us</h4>
                        <ul>
                            <li><i className="fas fa-map-marker-alt"></i>    North Street, Sydney, Australia</li>
                            <li><i className="fas fa-mobile-alt"></i>     +1 234 567 8989</li>
                            <li><i className="far fa-envelope"></i>     saveo@gmail.com</li>
                            <li><i className="fas fa-globe-europe"></i>     www.saveo.com</li>
                        </ul>
                    </div>
                </div>
                <div className="copy">
                    <p><small>&copy; 2021 all rights reserved at SAVEO private nursing</small></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;