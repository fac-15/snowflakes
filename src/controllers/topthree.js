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

exports.get = (req, res) => {
    res.render('topthree', finalData);
};
