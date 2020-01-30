const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const axios = require('axios')
const fs = require('fs')
const mongoose = require('mongoose')



const db = require("./config/keys").mongoURI;
const gameRouter = require('./routes/game-router')
const userRouter = require('./routes/user-router')

const app = express()
const Port = 5000 || process.env.PORT

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

app.get('/logout',function(req,res){    
    req.session.destroy(function(err){  
        if(err){  
            console.log(err);  
        }  
        else  
        {  
            res.redirect('/');  
        }  
    });  

});  

app.use('/api', gameRouter)
app.use(userRouter)

app.listen(Port, () => console.log(`Server running on port ${Port}`))