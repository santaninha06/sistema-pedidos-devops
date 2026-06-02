const request = require('supertest');
const app = require('../src/app');

describe('API', ()=>{

  test('GET /health', async()=>{

    const response =
      await request(app).get('/health');

    expect(response.statusCode).toBe(200);

  });

});