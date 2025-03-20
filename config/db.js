const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST, // cPanel database host
    user: process.env.DB_USER, // cPanel database user
    password: process.env.DB_PASS, // cPanel database password
    database: process.env.DB_NAME, // Your database name
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

// Test Connection
db.getConnection((err, connection) => {
    if (err) {
        console.error("❌ Database connection failed:", err);
    } else {
        console.log("✅ Database connected successfully!");
        connection.release();
    }
});

module.exports = db;
