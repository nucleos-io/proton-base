import {Strategy} from 'passport-oauth2-client-password'

export default class ClientStrategy extends Strategy {

 constructor() {
   super(ClientStrategy.strategy)
 }

 static strategy(clientId, clientSecret, done) {
   const criteria = {clientId, clientSecret}
   Client.findOne(criteria)
    .then(client => done(null, client))
    .catch(err => done(err))
 }

}
