const express = require('express');
const router = express.Router();
require('dotenv').config()
const auth = require('../middleware/auth');
const DTO = require('../dto/dtos')
const Controller = require("../controller/controllers");

router.post("/add", DTO.collaborators.create, Controller.collaboratorsController.create);

module.exports = router;