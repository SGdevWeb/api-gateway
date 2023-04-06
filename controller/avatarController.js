const axios = require("axios");
require("dotenv").config();
const FormData = require('form-data');
const fs = require('fs');
const path = require('node:path');
const deleteFile = require('../middleware/deleteFile')

const postAvatarController = async (req, res) => {
    try {
        const dirname = path.dirname(__dirname);
        const fullPath = path.join(dirname, req.file.path);
        const file = fs.createReadStream(fullPath);

        const form = new FormData();
        form.append('image', file);
        //console.log(form)

        const result = await axios.post(
            `${process.env.MEDIA_SERVICE_ADDRESS}/api/postavatar/image/${req.auth.user.uuid}/${req.auth.user.username}`,
            form,
            {
                Headers: {
                    ...form.getHeaders(),
                }
            }
        )
        if (result.status === 200) {
            deleteFile(req.file.path);
        }
        return res.status(result.status).send(result.data);

    } catch (error) {
        deleteFile(req.file.path);
        console.log(error)
        return res.status(result.status).send(error);
    }
}

const getAvatarController = async (req, res) => {
    try {
        const result = await axios.get(
            `${process.env.MEDIA_SERVICE_ADDRESS}/api/getavatar/${req.params.uuid}/`,
            {
                responseType: 'arraybuffer'
            }
        )
        console.log(result.headers)
        return res.status(result.status).type(result.headers['content-type']).send(result.data);
        //return res.status(result.status).send(result.data);
    } catch (error) {
        //console.log(error);
    }
}

module.exports = {
    postAvatarController,
    getAvatarController,
}