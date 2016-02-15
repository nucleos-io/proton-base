'use strict'

import Model from 'proton-model'

export default class Info extends Model {

  schema() {
    return {
      info: String,
    }
  }

  static create(opts) {
    const info = new this(opts)
    return info.save()
  }

}
