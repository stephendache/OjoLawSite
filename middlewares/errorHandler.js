// Centralized error-handling middleware
module.exports = (req, res) => {
    console.error(`[ERROR]: ${err.message}`);
  
    res.status(err.status || 500).render("pages/error", {
      pageTitle: "Server Error | The Ojo Law Center, LLC",
      pageDescription: "Oops! Something went wrong on our end. Please try again later.",
      ogImage: "/images/og-default.jpg",
      ogUrl: req.originalUrl || "https://www.ojolaw.com/error",  // ✅ Fix: Ensure ogUrl is defined
      twitterImage: "/images/twitter-default.jpg",
      canonicalUrl: req.originalUrl || "https://www.ojolaw.com/error",
      status: err.status || 500,
      message: err.message || "Something went wrong on our end. Please try again later."
    });
  };
  