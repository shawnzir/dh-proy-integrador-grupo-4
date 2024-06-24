const { where } = require('sequelize')
const db = require('../database/models')
const usuarios = db.Usuario // requerimos del models la tabla de  usuarios
const productos = db.Producto // requerimos del models la tabla de  productos 
const comentarios = db.Comentario // requerimos del models la tabla de comentarios
const op = db.Sequelize.Op; // op sirve para buscar informacion en la base de datos
const bcrypt = require('bcryptjs') // encriptar contrasenias
const {validationResult} = require("express-validator");

const mainController = {
  index: function (req, res) {
    productos.findAll({
      include: [{ association: 'usuario' }, { association: 'comentarios' }]
    })
      .then(function (data) {
        // console.log("Info del producto: ", JSON.stringify(data, null, 4));
        res.render('index', { productos: data });
      })
      .catch(function (err) {
        console.log(err);
      })
  },
  register: function (req, res) {
    res.render('register', { title: 'Register' });
  },
  info: function (req, res) {
    let errores = validationResult(req)
    console.log(errores);
    if(!errores.isEmpty()){
      res.render("register", {error: errores.mapped()})
    }else{
      const usuario = {
        email: req.body.email,
        usuario: req.body.usuario,
        password: bcrypt.hashSync(req.body.contraseña, 10),
        fecha: req.body.fecha,
        dni: req.body.dni,
        foto: req.body.foto
      };
      db.Usuario.create(usuario)
        .then(() => {
          return res.redirect('/login')
        })
        .catch(function (err) {
          console.log(err);
        })
    }
  },
  login: (req, res) => {
    res.render("login", { error: "" })
  },
  processLogin: (req, res) => {
    let errores = validationResult(req)
    console.log("Errores: ", errores);
    if(!errores.isEmpty()){
      res.render("login", {error: errores.mapped(), old: req.body})
    }else{
      console.log("Body ",req.body);
      let user = req.session.usuario;
      // Si el usuario clickeo el checkbox => seteamos cookie
      if(user && req.body.recordar !== undefined){
        res.cookie('usuarioId', user.id, { maxAge: 1000 * 60 * 5 * 24 });
      }
      res.redirect("/")
    }
  },
  logout: function (req, res) {
    //Destruir la session
    req.session.destroy()
    //Destruir la cookie
    res.clearCookie('usuarioId')

    //Redireccionar a Home()
    res.redirect('/')
  },
  profile: (req, res) => {
    let user = req.session.usuario
    if(user){
      productos.findAll({
        where: [{usuario_id: user.id}],
        include: [{ association: 'comentarios' }]
      })
      .then(function (data) {
        console.log("Info del producto: ", JSON.stringify(data, null, 4));
        res.render("profile", { user: user, productos: data })
      })
      .catch(function (err) {
        console.log(err);
      })
    }
  },
  profileEdit: (req, res) => {
    if(req.session.usuario){
      res.render("profile-edit", { usuario: req.session.usuario })
    }else{
      res.send("Debes estar logueado para editar el perfil")
    }
  },
  processProfileEdit: (req,res)=>{
    let user = req.session.usuario
    let errores = validationResult(req)
    if(!user){
      res.send("Debes estar logueado")
    }else if(!errores.isEmpty()){
      res.render("profile-edit", {usuario: user, error: errores.mapped()})
    }else{
      if(req.body.contraseña){
        usuarios.update({
          email: req.body.email,
          usuario: req.body.usuario,
          password: bcrypt.hashSync(req.body.contraseña, 10),
          fecha: req.body.fecha,
          dni: req.body.dni,
          foto: req.body.foto
        },{
          where:{id: user.id}
        }).then(value=>{
          console.log(value);
          res.redirect("/profile")
        }).catch(err=>{
          console.error(err)
        })
      }else{
        usuarios.update({
          email: req.body.email,
          usuario: req.body.usuario,
          fecha: req.body.fecha,
          dni: req.body.dni,
          foto: req.body.foto
        },{
          where:{id: user.id}
        }).then(value=>{
          console.log(value);
          res.redirect("/profile")
        }).catch(err=>{
          console.error(err)
        })
      }
    }
  },
  searchResultes: (req, res) => {
    const buscador = req.query.search
    const filtarabusqueda = {
      where: {
        [op.or]: [
          { producto: { [op.like]: "%" + `${buscador}` + "%" } },
          { descripcion: { [op.like]: "%" + `${buscador}` + "%" } }]
      }
    };

    productos.findAll(filtarabusqueda)
      .then(resultados => {
        // console.log("Info de la busqueda: ", JSON.stringify(resultados, null, 4));
        return res.render('search-results', { productos: resultados })
      })
  }
};

module.exports = mainController