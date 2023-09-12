const bcrypt = require("bcrypt");
const mongoose = require('mongoose')

const ListSchema = new mongoose.Schema(
  {
    movies: [],
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}
  }, 
  { timestamps: true }
);


module.exports.List = mongoose.model('List', ListSchema)