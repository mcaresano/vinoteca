const express = require('express');
const router = express.Router();
const validarCliente = require("../middelwares/validarCliente");
const cartController = require('../controllers/cartController');

router.get ('/' , validarCliente, cartController.cartView)
router.post ('/add/:id' , validarCliente, cartController.cartAdd);


module.exports = router;



