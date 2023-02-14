const axios = require('axios');
require('dotenv').config();

const userService_url = process.env.USER_SERVICE_ADDRES

//controller appeller par la route
const userController = async (req, res) =>{
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
            console.log(req.body.password)
        const {message} = response.data;
        return res.status(200).json({ message : message });
        
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

module.exports = {
    userController
}