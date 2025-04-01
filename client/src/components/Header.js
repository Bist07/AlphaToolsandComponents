import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: theme.vars
        ? `rgba(${'#fff'} / 0.4)`
        : alpha('#fff', 0.4),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
}));

export default function Header() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const handleScroll = (id) => {
        const target = document.getElementById(id);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };


    return (
        <AppBar
            position="fixed"
            enableColorOnDark
            sx={{
                boxShadow: 0,
                bgcolor: 'rgba(0, 0, 0, 0.7)',
                backgroundImage: 'none',
                width: '100%'
            }}
        >

            <StyledToolbar >
                <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', px: 0 }}>
                    <Box sx={{ flexGrow: 1 }}></Box>
                    <Box sx={{ display: { xs: 'none', md: 'flex', gap: '16px', alignSelf: 'flex-end' } }}>
                        <Button sx={{
                            borderRadius: '8px', color: 'white', '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.2)'
                            }
                        }}
                            onClick={() => handleScroll('about')}>
                            About
                        </Button>
                        <Button sx={{
                            borderRadius: '8px', color: 'white', '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.2)'
                            }
                        }}
                            onClick={() => handleScroll('services')}>
                            Services
                        </Button>
                        <Button variant='contained' sx={{ borderRadius: '8px' }} color='secondary' onClick={() => handleScroll('contact')}>
                            Contact us
                        </Button>
                    </Box>
                </Box>
                <Box
                    sx={{
                        display: { xs: 'none', md: 'flex' },
                        gap: 1,
                        alignItems: 'center',
                    }}
                >
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' }, gap: 1 }}>
                    <IconButton aria-label="Menu button" onClick={toggleDrawer(true)} sx={{ bgcolor: 'transparent', }}>
                        <MenuIcon sx={{ color: 'white', }} />
                    </IconButton>
                    <Drawer
                        anchor="top"
                        open={open}
                        onClose={toggleDrawer(false)}
                        PaperProps={{
                            sx: {
                                top: 'var(--template-frame-height, 0px)',
                            },
                        }}
                    >
                        <Box sx={{ p: 2, bgcolor: 'rgba(0, 0, 0, 1)', }}>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'flex-end',
                                }}
                            >
                                <IconButton onClick={toggleDrawer(false)}>
                                    <CloseRoundedIcon />
                                </IconButton>
                            </Box>

                            <MenuItem sx={{ color: 'white' }} onClick={() => handleScroll('about')}>About</MenuItem>
                            <MenuItem sx={{ color: 'white' }} onClick={() => handleScroll('services')} >Services</MenuItem>
                            <MenuItem sx={{ color: 'white' }} onClick={() => handleScroll('contact')}>Contact us</MenuItem>

                        </Box>
                    </Drawer>
                </Box>
            </StyledToolbar>

        </AppBar>
    );
}
