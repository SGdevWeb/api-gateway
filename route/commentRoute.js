const express = require('express');
const router = express.Router();
require('dotenv').config()
const { commentController } = require('../controller/controllers');
const auth = require('../middleware/auth')

const API = process.env.API_ADDRESS


router.post(API+"comments", auth, commentController.commentPost);

router.get(API+"comments", commentController.getAllComments);

router.put(API+"comments", auth, commentController.updateComment)

router.get(API+"comments/:id", commentController.getCommentByProjectId)


module.exports = router;