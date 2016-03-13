'use strict'

import Model from 'proton-mongoose-model'

export default class Client extends Model {

  schema() {
    return {
      name: String,
      clientId: String,
      clientSecret: String,
    }
  }
}
