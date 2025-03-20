const Contact = require("../models/contactModel");
const Mailer = require("../config/mailer");

// Contact Page Controller
exports.contactPage = (req, res) => {
    res.render("pages/contact", {
        pageTitle: "Contact Us | The Ojo Law Center, LLC",
        pageDescription: "Get in touch with The Ojo Law Center for professional immigration legal advice. Schedule a consultation today.",
        ogImage: "/images/contact-banner.jpg",
        canonicalUrl: "https://www.ojolaw.com/contact",
        twitterImage: "/images/twitter-contact.jpg"
    });
};

// Handle Contact Form Submission
exports.submitForm = (req, res) => {
    const { fullname, email, phone, textarea } = req.body;

    if (!fullname || !email || !textarea) {
        return res.status(400).send("All required fields must be filled!");
    }

    // Save message to database
    Contact.saveMessage(fullname, email, phone, textarea, (err, result) => {
        if (err) {
            console.error("Database Error:", err);
            return res.status(500).send("An error occurred. Please try again.");
        }

        // Send email to admin
        Mailer.sendMail(fullname, email, phone, textarea);

        return res.status(200).send("Message received! We will get back to you soon.");
    });
};
