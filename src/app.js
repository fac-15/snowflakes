const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const compression = require('compression');
const controllers = require('./controllers/index');

//create express app
const app = express();

app.disable('x-powered-by');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('port', process.env.PORT || 4060);

app.use(
    favicon(path.join(__dirname, '..', 'public', 'img/favicons/favicon.ico'))
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, '..', 'public')));

app.engine(
    'hbs',
    exphbs({
        extname: 'hbs',
        partialsDir: path.join(__dirname, 'views', 'partials'),
        layoutsDir: path.join(__dirname, 'views', 'layouts'),
        defaultLayout: 'main',
        helpersDir: path.join(__dirname, 'views', 'helpers')
    })
);


app.use(controllers);

module.exports = app;
