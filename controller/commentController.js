const axios = require('axios')

const commentPost = async (req, res) => {
    console.log(req.body)
    try {
        const response = await axios.post(`${process.env.PROJECT_SERVICE_ADDRESS}/comments/post`, {
            comment: req.body.comment
        })
        console.log('data', response.data)
        const message = response.data.message
        return res.status(201).json({ message: message })
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

const getAllComments = async (req, res) => {
    console.log(req.body)
    try {
        const response = await axios.get(`${process.env.PROJECT_SERVICE_ADDRESS}/comments`)
        console.log('data', response.data)
        const comments = response.data.comments
        return res.status(200).json({ comments: comments})
    } catch(error) {
        return res.status(500).json({ message: error.message })
    }
}

module.exports = {
    commentPost,
    getAllComments
}
