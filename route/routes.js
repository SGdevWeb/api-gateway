const express = require('express');
const auth = require('../middleware/auth');
const router = express.Router();
// const testRoute = require('./testRoute');
const userRoute = require('./userRoute')
const likeRoute = require('./likeRoute');

const projectRoute = require('./projectRoute')
const commentRoute = require('./commentRoute')
const collaboratorsRoute = require('./collaboratorsRoute')

const avatarRoute = require('./avatarRoute');


// router.use(testRoute);
router.use(userRoute);
router.use(process.env.API_ADDRESS + "/project", projectRoute);
router.use(commentRoute);
router.use(process.env.API_ADDRESS + "/collaborators", collaboratorsRoute);
router.use(likeRoute)
router.use(process.env.API_ADDRESS, avatarRoute);


module.exports = router