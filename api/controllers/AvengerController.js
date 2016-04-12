'use strict'

import Controller from 'proton-controller'
import _ from 'lodash'

export default class AvengerController extends Controller {

  constructor(app) {
    super(app)
  }

  /**
   * @method find
   * @description list all avengers
   */
  * find() {
    try {
      const avengers = yield Avenger.find()
      this.response.body = avengers
    } catch (err) {
      proton.log.error('AvengerController.find', err)
      this.response.status = 400
    }
  }

  /**
   * @method create
   * @description create a new avenger
   */
  * create() {
    try {
      const avenger = yield Avenger.create(this.request.body)
      this.response.body = avenger
      this.response.status = 201
    } catch (err) {
      proton.log.error('AvengerController.create', err)
      this.response.status = 400
    }
  }

  /**
   * @method destroy
   * @description
   */
  * destroy() {
    try {
      const {id} = this.params
      const avenger = yield Avenger.findOneAndRemove({_id: id})
      this.response.body = avenger
      this.response.status = !avenger ? 404 : 200
    } catch (err) {
      proton.log.error('AvengerController.find', err)
      this.response.status = 400
    }
  }

}
