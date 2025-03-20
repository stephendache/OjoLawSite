require('dotenv').config();
const express = require("express");
const expressLayouts = require("express-ejs-layouts");
const path = require("path");
const cron = require('node-cron');
const generateSitemap = require('./utils/sitemapGenerator');
const bodyParser = require("body-parser");
const session = require('express-session');
const helmet = require('helmet');
// const rateLimit = require('express-rate-limit');
const cors = require('cors');
const mysql = require('./config/db');

// Import security settings & middleware
const securityMiddleware = require('./config/security');
const notFoundHandler = require('./middlewares/notFoundHandler');
const errorHandler = require('./middlewares/errorHandler');

// Import routes
const indexRoutes = require("./routes/indexRoutes");
const contactRoutes = require("./routes/contactRoutes");
const adminRoutes = require("./routes/adminRoutes");
const tawkRoutes = require("./routes/tawkapi");

// Create an instance of Express
const app = express();

// Security Middleware
app.use(helmet()); // Security headers
app.use(cors()); // Enable cross-origin requests

// app.use("/contact", limiter);

// Apply Security Middleware
securityMiddleware(app);

// Session Configuration (for Admin Login)
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, httpOnly: true }
}));

// Set the port from environment variables or default to 3000
const PORT = process.env.PORT;

// Configure EJS as the template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(expressLayouts);
app.set("layout", "layouts/main");

// Middleware to serve static files
app.use(express.static(path.join(__dirname, "public")));
app.use('/robots.txt', express.static(path.join(__dirname, 'public', 'robots.txt')));

// Generate sitemap on startup
generateSitemap();
cron.schedule('0 0 * * *', () => {
    console.log('⏳ Updating sitemap...');
    generateSitemap();
});

// Body Parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Load Routes
app.use("/", indexRoutes);
app.use("/contact", contactRoutes);
app.use("/get-tawk-id", tawkRoutes);
app.use("/admin", adminRoutes);


// Handle 404 errors (Page Not Found)
app.use(notFoundHandler);

// Centralized error-handling middleware
app.use(errorHandler);

// Start the server
app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
