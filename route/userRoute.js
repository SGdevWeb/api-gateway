const express = require('express');
const router = express.Router();
require('dotenv').config()
const DTO = require('../dto/dtos')
const { userController } = require('../controller/controllers');

// url route microservice user
const TREE_UP = process.env.API_ADDRESS+"/newuser";
const LOGIN = process.env.API_ADDRESS+"/login";

// route : url , dto , controller
router.post(TREE_UP, userController.userControllerSignin);
router.post(LOGIN, userController.userControllerLogin)

module.exports = router;