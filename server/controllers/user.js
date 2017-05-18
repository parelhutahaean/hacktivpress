var User = require('../models/user')

var methods = {}

methods.getAll = (req, res) => {
  User.find({}, (err, data) => {
    if (err) res.send(err)
    res.send(data)
  })
}

methods.getById = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) res.send(err)
    res.send(data)
  })
}

methods.insert = (req, res) => {
  User.create(req.body)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

methods.update = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) res.send(err)
    data.username = req.body.username || data.username
    data.password = req.body.password || data.password
    data.save(err2 => {
      if (err2) res.send(err2)
      res.send(data)
    })
  })
}

methods.delete = (req, res) => {
  User.findById(req.params.id, (err, data) => {
    if (err) res.send(err)
    data.remove(err2 => {
      if (err2) res.send(err2)
      res.send(data)
    })
  })
}

module.exports = methods
