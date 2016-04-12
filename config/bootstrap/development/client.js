export default () => {
  console.log('client bootstrap . . . ')
  const defaultClient = {
    name: 'Test Client',
    clientId: '123456',
    clientSecret: '123456',
  }
  Client.findOneAndUpdate(defaultClient, defaultClient, {upsert: true})
    .then(client => proton.log.info('Client created'))
}
