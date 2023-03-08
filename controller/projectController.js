const axios = require("axios");
require("dotenv").config();

const create = async (req, res) => {
    try {
        const response = await axios.post(process.env.PROJECT_SERVICE_ADDRESS + "/project/create", { ...req.body, user: req.auth });
        return res.status(response.status).send(response.data.success);
    } catch (error) {
        return res.status(error.response ? error.response.status : 500).json({ message: error.response ? error.response.data : error.message });
    }
};

const update = async (req, res) => {
  try {
    const { uuid } = req.params;
    const response = await axios.put(
      process.env.PROJECT_SERVICE_ADDRESS + "/project/update/" + uuid,  { ...req.body, user: req.auth }
    );
    return res.status(response.status).send(response.data.success);
  } catch (error) {
    return res
      .status(error.response ? error.response.status : 500)
      .json({ message: error });
  }
};

const get = async (req, res) => {
    try {
        const response = await axios.get(process.env.PROJECT_SERVICE_ADDRESS + "/project/" + req.params.uuid);
        return res.status(response.status).send(response.data.success);
    } catch (error) {
        return res.status(error.response ? error.response.status : 500).json({ message: error.response ? error.response.data : error.message });
    }
};

const getAll = async (_req, res) => {
  try {
      const response = await axios.get(process.env.PROJECT_SERVICE_ADDRESS + "/project/");
      return res.status(response.status).send(response.data.success);
  } catch (error) {
      return res.status(error.response ? error.response.status : 500).json({ message: error.response ? error.response.data : error.message });
  }
};

const getByUser = async (req, res) => {
  try {
      const response = await axios.get(process.env.PROJECT_SERVICE_ADDRESS + "/project/user/" + req.params.uuid);
      return res.status(response.status).send(response.data.success);
  } catch (error) {
      return res.status(error.response ? error.response.status : 500).json({ message: error.response ? error.response.data : error.message });
  }
};

module.exports = {
    create,
    update, 
    get,
    getAll,
    getByUser,
}
