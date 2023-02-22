const axios = require('axios');
require('dotenv').config();

// controller appellé par la route
const userControllerSignin = async (req, res) =>{
    try {
        // appel axios à la route du microservice
        const response = await axios.post('http://localhost:8010/api/signin', {
                email: req.body.email,
                lastname: req.body.lastname,
                firstname: req.body.firstname,
                username: req.body.username,
                password: req.body.password,
                role: "user"
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

const getAllUsers = async (req, res) => {
    // console.log('req', req.auth)
    try {
        const response = await axios.get('http://localhost:8010/api/users')
        console.log('data', response.data)
        const users = response.data.users
        return res.status(200).json({ users : users})
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    userControllerSignin,
    userControllerLogin,
    getAllUsers
}

