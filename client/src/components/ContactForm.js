import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent, Alert, InputLabel, Stack, OutlinedInput } from '@mui/material';
import axios from 'axios';
import bgImg from '../images/pexels-mikhail-nilov-9242167.jpg'
const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
    });
    const [error, setError] = useState('');
    const [success, setSuccess] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        setSuccess(false);

        // Basic validation
        if (!formData.name || !formData.email || !formData.message) {
            setError('Name, Email, and Message fields are required.');
            return;
        }

        // Validate email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formData.email)) {
            setError('Please enter a valid email address.');
            return;
        }


        try {
            // You may need to include the access token in headers if OAuth2 is in use
            const accessToken = localStorage.getItem('access_token');  // Or fetch it from the app's state

            // Add the access token to the request header
            const response = await axios.post('https://alphatnc-5138977eb927.herokuapp.com/send-email', formData, {
                headers: {
                    Authorization: `Bearer ${accessToken}`, // Send the access token here
                },
            });

            if (response.status === 200) {
                setSuccess(true);
                setFormData({
                    name: '',
                    company: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            }
        } catch (error) {
            setError('Failed to send email. Please try again later.');
        }
    };

    const handleReset = () => {
        setFormData({
            name: '',
            company: '',
            email: '',
            phone: '',
            message: ''
        });
        setError('');
        setSuccess(false);
    };

    return (
        <Box display="flex" justifyContent="center" sx={{ mt: 15, mb: 15 }}>
            <Card sx={{ width: '100%', maxWidth: 800, boxShadow: 3, borderRadius: 2, bgcolor: 'rgba(0, 0, 0, 0.7)' }}>
                <CardContent>
                    <Box display="flex" flexDirection="column" alignItems="flex-start" mb={2}>
                        <Typography variant="h4" color="primary" gutterBottom>
                            Contact Us
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Fill out the form to get in touch with us!
                        </Typography>
                    </Box>
                    {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
                    {success && <Alert severity="success" sx={{ mb: 2 }}>Email sent successfully!</Alert>}
                    <Box component="form" onSubmit={handleSubmit} >
                        <Stack spacing={2}>
                            <Stack direction={'row'} spacing={2}>
                                <Stack width={'100%'}>
                                    <InputLabel>Name*</InputLabel>
                                    <OutlinedInput
                                        autoComplete
                                        name="name"
                                        placeholder='First name'
                                        value={formData.name}
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                        required
                                        sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}
                                    />
                                </Stack>
                                <Stack width={'100%'}>
                                    <InputLabel>Company</InputLabel>
                                    <OutlinedInput
                                        name="company"
                                        placeholder='Company name'
                                        value={formData.company}
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                        sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}
                                    />
                                </Stack>
                            </Stack>
                            <Stack direction={'row'} spacing={2}>
                                <Stack width={'100%'}>
                                    <InputLabel>Email*</InputLabel>
                                    <OutlinedInput
                                        autoComplete
                                        name="email"
                                        type="email"
                                        placeholder='Email address'
                                        value={formData.email}
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                        required
                                        sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}
                                    />
                                </Stack>
                                <Stack width={'100%'}>
                                    <InputLabel>Phone number</InputLabel>
                                    <OutlinedInput
                                        autoComplete
                                        name="phone"
                                        type="tel"
                                        value={formData.phone}
                                        placeholder='Phone Number'
                                        onChange={handleChange}
                                        variant="outlined"
                                        fullWidth
                                        sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}
                                    />
                                </Stack>
                            </Stack>
                            <Stack width={'100%'}>
                                <InputLabel >Message*</InputLabel>
                                <OutlinedInput
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    variant="outlined"
                                    required
                                    rows={3}
                                    multiline
                                    fullWidth
                                    sx={{ bgcolor: 'rgba(0, 0, 0, 0.7)', color: 'white' }}
                                />
                            </Stack>
                            <Stack direction={'row'} spacing={2}>
                                <Button type="submit" variant="contained" color="primary" fullWidth>
                                    Submit
                                </Button>
                                <Button onClick={handleReset} variant="outlined" color="secondary" fullWidth sx={{
                                    backgroundColor: 'transparent', color: 'white', borderColor: 'divider', '&:hover': {
                                        backgroundColor: 'rgba(0, 0, 0, 0.7)'
                                    }
                                }}>
                                    Reset
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </CardContent>
            </Card>
        </Box >
    );
};

export default ContactForm;
