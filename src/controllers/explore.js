const path = require('path');
const results = require('../model/index');
let finalData = {};

exports.get = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'explore.hbs'));
};

results.getDonate((error, donateData) => {
    if (error) {
        console.log('Error in getDonate controller: ', error);
    }
    else {
        finalData.donate = donateData;
    }
});

results.getEvents((error, eventData) => {
    if (error) {
        console.log('Error in getEvent controller: ', error);
    }
    else {
        finalData.event = eventData;
    }
});

results.getOrganisations((error, orgData) => {
    if (error) {
        console.log('Error in getOrganisation controller: ', error);
    }
    else {
        finalData.organisation = orgData;
    }
});

results.getPetitions((error, petitionData) => {
    if (error) {
        console.log('Error in getPetition controller: ', error);
    }
    else {
        finalData.petition = petitionData;
    }
});

results.getSocials((error, socialData) => {
    if (error) {
        console.log('Error in getSocial controller: ', error);
    }
    else {
        finalData.social = socialData;
    }
});

exports.get = (req, res) => {
    res.render('explore', finalData);
};
