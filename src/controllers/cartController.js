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
        // return res.send("cart " + req.session.cart);
        
        if (req.session.cart === undefined){
            arrayProducts.push(product); 
            req.session.cart = {arrayProducts};
          } else {
            if (req.session.cart.arrayProducts.length >= 0 ){
            arrayProducts = req.session.cart.arrayProducts;
            arrayProducts.push(product); 
            req.session.cart = {arrayProducts};
          }
          
        }
        res.redirect ('/');   
    },   

    cartDelete : function (req, res){
        
        
       
         var arrayProducts = [];
        if (req.session.cart.arrayProducts.length > 0 ){
            arrayProducts = req.session.cart.arrayProducts;
            for (var i =0; i < arrayProducts.length; i++){
                if (arrayProducts[i].id === req.params.id) {
                    arrayProducts.splice(i,1);
                }
             }
            req.session.cart = {arrayProducts};
            res.redirect('/cart'); 
        
    }
          
    },   

    cartEmpty : function (req, res){
        if (req.session.cart === undefined){
            
        }  else{
        var arrayProducts = [];
         
        if (req.session.cart.arrayProducts.length > 0 ){
            req.session.cart = {arrayProducts};
        }
    }
        res.redirect('/cart');
    
    },   

}
