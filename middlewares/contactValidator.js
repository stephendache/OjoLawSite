const { check } = require('express-validator');

exports.validateContactForm = [
    check('fullname').notEmpty().withMessage('Full Name is required'),
    check('email').isEmail().withMessage('Valid Email is required'),
    check('phone').notEmpty().withMessage('Phone number is required'),
    check('message').notEmpty().withMessage('Message cannot be empty')
];
