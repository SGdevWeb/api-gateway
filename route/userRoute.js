require('dotenv').config()

// user registration
const TREE_UP_TEST = process.env.API_ADDRESS+"/test";

const USER_SERVICE_TEST = process.env.USER_SERVICE_ADDRESS+"/test"; //exemple

module.exports = {
    TREE_UP_TEST,
    USER_SERVICE_TEST
}