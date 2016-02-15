'use strict'

let Router = require('koa-router')

// Variables and constants
var router = new Router({
  prefix: '/info'
})

// Functions, Logic, etc...

router.get('/', InfoController.info)


module.exports = router
