# LAB10- Class 401JS

## Deploy API server

### Author: Ashley Biermann

### Links and Resources

- [submission PR](https://github.com/401-advanced-javascript-ashley-biermann/api-server-deploy/pull/2)
- [ci/cd](https://github.com/401-advanced-javascript-ashley-biermann/notes/tree/master/.github/workflows) (GitHub Actions)
- [back-end server url - net yet implemented]()
- [front-end application](https://biermann-api-server.herokuapp.com/)
- [api docs](/docs/swagger.json)
- [jsdoc](/docs/index.html)

### Setup

#### `.env` requirements (where applicable)
- `PORT`
- `MONGO_ATLAS_URI`

#### How to initialize/run your application (where applicable)
- `npm start`

#### How to use your library (where applicable)
`/api/v1/` and check for current available endpoints

#### Tests
- Run with `npm test`
- Passing tests: 404.test.js, 500.test.js, middlewares.test.js
- Tests not yet passing: server.test.js

#### UML

day3 - add persistence storage in Mongodb
![added mongo db](/images/apiservermongodb.jpg)

day2 - in memory storage only, using express
![visual](/images/apiserver07-2.jpg)

![overview](/images/apiserver07.jpg)
