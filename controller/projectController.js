const axios = require('axios');
require('dotenv').config();

const create = async (req, res) => {
    try {
        const response = await axios.post(process.env.PROJECT_SERVICE_ADDRESS + "/project/create", { ...req.body, user: req.auth });
        return res.status(201).send(response.data.success);
    } catch (error) {
        return res.status(500).json({ message: error });
    }
};

module.exports = {
    create,
}