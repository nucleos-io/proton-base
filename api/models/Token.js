'use strict'

import Model from 'proton-mongoose-model'

export default class Token extends Model {

  schema() {
    return {
      hash: String,
      user: String,
    }
  }

  generate(user) {}

}
