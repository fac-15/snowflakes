const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const favicon = require('serve-favicon');
const bodyParser = require('body-parser');
const compression = require('compression');
const controllers = require('./controllers/index');

//create express app
const app = express();
