// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import './App.css';
import AppTheme from './theme/AppTheme';
import CssBaseline from '@mui/material/CssBaseline';
import Features from './components/Features';
import MasonryImageList from './components/MasonryImageList';
import bgImg from './images/pexels-mikhail-nilov-9242167.jpg'
import { Box, Stack } from '@mui/material';
function App(props) {
    return (
        <AppTheme {...props}>
            <div className="App">
                <div id="hero" />

                <CssBaseline enableColorScheme />
                <Header />

                <Hero />

                <div id="services" />
                <Features />

                <MasonryImageList />
                <div id="about" />
                <AboutUs />
                <Box display="flex" justifyContent="center" bgcolor="#f4f6f8" sx={{
                    backgroundRepeat: 'no-repeat',
                    backgroundImage: `url(${bgImg})`, backgroundSize: 'cover'
                }}>
                    <div id="contact" />
                    <Stack >
                        <ContactForm />
                        <Stack width={'100%'}>
                            <Footer />
                        </Stack>
                    </Stack>

                </Box>
            </div >

        </AppTheme >
    );
}

export default App;
