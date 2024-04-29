const express = require('express');
const router = express.Router();
const UserController = require('../controller/User');
const User = require('../models/User');

router
    .get('/', UserController.getAll)
    .get('/:id', UserController.getByID)

module.exports = router;