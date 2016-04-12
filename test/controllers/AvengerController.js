import supertest from 'co-supertest'
import app from '../../server.js'

const request = supertest(app)

describe('AvengerController', () => {

  it('Create an amazing avenger :', function*() {
    const avenger = {
      name: 'Steven Grant Rogers',
      alias: 'American Captain',
      height: 1.89,
      weight: 109
    }
    const response = yield request
      .post('/avengers')
      .send(avenger)
      .expect(201)
    proton.log.debug('POST /avengers', response.body)
  })
  
})
