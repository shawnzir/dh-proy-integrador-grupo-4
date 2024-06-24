const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController");
let {body} = require("express-validator")
let loginValidator = require("../middlewares/loginValidator")
let registerValidator = require("../middlewares/registerValidator")
let profileValidator = require("../middlewares/profileValidator")

/* GET home page. */
router.get('/', mainController.index);
router.get("/profile", mainController.profile);
router.get("/profile-edit", mainController.profileEdit);
router.get("/search-results", mainController.searchResultes);
router.get('/register', mainController.register);
router.get('/login', mainController.login);
router.post('/register', registerValidator, mainController.info);
router.post('/login', loginValidator, mainController.processLogin);
router.post('/logout', mainController.logout)

module.exports = router;