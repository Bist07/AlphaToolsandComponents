
import React, { useState, useEffect } from 'react';
import { Typography, Box } from '@mui/material';
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
        <Box className={`hero ${isCollapsed ? 'collapsed' : ''}`}
            sx={{
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px -50px 36px -28px inset',
            }}>
            <Box sx={{ display: 'flex', justifyContent: 'center', }}>
                <img src={logo} alt="Logo" />
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3, }}>
                <Typography

                    sx={{

                        fontWeight: 'bold',
                        justifySelf: 'center',
                        color: '#fff',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        fontSize: 'clamp(2rem, 10vw, 2.5rem)',
                    }}
                >
                    CUSTOM MACHINING CNC SHOP
                </Typography>
            </Box>
        </Box>
    );
}

export default Hero;
