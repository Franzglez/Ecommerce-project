const mongoose = require('mongoose');
const { pick } = require('lodash');

const jwt = require('jsonwebtoken');


const userSchema =  mongoose.Schema({ 
    name:{type: String},
    lastname:{type: String},
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    email: {type: String, required: true},
    whishlist: [String],
  
  })

  userSchema.methods.generateJWT = function () {
    return jwt.sign(
      pick(this, ['name', 'username']),
      process.env['jwt_privateKey']
    )
  }

  const User = mongoose.model('User', userSchema)

  module.exports = User