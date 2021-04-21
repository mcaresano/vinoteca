const express = require('express');
const router = express.Router();
const validarCliente = require("../middelwares/validarCliente");
const cartController = require('../controllers/cartController');

router.get ('/' , validarCliente, cartController.cartView)
router.post ('/add/:id' , validarCliente, cartController.cartAdd);
router.post ('/delete/:id' , validarCliente, cartController.cartDelete);
router.get ('/delete/empty', validarCliente, cartController.cartEmpty);

module.exports = router;



