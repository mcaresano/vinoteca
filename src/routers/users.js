const express = require('express');
const router = express.Router();
const validarLogin = require ("../validations/validarLogin");
const usersControllers = require ('../controllers/usersControllers')
const administrador = require ("../middelwares/administrador")
const multer = require('multer');
const path = require ('path');
const metodhOverride = require ('method-override');
const {check, body}= require ('express-validator');

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../../public/images/upload'))
    },
    filename: function (req, file, cb) {
      cb(null, 'avt-'+file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })
router.get('/login', usersControllers.login);
router.post('/login', validarLogin, usersControllers.logueado);
router.get('/register', usersControllers.register);
router.post('/register', upload.any(), usersControllers.crear);
router.get('/profile/:id', usersControllers.profile);
router.post('/profile/:id', upload.any(), usersControllers.actualizar, usersControllers.logueado);

router.get('/list', administrador, usersControllers.list);

module.exports = router;
