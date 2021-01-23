const mongoose = require('../database');
const { Schema } = mongoose

const usersSchema = new Schema({
name: String,
email: String,
age: String,
password: String

  });

const User = mongoose.model('User', usersSchema);


module.exports = User