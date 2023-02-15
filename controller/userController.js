const axios = require('axios');
require('dotenv').config();

const userService_url = process.env.USER_SERVICE_ADDRES

// controller appellé par la route
const userControllerSignin = async (req, res) =>{
    try {
        //appelle axios a la route au microservice
        const response = await axios.post('http://localhost:8010/api/signin', {
                email: req.body.email,
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                username: req.body.username,
                password: req.body.password
            }
        );
        const {message} = response.data;
        return res.status(200).json({ message : message });
        
    } catch (error) {
        // console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

const userControllerLogin = async (req, res) =>{
    try {
        //appelle axios a la route au microservice
        console.log('entrée login gateway')
        const response = await axios.post('http://localhost:8010/api/login', {
            email: req.body.email,
            password: req.body.password
        })
        const {token} = response.data;
        return res.status(200).json({ token: token })

    } catch (error) {
        // console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    userControllerSignin,
    userControllerLogin
}

