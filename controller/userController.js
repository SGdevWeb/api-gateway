const express = require('express');
const router = express.Router();
const axios  = require('axios');
const {userRoute} =  require('../route/routes');
const {userDTO} = require('../dto/dtos')

// test
router.get(userRoute.TREE_UP_TEST,userDTO.testDTO, async (req, res) =>{
    try {
        //const response = await axios.post(userRoute.USER_SERVICE_TEST, req.body);
        const response = {res:req.body};
        res.status(200).send(response).json;
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
});



module.exports = router;
