const Game = require('../models/games')

addGameToList = (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'Game not added to list',
        })
    }

    const game = new Game(body)

    if (!game) {
        return res.status(400).json({ success: false, error: err })
    }

    game
        .save()
        .then(() => {
            return res.status(201).json({
                success: true,
                id: game._id,
                message: 'Game saved!',
            })
        })
        .catch(error => {
            return res.status(400).json({
                error,
                message: 'Game not saved!',
            })
        })
}

updateGame = async (req, res) => {
    const body = req.body

    if (!body) {
        return res.status(400).json({
            success: false,
            error: 'You must provide a body to update',
        })
    }

    Game.findOne({ _id: req.params.id }, (err, game) => {
        if (err) {
            return res.status(404).json({
                err,
                message: 'Game not found!',
            })
        }
        game.name = body.name
        game.description = body.description
        game.rating = body.rating
        game
            .save()
            .then(() => {
                return res.status(200).json({
                    success: true,
                    id: game._id,
                    message: 'Game updated!',
                })
            })
            .catch(error => {
                return res.status(404).json({
                    error,
                    message: 'Game not updated!',
                })
            })
    })
}

deleteGameFromList = async (req, res) => {
    await Game.findOneAndDelete({ _id: req.params.id }, (err, game) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!game) {
            return res
                .status(404)
                .json({ success: false, error: `Game not found` })
        }

        return res.status(200).json({ success: true, data: game })
    }).catch(err => console.log(err))
}

getGameById = async (req, res) => {
    await Game.findOne({ _id: req.params.id }, (err, game) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }

        if (!game) {
            return res
                .status(404)
                .json({ success: false, error: `Game not found` })
        }
        return res.status(200).json({ success: true, data: game })
    }).catch(err => console.log(err))
}

getMyGames = async (req, res) => {
    await Game.find({}, (err, games) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!games.length) {
            return res
                .status(404)
                .json({ success: false, error: `Games not found` })
        }
        return res.status(200).json({ success: true, data: games })
    }).catch(err => console.log(err))
}

module.exports = {
    addGameToList,
    updateGame,
    deleteGameFromList,
    getMyGames,
    getGameById,
}