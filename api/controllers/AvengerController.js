'use strict'

import Controller from 'proton-controller'

export default class AvengerController extends Controller {

  constructor(app) {
    super(app)
  }

  * create() {
    try {
      const avenger = yield Avenger.create(this.request.body)
      this.status = 201
      this.body = avenger
    } catch (err) {
      console.log(err)
    }

  }

  /**
   * @todo: find in the database all avengers
   */
  * find() {}


}
