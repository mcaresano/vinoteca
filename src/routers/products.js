const express = require('express');
const router = express.Router();

const multer = require('multer');
const path = require ('path');
const metodhOverride = require ('method-override');
const administrador = require ("../middelwares/administrador")
const validarProductos = require ("../validations/validarProductos");
const productsController = require('../controllers/productsController');
const { Router } = require('express');


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, path.join(__dirname,'../../public/images/upload'))
    },
    filename: function (req, file, cb) {
      cb(null, 'img-'+file.originalname)
    }
  })
  var upload = multer({ storage: storage })


router.get('/',administrador,productsController.listaProductos);
router.get('/detail/:id', productsController.detProducto);
router.get('/newProduct', administrador, productsController.newProduct);
router.post('/newProduct',administrador,  upload.any(), productsController.createProduct);
router.get('/edit/:id', administrador, productsController.edit);
router.post('/edit/:id', administrador, upload.any(),productsController.update);
router.post('/delete/:id',administrador,  productsController.delete);

module.exports = router;
