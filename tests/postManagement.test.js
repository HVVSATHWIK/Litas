const request = require('supertest');
const app = require('../app');

describe('Post Management Routes', () => {
  it('should return 200 OK and an array of posts when fetching all posts', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('should return 200 OK and a single post when fetching a post by ID', async () => {
    // Assuming you have a valid post ID in your database
    const postId = 'validPostId';
    const res = await request(app).get(`/api/posts/${postId}`);
    expect(res.status).toBe(200);
    expect(res.body).toBeDefined();
  });

  // Add more test cases for other routes as needed
});
