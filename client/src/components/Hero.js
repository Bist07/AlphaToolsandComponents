// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import './Hero.css';
import logo from '../images/logo.png';

function Hero() {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                // User is scrolling down
                setIsCollapsed(true);
            } else {
                // User is scrolling up
                setIsCollapsed(false);
            }
            setLastScrollY(window.scrollY);
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollY]);

    return (
        <section className={`hero ${isCollapsed ? 'collapsed' : ''}`} >
            <img src={logo} alt="Logo" />
        </section>
    );
}

export default Hero;
