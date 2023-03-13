const test = require('./testDTO');
const user = require('./userDTO');
const project = require('./projectDTO');
const collaborators = require("./collaboratorsDTO");

const postLike = require('./likeDTO/postLikeDTO');

module.exports = {
    test,
    user,
    postLike,
    project,
    collaborators,
}