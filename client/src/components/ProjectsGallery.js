

import React, { useState } from 'react';
import { Box, Card, CardMedia, IconButton } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';

import image1 from '../images/image(1).jpg';
import image2 from '../images/image(2).jpg';
import image3 from '../images/image(3).jpg';
import image4 from '../images/image(4).jpg';
import image5 from '../images/image(5).jpg';
import image6 from '../images/image(6).jpg';

const images = [image1, image2, image3, image4, image5, image6];


const ProjectsGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        );
    };

    // Determine the indices of the images to display
    const getVisibleImages = () => {
        const visibleImages = [];
        for (let i = 0; i < 3; i++) {
            visibleImages.push(images[(currentIndex + i) % images.length]);
        }
        return visibleImages;
    };

    const visibleImages = getVisibleImages();

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
                    left: { xs: '10px', sm: '20px' },
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
                    overflow: 'hidden',
                    width: '100%',
                    justifyContent: 'center',
                }}
            >
                {visibleImages.map((image, index) => (
                    <Card
                        key={index}
                        onClick={() => {
                            if (index === 0) handlePrev(); // Left side image
                            else if (index === 2) handleNext(); // Right side image
                        }}
                        sx={{
                            margin: { xs: '0 5px', sm: '0 10px' },
                            width: index === 1 ? '40%' : '20%', // Highlight the center image
                            transition: '0.3s',
                            transform: index === 1 ? 'scale(1.0)' : 'scale(0.8)',
                            cursor: index === 1 ? 'default' : 'pointer',
                            boxShadow:
                                index === 1
                                    ? '0px 8px 20px rgba(0, 0, 0, 0.2)'
                                    : '0px 4px 12px rgba(0, 0, 0, 0.1)',
                            maxWidth: '100%',
                        }}
                    >
                        <CardMedia
                            component="img"
                            image={image}
                            alt={`Project ${index + 1}`}
                            sx={{
                                borderRadius: '12px',
                                width: '100%', // Enforce card width
                                height: '300px', // Set a fixed height
                                objectFit: 'fill', // Scale the image to cover the box while maintaining aspect ratio
                                '@media (max-width: 768px)': {
                                    height: '100px', // Set a fixed height
                                },

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
                    right: { xs: '10px', sm: '20px' },
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