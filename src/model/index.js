//exports all db calls to be used in controllers
/* eslint-disable global-require */
module.exports = {
    getDonate: require('./getDonate'),
    getEvents: require('./getEvents'),
    getOrganisations: require('./getOrganisations'),
    getPetitions: require('./getPetitions'),
    getSocials: require('./getSocials'),
    getDonateRandom: require('./getDonateRandom'),
    getOrganisationRandom: require('./getOrganisationRandom'),
    getSocialRandom: require('./getSocialRandom')
};
