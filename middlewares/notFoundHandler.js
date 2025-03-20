module.exports = (req, res) => {
    res.status(404).render("pages/404", {
        pageTitle: "Error | The Ojo Law Center, LLC",
        pageDescription: "Oops! The page you're looking for might have been removed or is temporarily unavailable.",
        ogImage: "/images/og-default.jpg",
        ogUrl: "https://www.ojolaw.com/error",
        twitterImage: "/images/twitter-default.jpg",
        canonicalUrl: "https://www.ojolaw.com/error",
        status: 404,
        message: "The page you are looking for does not exist."
    });
};
