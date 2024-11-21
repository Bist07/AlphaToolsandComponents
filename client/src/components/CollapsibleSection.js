import React, { useState } from 'react';
import { Box, Typography, Collapse, IconButton, Divider } from '@mui/material';
import { ExpandMore, ExpandLess } from '@mui/icons-material';

const CollapsibleSection = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleCollapse = () => setIsOpen(!isOpen);

    return (
        <Box
            sx={{
                width: '100%',
                maxWidth: '100%',
                // margin: '20px auto',
                backgroundColor: '#f4f6f8',
                borderRadius: 2,
                boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
            }}
        >
            {/* Top Divider */}
            <Divider />

            <Box
                onClick={toggleCollapse}
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    padding: '20px',
                    cursor: 'pointer',
                }}
            >
                <Typography variant="h4" color="primary" sx={{ mx: 7 }}>
                    {title}
                </Typography>
                <IconButton>
                    {isOpen ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </Box>

            {/* Collapsible Content */}
            <Collapse in={isOpen}>
                <Box sx={{ padding: '0 70px', color: '#333', display: 'flex', flexDirection: 'row', mr: 15 }}>{children}</Box>
            </Collapse>

            {/* Bottom Divider */}
            <Divider />
        </Box>
    );
};

export default CollapsibleSection;
