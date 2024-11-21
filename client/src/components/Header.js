import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';

const Header = () => {
    const handleScroll = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <AppBar
            position="sticky"
            sx={{ backgroundColor: '#333' }}
            elevation={3}
        >
            <Toolbar sx={{ justifyContent: 'space-between' }}>
                <Button
                    color="inherit"
                    onClick={() => handleScroll('hero')}
                >  <Typography variant="h6" component="div" sx={{ flexGrow: 1, mx: 5 }}>
                        ALPHA TOOLS AND COMPONENTS INC.  </Typography>
                </Button>

                <Box sx={{ mr: 5 }}>
                    <Button
                        color="inherit"
                        onClick={() => handleScroll('about')}
                    >
                        About
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => handleScroll('services')}
                    >
                        Services
                    </Button>
                    <Button
                        color="inherit"
                        onClick={() => handleScroll('contact')}
                    >
                        Contact
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
