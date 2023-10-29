const request = require('supertest');
const app = require('../../app');

request(app)
  .get('/ping')
  .expect('Content-Type', /json/)
  .expect(200)
  .end(function(err, res) {
    if (err) throw err;
  });