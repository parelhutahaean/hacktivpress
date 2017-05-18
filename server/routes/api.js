var express = require('express')
var router = express.Router()

var articleController = require('../controllers/article')

// NOTE: Articles API
router.get('/articles', articleController.getAll)
router.post('/articles', articleController.insert)
router.get('/articles/:id',articleController.getById)
router.get('/articles/user/:id', articleController.getByUserId)
router.get('/articles/category/:category', articleController.getByCategory)
router.put('/articles/:id', articleController.update)
router.delete('/articles/:id', articleController.delete)

module.exports = router;
