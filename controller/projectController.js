const axios = require('axios');
require('dotenv').config();

const create = async (req, res) => {
    try {
        const response = await axios.post(process.env.PROJECT_SERVICE_ADDRESS + "project/create", { ...req.body, user: req.auth.user });
        return res.status(response.status).send(response.data.success);
    } catch (error) {
        return res.status(error.response ? error.response.status : 500).json({ error });
    }
};

module.exports = {
    create,
}