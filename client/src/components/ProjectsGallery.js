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
                padding: '40px 10px',
                backgroundColor: '#f4f6f8',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
            }}
        >
            {/* Left Arrow */}
            <IconButton
                onClick={handlePrev}
                sx={{
                    position: 'absolute',
                    left: { xs: '5px', sm: '10px' },
                    zIndex: 1,
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    '&:hover': { backgroundColor: '#e0e0e0' },
                }}
            >
                <ArrowBackIos fontSize="small" />
            </IconButton>

            {/* Image Gallery */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    overflow: 'hidden', // Prevents overflow
                    width: '100%',
                    justifyContent: 'center',
                }}
            >
                {images.map((image, index) => (
                    <Card
                        key={index}
                        sx={{
                            margin: { xs: '0 5px', sm: '0 10px' },
                            width: currentIndex === index ? '50%' : '30%', // Adjusted widths for mobile
                            transition: '0.3s',
                            transform: currentIndex === index ? 'scale(1.1)' : 'scale(0.9)',
                            boxShadow:
                                currentIndex === index
                                    ? '0px 8px 20px rgba(0, 0, 0, 0.2)'
                                    : '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            maxWidth: '100%',
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
                    right: { xs: '5px', sm: '10px' },
                    zIndex: 1,
                    backgroundColor: '#fff',
                    borderRadius: '50%',
                    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
                    '&:hover': { backgroundColor: '#e0e0e0' },
                }}
            >
                <ArrowForwardIos fontSize="small" />
            </IconButton>
        </Box>
    );
};

export default ProjectsGallery;
