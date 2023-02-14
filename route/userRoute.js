const express = require('express');
const router = express.Router();
require('dotenv').config()
const DTO = require('../dto/dtos')
const { userController } = require('../controller/controllers');

// url route test microservice user
const TREE_UP = process.env.API_ADDRESS+"/newuser";

// route : url , dto , controller
router.post(TREE_UP, userController.userController);

module.exports = router;