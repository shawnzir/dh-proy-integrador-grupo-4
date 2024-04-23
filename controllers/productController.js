const db = require("../db/data")
module.exports={
  product: (req,res)=>{
    let product = db.productos
    
    res.render("product",{product})
  },
  productAdd: (req,res)=>{
    res.render("product-add", {user: req.session.user?req.session.user:null})
    console.log(req.session.user);
  },
  

}