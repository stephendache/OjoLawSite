const express = require("express");
const router = express.Router();
const pagesController = require("../controllers/indexCtrl");

// Define Routes
router.get("/", pagesController.homePage);
router.get("/services", pagesController.servicesPage);
router.get("/about", pagesController.aboutPage);
router.get("/contact", pagesController.contactPage);
router.get("/consultation", pagesController.consultationPage);

module.exports = router;
