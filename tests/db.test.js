/* eslint-disable */

// const request = require('supertest');
// const app = require('../server');
const dbTestBuild = require('../src/model/db/test_build.js');
const dbTestDrop = require('../src/model/db/test_drop.js');
const queries = require('../src/model/index.js');
const db = require('../src/model/db/db_connection.js');

beforeEach(() => dbTestDrop());
beforeEach(() => dbTestBuild());

test('Jest is working', () => {
    expect(1 + 1).toBe(2);
});

describe('Test getDonate query', () => {
    test('getDonate returns correct first entry name', () => {
        return queries.getDonate.then(res => {
            expect(res[0].name).toBe('Greenpeace UK');
        });
    });
});

describe('Test getDonateRandom query', () => {
    test('getDonateRandom returns an entry', () => {
        return queries.getDonateRandom.then(res => {
            expect(res).toBeTruthy();
        });
    });
});

describe('Test getEvents query', () => {
    test('getEvents returns correct first entry name', () => {
        return queries.getEvents.then(res => {
            expect(res[0].name).toBe(
                'Socialism 101: System change not climate change'
            );
        });
    });
});

describe('Test getOrganisations query', () => {
    test('getOrganisations returns correct first entry name', () => {
        return queries.getOrganisations.then(res => {
            expect(res[0].name).toBe('Friends of the Earth');
        });
    });
});

describe('Test getOrganisationRandom query', () => {
    test('getOrganisationRandom returns an entry', () => {
        return queries.getOrganisationRandom.then(res => {
            expect(res).toBeTruthy();
        });
    });
});

describe('Test getPetitions query', () => {
    test('getPetitions returns correct first entry name', () => {
        return queries.getPetitions.then(res => {
            expect(res[0].name).toBe(
                'Move the target deadlines of the 2008 Climate Change Act from 2050 to 2035'
            );
        });
    });
});

describe('Test getSocials query', () => {
    test('getSocials returns correct first entry name', () => {
        return queries.getSocials.then(res => {
            expect(res[0].name).toBe('Steve Masters');
        });
    });
});

describe('Test getSocialRandom query', () => {
    test('getSocialRandom returns correct first entry name', () => {
        return queries.getSocialRandom.then(res => {
            expect(res).toBeTruthy();
        });
    });
});
