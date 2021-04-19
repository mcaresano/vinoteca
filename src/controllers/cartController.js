const session = require('express-session');


module.exports = {
    cartView : function (req , res){
        var products =[];
        if (req.session.cart !== undefined ){
            products = req.session.cart.arrayProducts;
        } 
        res.render('cartView',{products: products})},
     
    cartAdd : function (req, res){
        
        var arrayProducts = [];
        var product = {
            id:req.params.id,
            nombre: req.body.nombre,
            cepa:req.body.cepa,
            cantidad: req.body.cantidad,
            precio: req.body.price
        };
              
        if (req.session.cart === undefined){
            arrayProducts.push(product); 
            req.session.cart = {arrayProducts};
          } else {
            if (req.session.cart.arrayProducts.length > 0 ){
            arrayProducts = req.session.cart.arrayProducts;
            arrayProducts.push(product);
            req.session.cart = {arrayProducts}
           }
        }
        res.redirect ('/');   


        /*
       var arrayProduct = [];
       var localStorageItems = res.locals.usuarioLogueado;

       arrayProduct.push ([req.params.id, req.body.cantidad])
        console.log (arrayProduct);
        
        if (localStorageItems ===null){
            console.log ("Esta vacio");
        }else {
            console.log (localStorageItems);
        }

       */


          
   
    },   
}
