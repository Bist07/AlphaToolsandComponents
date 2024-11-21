import React from 'react';
import { Grid, Typography, Box, CardMedia } from '@mui/material';

const Services = ({ imageSrc, description, altText }) => {
    return (
        <Box sx={{ padding: '40px 20px', backgroundColor: '#f4f6f8' }}>
            <Grid container spacing={4} alignItems="center">
                <Grid item xs={12} md={6}>
                    <CardMedia
                        component="img"
                        height="300"
                        image={imageSrc}
                        alt={altText}
                        sx={{
                            borderRadius: '12px',
                            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                        }}
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <Typography variant="h5" sx={{ fontWeight: 'bold' }} gutterBottom>
                        Description
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                        {description}
                    </Typography>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Services;