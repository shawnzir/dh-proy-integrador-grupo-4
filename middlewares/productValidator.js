let {body} = require("express-validator")

module.exports=[
  body("foto")
    .notEmpty().withMessage("Este campo no puede estar vacío").bail()
    .isLength({min: 5}).withMessage("Debe tener al menos 5 caracteres"),
  body("producto")
    .notEmpty().withMessage("Este campo no puede estar vacío").bail()
    .isLength({min: 5}).withMessage("Debe tener al menos 5 caracteres"),
  body("descripcion")
    .notEmpty().withMessage("Este campo no puede estar vacío").bail()
    .isLength({min: 10}).withMessage("Debe tener al menos 10 caracteres"),
]