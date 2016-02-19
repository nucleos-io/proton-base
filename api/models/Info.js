'use strict'

import Model from 'proton-mongoose-model'

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
