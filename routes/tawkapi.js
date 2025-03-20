require('dotenv').config();
const express = require('express');
const router = express.Router();

router.get('/get-tawk-id', (req, res) => {
    res.json({ tawkId: process.env.TAWK_TO_ID });
});

module.exports = router;
