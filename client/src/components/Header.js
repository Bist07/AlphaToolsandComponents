import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);

    const handleScroll = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const toggleDrawer = (open) => () => {
        setDrawerOpen(open);
    };

    return (
        <>
            <AppBar
                position="sticky"
                sx={{ backgroundColor: '#333' }}
                elevation={3}
            >
                <Toolbar sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 1 }}>
                        ALPHA TOOLS AND COMPONENTS INC.
                    </Typography>

                    {/* Mobile Menu Button */}
                    <IconButton
                        color="inherit"
                        edge="end"
                        sx={{ display: { xs: 'block', md: 'none' } }}
                        onClick={toggleDrawer(true)}
                    >
                        <MenuIcon />
                    </IconButton>

                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }}>
                        <Button color="inherit" onClick={() => handleScroll('about')}>
                            About
                        </Button>
                        <Button color="inherit" onClick={() => handleScroll('services')}>
                            Services
                        </Button>
                        <Button color="inherit" onClick={() => handleScroll('contact')}>
                            Contact
                        </Button>
                    </Box>
                </Toolbar>
            </AppBar>

            {/* Drawer for Mobile */}
            <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={toggleDrawer(false)}
            >
                <Box
                    sx={{
                        width: 150, backgroundColor: '#333',
                        height: '100%',
                        color: 'white'
                    }}
                    role="presentation"
                    onClick={toggleDrawer(false)}
                    onKeyDown={toggleDrawer(false)}
                >
                    <List>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleScroll('about')}>
                                <ListItemText primary="About" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleScroll('services')}>
                                <ListItemText primary="Services" />
                            </ListItemButton>
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={() => handleScroll('contact')}>
                                <ListItemText primary="Contact" />
                            </ListItemButton>
                        </ListItem>
                    </List>
                </Box>
            </Drawer>
        </>
    );
};

export default Header;
