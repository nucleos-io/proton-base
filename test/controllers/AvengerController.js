import supertest from 'co-supertest'
import app from '../../server.js'

// Declarative section
const request = supertest(app)


describe("Create an amazing avenger :D", () => {
  it("Should return 201 because an avenger has been created", function*() {
    let result = yield request
      .post('/avengers')
      .send({
        name: 'Steven Grant Rogers',
        alias: 'American Captain',
        height: 1.89,
        weight: 109,
      })
      .expect(201)
  })
})
