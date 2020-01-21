
const express = require('express')

const GameCtrl = require('../controllers/user-control')

const userRouter = express.Router()

userRouter.post('/game', GameCtrl.createGame)
userRouter.put('/game/:id', GameCtrl.updateGame)
userRouter.delete('/game/:id', GameCtrl.deleteGame)
userRouter.get('/game/:id', GameCtrl.getGameById)
userRouter.get('/games', GameCtrl.getGames)

module.exports = userRouter