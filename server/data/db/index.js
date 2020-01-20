const mongoose = require('mongoose')

mongoose
    .connect('mongodb://192.168.99.100:27017/cinema', { useNewUrlParser: true })
    .catch(e => {
        console.error('Connection error', e.message)
    })

const db = mongoose.connection

module.exports = db