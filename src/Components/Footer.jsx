import React from 'react';
import '../Components/NavBar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import logo from '../Components/Assets/mixlr-logo.png';
import { faSquareFacebook, faTwitter } from '@fortawesome/free-brands-svg-icons';

function Footer() {
    return (
        <footer className="footer">
            <h2 className="footer-heading">Become a Mixlr <br /> audio creator today</h2>
            <button className="footer-button">Start free trial</button>
            <div className="footer-social">
                <img src={logo} alt="Mixlr" className="footer-logo" />
                <h3>Mixlr</h3>
                <div className="footer-social">
                    <a href="#facebook"><FontAwesomeIcon icon={faSquareFacebook} size="2x" color="red" /></a>
                    <a href="#twitter"><FontAwesomeIcon icon={faTwitter} size="2x" color="red" /></a>
                </div>
            </div>
            <ul className="footer-links">
                <li><a href="#pricing">Pricing</a></li>
                <li><a href="#blog">Blog</a></li>
                <li><a href="#support">Support</a></li>
                <li><a href="#careers">Careers</a></li>
                <li><a href="#terms">Terms of Use</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
            <p>© 2024 Mixlr. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
