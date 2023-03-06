const express = require('express');
const router = express.Router();
require('dotenv').config()
const auth = require('../middleware/auth');
const DTO = require('../dto/dtos')
const Controller = require("../controller/controllers");

router.post("/create", auth, DTO.project.create, Controller.projectController.create);
router.get("/:uuid", DTO.project.get, Controller.projectController.get);

module.exports = router;
