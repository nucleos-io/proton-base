'use strict'

import Model from 'proton-mongoose-model'

export default class Avenger extends Model {

  schema() {
    return {
      name: String,
      alias: String,
      height: Number,
      weight: Number,
      specialty: String,
      equipment: String
    }
  }

  create(opts) {
    const avenger = new this(opts)
    return avenger.save()
  }

  handlerError() {
    
  }

}
