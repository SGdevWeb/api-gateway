const express = require('express');
const router = express.Router();
require('dotenv').config()
const DTO = require('../dto/dtos')
const { userController } = require('../controller/controllers');
const auth = require('../middleware/auth');

// url route microservice user
const TREE_UP = process.env.API_ADDRESS+"/newuser";
const LOGIN = process.env.API_ADDRESS+"/login";
const USERS = process.env.API_ADDRESS+"/users";
const USER = process.env.API_ADDRESS+"/user/:userId";

// route : url , dto , controller
router.post(TREE_UP, userController.userControllerSignin);

router.post(LOGIN, userController.userControllerLogin);

router.get(USERS, auth, userController.getAllUsers);

router.get(USER, userController.getUser);

module.exports = router;