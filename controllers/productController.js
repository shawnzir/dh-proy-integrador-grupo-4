const db = require('../database/models')

// const db = require('../db/data')

const productos = db.Producto

//const productos = db.Producto // requerismos del models la tabal de  productos 

const productController = {
  //Debe mostrar el detalle de un producto
  product: function (req,res) {
    const id = req.params.id
    console.log("ID recibido: ", id);
    productos.findByPk(id)
    .then(function(autos) {
      if (autos) {
        res.render("product", { autos })
        console.log("Info del producto: ", autos);
      } else {
        res.status(404).send("Producto no encontrado");
        console.log("Producto no encontrado para el ID: ", id);
      }
    })
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