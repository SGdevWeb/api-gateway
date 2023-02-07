require('dotenv').config()

// user test
const TREE_UP_TEST = process.env.API_ADDRESS+"/test";

const USER_SERVICE_TEST = process.env.USER_SERVICE_ADDRESS+"/test";

module.exports = {
    TREE_UP_TEST,
    USER_SERVICE_TEST
}