// const data = require("../db/data")

const { where } = require('sequelize')
const db = require('../database/models')

const usuarios = db.Usuario // requerismos del models la tabal de  usarios

const productos = db.Producto // requerismos del models la tabal de  productos 

const comentarios = db.Comentario

const op = db.Sequelize.Op;

const bcrypt = require('bcryptjs')


const mainController = {
  index: function (req, res) {
    productos.findAll()
      .then(function (data) {
        console.log("Info del producto: ", JSON.stringify(data,null,4));
        res.render('index', { productos: data});
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
      .catch(function(err){
        console.log(err);
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
      res.render("profile", { usuario: req.session.usuario ? req.session.usuario : null, productos: productos })
      console.log(req.session.usuario);
    },
      profileEdit: (req, res) => {
        res.render("profile-edit", { usuario: req.session.usuario })
      },
        searchResultes: (req, res) => {
          const buscador = req.query.search
          const filtarabusqueda = {where: 
            { [op.or]: 
              [ {producto: {[op.like]: "%" + `${buscador}` + "%"}},
              {descripcion: {[op.like]: "%" + `${buscador}` + "%"}} ]  }};

          productos.findAll(filtarabusqueda)
          .then(resultados => {
            
            console.log("Info de la busqueda: ", JSON.stringify(resultados,null,4));
            return res.render('search-results', {productos: resultados}) }) 

            
            
        }
  };

  module.exports = mainController