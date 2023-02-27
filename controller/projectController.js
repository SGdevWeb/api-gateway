const axios = require("axios");
require("dotenv").config();

const create = async (req, res) => {
  try {
    const response = await axios.post(
      process.env.PROJECT_SERVICE_ADDRESS + "/project/create",
      { ...req.body, user: req.auth }
    );
    return res.status(response.status).send(response.data.success);
  } catch (error) {
    return res
      .status(error.response ? error.response.status : 500)
      .json({ message: error });
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

module.exports = {
  create,
  update,
};
