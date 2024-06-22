const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController.js");

router.get("/product-add", productController.productAdd)
router.post("/product-add", productController.productAddinfo)
router.get('/:id', productController.product)



module.exports = router;