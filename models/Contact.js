const db = require("../config/db");

class Contact {
    // Save contact message to the database
    static saveMessage(fullname, email, phone, message, callback) {
        const sql = "INSERT INTO contacts (fullname, email, phone, message) VALUES (?, ?, ?, ?)";
        db.query(sql, [fullname, email, phone, message], callback);
    }

    // Fetch messages with filtering and pagination
    static getMessages({ email = '', dateFrom = '', dateTo = '', page = 1 }) {
        return new Promise((resolve, reject) => {
            const limit = 10; // Number of messages per page
            const offset = (page - 1) * limit;

            let query = "SELECT * FROM contacts WHERE 1=1";
            let params = [];

            // Apply filters if provided
            if (email) {
                query += " AND email LIKE ?";
                params.push(`%${email}%`);
            }
            if (dateFrom) {
                query += " AND sent_at >= ?";
                params.push(dateFrom);
            }
            if (dateTo) {
                query += " AND sent_at <= ?";
                params.push(dateTo);
            }

            query += " ORDER BY sent_at DESC LIMIT ? OFFSET ?";
            params.push(limit, offset);

            db.query(query, params, (err, results) => {
                if (err) reject(err);
                resolve(results);
            });
        });
    }
}

module.exports = Contact;
