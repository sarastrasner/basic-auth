'use strict';

const mongoose = require('mongoose');

const usersSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
});
const UserModel = mongoose.model('users', usersSchema);

module.exports = UserModel;
