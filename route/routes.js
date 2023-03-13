const express = require('express');
const router = express.Router();
// const testRoute = require('./testRoute');
const userRoute = require('./userRoute')
const likeRoute = require('./likeRoute')

// router.use(testRoute);
router.use(userRoute);
router.use(likeRoute)




module.exports = router