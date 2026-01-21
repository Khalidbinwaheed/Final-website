// backend/index.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Configure Multer for memory storage (files stored in memory as buffer)
// This is better for ephemeral environments like Railway where disk persistence isn't guaranteed
const storage = multer.memoryStorage();
const upload = multer({ 
    storage: storage,
    limits: { fileSize: 5 * 1024 * 1024 } // 5MB limit
});

// Email Transporter (using Gmail as an example)
// For production, consider SendGrid, Mailgun, or AWS SES
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

// Verify connection
transporter.verify((error, success) => {
    if (error) {
        console.log('Error configuring email transporter:', error);
    } else {
        console.log('Email transporter is ready to send messages');
    }
});

// API Routes
app.get('/', (req, res) => {
    res.send('Code Craft Backend is running!');
});

app.post('/api/send-email', upload.single('resume'), async (req, res) => {
    try {
        const { name, email, contact, countryCode, role, experience, details } = req.body;
        const resumeFile = req.file;

        if (!name || !email || !role) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        // 1. Email to Admin (Application Notification)
        const adminMailOptions = {
            from: `"${name}" <${email}>`, // Note: Gmail might rewrite this to the authenticated user
            to: process.env.EMAIL_USER, // Send to yourself/company email
            subject: `Job Application: ${role} - ${name}`,
            text: `
                New Job Application Received:
                
                Name: ${name}
                Email: ${email}
                Contact: ${countryCode} ${contact}
                Role Applied For: ${role}
                Experience: ${experience} years
                Details: ${details}
            `,
            html: `
                <h2>New Job Application</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Contact:</strong> ${countryCode} ${contact}</p>
                <p><strong>Role:</strong> ${role}</p>
                <p><strong>Experience:</strong> ${experience} years</p>
                <h3>Additional Details:</h3>
                <p>${details}</p>
            `,
            attachments: resumeFile ? [
                {
                    filename: resumeFile.originalname,
                    content: resumeFile.buffer
                }
            ] : []
        };

        // 2. Auto-Reply to Candidate
        const userMailOptions = {
            from: `"Code Craft It Solution" <${process.env.EMAIL_USER}>`,
            to: email,
            subject: `Application Received: ${role}`,
            text: `
                Dear ${name},

                Thank you for applying to Code Craft It Solution for the position of ${role}.

                We have successfully received your application. Our team will review your profile and contact you if it matches our requirements.

                Best regards,
                Code Craft It Solution Team
            `
        };

        // Send emails
        await transporter.sendMail(adminMailOptions);
        await transporter.sendMail(userMailOptions);

        res.status(200).json({ message: 'Application submitted successfully' });

    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send application. Please try again later.' });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
