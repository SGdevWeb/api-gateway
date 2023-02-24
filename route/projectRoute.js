const express = require('express');
const router = express.Router();
require('dotenv').config()
const DTO = require('../dto/dtos')
const { commentController } = require('../controller/controllers');

// url route microservice project
const COMMENTS = process.env.API_ADDRESS+"/comments";

// route : url , dto , controller
router.post(COMMENTS, commentController.commentPost);

router.get(COMMENTS, commentController.getAllComments)

module.exports = router;