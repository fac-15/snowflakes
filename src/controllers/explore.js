const path = require('path');
const results = require('../model/index');
let finalData = {};

exports.get = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'explore.hbs'));
};

results.getCharities((error, charityData) => {
    if (error) {
        console.log('Error in getCharity controller: ', error);
    } else {
        //console.log('get req-ed: ', req);
        console.log('getCharity controller data: ', charityData);
        finalData.charity = charityData;
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

exports.get = (req, res) => {
    res.render('explore', finalData);
};

// let test = results.getCharities((error, response) => {
//     if (error) console.log(error);
//     console.log(response);
// });
