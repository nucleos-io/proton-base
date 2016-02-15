'use strict'

import Controller from 'proton-controller'

export default class InfoController extends Controller {

  constructor(app) {
    super(app)
  }

  * info() {
    this.status = 200
    this.body = InfoService.info()
  }

}
