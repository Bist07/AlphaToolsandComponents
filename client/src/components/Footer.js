import React from 'react';
import { Box, Stack, Typography, Link } from '@mui/material'
import { styled, alpha } from '@mui/material/styles';
const StyledBox = styled(Box)(({ theme }) => ({
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    bottom: 0,
    zIndex: 1,
    justifyContent: 'space-between',
    flexShrink: 0,
    borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
    backdropFilter: 'blur(24px)',
    border: '1px solid',
    borderLeft: 0,
    borderRight: 0,

    borderColor: (theme.vars || theme).palette.divider,
    backgroundColor: theme.vars
        ? `rgba(${theme.vars.palette.background.defaultChannel} / 0.4)`
        : alpha(theme.palette.background.default, 0.4),
    boxShadow: (theme.vars || theme).shadows[1],
    padding: '8px 12px',
}));
function Footer() {
    return (
        <StyledBox
            sx={{
                flexDirection: { sm: 'column', md: 'row', xs: 'column' },
                justifyContent: 'space-evenly',
                padding: 5,
                textAlign: 'center',
                alignItems: 'center',
                backgroundColor: 'rgba(0, 0, 0, 0.7)',

            }}>
            <Stack spacing={1}  >
                <Typography sx={{ color: 'white' }} variant='h4'>Contact</Typography>
                <Link><Typography sx={{ color: 'white' }}>alphatoolsandcomponents@outlook.com</Typography>    </Link>
                <Link><Typography sx={{ color: 'white' }}>+1 (705) 500 4911</Typography>    </Link>
                <p>&nbsp; </p>
            </Stack>
            <Stack spacing={1}>

                <Typography sx={{ color: 'white' }} variant='h4'>Address</Typography>

                <Link
                    href="https://www.google.com/maps/place/Alpha+Tools+%26+Components/@44.3260951,-79.6812453,17z/data=!3m1!4b1!4m6!3m5!1s0x882abdd65ea48c8f:0x2221bd3d74802df5!8m2!3d44.3260951!4d-79.6786704!16s%2Fg%2F11f6xz9qkp?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
                    sx={{ textAlign: 'center' }}><Typography sx={{ color: 'white' }}>25 SAUNDERS ROAD UNIT 11</Typography></Link>
                <Link
                    href="https://www.google.com/maps/place/Alpha+Tools+%26+Components/@44.3260951,-79.6812453,17z/data=!3m1!4b1!4m6!3m5!1s0x882abdd65ea48c8f:0x2221bd3d74802df5!8m2!3d44.3260951!4d-79.6786704!16s%2Fg%2F11f6xz9qkp?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
                >
                    <Typography sx={{ color: 'white', }}>CANADA L4N 9A7</Typography></Link>
                <p>&nbsp; </p>

            </Stack>
            <Stack spacing={1} sx={{ color: 'white' }}>
                <Typography>&copy; 2024 Alpha tools and components inc.</Typography>
            </Stack>
        </StyledBox >
    );
}

export default Footer;
