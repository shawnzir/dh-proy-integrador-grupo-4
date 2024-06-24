let {body} = require("express-validator")
const { where } = require('sequelize')
const db = require('../database/models')
const usuarios = db.Usuario // requerimos del models la tabla de  usuarios
const productos = db.Producto // requerimos del models la tabla de  productos 
const comentarios = db.Comentario // requerimos del models la tabla de comentarios

module.exports=[
  body("email")
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .isEmail().withMessage("Debe ser un email válido").bail()
    .custom(function (emails) {
      return usuarios.findOne({ where : {email : emails}})
      .then(function (haym) {
        if (haym) {
          throw new Error('Este mail ya existe, intente con otro porfavor');
        }
      });
    })
    .isLength({min:10}).withMessage("Debe tener al menos 10 caracteres"),
  body("usuario")
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .isLength({min:2}).withMessage("Debe tener al menos 5 caracteres"),
  body("contraseña")
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .isLength({min:4}).withMessage("Debe tener al menos 5 caracteres"),
  body("dni")
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .isLength({ min: 8, max: 8 }).withMessage("Debe tener exactamente 8 caracteres").bail()
    .isNumeric().withMessage("Debe contener solo números")
]