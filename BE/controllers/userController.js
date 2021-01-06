const { hash, compare } = require("bcryptjs");
const { sign } = require('jsonwebtoken')

const User = require('../models/User')

module.exports = {
    userRegistration: async (req, res) => {
        try {
            const user = req.body

            const userCheck = await User.findOne({ email: user.email })

            if (userCheck) return res.status(403).json({ message: "EMAIL ALREADY EXIST" })

            let currentUser = new User({ ...user });

            const hashedPassword = await hash(currentUser.password, 10);

            currentUser.password = hashedPassword;

            await currentUser.save()

            return res.status(201).json({ message: "success" });
        }
        catch (error) {

            console.log(error.message)
        }
    },
    userLogin: async (req, res) => {
        try {
            const user = await User.findOne({ email: req.body.email })

            if (!user) return res.status(404).json({ message: 'Invalid Credentials' })

            const checkPassword = await compare(req.body.password, user.password)

            if (!checkPassword) return res.status(404).json({ message: 'Invalid Credentials' })

            const jwtToken = sign({ payload: user._id }, process.env.JWT_PRIVATE_KEY, { expiresIn: '1h' })

            return res.status(200).json({ message: "success", token: jwtToken, data: user })
        }
        catch (error) {

            console.log(error.message)
        }
    },
    createNewUser: async (req, res) => {
        try {
            const currentUser = req.user

            const user = req.body

            const userCheck = await User.findOne({ email: user.email })

            if (userCheck) return res.status(403).json({ message: "EMAIL ALREADY EXIST" })

            let newUser = new User({ ...user });

            const hashedPassword = await hash(newUser.password, 10);

            newUser.password = hashedPassword;

            currentUser.createdUsers.push(newUser._id)

            await newUser.save()

            await currentUser.save()

            return res.status(201).json({ message: "success", data: currentUser });
        }
        catch (error) {

            console.log(error.message)
        }
    },
    getUsers: async (req, res) => {
        try {
            const users = await User.findOne({ _id: req.user._id }).populate("createdUsers")

            return res.status(201).json({ message: "success", data: users.createdUsers });
        }
        catch (error) {

            console.log(error.message)
        }
    },
    updateUser: async (req, res) => {
        try {
            const user = await User.updateOne({ _id: req.params.id }, req.body)

            return res.status(201).json({ message: "success", data: user });
        }
        catch (error) {

            console.log(error.message)
        }
    },
    deleteUser: async (req, res) => {
        try {
            await User.deleteOne({ _id: req.params.id })
            
            let currentUser = req.user

            const index = currentUser.createdUsers.indexOf(req.params.id);

            if (index > -1) {
                currentUser.createdUsers.splice(index, 1);
            }

            await currentUser.save()

            return res.status(201).json({ message: "success", data: req.params.id });
        }
        catch (error) {
            
            console.log(error.message)
        }
    }
}