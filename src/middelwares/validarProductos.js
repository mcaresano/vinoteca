const express = require('express');
const db = require('../dataBase/models');

let{ckeck,validationResult,body, check}= require('express-validator');
module.exports = [
  
    check('name').isLength({min:1}).withMessage('Ingrese el nombre'),
    check('description').isLength({min:1}).withMessage("Ingrese una descripcion"),
    check('price').isLength({min:1}).withMessage("ingrese un importe"),
    check('cepa').isEmpty().withMessage("ingrese una cepa"),
    check('imagen').isEmpty().withMessage("debe ingresar una imagen del producto"),     
  ]