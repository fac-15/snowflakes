const path = require('path');
const results = require('../model/index');
let finalData = {};

exports.get = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'explore.hbs'));
};

results.getDonate((error, donateData) => {
    if (error) {
        console.log('Error in getDonate controller: ', error);
    } else {
        //console.log('get req-ed: ', req);
        console.log('getDonate controller data: ', donateData);
        finalData.donate = donateData;
    }
});

results.getEvents((error, eventData) => {
    if (error) {
        console.log('Error in getEvent controller: ', error);
    } else {
        //console.log('get req-ed: ', req);
        console.log('getEvent controller data: ', eventData);
        finalData.event = eventData;
    }
});

results.getOrganisations((error, orgData) => {
    if (error) {
        console.log('Error in getOrganisation controller: ', error);
    } else {
        //console.log('get req-ed: ', req);
        console.log('getOrg controller data: ', orgData);
        finalData.organisation = orgData;
    }
});

results.getPetitions((error, petitionData) => {
    if (error) {
        console.log('Error in getPetition controller: ', error);
    } else {
        //console.log('get req-ed: ', req);
        console.log('getPetition controller data: ', petitionData);
        finalData.petition = petitionData;
    }
});

results.getSocials((error, socialData) => {
    if (error) {
        console.log('Error in getSocial controller: ', error);
    } else {
        //console.log('get req-ed: ', req);
        console.log('getSocial controller data: ', socialData);
        finalData.social = socialData;
    }
});

exports.get = (req, res) => {
    res.render('explore', finalData);
};

// let test = results.getCharities((error, response) => {
//     if (error) console.log(error);
//     console.log(response);
// });
