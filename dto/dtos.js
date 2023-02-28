const test = require('./testDTO');
const user = require('./userDTO');

const userNewExperience = require('./user_ServiceDTO/experienceDTO/newExperienceDTO');
const userUpdateExperience = require('./user_ServiceDTO/experienceDTO/updateExperience');

const userNewSoft_skill = require('./user_ServiceDTO/soft_skillDTO/newSoft_skillDTO');
const userUpdateSoft_skill = require('./user_ServiceDTO/soft_skillDTO/updateSoftskill');

module.exports = {
    test,
    user,
    userNewExperience,
    userUpdateExperience,
    userNewSoft_skill,
    userUpdateSoft_skill,
}