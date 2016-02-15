'use strict'


// Dependencies
import Service from 'proton-service'
import _ from 'lodash'


export default class InfoService extends Service {

  info() {
    const info = {
      models: _.keys(proton.app.models),
      controllers: _.keys(proton.app.controllers),
      services: _.keys(proton.app.services)
    }
    return info
  }

}
