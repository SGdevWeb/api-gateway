const express = require('express');
const router = express.Router();
// const testRoute = require('./testRoute');
const userRoute = require('./userRoute')


// router.use(testRoute);
router.use(userRoute);


module.exports = router