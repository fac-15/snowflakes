const dbTestBuild = require('./test_build.js');
const dbTestDrop = require('./test_drop.js');

beforeAll(() => {
    dbTestDrop();
    return dbTestBuild();
    console.log('beforeAll has run');
});

test('Jest is working', () => {
    expect(1 + 1).toBe(2);
});

afterAll(() => {
    return dbTestDrop();
    console.log('afterAll has run');
});
