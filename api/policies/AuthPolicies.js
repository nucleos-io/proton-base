'use strict'

import Policy from 'proton-policy'

export default class  AuthPolicies extends Policy {

  constructor(proton) {
    super(proton)
  }

  /**
   * @description
   */
  * bearer(next) {
    const self = this
    const opts = { session: false }
    const cb = function*(err, user, token) {
      if (err) return self.status = 401
      // Add the user to body request
      proton.log.debug('Make request from these user: ', user)
      self.request.body.me = user
      yield next
    }
    try {
      yield passport.authenticate('bearer', opts, cb).call(this)
    } catch (err) {
      proton.log.error(err)
    }
  }

  /**
   * @description
   */
  * client(next) {
    const self = this
    const opts = { session: false }
    const cb = function*(err, client) {
      if (err) return self.status = 401
      // Add the client to body request
      proton.log.debug('Make request from these client: ', err, client)
      self.request.body.client = client
      yield next
    }
    try {
      yield passport.authenticate('oauth2-client-password', opts, cb).call(this)
    } catch (err) {
      proton.log.error(err)
    }
  }
}
