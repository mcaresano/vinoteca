
const {check,validationResult,body}= require('express-validator');

module.exports = [
    check('email').isEmail().withMessage("ingrese un Email"),
    check('pasword').isLength({min:1}).withMessage('Ingrese su Clave'),
    
  ]
