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



// const User = new Schema(
//     {
//         username: { type: String, required: true, unique: true, validate: [] },
//         password: { type: String, required: true, },
//         email: { type: String, required: true, unique: true, validate: { 
//             validator: () => Promise.resolve(false),
//             message: 'email not valid'
//             } 
//         },
//     },
//     { timestamps: true },
// )

// const User = new Schema.virtual('password')
// .get(function() {
//   return this._password;
// })
// .set(function(value) {
//   this._password = value;
//   var salt = bcrypt.gen_salt_sync(12);
//   this.passwordHash = bcrypt.encrypt_sync(value, salt);
// });

// CustomerSchema.virtual('passwordConfirmation')
// .get(function() {
//   return this._passwordConfirmation;
// })
// .set(function(value) {
//   this._passwordConfirmation = value;
// });

// CustomerSchema.path('passwordHash').validate(function(v) {
//   if (this._password || this._passwordConfirmation) {
//     if (!val.check(this._password).min(6)) {
//       this.invalidate('password', 'must be at least 6 characters.');
//     }
//     if (this._password !== this._passwordConfirmation) {
//       this.invalidate('passwordConfirmation', 'must match confirmation.');
//     }
//   }

//   if (this.isNew && !this._password) {
//     this.invalidate('password', 'required');
//   }
// }, null);

module.exports = mongoose.model('userinfo', User)