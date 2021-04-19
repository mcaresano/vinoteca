const {check,validationResult,body}= require('express-validator');

module.exports = [
    check('email').isEmail().withMessage("ingrese un Email"),
    check('pasword').isLength({min:6}).withMessage('Ingrese su Clave correctamente'),
    check('pasword').isNumeric({min:6}).withMessage('Ingrese su Clave correctamente'),
  ]
