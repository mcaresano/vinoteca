
const {check,validationResult,body}= require('express-validator');

module.exports = [
    check('email')
            .isLength({min:1}).withMessage('Ingrese un email correcto')
            .isEmail().withMessage("ingrese un Email valido"),
    check('pasword')
            .isEmpty().withMessage("Ingrese su clave")
            .isLength({min:6}).withMessage('Ingrese su correcto')
    
  ]
