const express = require('express')
const router = express.Router()
const usersController = require('../controllers/users_controllers')

router
  .get('/', usersController.getUsers)
  .get('/:id', usersController.getUsersById)
  .post('/login', usersController.login)
  .post('/register', usersController.register)
  .put('/:id', usersController.updateUsers)
  .delete('/:id', usersController.deleteUsers)
  .post('/auth/activate/:token', usersController.activationAccount)
  .post('/passwordreset', usersController.resetpass)

module.exports = router
