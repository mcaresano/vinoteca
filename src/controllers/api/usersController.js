const db = require ('../../dataBase/models');

module.exports = {
    list: (req, res)=>{
        db.Usuarios.findAll().then((users)=>{
            if (users.length >0 ){
              return res.status(200).json({meta:{status:200,
                                           url: req.originalUrl, 
                                           total_users: users.length
                                          },
                                           data: users,
                                          });
            }else{
              return res.status(204).json({meta:{status:204,
                                            url: req.originalUrl, 
                                            total_users: 0
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