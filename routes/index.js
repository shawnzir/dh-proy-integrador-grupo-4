const express = require('express');
const router = express.Router();
const mainController = require("../controllers/mainController");

/* GET home page. */
router.get('/', mainController.index);
router.get('/register', mainController.register);
router.get('/product', mainController.product)

module.exports = router;
