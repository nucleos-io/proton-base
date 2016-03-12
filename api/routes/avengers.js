'use strict'

let Router = require('koa-router')

// Variables and constants
var router = new Router({
  prefix: '/avengers'
})

// Functions, Logic, etc...

router.post('/', AvengerController.create)


module.exports = router
