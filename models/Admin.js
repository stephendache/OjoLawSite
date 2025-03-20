require('dotenv').config();

class Admin {
    static verifyCode(code) {
        return code === process.env.ADMIN_SECRET_CODE;
    }
}

module.exports = Admin;
