const request = require('supertest');
const app = require('../app');

describe('Auth Routes', () => {
  it('should return 200 OK when logging in with valid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ username: 'exampleUser', password: 'examplePassword' });
    expect(res.status).toBe(200);
  });

  it('should return 401 Unauthorized when logging in with invalid credentials', async () => {
    const res = await request(app)
      .post('/api/auth/login')
      .send({ username: 'invalidUser', password: 'invalidPassword' });
    expect(res.status).toBe(401);
  });

  it('should return 201 Created when registering a new user', async () => {
    const res = await request(app)
      .post('/api/auth/register')
      .send({ username: 'newUser', password: 'newPassword' });
    expect(res.status).toBe(201);
  });
});
