const Contact = require('../models/Contact');
const Admin = require('../models/Admin');

exports.showLoginPage = (req, res) => {
    res.render('pages/admin_login', { 
        pageTitle: "Admin Login | The Ojo Law Center, LLC", 
        pageDescription: "Login to access the admin panel.", 
        ogImage: "/images/og-default.jpg",
        ogUrl: "https://www.ojolaw.com/admin/login",
        twitterImage: "/images/twitter-default.jpg",
        canonicalUrl: "https://www.ojolaw.com/admin/login",
        error: null 
    });
};

exports.loginAdmin = (req, res) => {
    const { access_code } = req.body;

    if (Admin.verifyCode(access_code)) {
        req.session.admin = { loggedIn: true };
        return res.redirect('/admin/dashboard');
    } else {
        return res.render('pages/admin_login', { 
                        layout: 'layouts/main',
            pageTitle: "Admin Login | The Ojo Law Center, LLC",
            pageDescription: "Login to access the admin panel.", 
            ogImage: "/images/og-default.jpg",
            ogUrl: "https://www.ojolaw.com/admin/login",
            twitterImage: "/images/twitter-default.jpg",
            canonicalUrl: "https://www.ojolaw.com/admin/login",
            error: "Invalid code. Please try again." 
        });
    }
};


exports.getDashboard = async (req, res) => {
    if (!req.session.admin || !req.session.admin.loggedIn) {
        return res.redirect('/admin/login');
    }

    const { email = '', dateFrom = '', dateTo = '', page = 1 } = req.query;

    try {
        const messages = await Contact.getMessages({ email, dateFrom, dateTo, page });

        res.render('pages/dashboard', { 
            layout: 'layouts/main',
            pageTitle: "Admin Dashboard | The Ojo Law Center, LLC", 
            pageDescription: "View all messages submitted by users.",
            ogImage: "/images/og-default.jpg",
            ogUrl: "https://www.ojolaw.com/admin/dashboard",
            twitterImage: "/images/twitter-default.jpg",
            canonicalUrl: "https://www.ojolaw.com/admin/dashboard",
            email, 
            dateFrom, 
            dateTo, 
            page,
            messages
        });
    } catch (error) {
        console.error("🔥 ERROR FETCHING MESSAGES:", error.message);
        res.status(500).send(`Error fetching messages: ${error.message}`);
    }
};


exports.logoutAdmin = (req, res) => {
    req.session.destroy();
    res.redirect('/admin/login');
};
