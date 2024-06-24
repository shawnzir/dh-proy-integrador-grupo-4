let {body} = require("express-validator")

module.exports=[
  body("email")
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .isEmail().withMessage("Debe ser un email válido").bail()
    .isLength({min:10}).withMessage("Debe tener al menos 10 caracteres"),
  body("usuario")
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .isLength({min:5}).withMessage("Debe tener al menos 5 caracteres"),
  body("contraseña")
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .isLength({min:5}).withMessage("Debe tener al menos 5 caracteres"),
  body("dni")
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .isLength({ min: 8, max: 8 }).withMessage("Debe tener exactamente 8 caracteres").bail()
    .isNumeric().withMessage("Debe contener solo números")
]