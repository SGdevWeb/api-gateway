const express = require('express');
const router = express.Router();
require('dotenv').config()
const { testDTO } = require('../dto/dtos')
const { testController } = require('../controller/controllers')

// test
const TREE_UP = process.env.API_ADDRESS+"/test";

// test
router.get(TREE_UP, testDTO.testDTO, testController.testController);

module.exports = router;
