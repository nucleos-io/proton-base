import {Strategy} from 'passport-http-bearer'

export default class BearerStrategy extends Strategy {
  constructor() {
    super(BearerStrategy.strategy)
  }

  static strategy (token, done) {
    // Veriry and search the token and user owner . . .
    // ...
    const user = {
      name: 'Tony Stark'
    }
    done(false, user, token)
  }
}
