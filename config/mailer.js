const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

exports.sendMail = (fullname, email, phone, message) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: "ojo@ojolaw.com",
        subject: `New Contact Form Submission - ${fullname}`,
        text: `Name: ${fullname}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${message}`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.error("Error sending email:", err);
        } else {
            console.log("📧 Email sent successfully:", info.response);
        }
    });
};
