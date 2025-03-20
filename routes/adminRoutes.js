const express = require('express');
const { showLoginPage, loginAdmin, logoutAdmin, getDashboard } = require('../controllers/adminController');
const { verifyAdminSession } = require('../middlewares/authMiddleware');

const router = express.Router();

// Admin Login Routes
router.get('/login', showLoginPage);
router.post('/login', loginAdmin);

// Admin Dashboard Route (Protected)
router.get('/dashboard', verifyAdminSession, getDashboard);

// Admin Logout Route
router.get('/logout', logoutAdmin);

module.exports = router;
