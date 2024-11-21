// src/components/Footer.js
import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-section">
                <h3>Contact</h3>
                <p>705 500 4911</p>
                <p>alphatoolsandcomponents@outlook.com</p>
                <p>&nbsp; </p>
            </div>
            <div className="footer-section">
                <h3>Address</h3>
                <p>25 SAUNDERS ROAD UNIT 11</p>
                <p>BARRIE, ONTARIO </p>
                <p>CANADA L4N 9A7</p>
            </div>
            <div className="footer-section">
                <p>&copy; 2024 Alpha tools and components inc.</p>
            </div>
        </footer>
    );
}

export default Footer;
