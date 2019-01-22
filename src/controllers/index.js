const express = require('express');
const router = express.Router();

const error = require('./error');
const home = require('./home');
const topThree = require('./topthree');
const explore = require('./explore');
const quiz = require('./quiz');

router.get('/', home.get);
router.get('/topthree', topThree.get);
router.get('/explore', explore.get);
router.get('/quiz', quiz.get);
router.use(error.clients);
router.use(error.server);




module.exports = router;
