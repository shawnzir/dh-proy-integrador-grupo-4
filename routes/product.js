const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController.js");

router.get('/:id', productController.product)
router.get("/product-add", productController.productAdd)


module.exports = router;