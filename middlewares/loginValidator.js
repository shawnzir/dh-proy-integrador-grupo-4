let {body} = require("express-validator")
const { where } = require('sequelize')
const db = require('../database/models')
const usuarios = db.Usuario;
const bcrypt = require('bcryptjs')

module.exports=[
  body("email")
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .isEmail().withMessage("Debe ser un email válido"),
  body("contraseña")
    .notEmpty().withMessage("El campo no puede estar vacío").bail()
    .custom((value, {req})=>{
      return usuarios.findOne({
        where: [{ email: req.body.email }],
      })
      .then(function (usuario) {
        const encryptedPassword = usuario.password;
        const result = bcrypt.compareSync(value, encryptedPassword);
        console.log("value: ",value);
        if(result){
          req.session.usuario = usuario;
          console.log(req.body);
        }else {
          return Promise.reject()
        }
      })
      .catch(function (err) {
        console.log(err);
        return Promise.reject(err)
      })
    }).withMessage("La contraseña es incorrecta")
]