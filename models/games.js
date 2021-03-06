const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Game = new Schema(
    {
        name: { type: String, required: true },
        rating: { type: String, required: true },
        description: { type: String, required: true },
        picLink: { type: String, required: false }
    },
    { timestamps: true },
)

module.exports = mongoose.model('gameinformation', Game)