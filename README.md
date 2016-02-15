# Hustling File system

This app is a microservice responsible of the images uploads from the clients to the server

### Version
0.0.0

### Tech

* [Koa] - HTML enhanced for web apps!
* [Docker] - awesome web-based text editor


### Installation

To run this app you need dokcker and docker-compose installed


### Development

Open your favorite Terminal and run these commands.

To build the app:
```sh
$ make build
```

To run the app:
```sh
$ make start
```

To run all tests:
```sh
$ make test
```
# Concepts

### Hooks

Te hooks allow to the developers store commonly used code in one location, and make new methods available globally.

### Service
Services can be thought of as classes which contain functions that you might want to use in many places of your application.

#### How looks a service

``` javascript
'use strict'

let AWS = new require('aws-sdk')
let fs = require('fs')
let s3 = new AWS.S3()

class StorageService {

  constructor() {
    AWS.config.update({
      region: 'us-west-2'
    })
  }

  upload(files) {
    let promises = new Array()
    files.forEach(file => promises.push(this._upload(file)))
    return Promise.all(promises)
  }

  _upload(file) {
    return new Promise((resolve, reject) => {
      let opts = this._buildObject(file)
      s3.upload(opts, (err, data) => err ? reject(err) : resolve({
        url: data.Location
      }))
    })
  }

  _buildObject(file) {
    let body = fs.createReadStream(file.path)
    return {
      Bucket: 'hustlingalhpa',
      Key: file.name,
      Body: body,
      ContentType: file.mimetype
    }
  }

}

module.exports = StorageService
```

### Controller

Controllers (the C in MVC) are the principal objects in your application that are responsible for responding to requests from a web browser, mobile application or any other system capable of communicating with a server.

#### How looks a controller


``` javascript
'use strict'

let fs = require('fs')

class BannerController {

  * create() {
    try {
      let result = yield StorageService.upload(this.req.files.banners)
      this.status = 200
      this.body = result
    } catch (exception) {

    }
  }

  * find() {
    // TODO
  }

}

module.exports = BannerController
```
#### Bind a controller action with a route
``` javascript
router.post('/', BannerController.create)
```

### Model

A model is the single, definitive source of information about your data. It contains the essential fields and behaviors of the data you’re storing.

#### How looks a model
``` javascript
'use strict'

class Banner extends Model {

  definitions() {
    return {
      hustler: String,
      url: String,
      order: Number,
      mimetype: String,
      size: Number
    }
  }

}

module.exports = Banner
```



   [Docker]: <https://www.docker.com/>
   [Koa]: <http://koajs.com/>
   


