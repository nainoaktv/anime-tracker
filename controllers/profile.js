let express = require('express')
let db = require('../models')
let router = express.Router()
const { default: axios } = require('axios');



router.get('/', async (req, res) => {
  if (response.status === 200) {

    let animes = await db.anime.findAll();

    animes = animes.map(a => a.toJSON());
    console.log(animes);
    res.status(200).render('profile/index', { animes: animes });
  } else {
    res.status(404).render('404');
  }
});

router.get('/edit', (req, res) => {
  res.render('profile/edit');
});

router.post('/new', async (req, res) => {

  console.log('********* /new', req.body);

  const newAnime = await db.anime.create({
    title: req.body.title,
    episodes: req.body.episodes,
    image_url: req.body.image_url,
    userId: parseInt(req.body.userId)
  });
  console.log(newAnime.toJSON());

  res.redirect('/profile');
})

router.put('/:id', async (req, res) => {
  try {
      const foundUser = await db.user.findOne({ where: { email: req.body.email }});
      console.log(foundUser);
      if (!foundUser) {
        const usersUpdated = await db.user.update({
          email: req.body.email,
          name: req.body.name
        }, {
          where: {
            id: req.params.id
          }
        });

        res.redirect('/profile');
      } else if (foundUser.email && foundUser.id !== req.user.id) {
        req.flash('error', 'Email already exists. Please try again.');
        res.redirect('/profile');
      } else {
        const usersUpdated = await db.user.update({
          email: req.body.email,
          name: req.body.name
        }, {
          where: {
            id: req.params.id
          }
        });

        console.log('********** PUT ROUTE *************');
        console.log('Users updated', usersUpdated);
        console.log('**************************************************');
  
        res.redirect('/profile');
      }
  } catch (error) {
    console.log('*********************ERROR***********************');
    console.log(error);
    console.log('**************************************************');
    res.render('profile/edit');
  }
});


router.delete('/:id', async (req, res) => {

  let animesDeleted= await db.anime.destroy({
    where: { id: req.params.id }
  });
  console.log(`Amount of songs deleted: ${animesDeleted}`);
  res.redirect('/profile');
})

// TODO PUT Route to update users name 
// TODO DELETE ROUTE to remove anime from watchlist
module.exports = router;