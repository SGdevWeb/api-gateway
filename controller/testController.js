const express = require('express');
const { validationResult } = require('express-validator');

//test
const testController = async (req, res) =>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        //const response = await axios.post(userRoute.USER_SERVICE_TEST, req.body);
        const {name} = req.body;
        return res.status(200).json({ message: `Hello ${name}!` });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    testController
}