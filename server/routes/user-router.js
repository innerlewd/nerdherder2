
const express = require('express')

const UserCtrl = require('../controllers/user-control')

const userRouter = express.Router()

userRouter.post('/register', UserCtrl.createUser)
userRouter.put('/user/:id', UserCtrl.updateUser)
userRouter.delete('/user/:id', UserCtrl.deleteUser)
userRouter.get('/user/:id', UserCtrl.getUserByID)
userRouter.get('/users', UserCtrl.getUsers)

module.exports = userRouter