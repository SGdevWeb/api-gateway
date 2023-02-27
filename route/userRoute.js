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
const PROFILES = process.env.API_ADDRESS+"/profiles";

// route : url , dto , controller
router.post(TREE_UP, userController.userControllerSignin);

router.post(LOGIN, userController.userControllerLogin);

router.get(USERS, auth, userController.getAllUsers);

router.get(PROFILES, auth, userController.getAllProfileUsers)

module.exports = router;