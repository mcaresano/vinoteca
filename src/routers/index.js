const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const validarUsuario = require ("../middelwares/validarUsuario");
const generalController = require('../controllers/generalControllers')
const admin = require("../middelwares/administrador")


router.get('/', generalController.home);
router.get('/logout', generalController.logout)
router.get('/administrador',admin,adminController.Admin);
router.get('/administrador/registerAdmin',adminController.registerAdmin);
router.post('/administrador/registerAdmin',validarUsuario,adminController.crearAdmin);
router.get('/empresa',generalController.empresa);
router.get('/ubicacion',generalController.ubicacion);
router.get('/contacto',generalController.contacto);
module.exports = router;
