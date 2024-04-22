module.exports={
  product: (req,res)=>{
    res.render("product")
  },
  productAdd: (req,res)=>{
    res.render("product-add", {user: req.session.user?req.session.user:null})
    console.log(req.session.user);
  }
}