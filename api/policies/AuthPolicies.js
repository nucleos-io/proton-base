'use strict'

import Policy from 'proton-policy'

export default class  AuthPolicies extends Policy {

  constructor(proton) {
    super(proton)
  }

  /**
   * @description
   */
  * client(next) {
    const self = this
    const opts = { session: false }
    const cb = function*(err, client) {
      if (err || !client) return self.response.status = 401
      // Add the client to request
      self.request.client = client
      delete self.request.body.client_id
      delete self.request.body.client_secret
      yield next
    }
    try {
      yield passport.authenticate('oauth2-client-password', opts, cb).call(this)
    } catch (err) {
      proton.log.error('AuthPolicies:client', err)
      next(err)
    }
  }
}
