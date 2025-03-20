const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const morgan = require('morgan');

const securityMiddleware = (app) => {
    // Security Headers
    app.use(helmet());

    // Gzip Compression
    app.use(compression());

    // Enable CORS
    app.use(cors());

    // Logging HTTP requests
    app.use(morgan('combined'));

    // Rate Limiting
    const limiter = rateLimit({
        windowMs: 2 * 60 * 60 * 1000, // 2 hours
        max: 100,
        message: "Too many requests from this IP, please try again later.",
        standardHeaders: true,
        legacyHeaders: false,
    });
    app.use(limiter);
};

module.exports = securityMiddleware;
