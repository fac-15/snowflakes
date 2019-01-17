const path = require('path');
const results = require('../model/index');
//empty object to be populated by db calls and passed to res.render at the end
let finalData = {};

exports.get = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'explore.hbs'));
};

//db call for donate options
results.getDonate((error, donateData) => {
    if (error) {
        console.log('Error in getDonate controller: ', error);
    } else {
        finalData.donate = donateData;
    }
});

//db call for event options
results.getEvents((error, eventData) => {
    if (error) {
        console.log('Error in getEvent controller: ', error);
    } else {
        finalData.event = eventData;
    }
});

//db call for organization options
results.getOrganisations((error, orgData) => {
    if (error) {
        console.log('Error in getOrganisation controller: ', error);
    } else {
        finalData.organisation = orgData;
    }
});

//db call for petition options
results.getPetitions((error, petitionData) => {
    if (error) {
        console.log('Error in getPetition controller: ', error);
    } else {
        finalData.petition = petitionData;
    }
});

//db call for social options
results.getSocials((error, socialData) => {
    if (error) {
        console.log('Error in getSocial controller: ', error);
    } else {
        finalData.social = socialData;
    }
});

//renders the page and passes in all data from db calls to be used in the view
exports.get = (req, res) => {
    res.render('explore', finalData);
};
