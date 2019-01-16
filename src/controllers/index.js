const express = require('express');
const router = express.Router();

const error = require('./error');
const topThree = require('./topthree');
const explore = require('./explore');


router.get('/topthree', topThree.get);
router.get('/explore', explore.get);
router.use(error.clients);
router.use(error.server);




module.exports = router;
