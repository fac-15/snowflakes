const path = require('path');
const results = require('../model/index');
let finalData = {};

exports.get = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'topthree.hbs'));
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

results.getOrganisations((error, orgData) => {
    if (error) {
        console.log('Error in getOrganisation controller: ', error);
    } else {
        //console.log('get req-ed: ', req);
        console.log('getOrg controller data: ', orgData);
        finalData.organisation = orgData;
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
    res.render('topthree', finalData);
};
