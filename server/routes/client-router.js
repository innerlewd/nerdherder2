const express = require('express')

const clientCtrl = require('../controllers/client-control')

const clientRouter = express.Router()

clientRouter.post('/', clientCtrl)
// clientRouter.put('/user/:id', UserCtrl.updateUser)
// clientRouter.delete('/user/:id', UserCtrl.deleteUser)
// clientRouter.get('/user/:id', UserCtrl.getUserByID)
// clientRouter.get('/users', UserCtrl.getUsers)

module.exports = clientRouter