const express = require('express');
const { validationResult } = require('express-validator');
const axios = require('axios');
require('dotenv').config();

const userService_url = process.env.USER_SERVICE_ADDRES

//test
const testController = async (req, res) =>{
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        const response = await axios.get('http://localhost:8010/test', {
             data:{
                 name : req.body.name
                }
            });
            console.log(response)
        const {name} = response.data;
        return res.status(200).json({ message: `Hello ${name}!` });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    testController
}