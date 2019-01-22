const request = require('supertest');
const app = require('../src/app.js');

test('Jest is working', () => {
  expect(1 + 1).toBe(2);
});

// test('It should response the GET method', () => {
//   request(app)
//   .get('/')
//   .then((res) => {
//   expect(res.statusCode).toBe(200);
//     });
// });

// test('It should display Error page', () => {
//   request(app)
//     .get('/itdoesnotexist')
//     .then((res) => {
//       expect(res.statusCode).toBe(400);
//     });
// });
