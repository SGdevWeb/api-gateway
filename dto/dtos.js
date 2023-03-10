const test = require('./testDTO');
const user = require('./userDTO');

const userNewExperience = require('./user_ServiceDTO/experienceDTO/newExperienceDTO');
const userUpdateExperience = require('./user_ServiceDTO/experienceDTO/updateExperience');
const userDeleteExperience = require('./user_ServiceDTO/experienceDTO/deleteExperienceDTO');

const userNewSoft_skill = require('./user_ServiceDTO/soft_skillDTO/newSoft_skillDTO');
const userUpdateSoft_skill = require('./user_ServiceDTO/soft_skillDTO/updateSoftskill');
const userDeleteSoft_skill = require('./user_ServiceDTO/soft_skillDTO/deleteSoft_skillDTO');

const userUpdate = require('./user_ServiceDTO/profileDTO/updateProfile')

module.exports = {
    test,
    user,
    userNewExperience,
    userUpdateExperience,
    userDeleteExperience,
    userNewSoft_skill,
    userUpdateSoft_skill,
    userDeleteSoft_skill,
    userUpdate
}