const { verify } = require('jsonwebtoken')

const User = require('../models/User')


module.exports = async (req, res, next) => {
    try {
        const token = req.headers.authorization

        const { payload } = verify(token, process.env.JWT_PRIVATE_KEY)

        const user = await User.findOne({ _id: payload })

        req.user = user

        next()
        
    } catch (error) {

        return res.status(500).json({ message: error.message })
    }
}