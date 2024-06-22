const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController.js");

router.get("/product-add", productController.productAdd)
router.get('/:id', productController.product)



module.exports = router;