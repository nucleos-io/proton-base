'use strict'
import Router from 'koa-router'

const router = new Router({
  prefix: '/avengers'
})

router.get('/', AvengerController.find)
router.post('/', AuthPolicies.client, AvengerController.create)
router.put('/me', AuthPolicies.bearer, AvengerController.updateMe)

module.exports = router
