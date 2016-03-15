'use strict'

import Controller from 'proton-controller'
import _ from 'lodash'

export default class AvengerController extends Controller {

  constructor(app) {
    super(app)
  }

  /**
   * @method create
   * @description
   */
  * create() {
    console.log('REQ AAAAAA', this.request.body)
    try {
      const avenger = yield Avenger.create(this.request.body)
      this.status = 201
      this.body = avenger
    } catch (err) {
      proton.log.error('AvengerController.create', err)
      this.status = 400
    }

  }

  /**
   * @method find
   * @description
   */
  * find() {
    try {
      this.status = 200
      this.body = yield Avenger.find()
    } catch (err) {
      proton.log.error('AvengerController.find', err)
      this.status = 400
    }
  }

  /**
   * @method update
   * @description
   */
  * updateMe() {
    try {
      const me = this.request.body.me
      const avenger = _.omit(this.request.body, 'me')
      this.status = 200
      proton.log.debug('User to update', me)
      // this.body = yield Avenger.update(me._id, avenger)
    } catch (err) {
      proton.log.error('AvengerController.find', err)
      this.status = 400
    }
  }

}
