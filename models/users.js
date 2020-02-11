const mongoose = require('mongoose')
const Schema = mongoose.Schema


const User = new Schema({
  username: {
    type: String,
    required: true,
    createIndexes: { unique: true },
  },
  email: {
    type: String,
    required: true,
    createIndexes: { unique: true },
  },
  password: { 
    type: String, 
    required: true 
  },
  date: {
    type: Date,
    default: Date.now
  },
  gamelist: {
    type: Array,
  }

});




module.exports = mongoose.model('userinfo', User)