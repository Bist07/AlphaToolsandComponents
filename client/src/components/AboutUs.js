import * as React from 'react';
import { Typography, Stack, Box } from '@mui/material';
import patternImage from '../images/bg.png'
function AboutUs() {

    return (
        <Box
            sx={{
                position: 'relative',
                width: '100%',
                boxShadow: ' rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;',
            }}
        >
            <Stack sx={{
                padding: 10,
                justifyContent: 'center', alignItems: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundImage:
                    'radial-gradient(ellipse 80% 50% at 50% -20%, hsl(210, 100%, 16%), transparent)',
                backgroundColor: '#14223f',
                '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    backgroundImage: `url(${patternImage})`,
                    backgroundRepeat: 'repeat',
                    backgroundSize: 'auto', // adjust as needed
                    opacity: 0.05, // Set your desired transparency (0 is fully transparent, 1 is fully opaque)
                    zIndex: 1, // ensures the pseudo-element stays behind your content
                },

            }}>
                <Typography
                    variant="h1"
                    sx={{
                        color: '#fff',
                        display: 'flex',
                        flexDirection: { xs: 'column', sm: 'row' },
                        alignItems: 'center',
                        fontSize: 'clamp(3rem, 10vw, 3.5rem)',
                    }}
                >
                    About&nbsp;Us&nbsp;
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 600,
                        mt: 4,
                        color: '#1294d2',
                        fontSize: '1rem',

                        width: { sm: '100%', md: '80%' },
                    }}
                >
                    Alpha Tools and components is a full-service, multifunctional cnc machine shop specializing in everything from prototype development to manufacturing, post-production, and delivery of machined parts.
                </Typography>
                <Typography
                    sx={{
                        fontWeight: 600,
                        mt: 1,
                        color: '#1294d2',
                        fontSize: '1rem',
                        width: { sm: '100%', md: '80%' },
                    }}
                >

                    Based in Barrie, we bring over 25 years of experience and expertise to every project.

                </Typography>
                <Typography
                    sx={{
                        fontWeight: 600,
                        mt: 1,
                        color: '#1294d2',
                        fontSize: '1rem',
                        width: { sm: '100%', md: '80%' },
                    }}
                >
                    Serving both Canada and the United States, our highly skilled team is committed to delivering precision, quality, and efficiency at every stage of the process.
                </Typography>
            </Stack>
        </Box>
    );
}


export default AboutUs;