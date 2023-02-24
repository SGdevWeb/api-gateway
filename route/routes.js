const express = require('express');
const router = express.Router();
// const testRoute = require('./testRoute');
const userRoute = require('./userRoute')
const projectRoute = require('./projectRoute')


// router.use(testRoute);
router.use(userRoute);

router.use(projectRoute);

module.exports = router