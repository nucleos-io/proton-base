import supertest from 'co-supertest'
import app from '../../server.js'

const request = supertest(app)

describe('AvengerController', () => {

  it('Find all avengers', function*() {
    const response = yield request
      .get('/avengers')
      .expect(200)
    proton.log.debug('GET /avengers', response.body)
  })

  it('Create an amazing avenger :D', function*() {
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

  it('Update avenger', function*() {
    const accessToken = '1111111111111111111111111'
    const avenger = {
      name: 'Steven Grant Rogers',
      alias: 'Capitan America'
    }
    const response = yield request
      .put('/avengers/me')
      .set('Authorization', 'Bearer ' + accessToken)
      .send(avenger)
      .expect(200)
      proton.log.debug('POST /avengers', response.body)
  })

})
