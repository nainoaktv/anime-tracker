let express = require('express')
let db = require('../models')
let router = express.Router()
const { default: axios } = require('axios');


router.get('/', (req, res) => {
  res.render('profile/show');
  });


module.exports = router;