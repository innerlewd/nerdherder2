const axios = require('axios')
const express = require('express')

const GameCtrl = require('../controllers/game-control')

const gameRouter = express.Router()

gameRouter.post('/game', GameCtrl.addGameToList)
gameRouter.put('/game/:id', GameCtrl.updateGame)
gameRouter.delete('/game/:id', GameCtrl.deleteGameFromList)
gameRouter.get('/game/:id', GameCtrl.getGameById)
gameRouter.get('/games', GameCtrl.getMyGames)

module.exports = gameRouter