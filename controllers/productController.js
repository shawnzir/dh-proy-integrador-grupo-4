const { Association } = require('sequelize')
const db = require('../database/models')

// const db = require('../db/data')

const productos = db.Producto // requerismos del models la tabal de  productos 

const comentarios = db.Comentario

const productController = {
  //Debe mostrar el detalle de un producto
  product: function (req,res) {
    const id = req.params.id
    console.log("ID recibido: ", id);
    productos.findByPk(id, {

      include:[{association: 'usuario'},{association: 'comentarios'}]

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
    console.log(req.session.usuario);
  },
  

}

module.exports = productController