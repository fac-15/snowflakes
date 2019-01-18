// const request = require('supertest');
// const app = require('../server');
const dbTestBuild = require('./test_build.js');
const dbTestDrop = require('./test_drop.js');
const queries = require('../index.js');

beforeAll(() => {
    dbTestDrop();
    return dbTestBuild();
    console.log('beforeAll has run');
});

test('Jest is working', () => {
    expect(1 + 1).toBe(2);
});

beforeAll(() => {
    return dbTestDrop();
    console.log('afterAll has run');
});
