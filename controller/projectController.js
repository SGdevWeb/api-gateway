const axios = require('axios');
require('dotenv').config();

const create = async (req, res) => {
    try {
        const response = await axios.post(process.env.PROJECT_SERVICE_ADDRESS + "/project/create", { ...req.body });
        console.log(response.data.result.succes);
        return res.status(201).send(response.data.result.succes);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports = {
    create,
}