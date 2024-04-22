const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController");

/* GET home page. */
router.get('/', mainController.index);
router.get('/register', mainController.register);
router.get('/login', mainController.login)
router.post('/login', mainController.processLogin)
router.get("/profile", mainController.profile)
router.get("/profile-edit", mainController.profileEdit)
module.exports = router;