import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import MuiChip from '@mui/material/Chip';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import patternImage from '../images/bg.png'
import lathes from '../images/lathes.png';
import CNC from '../images/3axis.png';
const items = [
    {
        title: 'CNC Milling',
        description:
            <Typography variant="h6" sx={{ color: 'primary.main' }}>
                Daewoo DMV-4020
                <Typography sx={{ color: 'text.primary', mt: -2 }}>
                    <br />
                    <b>Machine Control:</b> Fanuc 21i-MB<br />
                    <b>Table Size:</b> 47" x 19.75"<br />
                    <b> Machine Travels (X/Y/Z):</b> 40/20/24<br />
                    <b>Spindle To Table Distance:</b> 6" to 30"<br />
                    <b> Table Capacity:</b> 1760 LBS<br />
                    <b> Spindle Taper:</b> BT-40<br />
                    <b> Spindle Speeds:</b> 8000 RPM<br />
                    <b> Tool Changer Style:</b> Side Mount, Twin Arm<br />
                    <b> Tool Changer Capacity:</b> 24
                </Typography>
            </Typography>,
        imageLight: `url(${CNC})`,
        imageDark: `url(${CNC})`,
    },
    {
        title: 'Turning',
        description:
            <Typography variant="h6" sx={{ color: 'primary.main' }}>
                First V700
                <Typography sx={{ color: 'text.primary', mt: -2 }}>
                    <br />
                    <b>Machine Control:</b> FANUC Oi Mate-MD<br />
                    <b>Table Size:</b> 31.49" x 14.75"<br />
                    <b> Machine Travels (X/Y/Z):</b> 27.5/15.7/21.6<br />
                    <b> Table Capacity:</b> 551 LBS<br />
                    <b> Spindle Taper:</b> BT-40<br />
                    <b> Spindle Speeds:</b> 10000 RPM<br />
                    <b> Tool Changer Capacity:</b> 24
                </Typography>
            </Typography>,

        imageLight: `url(${lathes})`,
        imageDark: `url(${lathes})`,
    },

];

const Chip = styled(MuiChip)(({ theme }) => ({
    variants: [
        {
            props: ({ selected }) => selected,
            style: {
                background:
                    'linear-gradient(to bottom right, hsl(210, 98%, 48%), hsl(210, 98%, 35%))',
                color: 'hsl(0, 0%, 100%)',
                borderColor: (theme.vars || theme).palette.primary.light,
                '& .MuiChip-label': {
                    color: 'hsl(0, 0%, 100%)',
                },
                ...theme.applyStyles('dark', {
                    borderColor: (theme.vars || theme).palette.primary.dark,
                }),
            },
        },
    ],
}));

