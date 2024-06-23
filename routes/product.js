const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController.js");

router.get("/product-add", productController.productAdd)
router.get('/:id', productController.product)
router.post("/product-add", productController.productAddinfo)
router.post('/:id', productController.addcomentario)
router.post('/eliminar/:id', productController.eliminar )

module.exports = router;