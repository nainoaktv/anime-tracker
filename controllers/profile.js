let express = require('express')
let db = require('../models')
let router = express.Router()
const { default: axios } = require('axios');


router.get('/', async (req, res) => {
  // Get all anime from the database
  let animes = await db.anime.findAll();
  // Remove unnecessary data
  animes = animes.map(a => a.toJSON());
  console.log(animes);
  res.render('profile/index', { animes: animes });
  });

router.post('/new', async (req, res) => {
  // print req.body to view form inputs
  console.log('********* /new', req.body);
  // create song
  const newAnime = await db.anime.create({
    title: req.body.title,
    episodes: req.body.episodes,
    image_url: req.body.image_url,
    userId: parseInt(req.body.userId)
  });
  console.log(newAnime.toJSON());
  // res.redirect to favorite anime
  res.redirect('/profile');
})

// TODO PUT Route to update users name 
// TODO DELETE ROUTE to remove anime from watchlist
module.exports = router;