const path = require('path');

exports.get = (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'quiz.hbs'));
};

exports.get = (req, res) => {
    res.render('quiz');
};
