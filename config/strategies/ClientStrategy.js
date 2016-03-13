import {Strategy} from 'passport-oauth2-client-password'

export default class ClientStrategy extends Strategy {

 constructor() {
   super(ClientStrategy.strategy)
 }

 static strategy(clientId, clientSecret, done) {
   const client = {
     clientId,
     clientSecret,
     name: 'Android'
   }
   done(null, client)
 }

}
