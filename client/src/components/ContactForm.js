import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Card, CardContent, Alert } from '@mui/material';
import axios from 'axios';

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
            const response = await axios.post('http://localhost:5000/send-email', formData, {
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
        <Box display="flex" justifyContent="center" padding="40px" bgcolor="#f4f6f8">
            <Card sx={{ width: '100%', maxWidth: 800, boxShadow: 3, borderRadius: 2 }}>
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
                    <Box component="form" onSubmit={handleSubmit} display="grid" gridTemplateColumns="1fr 1fr" gap={2}>
                        <TextField
                            label="Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Company"
                            name="company"
                            value={formData.company}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            label="Email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                            required
                        />
                        <TextField
                            label="Phone"
                            name="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={handleChange}
                            variant="outlined"
                            fullWidth
                        />
                        <TextField
                            label="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            variant="outlined"
                            multiline
                            rows={4}
                            fullWidth
                            required
                            sx={{ gridColumn: 'span 2' }}
                        />
                        <Box display="flex" gap={2} sx={{ gridColumn: 'span 2' }}>
                            <Button type="submit" variant="contained" color="primary" fullWidth>
                                Submit
                            </Button>
                            <Button onClick={handleReset} variant="outlined" color="secondary" fullWidth>
                                Reset
                            </Button>
                        </Box>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    );
};

export default ContactForm;
