import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: 'http://localhost:3000', // Replace with your frontend's URL
    methods: ['GET', 'POST'],
    credentials: true // Optional, if you need cookies or auth headers
}));

app.use(bodyParser.json());

// Set up Nodemailer transport
const transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., use 'gmail' or SMTP server details
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// POST route to handle form submission
app.post('/send-email', (req, res) => {
    const { name, company, email, phone, message } = req.body;

    const mailOptions = {
        from: email,
        to: 'abhiek7@gmail.com', // Your email to receive messages
        subject: `Contact form submission from ${name}`,
        text: `
            Name: ${name}
            Company: ${company}
            Email: ${email}
            Phone: ${phone}
            Message: ${message}
        `,
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            return res.status(500).json({ message: 'Failed to send email' });
        }
        res.status(200).json({ message: 'Email sent successfully' });
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

app.get('/', (req, res) => {
    res.send('Hello');
})