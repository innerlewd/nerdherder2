const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const fs = require('fs')



const db = require('./data/db')
const gameRouter = require('./routes/game-router')
const userRouter = require('./routes/user-router')

const app = express()
const Port = 8000 || process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

// app.get('/', (req, res) => {
//     fs.readFile('../client/src/index.js')
// })
app.get('/')

app.use('/api', gameRouter)
app.use(userRouter)

app.listen(Port, () => console.log(`Server running on port ${Port}`))