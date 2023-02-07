const express = require('express');
const { validationResult } = require('express-validator');

//test
const testService = async (req, res) =>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //const response = await axios.post(userRoute.USER_SERVICE_TEST, req.body);
        const response = {res:req.body};
        res.status(200).send(response).json;
        
    } catch (error) {
        console.log(error);
        res.status(500).send(error);
    }
};

module.exports = {
    testService
}