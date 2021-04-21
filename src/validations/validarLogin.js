const { check, validationResult, body } = require ("express-validator");
const bcrypt= require ('bcrypt');
const db = require("../data-base/models")

module.exports = [
    body("email").custom(function(value, {req}){
        return db.Usuarios.findAll({where:{email:value}})
        .then(function(usuario){
          if(usuario[0] == undefined){
            return Promise.reject("Email no registrado. !!Registrate!!");
          }else{
              if(bcrypt.compareSync(req.body.pasword, usuario[0].pasword) == false ){
                return Promise.reject("La contraseña es incorrecta");
              }
          }
        })
      }),
      check("pasword").isLength({min: 6}).withMessage("La contraseña debe contener al menos 6 caracteres")
]