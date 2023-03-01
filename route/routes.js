const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
// const testRoute = require('./testRoute');
const userRoute = require('./userRoute')
const projectRoute = require('./projectRoute')
const commentRoute = require('./commentRoute')

// router.use(testRoute);
router.use(userRoute);
router.use(process.env.API_ADDRESS + "/project", projectRoute);
router.use(commentRoute);

module.exports = router