function MobileLayout({ selectedItemIndex, handleItemClick, selectedFeature }) {
    if (!items[selectedItemIndex]) {
        return null;
    }

    return (
        <Box
            sx={{
                display: { xs: 'flex', sm: 'none' },
                flexDirection: 'column',
                gap: 2,

            }}
        >
            <Box sx={{ display: 'flex', gap: 2, overflow: 'auto', }}>
                {items.map(({ title }, index) => (
                    <Chip
                        size="medium"
                        key={index}
                        label={title}
                        onClick={() => handleItemClick(index)}
                        selected={selectedItemIndex === index}
                    />
                ))}
            </Box>
            <Card variant="outlined">
                <Box
                    sx={(theme) => ({
                        mb: 2,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        minHeight: 280,
                        backgroundImage: 'var(--items-imageLight)',
                        ...theme.applyStyles('dark', {
                            backgroundImage: 'var(--items-imageDark)',
                        }),
                    })}
                    style={
                        items[selectedItemIndex]
                            ? {
                                '--items-imageLight': items[selectedItemIndex].imageLight,
                                '--items-imageDark': items[selectedItemIndex].imageDark,
                            }
                            : {}
                    }
                />
                <Box sx={{ px: 2, pb: 2 }}>
                    <Typography
                        gutterBottom
                        sx={{ color: 'text.primary', fontWeight: 'medium' }}
                    >
                        {selectedFeature.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', mb: 1.5 }}>
                        {selectedFeature.description}
                    </Typography>
                </Box>
            </Card>
        </Box>
    );
}

MobileLayout.propTypes = {
    handleItemClick: PropTypes.func.isRequired,
    selectedFeature: PropTypes.shape({
        description: PropTypes.string.isRequired,
        icon: PropTypes.element,
        imageDark: PropTypes.string.isRequired,
        imageLight: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
    selectedItemIndex: PropTypes.number.isRequired,
};

export { MobileLayout };

export default function Features() {
    const [selectedItemIndex, setSelectedItemIndex] = React.useState(0);

    const handleItemClick = (index) => {
        setSelectedItemIndex(index);
    };

    const selectedFeature = items[selectedItemIndex];

    return (
        <Box sx={{ padding: { sm: 4, md: 8 }, paddingLeft: { sm: 0, md: 0 }, paddingRight: { sm: 0, md: 8 }, backgroundColor: 'white' }}>
            <Box sx={{ padding: 4, paddingLeft: { sm: 4, md: 6 }, border: 1, borderColor: 'divider', borderTopRightRadius: 25, borderBottomRightRadius: 25, backgroundColor: 'background.default' }}>
                <Box sx={{ width: { sm: '100%', md: '60%' }, }}>
                    <Typography
                        component="h2"
                        variant="h4"
                        gutterBottom
                        sx={{ color: 'text.primary' }}
                    >
                        Service capabilities
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: 'text.secondary', mb: { xs: 2, sm: 4 } }}
                    >
                        CNC machine all types of parts, from simple “as machined” workholdings to complex geometries.
                        Our manufacturers operate almost every kind of CNC mill and turning center, with EDM and grinders available on request.
                        We offer tolerances down to ±.020 mm (±.001 in) and lead times from 5 business days.
                    </Typography>
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        flexDirection: { xs: 'column', md: 'row-reverse' },
                        gap: 2,
                    }}
                >
                    <div>
                        <Box
                            sx={{
                                display: { xs: 'none', sm: 'flex' },
                                flexDirection: 'column',
                                gap: 2,
                                height: '100%',
                            }}
                        >
                            {items.map(({ icon, title, description }, index) => (
                                <Box
                                    key={index}
                                    component={Button}
                                    onClick={() => handleItemClick(index)}
                                    sx={[
                                        (theme) => ({
                                            p: 2,
                                            height: '100%',
                                            width: '100%',
                                            '&:hover': {
                                                backgroundColor: (theme.vars || theme).palette.action.hover,
                                            },
                                        }),
                                        selectedItemIndex === index && {
                                            backgroundColor: 'action.selected',
                                        },
                                    ]}
                                >
                                    <Box
                                        sx={[
                                            {
                                                width: '100%',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'left',
                                                gap: 1,
                                                textAlign: 'left',
                                                textTransform: 'none',
                                                color: 'text.secondary',
                                            },
                                            selectedItemIndex === index && {
                                                color: 'text.primary',
                                            },
                                        ]}
                                    >
                                        {icon}

                                        <Typography variant="h4" >{title}</Typography>
                                        <Typography variant="body2">{description}</Typography>
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                        <MobileLayout
                            selectedItemIndex={selectedItemIndex}
                            handleItemClick={handleItemClick}
                            selectedFeature={selectedFeature}
                        />
                    </div>
                    <Box
                        sx={{
                            display: { xs: 'none', sm: 'flex' },
                            width: { xs: '100%', md: '70%' },
                            height: 'var(--items-image-height)',
                        }}
                    >
                        <Card
                            variant="outlined"
                            sx={{
                                height: '100%',
                                width: '100%',
                                display: { xs: 'none', sm: 'flex' },
                                pointerEvents: 'none',
                            }}
                        >
                            <Box
                                sx={(theme) => ({
                                    m: 'auto',
                                    width: 420,
                                    height: 500,
                                    backgroundSize: 'contain',
                                    backgroundImage: 'var(--items-imageLight)',
                                    ...theme.applyStyles('dark', {
                                        backgroundImage: 'var(--items-imageDark)',
                                    }),
                                })}
                                style={
                                    items[selectedItemIndex]
                                        ? {
                                            '--items-imageLight': items[selectedItemIndex].imageLight,
                                            '--items-imageDark': items[selectedItemIndex].imageDark,
                                        }
                                        : {}
                                }
                            />
                        </Card>
                    </Box>
                </Box>
            </Box>
        </Box >
    );
}
