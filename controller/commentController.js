const axios = require('axios')

const commentPost = async (req, res) => {
    console.log('commentPost body',req.body)
    try {
        const response = await axios.post(`${process.env.PROJECT_SERVICE_ADDRESS}comments/post`, {
            comment: req.body.comment,
            uuid_user: req.body.uuid_user
        })
        console.log('data', response.data)
        const {success} = response.data
        return res.status(201).json( success )
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getAllComments = async (req, res) => {
    console.log(req.body)
    try {
        const response = await axios.get(`${process.env.PROJECT_SERVICE_ADDRESS}comments`)
        console.log('data getAllComments', response.data)
        const {success} = response.data
        return res.status(200).json(success)
    } catch(error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    commentPost,
    getAllComments
}
