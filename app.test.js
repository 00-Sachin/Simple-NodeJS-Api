const request = require('supertest');
const app = require('./app');

describe('GET /status', () => {
  it('should return a 200 OK status and a success message', async () => {
    const response = await request(app).get('/status');
    expect(response.statusCode).toBe(200);
    expect(response.body.status).toBe('API is running perfectly!');
  });
});
