let {body} = require("express-validator")

module.exports=[
  body("email")
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .isEmail().withMessage("Debe ser un email válido"),
  body("usuario")
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .isLength({min: 5}).withMessage("Debe tener al menos 5 caracteres"),
  body("contraseña")
    .custom(value=>{
      if(value.length == 0){
        return true
      }else if(value.length < 5){
        return false
      }else{
        return true
      }
    }).withMessage("La contraseña debe tener al menos 5 caracteres"),
  body("dni")
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .isLength({ min: 8, max: 8 }).withMessage("Debe tener exactamente 8 caracteres").bail()
    .isNumeric().withMessage("Debe contener solo números")
]