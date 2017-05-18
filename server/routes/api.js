var express = require('express')
var router = express.Router()

var articleController = require('../controllers/article')

// NOTE: Articles API
router.get('/articles', articleController.getAll)
router.post('/articles', articleController.insert)

module.exports = router;
