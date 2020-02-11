const express = require('express')
const app = express()
const http = require('http').Server(app)
const path = require('path')
const io = require('socket.io')(http);
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const fs = require('fs')
const mongoose = require('mongoose')
const passport = require('passport')
const uri = process.env.MONGODB_URI;



const db = require("./config/keys").mongoURI;
const gameRouter = require('./routes/game-router')
const userRouter = require('./routes/user-router')


const Port = 3000 || process.env.PORT
const port = 5000 || process.env.PORT

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())

mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));

// app.get('/', (req, res) => {
//     fs.readFile('../client/src/index.js')
// })



app.get('/')

app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            console.log(err);
        }
        else {
            res.redirect('/');
        }
    });

});

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./config/passport")(passport);

app.use('/api', gameRouter)
app.use('/api/users', userRouter)

app.listen(Port, () => console.log(`Server running on port ${Port}`))