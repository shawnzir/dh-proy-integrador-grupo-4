const db = require('../database/models')

// const db = require('../db/data')

const productos = db.Producto // requerismos del models la tabal de  productos 

const productController = {
  //Debe mostrar el detalle de un producto
  product: function (req,res) {
    const id = req.params.id
    console.log("ID recibido: ", id);
    productos.findByPk(id)
    .then(function(autos) {
      if (!autos) {
        res.status(404).send("Producto no encontrado")
        console.log("Info del producto: ", autos);
      }
      else{
        res.render('product', { producto: autos.dataValues }); // tuve que traer esto asi ya que si trai solo autos me lo trai medio raro
        // y se me hacia dificil mostrarlo
        console.log("Info del producto: ", autos.dataValues)
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
    res.render("product-add", {user: req.session.user?req.session.user:null})
    console.log(req.session.user);
  },
  

}

module.exports = productController