
const express = require('express')

const GameCtrl = require('../controllers/game-control')

const gameRouter = express.Router()

gameRouter.post('/game', GameCtrl.createGame)
gameRouter.put('/game/:id', GameCtrl.updateGame)
gameRouter.delete('/game/:id', GameCtrl.deleteGame)
gameRouter.get('/game/:id', GameCtrl.getGameById)
gameRouter.get('/games', GameCtrl.getGames)

module.exports = gameRouter