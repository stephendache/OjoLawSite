exports.verifyAdminSession = (req, res, next) => {
    if (!req.session.admin || !req.session.admin.loggedIn) {
        return res.redirect('/admin/login');
    }
    next();
};
