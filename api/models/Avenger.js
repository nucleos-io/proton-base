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

  static create(avenger) {
    proton.log.debug('new avenger', avenger)
    const newAvenger = new this(avenger)
    return newAvenger.save()
  }

  static updateOne(_id, value) {

  }

}
