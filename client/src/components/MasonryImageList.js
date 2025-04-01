import React from 'react';
import { Box, Typography, Stack, Container } from '@mui/material';
import image1 from '../images/image(1).jpg';
import image2 from '../images/image(2).jpg';
import image3 from '../images/image(3).jpg';
import image4 from '../images/image(4).jpg';
import image5 from '../images/image(5).jpg';
import image6 from '../images/image(6).jpg';
import styles from './MagnifierImageList.module.css';

const images = [image1, image2, image3, image4, image5, image6];

export default function MagnifierImageList() {
    return (
        <Box sx={{ padding: { sm: 4, md: 8 }, paddingRight: { sm: 0, md: 0 }, paddingLeft: { sm: 0, md: 8 }, backgroundColor: 'white', }}>
            <Box sx={{ padding: 4, paddingRight: { sm: 4, md: 6 }, border: 1, borderColor: 'divider', borderTopLeftRadius: 25, borderBottomLeftRadius: 25, backgroundColor: 'background.default' }}>
                <Box sx={{ width: { sm: '100%' }, display: 'flex' }}>
                    <Stack>
                        <Typography
                            component="h2"
                            variant="h4"
                            gutterBottom
                            sx={{ color: 'text.primary' }}
                        >
                            Gallery of CNC machined parts
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
                        >
                            Here’s a small selection of the CNC machined prototypes and end-use parts we’ve produced for our customers.
                        </Typography>
                    </Stack>
                </Box>
                <Box className={styles.magnifierContainer} sx={{ padding: 2 }}>
                    {images.map((img, index) => (
                        <img key={index} src={img} alt={`Image ${index + 1}`} />
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
