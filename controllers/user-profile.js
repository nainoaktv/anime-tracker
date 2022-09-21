let express = require('express')
let db = require('../models')
let router = express.Router()
const { default: axios } = require('axios');


router.get('/', (req, res) => {
  res.render('user-profile');
  });


module.exports = router;