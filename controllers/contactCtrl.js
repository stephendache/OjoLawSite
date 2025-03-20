const { validationResult } = require('express-validator');
const Contact = require('../models/Contact');
const transporter = require('../config/mailConfig');

exports.submitContactForm = async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { fullname, email, phone, message } = req.body; // Removed "g-recaptcha-response"

    try {
        // Store the message in MySQL
        await Contact.saveMessage(fullname, email, phone, message);

        // Define the email content
        const mailOptions = {
            from: process.env.MAIL_USER,
            to: process.env.ADMIN_EMAIL, // Send to your admin email
            subject: `New Contact Message from ${fullname}`,
            text: `Name: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`,
            html: `
                <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f4f4f4;">
                    <div style="max-width: 600px; background: #ffffff; padding: 20px; border-radius: 10px; margin: auto;">
                        <h2 style="color: #333;">New Contact Form Submission</h2>
                        <p style="font-size: 16px; color: #555;">You have received a new contact form message from <strong>${fullname}</strong>.</p>
                        <hr>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Message:</strong></p>
                        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #007BFF;">
                            ${message}
                        </blockquote>
                        <hr>
                        <p style="color: #777; font-size: 14px;">This email was sent from The Ojo Law Center, LLC website.</p>
                    </div>
                </div>
            `
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ success: "Your message has been sent successfully!" });
    } catch (error) {
        console.error('Error during form submission:', error);
        return res.status(500).json({ error: "Internal server error. Please try again later." });
    }
};

exports.renderContactPage = (req, res) => {
    res.render("pages/contact", {
        pageTitle: "Contact Us | The Ojo Law Center, LLC",
        pageDescription: "Get in touch with The Ojo Law Center for professional immigration legal advice.",
        ogImage: "/images/contact-banner.jpg",
        canonicalUrl: "https://www.ojolaw.com/contact",
        twitterImage: "/images/twitter-contact.jpg"
    });
};
