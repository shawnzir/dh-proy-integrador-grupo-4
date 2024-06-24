const { Association, where } = require('sequelize')
const db = require('../database/models')
const {validationResult} = require("express-validator");

// const db = require('../db/data')

const productos = db.Producto // requerismos del models la tabal de  productos 

const comentarios = db.Comentario

const productController = {
  //Debe mostrar el detalle de un producto
  product: function (req,res) {
    const id = req.params.id
    console.log("ID recibido: ", id);
    productos.findByPk(id, {
      include:[{association: 'usuario'},{association: 'comentarios', include:[{association: 'usuario'}] }]
    })
    .then(function(autos) {
      if (!autos) {
        res.status(404).send("Producto no encontrado")
        console.log("Info del producto: ", autos);
        
      }
      else{
        console.log("Info del producto: ", JSON.stringify(autos,null,4));
        res.render('product', { producto: autos}); 
      }
    })
    .catch(function(err) {
      console.log(err);
    })
    // let product = db.productos
    // res.render("product",{product})
  },
  //Debe agregar un producto
  productAdd: (req,res)=>{
    res.render("product-add", {usuario: req.session.usuario?req.session.usuario:null})
    console.log("es la session", req.session.usuario);
  },

  productAddinfo: (req,res)=>{
    let errores = validationResult(req)
    console.log(errores);
    if(!errores.isEmpty()){
      res.render("product-add", {error: errores.mapped(), old: req.body, usuario: req.session.usuario?req.session.usuario:null})
    }else{
      const producto = {
        foto: req.body.foto,
        producto: req.body.producto,
        descripcion: req.body.descripcion,
        usuario_id: req.session.usuario.id
      };
      db.Producto.create(producto)
        .then((value) => {
          res.redirect("/product/" + value.dataValues.id)
        })
        .catch(function(err){
          console.log(err);
        })
    }
  },
  addcomentario: (req,res)=>{
    let errores = validationResult(req);
    console.log("Errores: ", errores);
    if(!errores.isEmpty()){
      const id = req.params.id
      productos.findByPk(id, {
        include:[{association: 'usuario'},{association: 'comentarios', include:[{association: 'usuario'}] }]
      })
      .then(function(autos) {
        if (!autos) {
          res.status(404).send("Producto no encontrado")
        }
        else{
          res.render('product', { producto: autos, error: errores.mapped()}); 
        }
      })
      .catch(function(err) {
        console.log(err);
      })
    }else{
      const comentario = {
        comentario: req.body.comentario,
        usuario_id: req.session.usuario.id,
        producto_id: req.params.id
        
      };
      comentarios.create(comentario)
        .then(() => {
          id = req.params.id
          return res.redirect(`/product/${id}`)
        })
        .catch(function(err){
          console.log(err);
        })
    }
  },
  edit: function(req, res) {
    const id = req.params.id
    
    
    productos.findByPk(id)
    .then(function(auto) {
      if (!auto) {
        return res.status(404).send('No se encontro el auto')
      } else {
        return res.render("product-edit", {auto: auto})
      }
    })
    .catch(function(e){
      console.log(e);
    })
  },
  update: (req,res)=>{
    let usuario = req.session.usuario
    let errores = validationResult(req)
    const id = req.params.id
    productos.findByPk(id)
    .then(function(auto) {
      if(auto.usuario_id == usuario.id){
        if(!errores.isEmpty()){
          productos.findByPk(id)
          .then(function(auto) {
            if (!auto) {
              return res.status(404).send('No se encontro el auto')
            } else {
              return res.render("product-edit", {auto: auto, error: errores.mapped()})
            }
          })
          .catch(function(e){
            console.log(e);
          })
        }
        else{
          productos.update({
            foto: req.body.foto,
            producto: req.body.producto,
            descripcion: req.body.descripcion,
          },{
            where: {id: req.params.id}
          }).then(value=>{
            console.log("Valor: ",value);
            res.redirect(`/product/${req.params.id}`)
          }).catch(err=>{
            console.log(err);
          })
        }
      }else{
        res.send("Credenciales incorrectas para editar producto")
      }
    })
    .catch(function(e){
      console.log(e);
    })
  },
  eliminar: (req,res)=>{
    
    comentarios.destroy({ where: [{producto_id : req.params.id}]}),
    productos.destroy({ where: [{id : req.params.id}]})
      .then(() => {
        return res.redirect(`/`)
      })
      .catch(function(err){
        console.log(err);
      })
    }

}

module.exports = productController



