const express = require("express");
const userController = require("../controllers/userControllers");

const router = express.Router();

router.get("/portfolio", userController.getAllData);
router.get("/projects", userController.getProjects);

module.exports = router;
