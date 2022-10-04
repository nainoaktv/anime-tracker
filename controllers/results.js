let express = require('express')
let db = require('../models')
let router = express.Router()
const { default: axios } = require('axios');
const isLoggedIn = require('../middleware/isLoggedIn');


router.get('/', (req, res) => {
  axios.get(`https://api.jikan.moe/v4/anime/?q=${req.query.search}`)
  .then(response => {
    if (response.status === 200) {
      let animeData  = response.data.data;
      console.log(animeData);
      res.status(200).render('results', { anime: animeData });
    } else {
      res.status(404).render('404');
    }
  }).catch((error) => {
    res.status(400).send(error);
  }).finally(() => {
    console.log(`details found`);
  })
});

router.post('/results', (req, res) => {
    res.send(req.body);

});

module.exports = router;