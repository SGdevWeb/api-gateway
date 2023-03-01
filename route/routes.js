const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
// const testRoute = require('./testRoute');
const userRoute = require('./userRoute')
const projectRoute = require('./projectRoute')
const collaboratorsRoute = require('./collaboratorsRoute')


// router.use(testRoute);
router.use(userRoute);
router.use(process.env.API_ADDRESS + "/project", projectRoute);
router.use(process.env.API_ADDRESS + "/collaborators", collaboratorsRoute);


module.exports = router