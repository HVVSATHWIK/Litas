const request = require('supertest');
const app = require('../app');

describe('Photo Video Editing Routes', () => {
  it('should return 200 OK and edited image when processing an image', async () => {
    // Add your test logic for processing an image
    const res = await request(app)
      .post('/api/photo/edit')
      .attach('image', 'path/to/image.jpg'); // Assuming you have a test image file
    expect(res.status).toBe(200);
    // Add more assertions as needed to validate the edited image
  });

  it('should return 200 OK and edited video when processing a video', async () => {
    // Add your test logic for processing a video
    const res = await request(app)
      .post('/api/video/edit')
      .attach('video', 'path/to/video.mp4'); // Assuming you have a test video file
    expect(res.status).toBe(200);
    // Add more assertions as needed to validate the edited video
  });

  it('should return 400 Bad Request when processing unsupported file types', async () => {
    // Add your test logic for handling unsupported file types
    const res = await request(app)
      .post('/api/photo/edit')
      .attach('file', 'path/to/document.pdf'); // Assuming you have a test document file
    expect(res.status).toBe(400);
  });

  // Add more test cases for other photo/video editing routes as needed
});
