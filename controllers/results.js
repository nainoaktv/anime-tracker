let express = require('express')
let db = require('../models')
let router = express.Router()
const { default: axios } = require('axios');


router.get('/', (req, res) => {
  axios.get(`https://api.jikan.moe/v4/anime/?q=${req.query.search}`)
  .then(response => {
    let animeData  = response.data.data;
    console.log(animeData);
    res.render('results', { anime: animeData });
  }).catch((error) => {
    res.status(400).render(error);
  }).finally(() => {
    console.log(`details found`);
  })
});

router.post('/results', (req, res) => {
  res.send(req.body);
})

module.exports = router;