var Article = require('../models/article')

var methods = {}

methods.getAll = (req, res) => {
  Article.find()
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

methods.insert = (req, res) => {
  Article.create(req.body)
  .then(data => {
    res.send(data)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = methods
