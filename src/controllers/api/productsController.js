const db = require ('../../database/models');

module.exports = {
    list: (req, res)=>{
        db.Product.findAll({ include : [{association : "cepas"},{association: "image"}]}
        ).then((products)=>{
            if (products.length >0 ){
              return res.status(200).json({meta:{status:200,
                                           url: req.originalUrl, 
                                           total_products: products.length
                                          },
                                           data: products,
                                          });
            }else{
              return res.status(204).json({meta:{status:204,
                                            url: req.originalUrl, 
                                            total_products: 0
                                          },
                                            data: [],
                                          });
            }
         }).catch (err =>{
             console.error (err + " Error de acceso");
             return res.json ({ error: 'Internal error'
             })
         })
},
}