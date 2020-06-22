'use strict';

/**
 * Tests Server
 * @module server.test
 */
const supergoose = require('cf-supergoose');
const server = require('../lib/api/v1');

const mockRequest = supergoose.server(server);
jest.spyOn(console, 'log').mockImplementation();
// const mockRequest2 = supergoose.server(req, res);

describe('Testing server', () => {
  it('Should be able to GET categories', () => {
    return mockRequest.get('/api/v1/categories')
      .then(results => {
        expect(results.body);
      });
  });
});