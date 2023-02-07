const express = require('express');
const router = express.Router();
const axios  = require('axios');
const { validationResult } = require('express-validator');
const { userRoute } =  require('../route/routes');
const { userDTO } = require('../dto/dtos')
const { userService } = require('../service/services')

// test
router.get(userRoute.TREE_UP_TEST ,userDTO.testDTO ,userService.testService);



module.exports = router;
