const renderPage = (path, title, description, ogImage, canonicalUrl, twitterImage) => (req, res) => {
  res.render(path, { 
      pageTitle: title, 
      pageDescription: description || "The Ojo Law Center, LLC provides expert U.S. immigration legal services. Get professional assistance with visas, green cards, citizenship, and investor immigration.",
      ogImage: ogImage || "/images/default-og.jpg",
      ogUrl: canonicalUrl || `https://www.ojolaw.com${req.originalUrl}`,
      canonicalUrl: canonicalUrl || `https://www.ojolaw.com${req.originalUrl}`,
      twitterImage: twitterImage || ogImage || "/images/twitter-default.jpg"
  });
};

// Home Page Controller
exports.homePage = renderPage(
  "pages/index", 
  "Welcome to The Ojo Law Center, LLC | U.S. Immigration Lawyers",
  "Your trusted partner for U.S. immigration solutions. Let our experienced attorneys guide you through visas, green cards, and citizenship.",
  "/images/home-hero.jpg",
  "https://www.ojolaw.com/",
  "/images/twitter-home.jpg"
);

// Services Page Controller
exports.servicesPage = renderPage(
  "pages/services", 
  "Our Immigration Services | The Ojo Law Center, LLC",
  "Explore our immigration services, including family visas, employment-based visas, investor immigration, and deportation defense.",
  "/images/services-banner.jpg",
  "https://www.ojolaw.com/services",
  "/images/twitter-services.jpg"
);

// Contact Page Controller
exports.contactPage = renderPage(
  "pages/contact", 
  "Contact Us | The Ojo Law Center, LLC",
  "Get in touch with The Ojo Law Center for professional immigration legal advice. Schedule a consultation today.",
  "/images/contact-banner.jpg",
  "https://www.ojolaw.com/contact",
  "/images/twitter-contact.jpg"
);

// About Page Controller
exports.aboutPage = renderPage(
  "pages/about", 
  "About Us | The Ojo Law Center, LLC",
  "Learn more about our experienced team of U.S. immigration lawyers and how we can assist with your legal needs.",
  "/images/about-banner.jpg",
  "https://www.ojolaw.com/about",
  "/images/twitter-about.jpg"
);

// Consultation Page Controller
exports.consultationPage = renderPage(
  "pages/consultation",
  "Book a Consultation | The Ojo Law Center, LLC",
  "Schedule a consultation with our experienced immigration lawyers to discuss your visa, green card, or citizenship process.",
  "/images/consultation-banner.jpg",
  "https://www.ojolaw.com/consultation",
  "/images/twitter-consultation.jpg"
);
