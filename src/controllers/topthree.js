const path = require('path');
const results = require('../model/index');
let finalData = {};

exports.get = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'topthree.hbs'));
};

exports.get = (req, res) => {
    Promise.all([results.getDonateRandom, results.getOrganisationRandom, results.getSocialRandom]).then(values => {
        let finalData = {
            donateRandom: values[0],
            organisationRandom: values[1],
            socialRandom: values[2],
        };
        res.render('topthree', finalData);
    }).catch((err) => {
        console.log(`Error at topthree database ${err}`);
    });    
};
