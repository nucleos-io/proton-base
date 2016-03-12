export default {

  stores: {
    mongo: {
      connection: {
        host: process.env.DB_PORT_27017_TCP_ADDR,
        port: process.env.DB_PORT_27017_TCP_PORT,
      },
      adapter: 'mongoose'
    }
  },

  store: 'mongo'

}
