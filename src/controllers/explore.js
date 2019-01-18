const path = require('path');
const results = require('../model/index');
const pg = require('pg');



exports.get = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'explore.hbs'));
};

exports.get = (req, res) => {
    Promise.all([results.getDonate, results.getEvents, results.getOrganisations, results.getPetitions, results.getSocials]).then(values => {
        let finalData = {
            donate: values[0],
            events: values[1],
            organisations: values[2],
            petitions: values[3],
            socials: values[4]
        };
        res.render('explore', finalData);
    }).catch((err) => {
        console.log(`Looks like the blizzard has stopped due to ${err}`)
    });

};
