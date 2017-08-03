const express = require('express')

module.exports = function (server) {
  const router = express.Router()
  server.use('/api', router)

  const toDoService = require('../api/toDo/todoService.js')
  toDoService.register(router, '/todos')
}
