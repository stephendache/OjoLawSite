const express = require("express");
const router = express.Router();
const contactController = require("../controllers/contactCtrl");

// Handle Form Submission
router.post("/", contactController.submitForm);
router.post("/", contactController.contactPage);

module.exports = router;
