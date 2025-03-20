const { body } = require("express-validator");

exports.validateContactForm = [
    body("fullname").notEmpty().withMessage("Full Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("phone").optional().isMobilePhone().withMessage("Invalid phone number"),
    body("message").notEmpty().withMessage("Message cannot be empty"),
];
