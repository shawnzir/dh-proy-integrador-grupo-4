// const data = require("../db/data")

const db = require('../database/models')

const usuarios = db.Usuario // requerismos del models la tabal de  usarios

const productos = db.Producto // requerismos del models la tabal de  productos 

const comentarios = db.Comentario

const bcrypt = require('bcryptjs')


const mainController = {
  index: function (req, res) {
    productos.findAll()
      .then(function (data) {
        res.render("index", { productos: data })
        // data.forEach(element => {
        //   console.log(element.dataValues)
        // })
      })
      .catch(function (err) {
        console.log(err);
      })
    //let productos = data.productos;
    //res.render('index', {user: req.session.user?req.session.user:null, productos: productos});
  },

  register: function (req, res) {
    res.render('register', { title: 'Register' });

  },

  info: function (req, res) {
    const usuario = {
      email: req.body.email,
      usuario: req.body.usuario,
      password: bcrypt.hashSync(req.body.password, 10),
      fecha: req.body.fecha,
      dni: req.body.dni,
      foto: req.body.foto
    };
    db.Usuario.create(usuario)
      .then(() => {
        return res.redirect('/login')
      })
  },

  login: (req, res) => {
    res.render("login", { error: "" })
  },

  processLogin: (req, res) => {
    console.log(req.body);
    usuarios.findOne({
      where: [
        { 
          email: req.body.email 
        }
      ]
    })
      .then(function (usuario) {
        //Seteamos la session con la info del usuario
        req.session.usuario = usuario;
        //Si tildó recordame => creamos la cookie.
        if (req.body.rememberme != undefined) {
          res.cookie('usuarioId', usuario.id, { maxAge: 1000 * 60 * 100 })
        }
        return res.redirect('/');
      })
      .catch(function (e) {
        console.log(e)
      })
    },
    profile: (req, res) => {
      let productos = data.productos
      res.render("profile", { user: req.session.user ? req.session.user : null, productos: productos })
      console.log(req.session.user);
    },
      profileEdit: (req, res) => {
        res.render("profile-edit", { user: req.session.user })
      },
        searchResultes: (req, res) => {
          let productos = data.productos;
          res.render("search-results", { user: req.session.user ? req.session.user : null, productos: productos })
        }
  };

  module.exports = mainController