const db = require("../config/db");

// Save contact message to the database
exports.saveMessage = (fullname, email, phone, message, callback) => {
    const sql = "INSERT INTO contacts (fullname, email, phone, message) VALUES (?, ?, ?, ?)";
    db.query(sql, [fullname, email, phone, message], callback);
};
