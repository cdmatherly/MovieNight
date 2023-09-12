const { List } = require("../models/list.model");
const { User } = require("../models/user.model");
const { Error } = require("mongoose");

module.exports.createList = async (req, res) => {
  console.log("\nCreating...\n")

  // console.log(req.body.email)

      (List.create(req.body)
        .then((list) => {
          return res.json(list);
        })
        .catch((err) => {
          console.log(err)
          return res.status(400).json(err)
        }))

};


module.exports.getAllLists = (req, res) => {
  List.find().sort({ "number": 1 })
  .then((lists) => {
      res.json(lists)
    })
    .catch(err => {
      console.log(err)
      res.status(400).json(err)
    })
  }
  
  module.exports.getListById = (req, res) => {
    List.findById(req.params.id)
    .then((list) => {
      return res.json(list)
    })
    .catch((error) => {
      return res.status(400).json(Error)
    })
  }

  module.exports.addMovieToList = (req, res) => {
    List.getListById(req.params.id).
    then((list) => {
      return res.json(list)
    })
    .catch((err) => {
      return res.status(400).json(err)
    })
  }

module.exports.deleteListById = (req, res) => {
  List.findByIdAndDelete(req.params.id)
    .then((list) => {
      return res.json(list)
    })
    .catch((err) => {
      return res.status(400).json(err)
    })
}

module.exports.updateListById = (req, res) => {
  List.findByIdAndUpdate(req.params.id, req.body, { runValidators: true, new: true })
    .then((list) => {
      return res.json(list)
    })
    .catch((err) => {
      return res.status(400).json(err)
    })
}