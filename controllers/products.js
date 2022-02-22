const Product = require("../models/product")

exports.addProductGet = (req, res, next)=>{
    res.render("add-product", {
        docTitle: "Add product admin page",
        // path: "/admin/add-product",
        // formsCSS: true,
        // productCSS: true,
        // activeAddProduct: true
     });
 };

 exports.addProductPost = (req, res, next)=>{
    const product = new Product(req.body.title, req.body.price, req.body.description); 
    product.saveProducts();
    res.redirect("/");
};

exports.shopGetProducts = (req, res, next)=>{
    Product.fetchProducts(products=>{
        res.render("shop", {
        prod: products, 
        docTitle: "Shop",
    });
   
        
        // path: "/",
        // hasProducts: products.length > 0,
        // activeShop: true,
        // productCSS: true
    });
};      

