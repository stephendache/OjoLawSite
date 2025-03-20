const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    secure: process.env.MAIL_SECURE === 'true', // true for 465, false for 587
    auth: {
        user: process.env.MAIL_USER, // cPanel email
        pass: process.env.MAIL_PASS // cPanel email password
    }
});

module.exports = transporter;
