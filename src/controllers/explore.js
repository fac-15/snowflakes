const path = require('path');
const results = require('../model/index');
let charities = '';

exports.get = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'explore.hbs'));
};

exports.get = (req, res) => {
    results.getCharities((error, charityData) => {
        if (error) {
            console.log('Error in getCharity controller: ', error);
        } else {
            //console.log('get req-ed: ', req);
            console.log('getCharity controller data: ', charityData);
            res.render('explore', {
                charity: charityData
            });
        }
    });
};

// let test = results.getCharities((error, response) => {
//     if (error) console.log(error);
//     console.log(response);
// });
