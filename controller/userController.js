const axios = require("axios");
require("dotenv").config();

// controller appellé par la route
const userControllerSignin = async (req, res) => {
  try {
    // appel axios à la route du microservice
    const response = await axios.post(
      `${process.env.USER_SERVICE_ADDRESS}/api/signin`,
      {
        email: req.body.email,
        lastname: req.body.lastname,
        firstname: req.body.firstname,
        username: req.body.username,
        password: req.body.password,
        role: "user",
      }
    );
    const { message } = response.data;
    return res.status(200).json({ message: message });
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      return res.status(status).json({ message: data.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

const userControllerLogin = async (req, res) => {
  try {
    const response = await axios.post(
      `${process.env.USER_SERVICE_ADDRESS}/api/login`,
      {
        email: req.body.email,
        password: req.body.password,
      }
    );
    const { token } = response.data;
    return res.status(200).json({ token: token });
  } catch (error) {
    console.log("userController", error);
    if (error.response) {
      const { status, data } = error.response;
      return res.status(status).json({ message: data.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

const getAllUsers = async (req, res) => {
  // console.log('req', req.auth)
  try {
    const response = await axios.get(
      `${process.env.USER_SERVICE_ADDRESS}/api/users`
    );
    // console.log('data', response.data)
    const users = response.data.users;
    return res.status(200).json({ users });
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      return res.status(status).json({ message: data.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

const getAllProfileUsers = async (req, res) => {
  // console.log('req', req.auth)
  try {
    const response = await axios.get(
      `${process.env.USER_SERVICE_ADDRESS}/api/profiles`
    );
    // console.log('data', response.data)
    const profileUsers = response.data.profileUsers;
    return res.status(200).json({ profileUsers });
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      return res.status(status).json({ message: data.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  // console.log('entra la peticion', req.params.userId)
  // console.log(req.params);
  try {
    const { uuid } = req.params;
    // console.log('user id: ',userId);
    const response = await axios.get(
      `${process.env.USER_SERVICE_ADDRESS}/api/users/${uuid}`
    );
    const user = response.data.user;
    return res.status(200).json({ user });
  } catch (error) {
    if (error.response) {
      const { status, data } = error.response;
      return res.status(status).json({ message: data.message });
    }
    return res.status(500).json({ message: error.message });
  }
};

module.exports = {
  userControllerSignin,
  userControllerLogin,
  getAllUsers,
  getAllProfileUsers,
  getUser,
};
