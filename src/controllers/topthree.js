const path = require('path');
const results = require('../model/index');
let finalData = {};

exports.get = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'topthree.hbs'));
};

results.getDonateRandom((error, donateRandomData) => {
    if (error) {
        console.log('Error in getDonateRandom controller: ', error);
    } else {
        console.log('getDonate controller data: ', donateRandomData);
        finalData.donateRandom = donateRandomData;
    }
});

results.getOrganisationRandom((error, organisationRandomData) => {
    if (error) {
        console.log('Error in getOrganisationRandom controller: ', error);
    } else {
        console.log('getOrganisation controller data: ', organisationRandomData);
        finalData.organisationRandom = organisationRandomData;
    }
});

results.getSocialRandom((error, socialRandomData) => {
    if (error) {
        console.log('Error in socialRandom controller: ', error);
    } else {
        console.log('getsocial controller data: ', socialRandomData);
        finalData.socialRandom = socialRandomData;
    }
});

exports.get = (req, res) => {
    res.render('topthree', finalData);
};
