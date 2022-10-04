let express = require('express')
let db = require('../models')
let router = express.Router()
const { default: axios } = require('axios');

router.get('/404', (req, res) => {
  res.render('404');
});


module.exports = router;