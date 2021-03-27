let{check}= require('express-validator');

module.exports = [
  
    check('nombre').isLength({min:1}).withMessage('Ingrese el nombre'),
    check('descripcion').isLength({min:1}).withMessage("Ingrese una descripcion"),
    check('precio').isLength({min:1}).withMessage("ingrese un importe"),
    //check('imagen').isEmpty().withMessage("debe ingresar una imagen del producto"),     
  ]