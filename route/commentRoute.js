const express = require('express');
const router = express.Router();
require('dotenv').config()
const { commentController } = require('../controller/controllers');
const auth = require('../middleware/auth')

// url route microservice project
const COMMENTS = process.env.API_ADDRESS+"/comments";
const COMMENT = process.env.API_ADDRESS+"/comments/comment"

// route : url , dto , controller
router.post(COMMENTS, auth, commentController.commentPost);

router.get(COMMENTS, commentController.getAllComments);

router.put(COMMENT, auth, commentController.updateComment)


router.post("/comments", auth, commentController.commentPost);

router.get("/comments", commentController.getAllComments);

router.put("/comments", auth, commentController.updateComment)

router.get("/comments/:id", auth, commentController.getCommentByProjectId)


module.exports = router;