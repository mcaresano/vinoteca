const express = require('express');
const router = express.Router();
const apiUsersController = require ('../../controllers/api/usersController')


router.get('/', apiUsersController.list);

module.exports = router;