const express = require('express');
const router = express.Router();
const productController = require("../controllers/productController.js");
let productValidator = require("../middlewares/productValidator.js")
let {body} = require("express-validator");

let comentarioValidator = [
  body("comentario")
    .notEmpty().withMessage("Este campo no puede estar vacío").bail()
    .isLength({min: 5}).withMessage("Debe tener al menos 5 caracteres")
]

router.get("/product-add", productController.productAdd)
router.get('/:id', productController.product)
router.get('/product-edit/:id', productController.edit)
router.post("/product-add", productValidator, productController.productAddinfo)
router.post('/:id', comentarioValidator, productController.addcomentario)
router.post('/eliminar/:id', productController.eliminar)
router.post('/product-edit/:id',productValidator, productController.update)


module.exports = router;