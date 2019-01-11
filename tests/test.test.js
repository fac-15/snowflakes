const test = require('tape');
const request = require('supertest');
const app = require('../server');

test('Tape is working', t => {
  t.equal('1', '1', '1 should equal 1');
  t.end();
})
