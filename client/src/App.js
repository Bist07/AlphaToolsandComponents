// src/App.js
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Section from './components/Section';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ProjectsGallery from './components/ProjectsGallery';
import CollapsibleSection from './components/CollapsibleSection';
import './App.css';
import { Typography } from '@mui/material';
import lathes from './images/lathes.png';
import CNC from './images/3axis.png';

function App() {
    return (
        <div className="App">
            <div id="hero" />
            <Header />
            <Hero />
            <Section id="about" title="About Us" content="Alpha Tools and components is a full-service, multifunctional cnc machine shop specializing in everything from prototype development to manufacturing, post-production, and delivery of machined parts.
                    Based in Barrie, we bring over 25 years of experience and expertise to every project.
                    Serving both Canada and the United States, our highly skilled team is committed to delivering precision, quality, and efficiency at every stage of the process." />
            <ProjectsGallery />
            <div id="services" />
            <CollapsibleSection title="CNC Milling">
                <div style={{ flex: '1', margin: '0 10px' }}>
                    <Typography variant="h4">
                        Daewoo DMV-4020
                        <Typography>
                            <br />
                            <b>Machine Control:</b> Fanuc 21i-MB<br />
                            <b>Table Size:</b> 47" x 19.75"<br />
                            <b> Machine Travels (X/Y/Z):</b> 40/20/24<br />
                            <b>Spindle To Table Distance:</b> 6" to 30"<br />
                            <b> Table Capacity:</b> 1760 LBS<br />
                            <b> Spindle Taper:</b> BT-40<br />
                            <b> Spindle Speeds:</b> 8000 RPM<br />
                            <b> Tool Changer Style:</b> Side Mount, Twin Arm<br />
                            <b> Tool Changer Capacity:</b> 24
                        </Typography>
                    </Typography>
                </div>
                <div >
                    <img src={CNC} alt="DOOSAN" />
                </div>
            </CollapsibleSection>
            <CollapsibleSection title="Turning">
                <div style={{ flex: '1', margin: '0 10px' }}>
                    <Typography variant="h4">
                        First V700
                        <Typography>
                            <br />
                            <b>Machine Control:</b> FANUC Oi Mate-MD<br />
                            <b>Table Size:</b> 31.49" x 14.75"<br />
                            <b> Machine Travels (X/Y/Z):</b> 27.5/15.7/21.6<br />
                            <b> Table Capacity:</b> 551 LBS<br />
                            <b> Spindle Taper:</b> BT-40<br />
                            <b> Spindle Speeds:</b> 10000 RPM<br />
                            <b> Tool Changer Capacity:</b> 24
                        </Typography>
                    </Typography>
                </div>
                <div >
                    <img src={lathes} alt="FIRSTV700" />
                </div>
            </CollapsibleSection >
            <div id="contact" />
            <ContactForm />
            <Footer />
        </div >
    );
}

export default App;
