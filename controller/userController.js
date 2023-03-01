const axios = require('axios');
require('dotenv').config();

// controller appellé par la route
const userControllerSignin = async (req, res) =>{
    try {
        // appel axios à la route du microservice
        const response = await axios.post(`${process.env.USER_SERVICE_ADDRESS}/api/signin`, {
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
        const response = await axios.post(`${process.env.USER_SERVICE_ADDRESS}/api/login`, {
            email: req.body.email,
            password: req.body.password
        })
        const {token} = response.data;
        return res.status(200).json({ token: token })
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.response.data });
    }
};

const getAllUsers = async (req, res) => {
    // console.log('req', req.auth)
    try {
        const response = await axios.get(`${process.env.USER_SERVICE_ADDRESS}/api/users`)
        // console.log('data', response.data)
        const users = response.data.users
        return res.status(200).json({ users : users})
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getAllProfileUsers = async (req, res) => {
    // console.log('req', req.auth)
    try {
        const response = await axios.get(`${process.env.USER_SERVICE_ADDRESS}/api/profiles`)
        // console.log('data', response.data)
        const profiles = response.data.profiles
        return res.status(200).json({ profiles : profiles})
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const postExperience = async (req, res) => {
    try {
        const response = await axios.post(
            `${process.env.USER_SERVICE_ADDRESS}/api/postoneexperience`,
             {
                experience : req.body,
                user: req.auth
             });
             console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error)
    }
}

const updateExperience = async (req, res) => {
    try {
        const response = await axios.post(
            `${process.env.USER_SERVICE_ADDRESS}/api/updateoneexperience`,
             {
                experience : req.body,
                user: req.auth
             });
             console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error)
    }
}

const postSoft_skill = async (req, res) => {
    try {
        const response = await axios.post(
            `${process.env.USER_SERVICE_ADDRESS}/api/postonesoft_skill`,
             {
                soft_skill : req.body,
                user: req.auth
             });
             console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error)
    }
}

const updateSoft_skill = async (req, res) => {
    try {
        const response = await axios.post(
            `${process.env.USER_SERVICE_ADDRESS}/api/updateonesoft_skill`,
             {
                soft_skill : req.body,
                user: req.auth
             });
             console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error)
    }
}

const getProfileUser = async (req, res) => {
    try {
        const response = await axios.get(
            `${process.env.USER_SERVICE_ADDRESS}/api/userprofile/${req.auth.userId}`);
             console.log(response);
        return res.status(200).json(response.data);
    } catch (error) {
        console.log(error)
    }
}


module.exports = {
    userControllerSignin,
    userControllerLogin,
    getAllUsers,
    getAllProfileUsers,
    postExperience,
    postSoft_skill,
    updateExperience,
    updateSoft_skill,
    getProfileUser
}

