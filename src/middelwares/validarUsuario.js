const express = require('express');
const fs = require('fs');
const path = require('path');
const bcrypt=require ('bcrypt');
const db = require('../dataBase/models')
let{ckeck,validationResult,body, check}= require('express-validator');
module.exports = [
  
    check('apellido').isLength({min:1}).withMessage('Ingrese el Apellido'),
    check('nombre').isLength({min:1}).withMessage("Ingrese el nombre"),
    check('imagen').isLength({min:1}).withMessage("Ingrese imagen de perfil"),
    check('email').isEmail().withMessage("ingrese un Email valido"),
    check('pasword').isLength({min:6}).withMessage("Contraseña minimo 6 caracteres numericos"),
    check('pasword').isNumeric().withMessage("Ingrese una contraseña solo con numeros"),
      
  ]