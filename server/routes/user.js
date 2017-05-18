var express = require('express')
var router = express.Router()

var userController = require('../controllers/user')

// NOTE: Users API
router.get('/users', userController.getAll)
router.post('/users', userController.insert)
router.get('/users/:id',userController.getById)
router.put('/users/:id', userController.update)
router.delete('/users/:id', userController.delete)
router.post('/signup', userController.signup)
router.post('/signin', userController.signin)

module.exports = router;
