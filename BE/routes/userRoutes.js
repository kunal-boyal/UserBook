const express = require('express')
const router = express.Router();

const authenticate = require('../middleware/authenticate')
const { userRegistration, userLogin, getUsers, updateUser, deleteUser, createNewUser } = require('../controllers/userController');

router.post('/api/v1/userRegistration', userRegistration)

router.post('/api/v1/users', authenticate, createNewUser)

router.get('/api/v1/users', authenticate, getUsers)

router.put('/api/v1/users/:id', authenticate, updateUser)

router.delete('/api/v1/users/:id', authenticate, deleteUser)

router.post('/api/v1/session', userLogin)


module.exports = router