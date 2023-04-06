const express = require("express");
const router = express.Router();
require("dotenv").config();
const DTO = require("../dto/dtos");
const { mediaController } = require("../controller/controllers");
const auth = require("../middleware/auth");
const upload = require('../middleware/fileUpload')

router.post("/postavatar/image",upload.avatarUpload.single('image'), auth, mediaController.postAvatarController);

router.get("/getavatar/:uuid", mediaController.getAvatarController);

module.exports = router;