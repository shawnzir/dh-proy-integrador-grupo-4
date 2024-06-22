const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController.js");

router.get("/product-add", productController.productAdd)
router.get('/:id', productController.product)
router.post("/product-add", productController.productAddinfo)


module.exports = router;