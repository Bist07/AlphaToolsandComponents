import React, { useState } from 'react';
import { Box, Card, CardMedia, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import image1 from '../images/example.jpeg';

const images = [image1, image1, image1, image1, image1];

const ProjectsGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(2); // Start with the middle image

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    return (
        <Box
            component="section"
            sx={{
                padding: '60px 20px',
                backgroundColor: '#f4f6f8',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative', // For positioning the arrows
            }}
        >
            {/* Left Arrow */}
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: 'absolute',
                    left: '10px',
                    zIndex: 1,
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                }}
            >
                <ArrowBackIos />
            </IconButton>

            {/* Image Gallery */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden', // To avoid horizontal scrolling
                    maxWidth: '100%', // Ensures the images don't overflow
                    justifyContent: 'center', // Center images
                }}
            >
                {images.map((image, index) => (
                    <Card
                        key={index}
                        sx={{
                            margin: '0 10px',
                            width: currentIndex === index ? '35%' : '20%', // Center image is larger
                            transition: '0.3s',
                            transform: currentIndex === index ? 'scale(1.1)' : 'scale(0.9)', // Bigger and more prominent
                            boxShadow: currentIndex === index ? '0px 8px 20px rgba(0, 0, 0, 0.2)' : '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                            maxWidth: '100%', // Make sure cards don't overflow horizontally
                        }}
                    >
                        <CardMedia
                            component="img"
                            height="300"
                            image={image}
                            alt={`Project ${index + 1}`}
                            sx={{
                                borderRadius: '12px',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Card>
                ))}
            </Box>

            {/* Right Arrow */}
            <IconButton
                onClick={handleNext}
                sx={{
                    position: 'absolute',
                    right: '10px',
                    zIndex: 1,
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                }}
            >
                <ArrowForwardIos />
            </IconButton>
        </Box>
    );
};

export default ProjectsGallery;
