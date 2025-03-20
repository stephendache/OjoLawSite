const express = require('express');
const { submitContactForm } = require('../controllers/contactCtrl');
const { validateContactForm } = require('../middlewares/contactValidator');

const router = express.Router();

// Contact Form Route (POST)
router.post('/', validateContactForm, submitContactForm);

module.exports = router;
