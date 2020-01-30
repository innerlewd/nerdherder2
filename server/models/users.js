const mongoose = require('mongoose')
const Schema = mongoose.Schema
const { isEmail } = require('validator')

const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

const User = new Schema({
  username: {
    type: String,
    required: true,
    createIndexes: { unique: true },
  },
  email: {
    type: String,
    required: true,
    validate: [isEmail, 'invalid email'],
    createIndexes: { unique: true },
  },
  password: { 
    type: String, 
    required: true 
  },
  gamelist: {
    type: Array,
  }

});

User.pre('save', async function save(next) {
  if (!this.isModified('password')) return next();
  try {
    const salt = await bcrypt.genSalt(SALT_WORK_FACTOR);
    this.password = await bcrypt.hash(this.password, salt);
    return next();
  } catch (err) {
    return next(err);
  }
});

User.methods.validatePassword = async function validatePassword(data) {
  return bcrypt.compare(data, this.password);
};



module.exports = mongoose.model('userinfo', User)